import { createFileRoute } from '@tanstack/react-router';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';

export const Route = createFileRoute('/announcements/add')({
  component: AnnouncementAdd,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function AnnouncementAdd() {
  return (
    <div className="flex flex-col justify-start h-full w-full p-8 gap-4">
      <h1 className="text-2xl font-bold">Add New Announcement</h1>
    </div>
  );
}
