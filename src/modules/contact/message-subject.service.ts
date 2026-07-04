import { AppDataSource } from '@/config/database.config';
import { MessageSubject } from '@/entities/message-subject.entity';
import { CreateMessageSubjectDto, UpdateMessageSubjectDto } from './dto/message-subject.dto';
import { NotFoundError, ConflictError } from '@/common/utils/error.util';

export class MessageSubjectService {
  private repository = AppDataSource.getRepository(MessageSubject);

  async create(data: CreateMessageSubjectDto) {
    const existing = await this.repository.findOneBy({ name: data.name });
    if (existing) {
      throw new ConflictError(`Un sujet avec le nom "${data.name}" existe déjà`);
    }
    const subject = this.repository.create(data);
    return await this.repository.save(subject);
  }

  async findAll(onlyActive = false) {
    const where = onlyActive ? { isActive: true } : {};
    return await this.repository.find({
      where,
      order: { order: 'ASC', name: 'ASC' }
    });
  }

  async findOne(id: string) {
    const subject = await this.repository.findOneBy({ id });
    if (!subject) {
      throw new NotFoundError('Sujet de message introuvable');
    }
    return subject;
  }

  async update(id: string, data: UpdateMessageSubjectDto) {
    const subject = await this.findOne(id);
    if (data.name && data.name !== subject.name) {
      const existing = await this.repository.findOneBy({ name: data.name });
      if (existing) {
        throw new ConflictError(`Un sujet avec le nom "${data.name}" existe déjà`);
      }
    }
    Object.assign(subject, data);
    return await this.repository.save(subject);
  }

  async remove(id: string) {
    const subject = await this.findOne(id);
    await this.repository.remove(subject);
    return true;
  }

  async toggleActive(id: string) {
    const subject = await this.findOne(id);
    subject.isActive = !subject.isActive;
    return await this.repository.save(subject);
  }
}
