import { useMutation } from '@tanstack/react-query';
import { trpcClient } from '@/trpc/trpc.ts';
import type { AnnouncementSchemaType } from '@/features/announcements/model/announcementSchema.ts';
import { mapFormattedDateStringToIsoString } from '@/features/announcements/services/mapper.ts';
import { useMapCategoryNamesToIds } from '@/features/announcements/model/useMapCategoryNamesToIds.ts';
import { useNavigate } from '@tanstack/react-router';

export const useEditAnnouncement = () => {
  const { mapNamesToIds } = useMapCategoryNamesToIds();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['editAnnouncement'],
    mutationFn: (data: AnnouncementSchemaType & { id: string }) =>
      trpcClient.announcementsRouter.updateAnnouncement.mutate({
        id: data.id,
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
