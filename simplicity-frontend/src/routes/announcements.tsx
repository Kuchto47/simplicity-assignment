import { createFileRoute } from '@tanstack/react-router';
import { announcementsQueryOptions } from '@/features/announcements/hooks/useAnnouncements.ts';
import { AnnouncementsTableTitle } from '@/features/announcements/components/AnnouncementsTableTitle.tsx';
import { AnnouncementsTable } from '@/features/announcements/components/AnnouncementsTable.tsx';
import { Suspense } from 'react';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';

export const Route = createFileRoute('/announcements')({
  component: Announcements,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(announcementsQueryOptions);
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function Announcements() {
  return (
    <div className="flex flex-col justify-start h-full w-full p-8 gap-4">
      <AnnouncementsTableTitle />
      <Suspense fallback={<>Loading...</>}>
        <AnnouncementsTable />
      </Suspense>
    </div>
  );
}
