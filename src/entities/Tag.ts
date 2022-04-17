import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import Post from './Post';

@Entity()
export default class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 75 })
  title: string;

  @Column('varchar', { length: 100 })
  metaTitle: string;

  @Column('varchar', { length: 100 })
  slug: string;

  @Column('text')
  content: string;

  @ManyToMany(() => Post)
  @JoinTable()
  categories: Post[];
}