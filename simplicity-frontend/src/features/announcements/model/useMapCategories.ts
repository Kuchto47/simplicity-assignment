import { useCategories } from '@/features/announcements/hooks/useCategories.ts';
import { useAnnouncements } from '@/features/announcements/hooks/useAnnouncements.ts';

export const useMapCategories = () => {
  const { data: categories } = useCategories();

  return {
    mapNamesToIds: (names: string[]) => {
      return names.map((catName) => ({
        id:
          categories.find((category) => category.name === catName)?.id ??
          'CANNOT_FIND_CATEGORY',
      }));
    },
    mapIdsToNames: (
      ids: ReturnType<typeof useAnnouncements>['data'][0]['categoryIds']
    ) => {
      return ids
        .map(
          (cid) =>
            categories.find((c) => c.id === cid.id)?.name ??
            cid.id.substring(0, 4)
        )
        .join(', ');
    },
  };
};
