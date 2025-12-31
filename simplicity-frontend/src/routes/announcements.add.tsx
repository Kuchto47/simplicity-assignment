import { createFileRoute } from '@tanstack/react-router';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';
import { AddAnnouncementForm } from '@/features/announcements/components/AddAnnouncementForm.tsx';

export const Route = createFileRoute('/announcements/add')({
  component: AnnouncementAdd,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function AnnouncementAdd() {
  return (
    <>
      <h1 className="text-2xl font-bold">Add New Announcement</h1>
      <div className="flex flex-col items-center pt-8 pb-16">
        <AddAnnouncementForm />
      </div>
    </>
  );
}
