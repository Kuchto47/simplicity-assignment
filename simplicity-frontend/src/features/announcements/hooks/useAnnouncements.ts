import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { trpcClient } from '@/trpc/trpc.ts';

export const announcementsQueryOptions = queryOptions({
  queryKey: ['announcements'],
  queryFn: () => trpcClient.announcementsRouter.getAllAnnouncements.query(),
});

export const useAnnouncements = () => {
  return useSuspenseQuery(announcementsQueryOptions);
};
