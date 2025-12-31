import { z } from 'zod';

const TITLE = z
  .string({ message: 'Title must be string' })
  .min(2, 'Title must be at least 2 characters long');
const STRING = z.string();
const DATETIME = z.string(); // TODO !
const CATEGORY_ID = z.string().uuid({ message: 'Id as uuid is required' });
const CATEGORY_IDS = z.array(z.object({ id: CATEGORY_ID }));

export const announcementCreateSchema = z.object({
  title: TITLE,
  content: STRING,
  publicationDate: DATETIME,
  categoryIds: CATEGORY_IDS.min(1, 'At least one category is required'),
});

export type AnnouncementCreateSchemaType = z.infer<
  typeof announcementCreateSchema
>;
