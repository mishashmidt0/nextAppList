"use client";

import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

import useGetItem from "@/src/hooks/query/use-get-item";
import { useModal } from "@/src/hooks/use-modal-store";
import { Button } from "@/src/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogHeader,
} from "@/src/ui/dialog";

export const ItemModal = () => {
  const searchParams = useSearchParams();
  const { isOpen, type, onClose, itemId } = useModal();
  const { data: item, isLoading } = useGetItem(itemId);

  const isModalOpen = isOpen && type === "item";

  const handleClick = () => {
    onClose();
    const params = new URLSearchParams(searchParams.toString());

    params.delete("item");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClick}>
      <DialogContent className={"bg-white text-black p-0 overflow-hidden"}>
        {isLoading ? (
          <div className={"flex justify-center m-10"}>
            <Loader2 className={"w-10 h-10 animate-spin"} />
          </div>
        ) : (
          <>
            <DialogHeader className={"pt-8 px-6"}>
              <DialogTitle className={"text-2xl text-center font-bold"}>
                {item?.name}
              </DialogTitle>
            </DialogHeader>
            <div className={"flex justify-center mx-4"}>
              <p className={"font-semibold"}>{item?.text}</p>
            </div>
          </>
        )}

        <DialogFooter className={"bg-gray-100 px-6 py-4"}>
          <Button variant={"default"} onClick={handleClick}>
            Закрыть
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
