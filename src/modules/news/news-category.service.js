import { AppDataSource } from '@/config/database.config';
import { NewsCategory } from '@/entities/news-category.entity';
import { AppError } from '@/common/utils/error.util';
export class NewsCategoryService {
    categoryRepository = AppDataSource.getRepository(NewsCategory);
    async findAll(includeInactive = false) {
        const query = this.categoryRepository.createQueryBuilder('category');
        if (!includeInactive) {
            query.where('category.isActive = :isActive', { isActive: true });
        }
        query.orderBy('category.name', 'ASC');
        return await query.getMany();
    }
    async findById(id) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
            throw new AppError('Catégorie introuvable', 404);
        }
        return category;
    }
    async create(data) {
        // Vérifier l'unicité du nom et slug
        const existingName = await this.categoryRepository.findOne({ where: { name: data.name } });
        if (existingName)
            throw new AppError('Ce nom de catégorie existe déjà', 400);
        const existingSlug = await this.categoryRepository.findOne({ where: { slug: data.slug } });
        if (existingSlug)
            throw new AppError('Ce slug existe déjà', 400);
        const category = this.categoryRepository.create(data);
        return await this.categoryRepository.save(category);
    }
    async update(id, data) {
        const category = await this.findById(id);
        if (data.name && data.name !== category.name) {
            const existingName = await this.categoryRepository.findOne({ where: { name: data.name } });
            if (existingName)
                throw new AppError('Ce nom de catégorie existe déjà', 400);
        }
        if (data.slug && data.slug !== category.slug) {
            const existingSlug = await this.categoryRepository.findOne({ where: { slug: data.slug } });
            if (existingSlug)
                throw new AppError('Ce slug existe déjà', 400);
        }
        Object.assign(category, data);
        return await this.categoryRepository.save(category);
    }
    async delete(id) {
        const category = await this.findById(id);
        await this.categoryRepository.remove(category);
        return true;
    }
}
