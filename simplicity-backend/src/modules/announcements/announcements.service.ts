import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryDto } from './model/dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './model/entity/category.entity';
import { In, Repository } from 'typeorm';
import { AnnouncementDto } from './model/dto/announcement.dto';
import { Announcement } from './model/entity/announcement.entity';
import { AnnouncementCreationDto } from './model/dto/announcement.creation.dto';

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

  async createAnnouncement(
    creationDto: AnnouncementCreationDto,
  ): Promise<AnnouncementDto> {
    const categories = await this.categoryRepository.findBy({
      id: In(creationDto.categoryIds.map(({ id }) => id)),
    });

    if (categories.length !== creationDto.categoryIds.length) {
      throw new NotFoundException('One or more categories not found');
    }

    const announcement = this.announcementRepository.create({
      ...creationDto,
      categories,
    });

    const savedAnnouncement =
      await this.announcementRepository.save(announcement);

    return AnnouncementDto.fromEntity(savedAnnouncement);
  }
}
