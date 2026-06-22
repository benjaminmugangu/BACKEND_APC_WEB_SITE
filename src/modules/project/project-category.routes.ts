import { Router } from 'express';
import { ProjectCategoryController } from './project-category.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateProjectCategoryDto, UpdateProjectCategoryDto } from './dto/project-category.dto';

const router = Router();
const controller = new ProjectCategoryController();

/**
 * @swagger
 * tags:
 *   - name: Project Categories
 *     description: Gestion des catégories de projets
 */

/**
 * @swagger
 * /api/v1/project-categories:
 *   get:
 *     summary: Récupérer toutes les catégories
 *     tags: [Project Categories]
 *     responses:
 *       200:
 *         description: Liste des catégories
 */
router.get('/', controller.findAll);

/**
 * @swagger
 * /api/v1/project-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Project Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails de la catégorie
 */
router.get('/:id', controller.findOne);

// Admin routes
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));

/**
 * @swagger
 * /api/v1/project-categories:
 *   post:
 *     summary: Créer une catégorie
 *     tags: [Project Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectCategory'
 *     responses:
 *       201:
 *         description: Catégorie créée
 */
router.post('/', validationMiddleware(CreateProjectCategoryDto), controller.create);

/**
 * @swagger
 * /api/v1/project-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Project Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectCategory'
 *     responses:
 *       200:
 *         description: Catégorie mise à jour
 */
router.put('/:id', validationMiddleware(UpdateProjectCategoryDto), controller.update);

/**
 * @swagger
 * /api/v1/project-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Project Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie supprimée
 */
router.delete('/:id', controller.remove);

export default router;
