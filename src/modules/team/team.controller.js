import { TeamService } from './team.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class TeamController {
    service = new TeamService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Membre ajouté avec succès', result);
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
                department: req.query.department,
                status: req.query.status,
                search: req.query.search
            });
            return ResponseUtil.success(res, 'Liste de l\'équipe récupérée', result);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du membre récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Membre mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Membre supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    setStatus = async (req, res, next) => {
        try {
            const { status } = req.body;
            const result = await this.service.setStatus(req.params.id, status);
            return ResponseUtil.success(res, 'Statut mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Membres supprimés avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
