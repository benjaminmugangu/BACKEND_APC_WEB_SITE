import { UserService } from './user.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class UserController {
    service = new UserService();
    findAll = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const { items, meta } = await this.service.findAll(page, limit);
            return ResponseUtil.success(res, 'Liste des utilisateurs récupérée', items, meta);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails de l\'utilisateur récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.success(res, 'Utilisateur créé avec succès', result, undefined, 201);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Utilisateur mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Utilisateur supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
