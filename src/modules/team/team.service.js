import { AppDataSource } from '@/config/database.config';
import { TeamMember, MemberStatus } from '@/entities/team-member.entity';
import { NotFoundError } from '@/common/utils/error.util';
import { In } from 'typeorm';
export class TeamService {
    repository = AppDataSource.getRepository(TeamMember);
    async create(data) {
        if (data.photo && !data.photoUrl) {
            data.photoUrl = data.photo;
        }
        const member = this.repository.create(data);
        return await this.repository.save(member);
    }
    async findAll(query) {
        const qb = this.repository.createQueryBuilder('team');
        if (!query.adminMode) {
            qb.where('team.isActive = :active', { active: true });
            qb.andWhere('team.status = :status', { status: MemberStatus.ACTIVE });
        }
        else {
            if (query.status) {
                qb.andWhere('team.status = :status', { status: query.status });
            }
        }
        if (query.department) {
            qb.andWhere('team.department = :department', { department: query.department });
        }
        if (query.search) {
            qb.andWhere('(team.name LIKE :search OR team.role LIKE :search)', {
                search: `%${query.search}%`
            });
        }
        qb.orderBy('team.order', 'ASC')
            .addOrderBy('team.name', 'ASC');
        return await qb.getMany();
    }
    async findOne(id) {
        const member = await this.repository.findOneBy({ id });
        if (!member) {
            throw new NotFoundError('Membre de l\'équipe introuvable');
        }
        return member;
    }
    async update(id, data) {
        if (data.photo && !data.photoUrl) {
            data.photoUrl = data.photo;
        }
        const member = await this.findOne(id);
        Object.assign(member, data);
        return await this.repository.save(member);
    }
    async remove(id) {
        const member = await this.findOne(id);
        await this.repository.remove(member);
        return true;
    }
    async setStatus(id, status) {
        const member = await this.findOne(id);
        member.status = status;
        return await this.repository.save(member);
    }
    async bulkDelete(ids) {
        await this.repository.delete({ id: In(ids) });
        return true;
    }
}
