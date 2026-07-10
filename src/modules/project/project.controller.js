import { ProjectService } from './project.service';
import { ResponseUtil } from '@/common/utils/response.util';
import { ProjectStatus } from '@/entities/project.entity';
export class ProjectController {
    service = new ProjectService();
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Projet créé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            // Support both `limit` and `perPage` (frontend uses perPage)
            const limit = parseInt((req.query.limit || req.query.perPage)) || 10;
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const { items, meta } = await this.service.findAll({
                page,
                limit,
                adminMode,
                category: req.query.category,
                status: req.query.status,
                search: req.query.search,
            });
            return ResponseUtil.success(res, 'Liste des projets récupérée', items, meta);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails du projet récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    findBySlug = async (req, res, next) => {
        try {
            const adminMode = ['ADMIN', 'ADMIN_RH'].includes(req.user?.role);
            const result = await this.service.findBySlug(req.params.slug, adminMode);
            return ResponseUtil.success(res, 'Détails du projet récupérés par slug', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Projet mis à jour avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Projet supprimé avec succès');
        }
        catch (error) {
            next(error);
        }
    };
    duplicate = async (req, res, next) => {
        try {
            const result = await this.service.duplicate(req.params.id);
            return ResponseUtil.success(res, 'Projet dupliqué avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    publish = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, ProjectStatus.PUBLISHED);
            return ResponseUtil.success(res, 'Projet publié avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    unpublish = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, ProjectStatus.DRAFT);
            return ResponseUtil.success(res, 'Projet dépublié avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    archive = async (req, res, next) => {
        try {
            const result = await this.service.setStatus(req.params.id, ProjectStatus.ARCHIVED);
            return ResponseUtil.success(res, 'Projet archivé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            const { ids } = req.body;
            await this.service.bulkDelete(ids);
            return ResponseUtil.success(res, 'Projets supprimés avec succès');
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
