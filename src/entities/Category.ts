import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    ManyToMany,
    DeleteDateColumn
  } from 'typeorm';
import Post from './Post';

type CategoryInfo = {
  id: string,
  title: string,
  metaTitle: string,
  content: string,

  createdAt: Date,
  updatedAt: Date,
}


@Entity()
export default class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('varchar', { length: 75 })
    title!: string;
    @Column('varchar', { length: 100 })
    metaTitle?: string;
    @Column('text')
    content?: string;

    @DeleteDateColumn()
    deletedAt: boolean;
  
      @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToMany(()=> Post)
    posts: Post;

    CategoryInfo(){

      return{
        id: this.id,
        title: this.title,
        metaTitle: this.metaTitle ?? '',
        content: this.content ?? '',
        posts: this.posts,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      }
    }
      
}