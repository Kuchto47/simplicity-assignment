import { CategoryDtoType } from './category.dto.schema';
import { Category } from './category.entity';

export class CategoryDto implements CategoryDtoType {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;

  static fromEntity(entity: Category): CategoryDto {
    return {
      createdAt: entity.createdAt.toISOString(),
      id: entity.id,
      name: entity.name,
      updatedAt: entity.updatedAt.toISOString(),
    };
  }
}
