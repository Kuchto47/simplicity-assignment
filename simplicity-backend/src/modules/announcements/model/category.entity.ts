import { BaseEntity } from '../../../db/base-entity.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Announcement } from './announcement.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany(() => Announcement, (announcement) => announcement.categories)
  announcements: Announcement[];
}
