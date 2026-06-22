import { Request, Response, NextFunction } from 'express';
import { NewsCategoryService } from './news-category.service';
import { CreateNewsCategoryDto, UpdateNewsCategoryDto } from './dto/news-category.dto';
import { AppError } from '@/common/utils/error.util';
import { ResponseUtil } from '@/common/utils/response.util';

export class NewsCategoryController {
  private categoryService = new NewsCategoryService();

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as any).user;
      const includeInactive = user?.role === 'admin' || user?.role === 'superadmin' || user?.role === 'tech_admin';
      const categories = await this.categoryService.findAll(includeInactive);
      ResponseUtil.success(res, 'Liste des catégories d\'actualités', categories);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.categoryService.findById(req.params.id as string);
      ResponseUtil.success(res, 'Catégorie récupérée', category);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.categoryService.create(req.body);
      ResponseUtil.created(res, 'Catégorie créée avec succès', category);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.categoryService.update(req.params.id as string, req.body);
      ResponseUtil.success(res, 'Catégorie mise à jour avec succès', category);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.categoryService.delete(req.params.id as string);
      ResponseUtil.success(res, 'Catégorie supprimée avec succès', null);
    } catch (error) {
      next(error);
    }
  };
}
