import { AppDataSource } from '@/config/database.config';
import { BeneficiaryTestimonial, TestimonialStatus } from '@/entities/testimonial.entity';
import { NotFoundError } from '@/common/utils/error.util';
export class TestimonialService {
    repository = AppDataSource.getRepository(BeneficiaryTestimonial);
    /**
     * List all testimonials (admin) or only published ones (public).
     */
    async findAll(options = {}) {
        const where = options.publishedOnly ? { status: TestimonialStatus.PUBLISHED } : {};
        return await this.repository.find({
            where,
            order: { order: 'ASC', createdAt: 'DESC' }
        });
    }
    async findOne(id) {
        const testimonial = await this.repository.findOneBy({ id });
        if (!testimonial) {
            throw new NotFoundError('Témoignage introuvable');
        }
        return testimonial;
    }
    async create(data) {
        const testimonial = this.repository.create(data);
        return await this.repository.save(testimonial);
    }
    async update(id, data) {
        const testimonial = await this.findOne(id);
        Object.assign(testimonial, data);
        return await this.repository.save(testimonial);
    }
    async remove(id) {
        const testimonial = await this.findOne(id);
        await this.repository.remove(testimonial);
        return true;
    }
    async bulkDelete(ids) {
        await this.repository.delete(ids);
        return true;
    }
}
