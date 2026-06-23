import { AppDataSource } from '@/config/database.config';
import { PartnerCategory } from '@/entities/partner-category.entity';
import { CreatePartnerCategoryDto, UpdatePartnerCategoryDto } from './dto/partner-category.dto';
import { NotFoundError, ConflictError } from '@/common/utils/error.util';

export class PartnerCategoryService {
  private repository = AppDataSource.getRepository(PartnerCategory);

  async create(data: CreatePartnerCategoryDto) {
    const existing = await this.repository.findOneBy({ slug: data.slug });
    if (existing) {
      throw new ConflictError('Une catégorie avec ce slug existe déjà');
    }

    const category = this.repository.create(data);
    return await this.repository.save(category);
  }

  async findAll() {
    return await this.repository.find({
      order: { name: 'ASC' }
    });
  }

  async findOne(id: string) {
    const category = await this.repository.findOneBy({ id });
    if (!category) {
      throw new NotFoundError('Catégorie introuvable');
    }
    return category;
  }

  async update(id: string, data: UpdatePartnerCategoryDto) {
    const category = await this.findOne(id);

    if (data.slug && data.slug !== category.slug) {
      const existing = await this.repository.findOneBy({ slug: data.slug });
      if (existing) {
        throw new ConflictError('Une catégorie avec ce slug existe déjà');
      }
    }

    Object.assign(category, data);
    return await this.repository.save(category);
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    await this.repository.remove(category);
    return { success: true };
  }
}
