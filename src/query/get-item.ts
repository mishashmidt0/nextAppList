import { type IItem } from "@/src/type/item-list.interface";

export async function getItem(itemId: number): Promise<IItem> {
  const res = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${itemId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
