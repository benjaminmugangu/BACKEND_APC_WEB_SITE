import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { NewsCategory } from './news-category.entity';

export enum NewsStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  SCHEDULED = 'scheduled'
}

/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         slug:
 *           type: string
 *         excerpt:
 *           type: string
 *         content:
 *           type: string
 *         category:
 *           type: string
 *         author:
 *           type: string
 *         authorId:
 *           type: string
 *           format: uuid
 *         readTime:
 *           type: number
 *         status:
 *           type: string
 *           enum: [draft, published, scheduled]
 *         featured:
 *           type: boolean
 *         includeNewsletter:
 *           type: boolean
 *         mainImage:
 *           type: string
 *         publishDate:
 *           type: string
 *           format: date-time
 *         scheduledDate:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
@Entity('news')
export class News {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column('text')
  excerpt!: string;

  @Column('text')
  content!: string;

  @ManyToOne(() => NewsCategory, category => category.newsList, { nullable: true, onDelete: 'SET NULL' })
  category!: NewsCategory;

  @Column({ nullable: true })
  categoryId!: string;

  @Column({ nullable: true })
  author!: string;

  @Column({ nullable: true })
  authorId!: string;

  @Column({ default: 5 })
  readTime!: number;

  @Column({
    type: 'enum',
    enum: NewsStatus,
    default: NewsStatus.DRAFT
  })
  status!: NewsStatus;

  @Column({ default: false })
  featured!: boolean;

  @Column({ default: false })
  includeNewsletter!: boolean;

  @Column({ nullable: true })
  mainImage!: string;

  @Column({ type: 'timestamp', nullable: true })
  publishDate!: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  scheduledDate!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
