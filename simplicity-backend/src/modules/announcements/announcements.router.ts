import { Query, Router } from 'nestjs-trpc';
import {
  categoryDtoSchema,
  CategoryDtoType,
} from './model/dto/category.dto.schema';
import { AnnouncementsService } from './announcements.service';
import { z } from 'zod';
import {
  announcementDtoSchema,
  AnnouncementDtoType,
} from './model/dto/announcement.dto.schema';

@Router()
export class AnnouncementsRouter {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Query({ output: z.array(categoryDtoSchema) })
  getAllCategories(): Promise<CategoryDtoType[]> {
    return this.announcementsService.getAllCategories();
  }

  @Query({ output: z.array(announcementDtoSchema) })
  getAllAnnouncements(): Promise<AnnouncementDtoType[]> {
    return this.announcementsService.getAllAnnouncements();
  }
}
