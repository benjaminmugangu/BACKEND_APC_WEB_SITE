import { AppDataSource } from '@/config/database.config';
import { Application, ApplicationStatus } from '@/entities/application.entity';
import { Career } from '@/entities/career.entity';
import { NotFoundError, BadRequestError } from '@/common/utils/error.util';
import { CreateApplicationDto } from './dto/application.dto';
import { emailService } from '@/common/services/email.service';

export class ApplicationService {
  private repository = AppDataSource.getRepository(Application);
  private careerRepository = AppDataSource.getRepository(Career);

  async apply(data: CreateApplicationDto, cvUrl: string | null) {
    let careerTitle: string | undefined;

    if (data.careerId) {
      const career = await this.careerRepository.findOneBy({ id: data.careerId });
      if (!career) {
        throw new NotFoundError('Offre d\'emploi associée introuvable');
      }
      if (!career.isOpen) {
        throw new BadRequestError('Cette offre d\'emploi est fermée aux candidatures');
      }
      careerTitle = career.title;
    }

    const application = this.repository.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      type: data.type,
      careerTypeId: data.careerTypeId,
      motivation: data.motivation,
      careerId: data.careerId,
      cvUrl,
      status: ApplicationStatus.PENDING
    });

    const saved = await this.repository.save(application);

    // Fire-and-forget email notification
    emailService.notifyNewApplication({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      type: data.type || "Non précisé",
      careerTitle,
    });

    return saved;
  }

  async findAll() {
    return await this.repository.find({
      relations: ['career', 'careerType'],
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: string) {
    const application = await this.repository.findOne({
      where: { id },
      relations: ['career', 'careerType']
    });
    if (!application) {
      throw new NotFoundError('Candidature introuvable');
    }
    return application;
  }

  async updateStatus(id: string, status: ApplicationStatus) {
    const application = await this.findOne(id);
    application.status = status;
    return await this.repository.save(application);
  }

  async remove(id: string) {
    const application = await this.findOne(id);
    await this.repository.remove(application);
    return true;
  }
}
