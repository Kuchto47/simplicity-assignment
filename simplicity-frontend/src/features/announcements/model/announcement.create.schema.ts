import { z } from 'zod';

const TITLE = z
  .string({ message: 'Title must be string' })
  .min(2, 'Title must be at least 2 characters long');
const STRING = z.string();
const DATETIME = z.string(); // TODO !
const CATEGORIES = z.array(STRING); // names

export const announcementCreateSchema = z.object({
  title: TITLE,
  content: STRING,
  publicationDate: DATETIME,
  categoryNames: CATEGORIES.min(1, 'At least one category is required'),
});

export type AnnouncementCreateSchemaType = z.infer<
  typeof announcementCreateSchema
>;
