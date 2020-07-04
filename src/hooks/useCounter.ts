import { useState, useCallback } from "react";

const useCounter = <T>(initialValue:T) => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((step:number=1) => setCount((x) => x +step), []);

  return { count, increment };
};

export default useCounter;
