import { AnnouncementDtoType } from './announcement.dto.schema';
import { Announcement } from '../entity/announcement.entity';
import { CategoryDtoType } from './category.dto.schema';

export class AnnouncementDto implements AnnouncementDtoType {
  categoryIds: Pick<CategoryDtoType, 'id'>[];
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  content: string;
  publicationDate: string;

  static fromEntity(entity: Announcement): AnnouncementDto {
    return {
      categoryIds: entity.categories.map((category) => ({ id: category.id })),
      createdAt: entity.createdAt.toISOString(),
      id: entity.id,
      title: entity.title,
      updatedAt: entity.updatedAt.toISOString(),
      content: entity.content,
      publicationDate: entity.publicationDate.toISOString(),
    };
  }
}
