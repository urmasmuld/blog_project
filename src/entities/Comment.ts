import {
    BaseEntity,
    PrimaryGeneratedColumn,
    // JoinColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    // UpdateDateColumn,
    Entity,
    // ManyToMany,
    OneToMany,
    DeleteDateColumn
  } from 'typeorm';
  // import Category from './Category';
  import Post from './Post';
  // import User from './User';
  
  type CommentInfo = {
    id: string,
    postId: string,
    parentId: string,
    title: string,
    published: string,
    content: string,
  
    createdAt: Date,
    publishedAt: Date,
  }
  
  
    @Entity()
  export default class Comment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column()
    postId!: string;
    @Column('uuid', {nullable: true})
    parentId?: string;
    @Column('varchar', { length: 75 })
    title!: string;
    @Column('boolean', { default: false })
    published!: boolean;

    @DeleteDateColumn()
    deletedAt: boolean;
  

    @CreateDateColumn()
    createdAt!: Date;
    @CreateDateColumn()
    publishedAt!: Date;
    @Column('text')
    content!: string;
    
    @ManyToOne(() => Post, (post) => post.comments, {
      createForeignKeyConstraints: true
    })
    post!: Promise<Post>;
  
    // Parent comment
    @OneToMany(() => Comment, (comment) => comment.parentId, {
      createForeignKeyConstraints: true
    })
    parentComment?: Promise<Post>;

    CommentInfo(){
  
      return{
        id: this.id,
        postId: this.postId,
        parentId: this.parentId ?? '',
        title: this.title ?? '',
        published: this.published,
        content: this.content ?? '',
        createdAt: this.createdAt,
        publishedAt: this.publishedAt,
      }
    }    

    }