import { z } from 'zod';
import { categoryDtoSchema } from './category.dto.schema';

export const announcementDtoSchema = z.object({
  title: z.string({ message: 'Title is required' }),
  id: z.string().uuid({ message: 'Id as uuid is required' }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  categoryIds: z.array(categoryDtoSchema.pick({ id: true })),
});

export type AnnouncementDtoType = z.infer<typeof announcementDtoSchema>;
