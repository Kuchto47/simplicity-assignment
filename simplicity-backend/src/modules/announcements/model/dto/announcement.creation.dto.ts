import { AnnouncementCreationDtoType } from './announcement.dto.schema';
import { CategoryDtoType } from './category.dto.schema';

export class AnnouncementCreationDto implements AnnouncementCreationDtoType {
  categoryIds: Pick<CategoryDtoType, 'id'>[];
  title: string;
  content: string;
  publicationDate: string;
}
