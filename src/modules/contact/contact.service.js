import { AppDataSource } from '@/config/database.config';
import { Message, MessageStatus } from '@/entities/message.entity';
import { NotFoundError } from '@/common/utils/error.util';
import { In } from 'typeorm';
export class ContactService {
    repository = AppDataSource.getRepository(Message);
    async create(data) {
        const message = this.repository.create(data);
        return await this.repository.save(message);
    }
    async findAll(query) {
        const { status, type, search, page = 1, limit = 20 } = query;
        const qb = this.repository.createQueryBuilder('message');
        if (status) {
            qb.andWhere('message.status = :status', { status });
        }
        if (type) {
            qb.andWhere('message.type = :type', { type });
        }
        if (search) {
            qb.andWhere('(message.sender LIKE :search OR message.subject LIKE :search OR message.email LIKE :search)', {
                search: `%${search}%`
            });
        }
        qb.orderBy('message.createdAt', 'DESC')
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
        const message = await this.repository.findOneBy({ id });
        if (!message) {
            throw new NotFoundError('Message introuvable');
        }
        return message;
    }
    async setStatus(id, status) {
        const message = await this.findOne(id);
        message.status = status;
        return await this.repository.save(message);
    }
    async markAsReplied(id, adminId) {
        const message = await this.findOne(id);
        message.status = MessageStatus.REPLIED;
        message.repliedAt = new Date();
        message.repliedBy = adminId;
        return await this.repository.save(message);
    }
    async reply(id, content, adminId) {
        const message = await this.findOne(id);
        // Ici on simulerait l'envoi d'un email réel via un service comme Nodemailer
        // Pour l'instant on met à jour le statut et on stocke la réponse
        message.status = MessageStatus.REPLIED;
        message.repliedAt = new Date();
        message.repliedBy = adminId;
        message.replyContent = content; // On suppose que ce champ existe ou on l'ajoute à l'entité
        return await this.repository.save(message);
    }
    async remove(id) {
        const message = await this.findOne(id);
        await this.repository.remove(message);
        return true;
    }
    async bulkDelete(ids) {
        await this.repository.delete({ id: In(ids) });
        return true;
    }
    async getUnreadCount() {
        return await this.repository.countBy({ status: MessageStatus.UNREAD });
    }
}
