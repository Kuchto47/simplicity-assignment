import { z } from 'zod';

export const categoryDtoSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  id: z.string().uuid({ message: 'Id as uuid is required' }),
});

export type CategoryDtoType = z.infer<typeof categoryDtoSchema>;
