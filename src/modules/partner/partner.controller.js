import { PartnerService } from './partner.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class PartnerController {
    service = new PartnerService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Partenaire ajouté avec succès', result);
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
                categoryId: req.query.categoryId,
                search: req.query.search
            });
            return ResponseUtil.success(res, 'Liste des partenaires récupérée', result);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du partenaire récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Partenaire mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Partenaire supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Partenaires supprimés avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
