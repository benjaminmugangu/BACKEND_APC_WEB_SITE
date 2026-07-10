import { In } from 'typeorm';
import { AppDataSource } from '@/config/database.config';
import { Career, CareerStatus } from '@/entities/career.entity';
import { NotFoundError } from '@/common/utils/error.util';
import { PaginationUtil } from '@/common/utils/pagination.util';
export class CareerService {
    repository = AppDataSource.getRepository(Career);
    async create(data) {
        const career = this.repository.create(data);
        // Sync isOpen from status so the public filter still works
        career.isOpen = !data.status || data.status === CareerStatus.OPEN;
        return await this.repository.save(career);
    }
    async findAll(page = 1, limit = 10, adminMode = false) {
        const query = this.repository.createQueryBuilder('career');
        if (!adminMode) {
            query.where('career.status = :status', { status: CareerStatus.OPEN });
        }
        query.orderBy('career.createdAt', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        const [items, total] = await query.getManyAndCount();
        return {
            items,
            meta: PaginationUtil.getMeta(total, page, limit)
        };
    }
    async findOne(id) {
        const career = await this.repository.findOneBy({ id });
        if (!career) {
            throw new NotFoundError('Offre d\'emploi introuvable');
        }
        return career;
    }
    async update(id, data) {
        const career = await this.findOne(id);
        Object.assign(career, data);
        // Sync isOpen from status
        if (data.status !== undefined) {
            career.isOpen = data.status === CareerStatus.OPEN;
        }
        return await this.repository.save(career);
    }
    async remove(id) {
        const career = await this.findOne(id);
        await this.repository.remove(career);
        return true;
    }
    async bulkDelete(ids) {
        await this.repository.delete({ id: In(ids) });
        return true;
    }
    async bulkSetStatus(ids, isOpen) {
        const status = isOpen ? CareerStatus.OPEN : CareerStatus.CLOSED;
        await this.repository.update({ id: In(ids) }, { isOpen, status });
        return true;
    }
}
