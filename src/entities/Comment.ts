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
    // OneToMany,
    JoinTable
  } from 'typeorm';
  // import Category from './Category';
  import Post from './Post';
  // import User from './User';
  
  @Entity()
  export default class Post_Comment extends BaseEntity {
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
  
    //   // Parent post
    //   @OneToMany(() => Comment, (comment) => comment.parentId, {
    //     createForeignKeyConstraints: true
    //   })
    //   parentComment?: Promise<Post>;
    
    //   @ManyToMany(()=> Category)
    //   @JoinTable()
    //   categories!: Category[];
    }