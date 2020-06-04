import React from "react";
// import jest from "jest";
import Enzyme, { render, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Full from "./Full";

Enzyme.configure({ adapter: new Adapter() });

describe("", () => {
  const commonFuncMock = jest.fn();
  const asyncFuncMock = jest.fn();

  const injectProps = {
    commonProp: 599,
    commonFunc: commonFuncMock as any,
    asyncFunc: asyncFuncMock as any,
  };

  it("should render <Full />", () => {
    const wrapper = mount(<Full {...injectProps} />);

    expect(commonFuncMock).toBeCalled();
    expect(asyncFuncMock).toBeCalled();
  });
});
