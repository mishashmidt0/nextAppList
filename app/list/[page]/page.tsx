import { ItemList } from "@/src/components/item-list";
import { ItemModal } from "@/src/modals/item-modal";

export default function List() {
  return (
    <main className={"w-full h-full"}>
      <ItemList />
      <ItemModal />
    </main>
  );
}
