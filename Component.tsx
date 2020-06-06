import React, { useState, useEffect } from "react";
import axios from "axios";

interface IDataItem {
  name: string;
  BU: string;
  work: string;
}

export const data: IDataItem[] = [
  {
    name: "穹心",
    BU: "淘系技术部",
    work: "FE",
  },
  {
    name: "穹心",
    BU: "淘系技术部",
    work: "FE",
  },
  {
    name: "穹心",
    BU: "淘系技术部",
    work: "FE",
  },
];

export const commonFunc = (arg: string): boolean => {
  return arg.length === 5;
};

export const asyncFunc = (arg: string): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(arg.length);
    }, 2000);
  });
};

interface IProps {
  commonProp: number;
  commonFunc: (arg: string) => boolean;
  asyncFunc: (arg: string) => Promise<number>;
  conditionalFunc?: () => boolean;
}

const Page: React.FC<IProps> = ({
  commonProp,
  commonFunc,
  asyncFunc,
  conditionalFunc,
  children,
}) => {
  const [info, setInfo] = useState<IDataItem[]>(data);

  const [remoteData, setRemoteData] = useState<any>();

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://api.linbudu.top/data");
      setRemoteData(res.data["data"]);
    })();

    commonFunc("budu");
    asyncFunc("budu");
  });

  const insideFunc = (): void => {
    setCount((count) => count + 1);
  };

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
      {info.map(({ name, BU, work }, index) => {
        return (
          <p key={index} className="info">
            {name},{BU},{work}
          </p>
        );
      })}
      {remoteData &&
        remoteData.map((item: any) => {
          return (
            <p key={item.uid} className="remote-data">
              {item.favorTech}
            </p>
          );
        })}
    </>
  );
};

export default Page;
