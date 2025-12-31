import { useCategories } from '@/features/announcements/hooks/useCategories.ts';

export const useMapCategoryNamesToIds = () => {
  const { data: categories } = useCategories();

  return {
    mapNamesToIds: (names: string[]) => {
      return names.map((catName) => ({
        id:
          categories.find((category) => category.name === catName)?.id ??
          'CANNOT_FIND_CATEGORY',
      }));
    },
  };
};
