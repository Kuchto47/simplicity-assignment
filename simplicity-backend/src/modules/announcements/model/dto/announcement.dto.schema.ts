import { z } from 'zod';
import { CATEGORY_ID } from './category.dto.schema';

const ID = z.string().uuid({ message: 'Id as uuid is required' });
const TITLE = z
  .string({ message: 'Title must be string' })
  .min(2, 'Title must be at least 2 characters long');
const STRING = z.string();
const DATETIME = z.string().datetime();
const CATEGORY_IDS = z.array(z.object({ id: CATEGORY_ID }));

export const announcementDtoSchema = z.object({
  id: ID,
  title: TITLE,
  content: STRING,
  createdAt: DATETIME,
  updatedAt: DATETIME,
  publicationDate: DATETIME,
  categoryIds: CATEGORY_IDS,
});

export type AnnouncementDtoType = z.infer<typeof announcementDtoSchema>;

export const announcementCreationDtoSchema = z.object({
  title: TITLE,
  content: STRING,
  publicationDate: DATETIME,
  categoryIds: CATEGORY_IDS.min(1, 'At least one category is required'),
});

export type AnnouncementCreationDtoType = z.infer<
  typeof announcementCreationDtoSchema
>;

export const announcementDeletionDtoSchema = z.object({
  id: ID,
});

export type AnnouncementDeletionDtoType = z.infer<
  typeof announcementDeletionDtoSchema
>;

export const announcementUpdateDtoSchema = z.object({
  title: TITLE,
  content: STRING,
  publicationDate: DATETIME,
  categoryIds: CATEGORY_IDS.min(1, 'At least one category is required'),
  id: ID,
});

export type AnnouncementUpdateDtoType = z.infer<
  typeof announcementUpdateDtoSchema
>;
