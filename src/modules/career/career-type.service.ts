import { AppDataSource } from '@/config/database.config';
import { CareerType } from '@/entities/career-type.entity';
import { CreateCareerTypeDto, UpdateCareerTypeDto } from './dto/career-type.dto';
import { NotFoundError } from '@/common/utils/error.util';

export class CareerTypeService {
  private repository = AppDataSource.getRepository(CareerType);

  async create(data: CreateCareerTypeDto) {
    const type = this.repository.create(data);
    return await this.repository.save(type);
  }

  async findAll(adminMode: boolean = false) {
    const query = this.repository.createQueryBuilder('type');
    
    if (!adminMode) {
      query.where('type.isActive = :isActive', { isActive: true });
    }
    
    query.orderBy('type.order', 'ASC').addOrderBy('type.createdAt', 'DESC');
    return await query.getMany();
  }

  async findOne(id: string) {
    const type = await this.repository.findOneBy({ id });
    if (!type) {
      throw new NotFoundError('Type de contrat introuvable');
    }
    return type;
  }

  async update(id: string, data: UpdateCareerTypeDto) {
    const type = await this.findOne(id);
    Object.assign(type, data);
    return await this.repository.save(type);
  }

  async remove(id: string) {
    const type = await this.findOne(id);
    await this.repository.remove(type);
    return true;
  }

  async toggleStatus(id: string) {
    const type = await this.findOne(id);
    type.isActive = !type.isActive;
    return await this.repository.save(type);
  }
}
