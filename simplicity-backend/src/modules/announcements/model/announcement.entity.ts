import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../db/base-entity.entity';

@Entity({ name: 'announcement' })
export class Announcement extends BaseEntity {
  @Column({ type: 'string' })
  title: string;
}
