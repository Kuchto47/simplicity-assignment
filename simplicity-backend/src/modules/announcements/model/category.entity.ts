import { BaseEntity } from '../../../db/base-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}
