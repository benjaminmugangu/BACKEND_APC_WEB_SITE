import { AppDataSource } from '@/config/database.config';
import { Tender, TenderStatus } from '@/entities/tender.entity';
import { NotFoundError, ConflictError } from '@/common/utils/error.util';
import { In } from 'typeorm';
export class TenderService {
    repository = AppDataSource.getRepository(Tender);
    async create(data) {
        const existing = await this.repository.findOneBy({ reference: data.reference });
        if (existing) {
            throw new ConflictError('Un appel d\'offres avec cette référence existe déjà');
        }
        const tender = this.repository.create({
            ...data,
            deadline: new Date(data.deadline)
        });
        return await this.repository.save(tender);
    }
    async findAll(query) {
        const { adminMode = false, status, category, search, page = 1, limit = 10 } = query;
        const qb = this.repository.createQueryBuilder('tender');
        if (!adminMode) {
            qb.where('tender.status = :status', { status: TenderStatus.OPEN });
            qb.andWhere('tender.deadline > :now', { now: new Date() });
        }
        else if (status) {
            qb.andWhere('tender.status = :status', { status });
        }
        if (category) {
            qb.andWhere('tender.category = :category', { category });
        }
        if (search) {
            qb.andWhere('(tender.title LIKE :search OR tender.reference LIKE :search)', {
                search: `%${search}%`
            });
        }
        qb.orderBy('tender.createdAt', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        const [items, total] = await qb.getManyAndCount();
        return {
            items,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async findOne(id) {
        const tender = await this.repository.findOneBy({ id });
        if (!tender) {
            throw new NotFoundError('Appel d\'offres introuvable');
        }
        return tender;
    }
    async update(id, data) {
        const tender = await this.findOne(id);
        if (data.reference && data.reference !== tender.reference) {
            const existing = await this.repository.findOneBy({ reference: data.reference });
            if (existing) {
                throw new ConflictError('Un appel d\'offres avec cette référence existe déjà');
            }
        }
        Object.assign(tender, {
            ...data,
            deadline: data.deadline ? new Date(data.deadline) : tender.deadline
        });
        return await this.repository.save(tender);
    }
    async remove(id) {
        const tender = await this.findOne(id);
        await this.repository.remove(tender);
        return true;
    }
    async setStatus(id, status) {
        const tender = await this.findOne(id);
        tender.status = status;
        return await this.repository.save(tender);
    }
    async bulkDelete(ids) {
        await this.repository.delete({ id: In(ids) });
        return true;
    }
    async bulkSetStatus(ids, status) {
        await this.repository.update({ id: In(ids) }, { status });
        return true;
    }
}
