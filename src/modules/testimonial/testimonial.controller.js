import { TestimonialService } from './testimonial.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class TestimonialController {
    service = new TestimonialService();
    // Public: only published testimonials
    findAllPublished = async (req, res, next) => {
        try {
            const result = await this.service.findAll({ publishedOnly: true });
            return ResponseUtil.success(res, 'Témoignages récupérés', result);
        }
        catch (error) {
            next(error);
        }
    };
    // Admin: all testimonials
    findAll = async (req, res, next) => {
        try {
            const result = await this.service.findAll();
            return ResponseUtil.success(res, 'Liste des témoignages récupérée', result);
        }
        catch (error) {
            next(error);
        }
    };
    findOne = async (req, res, next) => {
        try {
            const result = await this.service.findOne(req.params.id);
            return ResponseUtil.success(res, 'Témoignage récupéré', result);
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const result = await this.service.create(req.body);
            return ResponseUtil.created(res, 'Témoignage créé avec succès', result);
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const result = await this.service.update(req.params.id, req.body);
            return ResponseUtil.success(res, 'Témoignage mis à jour', result);
        }
        catch (error) {
            next(error);
        }
    };
    remove = async (req, res, next) => {
        try {
            await this.service.remove(req.params.id);
            return ResponseUtil.success(res, 'Témoignage supprimé');
        }
        catch (error) {
            next(error);
        }
    };
    bulkDelete = async (req, res, next) => {
        try {
            await this.service.bulkDelete(req.body.ids);
            return ResponseUtil.success(res, 'Témoignages supprimés');
        }
        catch (error) {
            next(error);
        }
    };
}
