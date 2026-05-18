import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum PartnerType {
  DONOR = 'DONOR',         // Bailleur de fonds
  TECHNICAL = 'TECHNICAL', // Partenaire technique
  LOCAL = 'LOCAL',         // Partenaire local
  STRATEGIC = 'STRATEGIC'  // Partenaire stratégique
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Partner:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           readOnly: true
 *           example: "a3f5c8d2-1234-5678-abcd-ef9012345678"
 *         name:
 *           type: string
 *           description: Nom officiel de l'organisation partenaire
 *           example: "PAM — Programme Alimentaire Mondial"
 *         type:
 *           type: string
 *           enum: [DONOR, TECHNICAL, LOCAL, STRATEGIC]
 *           description: |
 *             Catégorie du partenariat :
 *             - DONOR : Bailleur de fonds (financement)
 *             - TECHNICAL : Partenaire d'appui technique
 *             - LOCAL : Organisation locale ou communautaire
 *             - STRATEGIC : Partenaire stratégique à long terme
 *           example: "DONOR"
 *         logoUrl:
 *           type: string
 *           nullable: true
 *           description: URL Cloudinary du logo de l'organisation
 *           example: "https://res.cloudinary.com/demo/image/upload/v1/logos/wfp.png"
 *         websiteUrl:
 *           type: string
 *           nullable: true
 *           description: Site web officiel de l'organisation
 *           example: "https://www.wfp.org"
 *         description:
 *           type: string
 *           nullable: true
 *           description: Présentation et rôle dans les activités de l'APC
 *           example: "Le PAM est la principale organisation humanitaire au monde qui sauve des vies dans les situations d'urgence."
 *         contactName:
 *           type: string
 *           nullable: true
 *           description: Nom du point focal / personne de contact
 *           example: "Jean Dupont"
 *         contactEmail:
 *           type: string
 *           nullable: true
 *           description: Email du point focal
 *           example: "j.dupont@wfp.org"
 *         contactPhone:
 *           type: string
 *           nullable: true
 *           description: Téléphone du point focal
 *           example: "+243 812 345 678"
 *         totalFunding:
 *           type: number
 *           format: double
 *           description: Volume total de financement alloué (en USD)
 *           example: 450000
 *         isActive:
 *           type: boolean
 *           description: Indique si le partenariat est actif et visible publiquement
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
@Entity('partners')
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({
    type: 'enum',
    enum: PartnerType,
    default: PartnerType.LOCAL
  })
  type!: PartnerType;

  @Column({ nullable: true })
  logoUrl!: string;

  @Column({ nullable: true })
  websiteUrl!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column({ nullable: true })
  contactName!: string;

  @Column({ nullable: true })
  contactEmail!: string;

  @Column({ nullable: true })
  contactPhone!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  totalFunding!: number;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
