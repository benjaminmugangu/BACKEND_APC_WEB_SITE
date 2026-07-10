import { PartnerCategoryService } from './partner-category.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class PartnerCategoryController {
    service = new PartnerCategoryService();
    create = async (req, res, next) => {
        try {
            const category = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Catégorie créée avec succès', category);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const categories = await this.service.findAll();
            return ResponseUtil.success(res, 'Catégories récupérées', categories);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const category = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Catégorie trouvée', category);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const category = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Catégorie mise à jour avec succès', category);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            const result = await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Catégorie supprimée avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
}
