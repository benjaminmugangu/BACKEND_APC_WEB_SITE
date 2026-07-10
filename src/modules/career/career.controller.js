import { CareerService } from './career.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class CareerController {
    service = new CareerService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Offre créée avec succès', result);
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
            const { items, meta } = await this.service.findAll(page, limit, adminMode);
            return ResponseUtil.success(res, 'Liste des offres récupérée', items, meta);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails de l\'offre récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Offre mise à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Offre supprimée avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Offres supprimées avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkSetStatus = async (req, res, next) => {
        try {
            const { ids, isOpen } = req.body;
            await this.service.bulkSetStatus(ids, isOpen);
            return ResponseUtil.success(res, 'Statuts mis à jour avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
