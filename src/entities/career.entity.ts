import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CareerType } from './career-type.entity';

export enum CareerStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  ARCHIVED = 'ARCHIVED'
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Career:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         content:
 *           type: string
 *         requirements:
 *           type: string
 *         type:
 *           type: string
 *         careerTypeId:
 *           type: string
 *         status:
 *           type: string
 *           enum: [OPEN, CLOSED, ARCHIVED]
 *         location:
 *           type: string
 *         deadline:
 *           type: string
 *           format: date-time
 *         isOpen:
 *           type: boolean
 */
@Entity('careers')
export class Career {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @Column('text', { nullable: true })
  content!: string;

  @Column('text', { nullable: true })
  requirements!: string;

  @Column({ nullable: true })
  type?: string;

  @Column('varchar', { length: 36, nullable: true })
  careerTypeId?: string;

  @ManyToOne(() => CareerType, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'careerTypeId' })
  careerType?: CareerType;

  @Column({
    type: 'enum',
    enum: CareerStatus,
    default: CareerStatus.OPEN
  })
  status!: CareerStatus;

  @Column({ nullable: true })
  location!: string;

  @Column({ type: 'timestamp', nullable: true })
  deadline!: Date;

  // Kept for backward-compat: true when status = OPEN
  @Column({ default: true })
  isOpen!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

