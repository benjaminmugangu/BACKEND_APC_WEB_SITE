import { Request, Response, NextFunction } from 'express';
import { PartnerCategoryService } from './partner-category.service';
import { CreatePartnerCategoryDto, UpdatePartnerCategoryDto } from './dto/partner-category.dto';
import { ResponseUtil } from '@/common/utils/response.util';

export class PartnerCategoryController {
  private service = new PartnerCategoryService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.service.create(req.body as CreatePartnerCategoryDto);
      return ResponseUtil.created(res, 'Catégorie créée avec succès', category);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await this.service.findAll();
      return ResponseUtil.success(res, 'Catégories récupérées', categories);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.service.findOne(req.params.id as string);
      return ResponseUtil.success(res, 'Catégorie trouvée', category);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.service.update(req.params.id as string, req.body as UpdatePartnerCategoryDto);
      return ResponseUtil.success(res, 'Catégorie mise à jour avec succès', category);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.remove(req.params.id as string);
      return ResponseUtil.success(res, 'Catégorie supprimée avec succès', result);
    } catch (error) {
      next(error);
    }
  };
}
