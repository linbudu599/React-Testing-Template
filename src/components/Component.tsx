import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";
import axios from "axios";

import { data, commonFunc, asyncFunc } from "../util";

const Page: React.FC<IProps> = ({
  commonProp,
  commonFunc,
  asyncFunc,
  conditionalFunc,
  propsToBeSet,
  methodTobeSet,
  children,
}) => {
  const [info, setInfo] = useState<IDataItem[]>(data);
  const [remoteData, setRemoteData] = useState<any>();
  const [count, setCount] = useState<number>(0);

  (async () => {
    await asyncFunc("budu");
  })();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://hacker-news.firebaseio.com/v0/8863.json?print=pretty"
      );
      setRemoteData(res.data.title);
    })();

    commonFunc("budu");
  });

  const insideFunc = (): void => {
    setCount((count) => count + 1);
  };

  const { count: hookCount, increment } = useCounter<number>(1);

  return (
    <>
      <p>Jest & Enzyme</p>
      <p className="count">{count}</p>
      <p className="common-prop">{commonProp}</p>
      <button
        className="common-func"
        onClick={() => {
          commonFunc("linbudu");
        }}
      >
        Invoke Common Function
      </button>
      <button
        className="async-func"
        onClick={() => {
          asyncFunc("linbudu");
        }}
      >
        Invoke Async Function
      </button>
      <button
        className="inside-func"
        onClick={() => {
          insideFunc();
        }}
      >
        Invoke Inside Function
      </button>
      {conditionalFunc && conditionalFunc() ? (
        <p className="conditional">Conditional Function</p>
      ) : null}
      {children}
      {info.map(({ name, desc, work }, index) => {
        return (
          <p key={index} className="info">
            {name},{desc},{work}
          </p>
        );
      })}
      <p className="remote">{remoteData ? remoteData : "Loading"}</p>
      <p className="set-prop">{propsToBeSet}</p>
      <p className="set-method">
        {methodTobeSet && methodTobeSet() ? "INIT" : "MODIFIED"}
      </p>

      <p>useCounter</p>
      <p>{hookCount}</p>
      <button
        onClick={() => {
          increment(5);
        }}
      >
        +5!
      </button>
    </>
  );
};

export default Page;
