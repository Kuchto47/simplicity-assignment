import { createFileRoute } from '@tanstack/react-router';
import { AnnouncementsTableTitle } from '@/features/announcements/components/AnnouncementsTableTitle.tsx';
import { Suspense } from 'react';
import { AnnouncementsTable } from '@/features/announcements/components/AnnouncementsTable.tsx';
import { announcementsQueryOptions } from '@/features/announcements/hooks/useAnnouncements.ts';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';

export const Route = createFileRoute('/announcements/')({
  component: Announcements,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(announcementsQueryOptions);
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function Announcements() {
  return (
    <>
      <AnnouncementsTableTitle />
      <Suspense fallback={<>Loading...</>}>
        <AnnouncementsTable />
      </Suspense>
    </>
  );
}
