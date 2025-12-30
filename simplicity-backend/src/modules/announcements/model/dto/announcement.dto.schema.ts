import { z } from 'zod';
import { categoryDtoSchema } from './category.dto.schema';

export const announcementDtoSchema = z.object({
  id: z.string().uuid({ message: 'Id as uuid is required' }),
  title: z
    .string({ message: 'Title must be string' })
    .min(2, 'Title must be at least 2 characters long'),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publicationDate: z.string().datetime(),
  categoryIds: z.array(categoryDtoSchema.pick({ id: true })),
});

export type AnnouncementDtoType = z.infer<typeof announcementDtoSchema>;

export const announcementCreationDtoSchema = announcementDtoSchema
  .pick({
    title: true,
    content: true,
    publicationDate: true,
  })
  .extend({
    categoryIds: z
      .array(
        z.object({
          id: z.string().uuid({ message: 'Each category id must be a uuid' }),
        }),
      )
      .min(1, 'At least one category is required'),
  });

export type AnnouncementCreationDtoType = z.infer<
  typeof announcementCreationDtoSchema
>;
