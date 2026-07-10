import { CareerTypeService } from './career-type.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class CareerTypeController {
    service = new CareerTypeService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Type de contrat créé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const items = await this.service.findAll(adminMode);
            return ResponseUtil.success(res, 'Liste des types de contrat récupérée', items);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du type de contrat récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Type de contrat mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Type de contrat supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    toggleStatus = async (req, res, next) => {
        try {
            const result = await this.service.toggleStatus(req.params.id);
            return ResponseUtil.success(res, 'Statut du type de contrat modifié', result);
        }
        catch (error) {
            next(error);
        }
    };
}
