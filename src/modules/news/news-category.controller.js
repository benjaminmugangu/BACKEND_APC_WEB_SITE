import { NewsCategoryService } from './news-category.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class NewsCategoryController {
    categoryService = new NewsCategoryService();
    findAll = async (req, res, next) => {
        try {
            const user = req.user;
            const includeInactive = user?.role === 'admin' || user?.role === 'superadmin' || user?.role === 'tech_admin';
            const categories = await this.categoryService.findAll(includeInactive);
            ResponseUtil.success(res, 'Liste des catégories d\'actualités', categories);
        }
        catch (error) {
            next(error);
        }
    };
    findById = async (req, res, next) => {
        try {
            const category = await this.categoryService.findById(req.params.id);
            ResponseUtil.success(res, 'Catégorie récupérée', category);
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const category = await this.categoryService.create(req.body);
            ResponseUtil.created(res, 'Catégorie créée avec succès', category);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const category = await this.categoryService.update(req.params.id, req.body);
            ResponseUtil.success(res, 'Catégorie mise à jour avec succès', category);
        }
        catch (error) {
            next(error);
        }
    };
    delete = async (req, res, next) => {
        try {
            await this.categoryService.delete(req.params.id);
            ResponseUtil.success(res, 'Catégorie supprimée avec succès', null);
        }
        catch (error) {
            next(error);
        }
    };
}
