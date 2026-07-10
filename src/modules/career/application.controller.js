import { ApplicationService } from './application.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class ApplicationController {
    service = new ApplicationService();
    apply = async (req, res, next) => {
        try {
            const cvUrl = req.file ? req.file.path : null;
            const result = await this.service.apply(req.body, cvUrl);
            return ResponseUtil.created(res, 'Candidature soumise avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    findAll = async (req, res, next) => {
        try {
            const result = await this.service.findAll();
            return ResponseUtil.success(res, 'Liste des candidatures récupérée', result);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Détails de la candidature récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    updateStatus = async (req, res, next) => {
        try {
            const { status } = req.body;
            const result = await this.service.updateStatus(req.params.id, status);
            return ResponseUtil.success(res, 'Statut de la candidature mis à jour', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Candidature supprimée avec succès');
        }
        catch (error) {
            next(error);
        }
    };
}
