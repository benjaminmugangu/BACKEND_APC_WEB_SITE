import { Router } from 'express';
import { PartnerCategoryController } from './partner-category.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreatePartnerCategoryDto, UpdatePartnerCategoryDto } from './dto/partner-category.dto';
const router = Router();
const controller = new PartnerCategoryController();
/**
 * @swagger
 * tags:
 *   name: PartnerCategories
 *   description: Gestion des catégories de partenaires
 */
/**
 * @swagger
 * /api/v1/partner-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie
 *     tags: [PartnerCategories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePartnerCategoryDto'
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 */
router.post('/', authMiddleware, authorize(UserRole.ADMIN), validationMiddleware(CreatePartnerCategoryDto), controller.create);
/**
 * @swagger
 * /api/v1/partner-categories:
 *   get:
 *     summary: Récupérer toutes les catégories
 *     tags: [PartnerCategories]
 *     responses:
 *       200:
 *         description: Liste des catégories récupérée
 */
router.get('/', controller.findAll);
/**
 * @swagger
 * /api/v1/partner-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par son ID
 *     tags: [PartnerCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie trouvée
 */
router.get('/:id', controller.findOne);
/**
 * @swagger
 * /api/v1/partner-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [PartnerCategories]
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
 *             $ref: '#/components/schemas/UpdatePartnerCategoryDto'
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 */
router.put('/:id', authMiddleware, authorize(UserRole.ADMIN), validationMiddleware(UpdatePartnerCategoryDto), controller.update);
/**
 * @swagger
 * /api/v1/partner-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [PartnerCategories]
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
 *         description: Catégorie supprimée avec succès
 */
router.delete('/:id', authorize(UserRole.ADMIN), controller.remove);
export default router;
