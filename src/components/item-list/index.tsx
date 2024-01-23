"use client";

import { Loader2 } from "lucide-react";

import { useItemList } from "./use-item-list";

import Pagination from "@/src/components/pagination";
import { Button } from "@/src/ui/button";

export const ItemList = () => {
  const { isLoading, data, onPageChange, handleClick } = useItemList();

  if (isLoading)
    return (
      <div className={"flex justify-center mt-10"}>
        <Loader2 className={"w-20 h-20 animate-spin text-gray-800"} />
      </div>
    );

  if (!data) {
    return <div>Данные не были предоставлены</div>;
  }

  return (
    <>
      <p className={"font-semibold mb-2"}>Страница: {data?.page}</p>

      <ul className={"bg-white w-full rounded space-y-2 p-4"}>
        {data?.items.map((item) => (
          <li key={item.id} className={"bg-gray-200 rounded"}>
            <Button
              className={"w-full h-full font-semibold p-4"}
              variant={"ghost"}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>

      <div className={"flex justify-center mt-10 "}>
        <Pagination
          onPageChange={onPageChange}
          currentPage={data?.page}
          totalPages={data?.pages}
        />
      </div>
    </>
  );
};
