import { createFileRoute } from '@tanstack/react-router';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';
import { AnnouncementForm } from '@/features/announcements/components/AnnouncementForm.tsx';

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
        <AnnouncementForm />
      </div>
    </>
  );
}
