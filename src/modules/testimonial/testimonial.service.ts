import { AppDataSource } from '@/config/database.config';
import { BeneficiaryTestimonial, TestimonialStatus } from '@/entities/testimonial.entity';
import { NotFoundError } from '@/common/utils/error.util';
import { CreateTestimonialDto, UpdateTestimonialDto } from './dto/testimonial.dto';

export class TestimonialService {
  private repository = AppDataSource.getRepository(BeneficiaryTestimonial);

  /**
   * List all testimonials (admin) or only published ones (public).
   */
  async findAll(options: { publishedOnly?: boolean } = {}): Promise<BeneficiaryTestimonial[]> {
    const where = options.publishedOnly ? { status: TestimonialStatus.PUBLISHED } : {};
    return await this.repository.find({
      where,
      order: { order: 'ASC', createdAt: 'DESC' }
    });
  }

  async findOne(id: string): Promise<BeneficiaryTestimonial> {
    const testimonial = await this.repository.findOneBy({ id });
    if (!testimonial) {
      throw new NotFoundError('Témoignage introuvable');
    }
    return testimonial;
  }

  async create(data: CreateTestimonialDto): Promise<BeneficiaryTestimonial> {
    const testimonial = this.repository.create(data);
    return await this.repository.save(testimonial);
  }

  async update(id: string, data: UpdateTestimonialDto): Promise<BeneficiaryTestimonial> {
    const testimonial = await this.findOne(id);
    Object.assign(testimonial, data);
    return await this.repository.save(testimonial);
  }

  async remove(id: string): Promise<boolean> {
    const testimonial = await this.findOne(id);
    await this.repository.remove(testimonial);
    return true;
  }

  async bulkDelete(ids: string[]): Promise<boolean> {
    await this.repository.delete(ids);
    return true;
  }
}
