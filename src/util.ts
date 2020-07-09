export const data: IDataItem[] = [
  {
    name: "穹心",
    desc: "芜湖,起飞!",
    work: "FE Engineer",
  },
  {
    name: "穹心",
    desc: "芜湖,起飞!",
    work: "FE Engineer",
  },
  {
    name: "穹心",
    desc: "芜湖,起飞!",
    work: "FE Engineer",
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