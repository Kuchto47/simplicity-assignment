import { createFileRoute } from '@tanstack/react-router';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';

export const Route = createFileRoute('/announcements/$id')({
  component: AnnouncementEdit,
  loader: ({ context, params: _ }) => {
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function AnnouncementEdit() {
  const { id } = Route.useParams();

  return (
    <div className="flex flex-col justify-start h-full w-full p-8 gap-4">
      <h1 className="text-2xl font-bold">Edit Announcement {id}</h1>
    </div>
  );
}
