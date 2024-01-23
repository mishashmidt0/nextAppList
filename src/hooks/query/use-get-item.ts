import { useQuery } from "@tanstack/react-query";

import { getItem } from "@/src/query/get-item";

export default function useGetItem(id?: number) {
  return useQuery({
    enabled: !!id,
    queryFn: async () => await getItem(id as number),
    queryKey: ["item", id],
  });
}
