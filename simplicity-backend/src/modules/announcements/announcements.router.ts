import { Query, Router } from 'nestjs-trpc';
import {
  categoryDtoSchema,
  CategoryDtoType,
} from './model/dto/category.dto.schema';
import { AnnouncementsService } from './announcements.service';
import { z } from 'zod';

@Router()
export class AnnouncementsRouter {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Query({ output: z.array(categoryDtoSchema) })
  getAllCategories(): Promise<CategoryDtoType[]> {
    return this.announcementsService.getAllCategories();
  }
}
