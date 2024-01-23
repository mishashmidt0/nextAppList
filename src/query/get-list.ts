import { type IItemList } from "@/src/type/item-list.interface";

export async function getList(page: string): Promise<IItemList> {
  const res = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
