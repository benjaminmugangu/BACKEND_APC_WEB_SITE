import { Router } from 'express';
import { NewsController } from './news.controller';
import { authMiddleware, optionalAuthMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateNewsDto, UpdateNewsDto } from './dto/news.dto';
const router = Router();
const controller = new NewsController();
/**
 * @swagger
 * tags:
 *   name: News
 *   description: Gestion des actualités et articles
 */
/**
 * @swagger
 * /api/v1/news:
 *   get:
 *     summary: Récupérer toutes les actualités
 *     description: Récupère la liste paginée des actualités. En mode public, retourne uniquement les articles publiés. Si un administrateur est authentifié, retourne également les brouillons et planifications.
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Numéro de la page
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Nombre d'éléments par page
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filtrer par catégorie (ex. Impact, Agriculture)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [draft, published, scheduled]
 *         description: Filtrer par statut (uniquement pour les administrateurs)
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *         description: Filtrer par actualités mises à la une
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Terme de recherche textuelle sur le titre ou contenu
 *     responses:
 *       200:
 *         description: Liste des actualités récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/News'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     perPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 */
router.get('/', optionalAuthMiddleware, controller.findAll);
/**
 * @swagger
 * /api/v1/news/{id}:
 *   get:
 *     summary: Récupérer une actualité par son ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Identifiant de l'actualité
 *     responses:
 *       200:
 *         description: Détails de l'actualité récupérés
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/News'
 *       404:
 *         description: Actualité introuvable
 */
router.get('/:id', controller.findOne);
/**
 * @swagger
 * /api/v1/news/slug/{slug}:
 *   get:
 *     summary: Récupérer une actualité publiée par son slug
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug unique de l'actualité
 *     responses:
 *       200:
 *         description: Détails de l'actualité récupérés par slug
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/News'
 *       404:
 *         description: Actualité introuvable ou non publiée
 */
router.get('/slug/:slug', optionalAuthMiddleware, controller.findBySlug);
// ── ROUTES ADMINISTRATIVES (PROTÉGÉES) ──
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));
/**
 * @swagger
 * /api/v1/news:
 *   post:
 *     summary: Créer une nouvelle actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Actualité créée avec succès
 *       400:
 *         description: Payload invalide
 *       409:
 *         description: Un article avec ce slug existe déjà
 */
router.post('/', validationMiddleware(CreateNewsDto), controller.create);
/**
 * @swagger
 * /api/v1/news/{id}:
 *   put:
 *     summary: Mettre à jour une actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Actualité mise à jour avec succès
 *       404:
 *         description: Actualité introuvable
 */
router.put('/:id', validationMiddleware(UpdateNewsDto), controller.update);
/**
 * @swagger
 * /api/v1/news/bulk:
 *   delete:
 *     summary: Supprimer plusieurs actualités en masse
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ids
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *                 description: Liste des IDs à supprimer
 *     responses:
 *       200:
 *         description: Actualités supprimées avec succès
 */
router.delete('/bulk', controller.bulkDelete);
/**
 * @swagger
 * /api/v1/news/{id}:
 *   delete:
 *     summary: Supprimer une actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Actualité supprimée avec succès
 *       404:
 *         description: Actualité introuvable
 */
router.delete('/:id', controller.remove);
/**
 * @swagger
 * /api/v1/news/bulk-status:
 *   patch:
 *     summary: Changer le statut de plusieurs actualités en masse
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ids
 *               - status
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *               status:
 *                 type: string
 *                 enum: [draft, published, scheduled]
 *     responses:
 *       200:
 *         description: Statuts mis à jour avec succès
 */
router.patch('/bulk-status', controller.bulkSetStatus);
/**
 * @swagger
 * /api/v1/news/{id}/duplicate:
 *   post:
 *     summary: Dupliquer une actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       201:
 *         description: Actualité dupliquée (copie créée en mode brouillon)
 *       404:
 *         description: Actualité d'origine introuvable
 */
router.post('/:id/duplicate', controller.duplicate);
/**
 * @swagger
 * /api/v1/news/{id}/publish:
 *   patch:
 *     summary: Publier immédiatement une actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Actualité publiée avec succès
 *       404:
 *         description: Actualité introuvable
 */
router.patch('/:id/publish', controller.publish);
/**
 * @swagger
 * /api/v1/news/{id}/status:
 *   patch:
 *     summary: Changer le statut d'une actualité
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [draft, published, scheduled]
 *     responses:
 *       200:
 *         description: Statut mis à jour avec succès
 *       404:
 *         description: Actualité introuvable
 */
router.patch('/:id/status', controller.setStatus);
export default router;
