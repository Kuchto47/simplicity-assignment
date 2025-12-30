import { CategoryDtoType } from './category.dto.schema';
import { Category } from '../entity/category.entity';

export class CategoryDto implements CategoryDtoType {
  id: string;
  name: string;

  static fromEntity(entity: Category): CategoryDto {
    return {
      id: entity.id,
      name: entity.name,
    };
  }
}
