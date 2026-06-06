import { Router } from 'express';
import { TestimonialController } from './testimonial.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateTestimonialDto, UpdateTestimonialDto } from './dto/testimonial.dto';

const router = Router();
const controller = new TestimonialController();

/**
 * @swagger
 * tags:
 *   name: Testimonials
 *   description: Gestion des témoignages des bénéficiaires
 */

/**
 * @swagger
 * /api/v1/testimonials:
 *   get:
 *     summary: Récupérer les témoignages publiés (public)
 *     tags: [Testimonials]
 *     responses:
 *       200:
 *         description: Liste des témoignages publiés
 */
router.get('/', controller.findAllPublished);

/**
 * @swagger
 * /api/v1/testimonials/{id}:
 *   get:
 *     summary: Récupérer un témoignage par son ID
 *     tags: [Testimonials]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails du témoignage
 */
router.get('/:id', controller.findOne);

// Routes administratives (Protégées)
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));

/**
 * @swagger
 * /api/v1/testimonials/admin/all:
 *   get:
 *     summary: Récupérer tous les témoignages (Admin)
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 */
router.get('/admin/all', controller.findAll);

/**
 * @swagger
 * /api/v1/testimonials:
 *   post:
 *     summary: Créer un nouveau témoignage
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', validationMiddleware(CreateTestimonialDto), controller.create);

/**
 * @swagger
 * /api/v1/testimonials/{id}:
 *   put:
 *     summary: Mettre à jour un témoignage
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', validationMiddleware(UpdateTestimonialDto), controller.update);

router.delete('/bulk', controller.bulkDelete);

/**
 * @swagger
 * /api/v1/testimonials/{id}:
 *   delete:
 *     summary: Supprimer un témoignage
 *     tags: [Testimonials]
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', controller.remove);

export default router;
