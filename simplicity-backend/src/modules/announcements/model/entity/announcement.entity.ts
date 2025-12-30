import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../../db/base-entity.entity';
import { Category } from './category.entity';

@Entity({ name: 'announcement' })
export class Announcement extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'timestamp' })
  publicationDate: Date;

  @ManyToMany(() => Category, (category) => category.announcements)
  @JoinTable()
  categories: Category[];
}
