export interface IItemList {
  page: number;
  pages: number;
  result: number;
  items: IItem[];
}

export interface IItem {
  id: number;
  name: string;
  text?: string;
}
