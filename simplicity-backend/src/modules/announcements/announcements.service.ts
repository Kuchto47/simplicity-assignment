import { Injectable } from '@nestjs/common';
import { CategoryDto } from './model/dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './model/entity/category.entity';
import { Repository } from 'typeorm';
import { AnnouncementDto } from './model/dto/announcement.dto';
import { Announcement } from './model/entity/announcement.entity';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async getAllCategories(): Promise<CategoryDto[]> {
    const allCategories = await this.categoryRepository.find();
    return allCategories.map((category) => CategoryDto.fromEntity(category));
  }

  async getAllAnnouncements(): Promise<AnnouncementDto[]> {
    const allAnnouncements = await this.announcementRepository.find();
    return allAnnouncements.map((announcement) =>
      AnnouncementDto.fromEntity(announcement),
    );
  }
}
