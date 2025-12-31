import { useMutation } from '@tanstack/react-query';
import { trpcClient } from '@/trpc/trpc.ts';
import { useCategories } from '@/features/announcements/hooks/useCategories.ts';
import type { AnnouncementCreateSchemaType } from '@/features/announcements/model/announcement.create.schema.ts';
import { useNavigate } from '@tanstack/react-router';

export const useAddAnnouncement = () => {
  const { data: categories } = useCategories();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['addAnnouncement'],
    mutationFn: (data: AnnouncementCreateSchemaType) =>
      trpcClient.announcementsRouter.createAnnouncement.mutate({
        title: data.title,
        content: data.content,
        publicationDate: parseDate(data.publicationDate).toISOString(),
        categoryIds: data.categoryNames.map((catName) => ({
          id:
            categories.find((category) => category.name === catName)?.id ??
            'CANNOT_FIND_CATEGORY',
        })),
      }),
    onError: () => {
      alert("Couldn't add announcement. Please try again later.");
      // TODO toast here
    },
    onSuccess: () => {
      navigate({ to: '/announcements' });
    },
  });
};

const parseDate = (formattedDate: string): Date => {
  const [datePart, timePart] = formattedDate.split(' ');
  const [month, day, year] = datePart.split('/');
  const [hours, minutes] = timePart.split(':');
  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  );
};
