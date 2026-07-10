import { ServiceService } from './service.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class ServiceController {
    service = new ServiceService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Service créé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const result = await this.service.findAll({
                adminMode,
                search: req.query.search
            });
            return ResponseUtil.success(res, 'Liste des services récupérée', result);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du service récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Service mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Service supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Services supprimés avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
