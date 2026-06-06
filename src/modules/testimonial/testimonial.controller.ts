import { Request, Response, NextFunction } from 'express';
import { TestimonialService } from './testimonial.service';
import { ResponseUtil } from '@/common/utils/response.util';

export class TestimonialController {
  private service = new TestimonialService();

  // Public: only published testimonials
  findAllPublished = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findAll({ publishedOnly: true });
      return ResponseUtil.success(res, 'Témoignages récupérés', result);
    } catch (error) {
      next(error);
    }
  };

  // Admin: all testimonials
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findAll();
      return ResponseUtil.success(res, 'Liste des témoignages récupérée', result);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findOne(req.params.id as string);
      return ResponseUtil.success(res, 'Témoignage récupéré', result);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      return ResponseUtil.created(res, 'Témoignage créé avec succès', result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.update(req.params.id as string, req.body);
      return ResponseUtil.success(res, 'Témoignage mis à jour', result);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.remove(req.params.id as string);
      return ResponseUtil.success(res, 'Témoignage supprimé');
    } catch (error) {
      next(error);
    }
  };

  bulkDelete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.bulkDelete(req.body.ids);
      return ResponseUtil.success(res, 'Témoignages supprimés');
    } catch (error) {
      next(error);
    }
  };
}
