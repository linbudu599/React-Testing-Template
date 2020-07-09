declare interface IProps {
  readonly commonProp: number;
  commonFunc: (arg: string) => boolean;
  asyncFunc: (arg: string) => Promise<number>;
  conditionalFunc?: () => boolean;
  propsToBeSet?: any;
  methodTobeSet?: any;
}

declare interface IDataItem {
  name: string;
  desc: string;
  work: string;
}
