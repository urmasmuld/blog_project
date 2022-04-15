import {
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    Entity
  } from 'typeorm';
  import Post from './Post';
  
  @Entity()
  export default class Post_meta extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    postId!: string;
  
    @Column('varchar', { length: 50 })
    key: string;
  
    @Column('text')
    content: string;
  
    @ManyToOne(() => Post, (post) => post.id, {
      createForeignKeyConstraints: true
    })
    post: Promise<Post>;
  }