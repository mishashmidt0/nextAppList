import { useQuery } from "@tanstack/react-query";

import { getList } from "@/src/query/get-list";

export default function useGetList(page: string) {
  return useQuery({
    queryFn: async () => await getList(page),
    queryKey: ["list", page],
  });
}
