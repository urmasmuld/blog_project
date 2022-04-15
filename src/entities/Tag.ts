import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToMany,
    DeleteDateColumn
  } from 'typeorm';
import Post from './Post';

type TagInfo = {
  id: string,
  title: string,
  metaTitle: string,
  slug: string,
  content: string,
}

@Entity()
export default class Tag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('varchar', { length: 75 })
    title!: string;
    @Column('varchar', { length: 100 })
    metaTitle?: string;
    @Column('varchar', { length: 100, default: '' })
    slug?: string;
    @Column('text')
    content?: string;

    @DeleteDateColumn()
    deletedAt: boolean;
  
    @ManyToMany(()=> Post)
    posts: Post;

    TagInfo(){

      return{
        id: this.id,
        title: this.title,
        metaTitle: this.metaTitle ?? '',
        slug: this.slug ?? '',
        content: this.content ?? '',
        posts: this.posts,
      }
    }
      
}