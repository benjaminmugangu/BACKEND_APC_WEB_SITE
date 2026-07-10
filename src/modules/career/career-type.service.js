import { AppDataSource } from '@/config/database.config';
import { CareerType } from '@/entities/career-type.entity';
import { NotFoundError } from '@/common/utils/error.util';
export class CareerTypeService {
    repository = AppDataSource.getRepository(CareerType);
    async create(data) {
        const type = this.repository.create(data);
        return await this.repository.save(type);
    }
    async findAll(adminMode = false) {
        const query = this.repository.createQueryBuilder('type');
        if (!adminMode) {
            query.where('type.isActive = :isActive', { isActive: true });
        }
        query.orderBy('type.order', 'ASC').addOrderBy('type.createdAt', 'DESC');
        return await query.getMany();
    }
    async findOne(id) {
        const type = await this.repository.findOneBy({ id });
        if (!type) {
            throw new NotFoundError('Type de contrat introuvable');
        }
        return type;
    }
    async update(id, data) {
        const type = await this.findOne(id);
        Object.assign(type, data);
        return await this.repository.save(type);
    }
    async remove(id) {
        const type = await this.findOne(id);
        await this.repository.remove(type);
        return true;
    }
    async toggleStatus(id) {
        const type = await this.findOne(id);
        type.isActive = !type.isActive;
        return await this.repository.save(type);
    }
}
