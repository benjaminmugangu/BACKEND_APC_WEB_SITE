import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

/**
 * @swagger
 * components:
 *   schemas:
 *     Settings:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         hero:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             subtitle:
 *               type: string
 *             imageUrl:
 *               type: string
 *         stats:
 *           type: object
 *           properties:
 *             beneficiaries:
 *               type: string
 *             projects:
 *               type: string
 *             provinces:
 *               type: string
 *             partners:
 *               type: string
 *             teamMembers:
 *               type: string
 *         contact:
 *           type: object
 *           properties:
 *             address:
 *               type: string
 *             phone1:
 *               type: string
 *             phone2:
 *               type: string
 *             whatsapp:
 *               type: string
 *             email:
 *               type: string
 *             emailSupport:
 *               type: string
 *             emailCareers:
 *               type: string
 *             socials:
 *               type: object
 *               properties:
 *                 facebook:
 *                   type: string
 *                 twitter:
 *                   type: string
 *                 linkedin:
 *                   type: string
 *                 instagram:
 *                   type: string
 *                 youtube:
 *                   type: string
 *         institution:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             acronym:
 *               type: string
 *             foundationYear:
 *               type: string
 *             vision:
 *               type: string
 *             mission:
 *               type: string
 *         seo:
 *           type: object
 *           properties:
 *             metaTitle:
 *               type: string
 *             metaDescription:
 *               type: string
 *             metaKeywords:
 *               type: string
 *             ogImage:
 *               type: string
 *         logo:
 *           type: object
 *           properties:
 *             logoHeader:
 *               type: string
 *             logoFooter:
 *               type: string
 *             logoDark:
 *               type: string
 *             favicon:
 *               type: string
 */
@Entity('settings')
export class Settings {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('json', { nullable: true })
  hero!: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };

  @Column('json', { nullable: true })
  stats!: {
    beneficiaries: string;
    projects: string;
    provinces: string;
    partners: string;
    teamMembers: string;
  };

  @Column('json', { nullable: true })
  contact!: {
    address: string;
    phone1: string;
    phone2?: string;
    whatsapp?: string;
    email: string;
    emailSupport?: string;
    emailCareers?: string;
    socials: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      youtube?: string;
    };
  };

  @Column('json', { nullable: true })
  institution!: {
    name: string;
    acronym: string;
    foundationYear: string;
    vision: string;
    mission: string;
  };

  @Column('json', { nullable: true })
  seo!: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    ogImage?: string;
  };

  @Column('json', { nullable: true })
  logo!: {
    logoHeader: string;
    logoFooter: string;
    logoDark?: string;
    favicon?: string;
  };

  @UpdateDateColumn()
  updatedAt!: Date;
}
