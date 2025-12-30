import { AnnouncementUpdateDtoType } from './announcement.dto.schema';
import { CategoryDtoType } from './category.dto.schema';

export class AnnouncementUpdateDto implements AnnouncementUpdateDtoType {
  categoryIds: Pick<CategoryDtoType, 'id'>[];
  content: string;
  publicationDate: string;
  title: string;
  id: string;
}
