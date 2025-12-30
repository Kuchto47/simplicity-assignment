import { Module } from '@nestjs/common';
import { AnnouncementsRouter } from './announcements.router';
import { AnnouncementsService } from './announcements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './model/entity/category.entity';
import { Announcement } from './model/entity/announcement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Announcement])],
  controllers: [],
  providers: [AnnouncementsRouter, AnnouncementsService],
  exports: [],
})
export class AnnouncementsModule {}
