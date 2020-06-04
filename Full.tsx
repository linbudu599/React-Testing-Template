import React, { useState, useEffect } from "react";
import axios from "axios";

interface IDataItem {
  name: string;
  BU: string;
  work: string;
}

const data: IDataItem[] = [
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

const commonFunc = (arg: string): boolean => {
  return arg.length === 5;
};

const asyncFunc = (arg: string): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(arg.length);
    }, 2000);
  });
};

interface IFull {
  commonProp: number;
  commonFunc: (arg: string) => boolean;
  asyncFunc: (arg: string) => Promise<number>;
}

const Page: React.FC<IFull> = ({
  commonProp,
  commonFunc,
  asyncFunc,
  children,
}) => {
  const [info, setInfo] = useState<IDataItem[]>(data);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://api.linbudu.top/data");
      console.log(res);
    })();

    commonFunc("budu");
    asyncFunc("budu");
  });

  const insideFunc = (arg: string): string => arg;

  return (
    <>
      <p>Jest & Enzyme</p>
      <p className="common-prop"></p>
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
      {children}
      {info.map(({ name, BU, work }, index) => {
        return (
          <p key={index}>
            {name},{BU},{work}
          </p>
        );
      })}
    </>
  );
};

export default Page;
