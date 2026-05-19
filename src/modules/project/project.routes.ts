import { Router } from 'express';
import { ProjectController } from './project.controller';
import { authMiddleware, optionalAuthMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

const router = Router();
const controller = new ProjectController();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Gestion des projets humanitaires et de développement de l'APC
 */

// ─── PUBLIC ROUTES (avec support aperçu admin via optionalAuth) ─────────────

/**
 * @swagger
 * /api/v1/projects:
 *   get:
 *     summary: Lister tous les projets
 *     description: >
 *       Retourne les projets publiés et visibles pour le public.
 *       Les administrateurs authentifiés voient également les brouillons et les projets archivés.
 *     tags: [Projects]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *         description: Numéro de page
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *         description: Nombre de résultats par page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [draft, published, archived]
 *         description: Filtrer par statut (admin uniquement)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [agriculture, protection, dignite, paix]
 *         description: Filtrer par catégorie
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *         description: Recherche dans le titre et la description
 *     responses:
 *       200:
 *         description: Liste des projets récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 message: { type: string }
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Project'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total: { type: integer }
 *                     page: { type: integer }
 *                     perPage: { type: integer }
 *                     totalPages: { type: integer }
 */
router.get('/', optionalAuthMiddleware, controller.findAll);

/**
 * @swagger
 * /api/v1/projects/slug/{slug}:
 *   get:
 *     summary: Récupérer un projet par son slug
 *     description: Utilisé par les pages publiques. Retourne uniquement les projets publiés (sauf admin).
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema: { type: string }
 *         example: "soutien-agriculture-durable-rutshuru"
 *     responses:
 *       200:
 *         description: Détails du projet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Projet introuvable
 */
router.get('/slug/:slug', optionalAuthMiddleware, controller.findBySlug);

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   get:
 *     summary: Récupérer un projet par son ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *         example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *     responses:
 *       200:
 *         description: Détails du projet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Projet introuvable
 */
router.get('/:id', controller.findOne);

// ─── ADMIN ROUTES (authentification requise) ─────────────────────────────────
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));

/**
 * @swagger
 * /api/v1/projects:
 *   post:
 *     summary: Créer un nouveau projet
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, slug, description, category]
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Soutien à l'Agriculture Durable à Rutshuru"
 *               slug:
 *                 type: string
 *                 example: "soutien-agriculture-durable-rutshuru"
 *               description:
 *                 type: string
 *                 example: "Court résumé du projet."
 *               content:
 *                 type: string
 *                 example: "<p>Contenu détaillé HTML...</p>"
 *               category:
 *                 type: string
 *                 enum: [agriculture, protection, dignite, paix]
 *               status:
 *                 type: string
 *                 enum: [draft, published, archived]
 *                 default: draft
 *               budget:
 *                 type: number
 *                 example: 350000
 *               currency:
 *                 type: string
 *                 example: "USD"
 *               location:
 *                 type: string
 *                 example: "Rutshuru, Nord-Kivu"
 *               province:
 *                 type: string
 *                 example: "Nord-Kivu"
 *               beneficiaries:
 *                 type: integer
 *                 example: 2500
 *               startDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-15"
 *               endDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-31"
 *               mainImage:
 *                 type: string
 *                 example: "https://res.cloudinary.com/apc/image/upload/v1/projects/rutshuru.jpg"
 *               gallery:
 *                 type: array
 *                 items: { type: string }
 *               featured:
 *                 type: boolean
 *               showOnHome:
 *                 type: boolean
 *               needsDonation:
 *                 type: boolean
 *               isVisible:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Projet créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       409:
 *         description: Un projet avec ce slug existe déjà
 */
router.post('/', validationMiddleware(CreateProjectDto), controller.create);

/**
 * @swagger
 * /api/v1/projects/bulk:
 *   delete:
 *     summary: Supprimer plusieurs projets
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ids]
 *             properties:
 *               ids:
 *                 type: array
 *                 items: { type: string, format: uuid }
 *                 example: ["a1b2c3d4-...", "b2c3d4e5-..."]
 *     responses:
 *       200:
 *         description: Projets supprimés avec succès
 */
router.delete('/bulk', controller.bulkDelete);

/**
 * @swagger
 * /api/v1/projects/bulk-status:
 *   patch:
 *     summary: Changer le statut de plusieurs projets en lot
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ids, status]
 *             properties:
 *               ids:
 *                 type: array
 *                 items: { type: string, format: uuid }
 *               status:
 *                 type: string
 *                 enum: [draft, published, archived]
 *     responses:
 *       200:
 *         description: Statuts mis à jour avec succès
 */
router.patch('/bulk-status', controller.bulkSetStatus);

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   put:
 *     summary: Mettre à jour un projet
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Projet mis à jour avec succès
 *       404:
 *         description: Projet introuvable
 */
router.put('/:id', validationMiddleware(UpdateProjectDto), controller.update);

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   delete:
 *     summary: Supprimer un projet
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Projet supprimé avec succès
 *       404:
 *         description: Projet introuvable
 */
router.delete('/:id', controller.remove);

/**
 * @swagger
 * /api/v1/projects/{id}/duplicate:
 *   post:
 *     summary: Dupliquer un projet existant
 *     description: Crée une copie du projet avec le statut brouillon et un nouveau slug unique.
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Copie du projet créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 */
router.post('/:id/duplicate', controller.duplicate);

/**
 * @swagger
 * /api/v1/projects/{id}/publish:
 *   patch:
 *     summary: Publier un projet (draft → published)
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Projet publié avec succès
 */
router.patch('/:id/publish', controller.publish);

/**
 * @swagger
 * /api/v1/projects/{id}/unpublish:
 *   patch:
 *     summary: Dépublier un projet (published → draft)
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Projet dépublié avec succès
 */
router.patch('/:id/unpublish', controller.unpublish);

/**
 * @swagger
 * /api/v1/projects/{id}/archive:
 *   patch:
 *     summary: Archiver un projet
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Projet archivé avec succès
 */
router.patch('/:id/archive', controller.archive);

/**
 * @swagger
 * /api/v1/projects/{id}/status:
 *   patch:
 *     summary: Changer le statut d'un projet (générique)
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [draft, published, archived]
 *                 example: "published"
 *     responses:
 *       200:
 *         description: Statut mis à jour avec succès
 */
router.patch('/:id/status', controller.setStatus);

export default router;
