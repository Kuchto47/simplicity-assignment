import { useMutation } from '@tanstack/react-query';
import { trpcClient } from '@/trpc/trpc.ts';
import type { AnnouncementSchemaType } from '@/features/announcements/model/announcementSchema.ts';
import { useNavigate } from '@tanstack/react-router';
import { mapFormattedDateStringToIsoString } from '@/features/announcements/services/mapper.ts';
import { useMapCategories } from '@/features/announcements/model/useMapCategories.ts';

export const useAddAnnouncement = () => {
  const navigate = useNavigate();
  const { mapNamesToIds } = useMapCategories();

  return useMutation({
    mutationKey: ['addAnnouncement'],
    mutationFn: (data: AnnouncementSchemaType) =>
      trpcClient.announcementsRouter.createAnnouncement.mutate({
        title: data.title,
        content: data.content,
        publicationDate: mapFormattedDateStringToIsoString(
          data.publicationDate
        ),
        categoryIds: mapNamesToIds(data.categoryNames),
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
