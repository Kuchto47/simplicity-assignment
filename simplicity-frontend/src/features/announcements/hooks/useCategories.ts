import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { trpcClient } from '@/trpc/trpc.ts';

export const categoriesQueryOptions = queryOptions({
  queryKey: ['categories'],
  queryFn: () => trpcClient.announcementsRouter.getAllCategories.query(),
  staleTime: Infinity,
});

export const useCategories = () => {
  return useSuspenseQuery(categoriesQueryOptions);
};
