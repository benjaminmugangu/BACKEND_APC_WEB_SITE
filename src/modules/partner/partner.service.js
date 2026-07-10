import { AppDataSource } from '@/config/database.config';
import { Partner } from '@/entities/partner.entity';
import { NotFoundError } from '@/common/utils/error.util';
import { In } from 'typeorm';
export class PartnerService {
    repository = AppDataSource.getRepository(Partner);
    async create(data) {
        const partner = this.repository.create(data);
        return await this.repository.save(partner);
    }
    async findAll(query) {
        const qb = this.repository.createQueryBuilder('partner')
            .leftJoinAndSelect('partner.category', 'categoryObj');
        if (!query.adminMode) {
            qb.where('partner.isActive = :active', { active: true });
        }
        if (query.categoryId) {
            qb.andWhere('partner.categoryId = :categoryId', { categoryId: query.categoryId });
        }
        if (query.search) {
            qb.andWhere('(partner.name LIKE :search OR partner.description LIKE :search)', {
                search: `%${query.search}%`
            });
        }
        qb.orderBy('partner.name', 'ASC');
        return await qb.getMany();
    }
    async findOne(id) {
        const partner = await this.repository.findOne({
            where: { id },
            relations: ['category']
        });
        if (!partner) {
            throw new NotFoundError('Partenaire introuvable');
        }
        return partner;
    }
    async update(id, data) {
        const partner = await this.findOne(id);
        Object.assign(partner, data);
        return await this.repository.save(partner);
    }
    async remove(id) {
        const partner = await this.findOne(id);
        await this.repository.remove(partner);
        return true;
    }
    async bulkDelete(ids) {
        await this.repository.delete({ id: In(ids) });
        return true;
    }
}
