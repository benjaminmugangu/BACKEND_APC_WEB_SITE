import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - slug
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         description:
 *           type: string
 *         iconName:
 *           type: string
 *         bgClass:
 *           type: string
 *         accentClass:
 *           type: string
 *         mainImage:
 *           type: string
 *         isActive:
 *           type: boolean
 */
@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string; // Titre FR

  @Column({ nullable: true })
  titleEn!: string;

  @Column({ unique: true })
  slug!: string;

  @Column('text')
  description!: string; // Description FR

  @Column('text', { nullable: true })
  descriptionEn!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  iconName!: string;

  @Column({ type: 'varchar', length: 100, default: 'bg-emerald-500' })
  bgClass!: string;

  @Column({ type: 'varchar', length: 100, default: 'text-emerald-700' })
  accentClass!: string;

  @Column('text', { nullable: true })
  mainImage!: string;

  @Column('json', { nullable: true })
  actions!: string[];

  @Column('json', { nullable: true })
  stats!: { value: string; label: string }[];

  @Column({ default: 0 })
  order!: number;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
