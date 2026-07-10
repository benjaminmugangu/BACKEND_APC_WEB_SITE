import { ContactService } from './contact.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class ContactController {
    service = new ContactService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Message envoyé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const result = await this.service.findAll({
                page,
                limit,
                status: req.query.status,
                type: req.query.type,
                search: req.query.search
            });
            return ResponseUtil.success(res, 'Liste des messages récupérée', result.items, result.meta);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du message récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    setStatus = async (req, res, next) => {
        try {
            const { status } = req.body;
            const result = await this.service.setStatus(req.params.id, status);
            return ResponseUtil.success(res, 'Statut du message mis à jour', result);
        }
        catch (error) {
            next(error);
        }
    };
    markAsRead = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, 'read');
            return ResponseUtil.success(res, 'Message marqué comme lu', result);
        }
        catch (error) {
            next(error);
        }
    };
    reply = async (req, res, next) => {
        try {
            const { content } = req.body;
            const adminId = req.user.id;
            const result = await this.service.reply(req.params.id, content, adminId);
            return ResponseUtil.success(res, 'Réponse envoyée avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Message supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Messages supprimés avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    getUnreadCount = async (req, res, next) => {
        try {
            const count = await this.service.getUnreadCount();
            return ResponseUtil.success(res, 'Nombre de messages non lus récupéré', { count });
        }
        catch (error) {
            next(error);
        }
    };
}
