import { Router } from 'express';
import { NewsCategoryController } from './news-category.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { CreateNewsCategoryDto, UpdateNewsCategoryDto } from './dto/news-category.dto';
const router = Router();
const controller = new NewsCategoryController();
/**
 * @swagger
 * tags:
 *   name: News Categories
 *   description: Gestion des catégories d'actualités
 */
/**
 * @swagger
 * /api/v1/news-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'actualités
 *     tags: [News Categories]
 *     responses:
 *       200:
 *         description: Liste des catégories
 */
router.get('/', controller.findAll);
/**
 * @swagger
 * /api/v1/news-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [News Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails de la catégorie
 *       404:
 *         description: Catégorie non trouvée
 */
router.get('/:id', controller.findById);
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));
/**
 * @swagger
 * /api/v1/news-categories:
 *   post:
 *     summary: Créer une catégorie
 *     tags: [News Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - slug
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Catégorie créée
 */
router.post('/', validationMiddleware(CreateNewsCategoryDto), controller.create);
/**
 * @swagger
 * /api/v1/news-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [News Categories]
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
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               description:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Catégorie mise à jour
 */
router.put('/:id', validationMiddleware(UpdateNewsCategoryDto), controller.update);
/**
 * @swagger
 * /api/v1/news-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [News Categories]
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
router.delete('/:id', controller.delete);
export default router;
