import { Router } from 'express';
import { CareerController } from './career.controller';
import { ApplicationController } from './application.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateCareerDto, UpdateCareerDto } from './dto/career.dto';
import { CreateApplicationDto } from './dto/application.dto';
import { upload } from '@/config/cloudinary.config';

const router = Router();
const controller = new CareerController();
const applicationController = new ApplicationController();

/**
 * @swagger
 * tags:
 *   - name: Careers
 *     description: Gestion des opportunités d'emploi
 *   - name: Applications
 *     description: Gestion des candidatures
 */

/**
 * @swagger
 * /api/v1/careers:
 *   get:
 *     summary: Récupérer toutes les opportunités d'emploi ouvertes
 *     tags: [Careers]
 *     responses:
 *       200:
 *         description: Liste des opportunités
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/v1/careers/apply:
 *   post:
 *     summary: Soumettre une candidature
 *     tags: [Applications]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName: { type: string }
 *               lastName: { type: string }
 *               email: { type: string }
 *               phone: { type: string }
 *               type: { type: string }
 *               motivation: { type: string }
 *               careerId: { type: string }
 *               cv: { type: string, format: binary }
 */
router.post('/apply', upload.single('cv'), validationMiddleware(CreateApplicationDto), applicationController.apply);

/**
 * @swagger
 * /api/v1/careers/{id}:
 *   get:
 *     summary: Récupérer une opportunité par son ID
 *     tags: [Careers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails de l'opportunité
 */
router.get('/:id', controller.findOne);

// Routes administratives (Protégées)
router.use(authMiddleware);

// Lecture : accessible aux deux rôles
router.get('/admin/all', authorize(UserRole.ADMIN, UserRole.ADMIN_RH), controller.findAll);

/**
 * @swagger
 * /api/v1/careers:
 *   post:
 *     summary: Créer une nouvelle opportunité d'emploi
 *     tags: [Careers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Career'
 *     responses:
 *       201:
 *         description: Opportunité créée
 */
// Écriture : ADMIN_RH seulement
router.post('/', authorize(UserRole.ADMIN_RH), validationMiddleware(CreateCareerDto), controller.create);
router.put('/:id', authorize(UserRole.ADMIN_RH), validationMiddleware(UpdateCareerDto), controller.update);
router.delete('/bulk', authorize(UserRole.ADMIN_RH), controller.bulkDelete);
router.delete('/:id', authorize(UserRole.ADMIN_RH), controller.remove);
router.patch('/bulk-status', authorize(UserRole.ADMIN_RH), controller.bulkSetStatus);

// Candidatures — Lecture : les deux rôles
/**
 * @swagger
 * /api/v1/careers/admin/applications:
 *   get:
 *     summary: Récupérer toutes les candidatures (Admin)
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de toutes les candidatures
 */
router.get('/admin/applications', authorize(UserRole.ADMIN, UserRole.ADMIN_RH), applicationController.findAll);
router.get('/admin/applications/:id', authorize(UserRole.ADMIN, UserRole.ADMIN_RH), applicationController.findOne);
// Écriture candidatures : ADMIN_RH seulement
router.patch('/admin/applications/:id/status', authorize(UserRole.ADMIN_RH), applicationController.updateStatus);
router.delete('/admin/applications/:id', authorize(UserRole.ADMIN_RH), applicationController.remove);

export default router;
