import { z } from 'zod';

const TITLE = z
  .string({ message: 'Title must be string' })
  .min(2, 'Title must be at least 2 characters long');
const STRING = z.string();
const DATETIME = z
  .string()
  .regex(
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4} ([01][0-9]|2[0-3]):[0-5][0-9]$/,
    'Date must be in MM/DD/YYYY HH:mm format'
  );
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
