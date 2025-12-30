import { Module } from '@nestjs/common';
import { AnnouncementsRouter } from './announcements.router';
import { AnnouncementsService } from './announcements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './model/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [],
  providers: [AnnouncementsRouter, AnnouncementsService],
  exports: [],
})
export class AnnouncementsModule {}
