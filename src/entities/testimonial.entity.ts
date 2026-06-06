import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TestimonialStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

/**
 * @swagger
 * components:
 *   schemas:
 *     BeneficiaryTestimonial:
 *       type: object
 *       required:
 *         - authorName
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         authorName:
 *           type: string
 *         authorRole:
 *           type: string
 *         authorLocation:
 *           type: string
 *         photoUrl:
 *           type: string
 *         content:
 *           type: string
 *         projectName:
 *           type: string
 *         status:
 *           type: string
 *           enum: [draft, published, archived]
 *         order:
 *           type: integer
 */
@Entity('beneficiary_testimonials')
export class BeneficiaryTestimonial {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  authorName!: string;

  @Column({ nullable: true })
  authorRole!: string; // Ex: "Agriculteur", "Mère de famille", "Jeune bénéficiaire"

  @Column({ nullable: true })
  authorLocation!: string; // Ex: "Bukavu, Sud-Kivu"

  @Column({ nullable: true })
  photoUrl!: string;

  @Column('text')
  content!: string;

  @Column({ nullable: true })
  projectName!: string; // Projet associé au témoignage

  @Column({
    type: 'enum',
    enum: TestimonialStatus,
    default: TestimonialStatus.DRAFT
  })
  status!: TestimonialStatus;

  @Column({ default: 0 })
  order!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
