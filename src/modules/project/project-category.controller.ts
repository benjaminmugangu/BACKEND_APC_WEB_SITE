import { Request, Response, NextFunction } from 'express';
import { ProjectCategoryService } from './project-category.service';
import { ResponseUtil } from '@/common/utils/response.util';

export class ProjectCategoryController {
  private service = new ProjectCategoryService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      return ResponseUtil.created(res, 'Catégorie créée avec succès', result);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findAll();
      return ResponseUtil.success(res, 'Liste des catégories', result);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findOne(req.params.id as string);
      return ResponseUtil.success(res, 'Détails de la catégorie', result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.update(req.params.id as string, req.body);
      return ResponseUtil.success(res, 'Catégorie mise à jour', result);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.remove(req.params.id as string);
      return ResponseUtil.success(res, 'Catégorie supprimée');
    } catch (error) {
      next(error);
    }
  };
}
