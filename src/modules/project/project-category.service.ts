import { AppDataSource } from '@/config/database.config';
import { ProjectCategory } from '@/entities/project-category.entity';
import { NotFoundError, ConflictError } from '@/common/utils/error.util';

export class ProjectCategoryService {
  private repository = AppDataSource.getRepository(ProjectCategory);

  async create(data: Partial<ProjectCategory>): Promise<ProjectCategory> {
    const existing = await this.repository.findOne({ where: [{ slug: data.slug }, { name: data.name }] });
    if (existing) {
      throw new ConflictError('Une catégorie avec ce slug ou ce nom existe déjà');
    }
    const category = this.repository.create(data);
    return await this.repository.save(category);
  }

  async findAll(): Promise<ProjectCategory[]> {
    return await this.repository.find({
      order: { createdAt: 'ASC' }
    });
  }

  async findOne(id: string): Promise<ProjectCategory> {
    const category = await this.repository.findOne({ where: { id } });
    if (!category) throw new NotFoundError('Catégorie introuvable');
    return category;
  }

  async update(id: string, data: Partial<ProjectCategory>): Promise<ProjectCategory> {
    const category = await this.findOne(id);
    
    if (data.slug || data.name) {
      const qb = this.repository.createQueryBuilder('cat')
        .where('cat.id != :id', { id });
      
      const conditions = [];
      if (data.slug) conditions.push('cat.slug = :slug');
      if (data.name) conditions.push('cat.name = :name');
      
      const existing = await qb.andWhere(`(${conditions.join(' OR ')})`, { slug: data.slug, name: data.name }).getOne();
      
      if (existing) {
        throw new ConflictError('Une catégorie avec ce slug ou ce nom existe déjà');
      }
    }

    Object.assign(category, data);
    return await this.repository.save(category);
  }

  async remove(id: string): Promise<void> {
    const category = await this.findOne(id);
    // Ideally we shouldn't delete if there are projects, but cascade or set null will handle it based on entity config
    await this.repository.remove(category);
  }
}
