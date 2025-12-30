import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { categoryDtoSchema } from './model/dto/category.dto.schema';
import { AnnouncementsService } from './announcements.service';
import { z } from 'zod';
import {
  announcementCreationDtoSchema,
  announcementDtoSchema,
} from './model/dto/announcement.dto.schema';
import { AnnouncementCreationDto } from './model/dto/announcement.creation.dto';
import { TRPCError } from '@trpc/server';
import { AnnouncementDto } from './model/dto/announcement.dto';
import { CategoryDto } from './model/dto/category.dto';

@Router()
export class AnnouncementsRouter {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Query({ output: z.array(categoryDtoSchema) })
  getAllCategories(): Promise<CategoryDto[]> {
    return this.announcementsService.getAllCategories();
  }

  @Query({ output: z.array(announcementDtoSchema) })
  getAllAnnouncements(): Promise<AnnouncementDto[]> {
    return this.announcementsService.getAllAnnouncements();
  }

  @Mutation({
    input: announcementCreationDtoSchema,
    output: announcementDtoSchema,
  })
  async createAnnouncement(
    @Input() announcement: AnnouncementCreationDto,
  ): Promise<AnnouncementDto> {
    const createdAnnouncement =
      await this.announcementsService.createAnnouncement(announcement);

    if (createdAnnouncement === null) {
      throw new TRPCError({
        message: 'One or more categories were not found...',
        code: 'NOT_FOUND',
      });
    }

    return createdAnnouncement;
  }
}
