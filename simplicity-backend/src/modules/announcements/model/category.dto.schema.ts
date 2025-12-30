import { z } from 'zod';

export const categoryDtoSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  id: z.string().uuid({ message: 'Id as uuid is required' }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type CategoryDtoType = z.infer<typeof categoryDtoSchema>;
