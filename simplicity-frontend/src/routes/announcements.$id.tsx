import { createFileRoute } from '@tanstack/react-router';
import { categoriesQueryOptions } from '@/features/announcements/hooks/useCategories.ts';
import { AnnouncementForm } from '@/features/announcements/components/AnnouncementForm.tsx';

export const Route = createFileRoute('/announcements/$id')({
  component: AnnouncementEdit,
  loader: ({ context, params: _ }) => {
    context.queryClient.ensureQueryData(categoriesQueryOptions);
  },
});

function AnnouncementEdit() {
  const { id } = Route.useParams();

  return (
    <>
      <h1 className="text-2xl font-bold">Edit Announcement</h1>
      <div className="flex flex-col items-center pt-8 pb-16">
        <AnnouncementForm id={id} />
      </div>
    </>
  );
}
