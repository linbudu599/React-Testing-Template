import { renderHook, act } from "@testing-library/react-hooks";

import useCounter from "../../src/hooks/useCounter";

describe("should test customize hooks with no deps", () => {
  it("should increment count", () => {
    const { result } = renderHook(() => useCounter<number>(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
