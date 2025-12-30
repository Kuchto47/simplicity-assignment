import { Injectable } from '@nestjs/common';
import { CategoryDto } from './model/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './model/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getAllCategories(): Promise<CategoryDto[]> {
    return (await this.categoryRepository.find()).map((category) =>
      CategoryDto.fromEntity(category),
    );
  }
}
