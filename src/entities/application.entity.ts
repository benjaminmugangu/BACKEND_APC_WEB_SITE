import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Career } from './career.entity';
import { CareerType } from './career-type.entity';

export enum ApplicationStatus {
  PENDING = 'pending',
  REVIEWING = 'reviewing',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected'
}

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ type: 'varchar', nullable: true })
  type!: string;

  @ManyToOne(() => CareerType, { nullable: true, onDelete: 'SET NULL' })
  careerType!: CareerType;

  @Column('varchar', { length: 36, nullable: true })
  careerTypeId!: string;

  @Column('text', { nullable: true })
  motivation!: string;

  @Column({ type: 'varchar', nullable: true })
  cvUrl!: string | null;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.PENDING
  })
  status!: ApplicationStatus;

  @ManyToOne(() => Career, { nullable: true, onDelete: 'SET NULL' })
  career!: Career;

  @Column('varchar', { length: 36, nullable: true })
  careerId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
