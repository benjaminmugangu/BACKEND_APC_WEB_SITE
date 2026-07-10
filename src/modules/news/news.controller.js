import { NewsService } from './news.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class NewsController {
    service = new NewsService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Actualité créée avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const { items, meta } = await this.service.findAll({
                page,
                limit,
                adminMode,
                categoryId: req.query.categoryId,
                status: req.query.status,
                featured: req.query.featured === 'true' ? true : req.query.featured === 'false' ? false : undefined,
                search: req.query.search
            });
            return ResponseUtil.success(res, 'Liste des actualités récupérée', items, meta);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails de l\'actualité récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    findBySlug = async (req, res, next) => {
        try {
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const result = await this.service.findBySlug(req.params.slug, adminMode);
            return ResponseUtil.success(res, 'Détails de l\'actualité récupérés par slug', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Actualité mise à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Actualité supprimée avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    duplicate = async (req, res, next) => {
        try {
            const result = await this.service.duplicate(req.params.id);
            return ResponseUtil.success(res, 'Actualité dupliquée avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    publish = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, 'published');
            return ResponseUtil.success(res, 'Actualité publiée avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Actualités supprimées avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkSetStatus = async (req, res, next) => {
        try {
            const { ids, status } = req.body;
            await this.service.bulkSetStatus(ids, status);
            return ResponseUtil.success(res, 'Statuts mis à jour avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    setStatus = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, req.body.status);
            return ResponseUtil.success(res, 'Statut mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
}
