import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum CareerType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  INTERNSHIP = 'INTERNSHIP',
  VOLUNTEER = 'VOLUNTEER'
}

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
 *           enum: [FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, VOLUNTEER]
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

  @Column({
    type: 'enum',
    enum: CareerType,
    default: CareerType.FULL_TIME,
    nullable: true
  })
  type!: CareerType;

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

