import { z } from 'zod';

const NAME = z.string({ message: 'Name is required' });
export const CATEGORY_ID = z
  .string()
  .uuid({ message: 'Id as uuid is required' });

export const categoryDtoSchema = z.object({
  name: NAME,
  id: CATEGORY_ID,
});

export type CategoryDtoType = z.infer<typeof categoryDtoSchema>;
