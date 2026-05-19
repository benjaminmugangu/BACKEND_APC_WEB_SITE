import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum ProjectCategory {
  AGRICULTURE = 'agriculture',
  PROTECTION  = 'protection',
  DIGNITE     = 'dignite',
  PAIX        = 'paix',
}

export enum ProjectStatus {
  DRAFT     = 'draft',
  PUBLISHED = 'published',
  ARCHIVED  = 'archived',
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *         - description
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           readOnly: true
 *           example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *         title:
 *           type: string
 *           example: "Soutien à l'Agriculture Durable à Rutshuru"
 *         slug:
 *           type: string
 *           example: "soutien-agriculture-durable-rutshuru"
 *         description:
 *           type: string
 *           example: "Court résumé du projet pour les listes et aperçus."
 *         content:
 *           type: string
 *           nullable: true
 *           example: "<p>Contenu détaillé HTML du projet...</p>"
 *         category:
 *           type: string
 *           enum: [agriculture, protection, dignite, paix]
 *           example: "agriculture"
 *         status:
 *           type: string
 *           enum: [draft, published, archived]
 *           default: draft
 *           example: "published"
 *         budget:
 *           type: number
 *           format: decimal
 *           example: 350000
 *         currency:
 *           type: string
 *           default: USD
 *           example: "USD"
 *         location:
 *           type: string
 *           nullable: true
 *           example: "Rutshuru, Nord-Kivu"
 *         province:
 *           type: string
 *           nullable: true
 *           example: "Nord-Kivu"
 *         beneficiaries:
 *           type: integer
 *           example: 2500
 *         startDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2024-01-15"
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2025-12-31"
 *         mainImage:
 *           type: string
 *           nullable: true
 *           example: "https://res.cloudinary.com/apc/image/upload/v1/projects/rutshuru.jpg"
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example: ["https://res.cloudinary.com/apc/image/upload/photo1.jpg"]
 *         featured:
 *           type: boolean
 *           default: false
 *           example: true
 *         showOnHome:
 *           type: boolean
 *           default: true
 *           example: true
 *         needsDonation:
 *           type: boolean
 *           default: false
 *           example: false
 *         isVisible:
 *           type: boolean
 *           default: true
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */
@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column('text')
  description!: string;

  @Column('text', { nullable: true })
  content!: string;

  @Column({
    type: 'enum',
    enum: ProjectCategory,
    default: ProjectCategory.AGRICULTURE,
  })
  category!: ProjectCategory;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.DRAFT,
  })
  status!: ProjectStatus;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  budget!: number;

  @Column({ default: 'USD' })
  currency!: string;

  @Column({ nullable: true })
  location!: string;

  @Column({ nullable: true })
  province!: string;

  @Column({ default: 0 })
  beneficiaries!: number;

  @Column({ type: 'date', nullable: true })
  startDate!: Date;

  @Column({ type: 'date', nullable: true })
  endDate!: Date;

  @Column({ nullable: true })
  mainImage!: string;

  @Column('simple-array', { nullable: true })
  gallery!: string[];

  @Column({ default: false })
  featured!: boolean;

  @Column({ default: true })
  showOnHome!: boolean;

  @Column({ default: false })
  needsDonation!: boolean;

  @Column({ default: true })
  isVisible!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
