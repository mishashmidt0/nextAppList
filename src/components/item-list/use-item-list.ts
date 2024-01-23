import { useEffect } from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";

import useGetList from "@/src/hooks/query/use-get-list";
import { useModal } from "@/src/hooks/use-modal-store";
import { type IItem } from "@/src/type/item-list.interface";

export const useItemList = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const { onOpen } = useModal();

  const { data, isLoading } = useGetList((params.page as string) || "1");

  const onPageChange = (nextPage: number) => {
    router.push(`/list/${nextPage}`);
  };

  const handleClick = (item: IItem) => {
    onOpen("item", item.id);

    const params = new URLSearchParams(searchParams.toString());

    params.set("item", item.id.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    const itemId = searchParams.get("item");

    if (itemId) {
      onOpen("item", Number(itemId));
    }
  }, []);

  return {
    data,
    isLoading,
    onPageChange,
    handleClick,
  };
};
