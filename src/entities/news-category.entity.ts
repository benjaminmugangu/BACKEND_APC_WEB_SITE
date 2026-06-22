import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { News } from './news.entity';

@Entity('news_categories')
export class NewsCategory {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  slug!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(() => News, news => news.category)
  newsList!: News[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
