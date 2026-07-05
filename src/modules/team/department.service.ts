import { AppDataSource } from '@/config/database.config';
import { Department } from '@/entities/department.entity';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { NotFoundError, ConflictError } from '@/common/utils/error.util';

export class DepartmentService {
  private repository = AppDataSource.getRepository(Department);

  async create(data: CreateDepartmentDto) {
    const existing = await this.repository.findOneBy({ name: data.name });
    if (existing) {
      throw new ConflictError(`Un département avec le nom "${data.name}" existe déjà`);
    }
    const department = this.repository.create(data);
    return await this.repository.save(department);
  }

  async findAll(onlyActive = false) {
    const where = onlyActive ? { isActive: true } : {};
    return await this.repository.find({
      where,
      order: { order: 'ASC', name: 'ASC' }
    });
  }

  async findOne(id: string) {
    const department = await this.repository.findOneBy({ id });
    if (!department) {
      throw new NotFoundError('Département introuvable');
    }
    return department;
  }

  async update(id: string, data: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    if (data.name && data.name !== department.name) {
      const existing = await this.repository.findOneBy({ name: data.name });
      if (existing) {
        throw new ConflictError(`Un département avec le nom "${data.name}" existe déjà`);
      }
    }
    Object.assign(department, data);
    return await this.repository.save(department);
  }

  async remove(id: string) {
    const department = await this.findOne(id);
    await this.repository.remove(department);
    return true;
  }

  async toggleActive(id: string) {
    const department = await this.findOne(id);
    department.isActive = !department.isActive;
    return await this.repository.save(department);
  }
}
