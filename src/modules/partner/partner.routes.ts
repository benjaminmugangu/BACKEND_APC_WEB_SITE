import { Router } from 'express';
import { PartnerController } from './partner.controller';
import { authMiddleware, optionalAuthMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/partner.dto';

const router = Router();
const controller = new PartnerController();

/**
 * @swagger
 * tags:
 *   name: Partners
 *   description: Gestion des partenaires et bailleurs de fonds de l'APC
 */

/**
 * @swagger
 * /api/v1/partners:
 *   get:
 *     summary: Récupérer tous les partenaires
 *     description: |
 *       Retourne la liste de tous les partenaires actifs. Si un administrateur est
 *       authentifié, il peut également voir les partenaires inactifs (isActive = false).
 *       Supporte le filtrage par type et la recherche textuelle.
 *     tags: [Partners]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [DONOR, TECHNICAL, LOCAL, STRATEGIC]
 *         description: Filtrer par type de partenariat
 *         example: DONOR
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Recherche textuelle sur le nom ou la description
 *         example: "UNICEF"
 *     responses:
 *       200:
 *         description: Liste des partenaires récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Liste des partenaires récupérée"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Partner'
 */
router.get('/', optionalAuthMiddleware, controller.findAll);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   get:
 *     summary: Récupérer un partenaire par son ID
 *     description: Retourne les détails complets d'un partenaire, incluant les infos de contact.
 *     tags: [Partners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Identifiant UUID du partenaire
 *         example: "a3f5c8d2-1234-5678-abcd-ef9012345678"
 *     responses:
 *       200:
 *         description: Détails du partenaire récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Partner'
 *       404:
 *         description: Partenaire introuvable
 */
router.get('/:id', controller.findOne);

// ── Routes Administratives (Authentification requise) ────────────────────────
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));

/**
 * @swagger
 * /api/v1/partners:
 *   post:
 *     summary: Créer un nouveau partenaire
 *     description: |
 *       Enregistre une nouvelle organisation partenaire dans la base de données.
 *       Requiert le rôle ADMIN. Le champ `logoUrl` doit contenir une URL Cloudinary
 *       obtenue via l'endpoint d'upload de médias.
 *     tags: [Partners]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Partner'
 *           example:
 *             name: "PAM — Programme Alimentaire Mondial"
 *             type: "DONOR"
 *             logoUrl: "https://res.cloudinary.com/demo/image/upload/v1/logos/wfp.png"
 *             websiteUrl: "https://www.wfp.org"
 *             description: "Le PAM est la principale organisation humanitaire au monde qui sauve des vies dans les situations d'urgence."
 *             contactName: "Jean Dupont"
 *             contactEmail: "j.dupont@wfp.org"
 *             contactPhone: "+243 812 345 678"
 *             totalFunding: 450000
 *             isActive: true
 *     responses:
 *       201:
 *         description: Partenaire créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Partenaire ajouté avec succès"
 *                 data:
 *                   $ref: '#/components/schemas/Partner'
 *       400:
 *         description: Données invalides (validation échouée)
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé (rôle ADMIN requis)
 */
router.post('/', validationMiddleware(CreatePartnerDto), controller.create);

/**
 * @swagger
 * /api/v1/partners/bulk:
 *   delete:
 *     summary: Supprimer plusieurs partenaires en une seule opération
 *     description: |
 *       Supprime définitivement plusieurs partenaires en une seule opération groupée.
 *       Requiert le rôle ADMIN. Cette action est irréversible.
 *     tags: [Partners]
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
 *                 description: Liste des identifiants UUID des partenaires à supprimer
 *           example:
 *             ids: ["uuid-1", "uuid-2"]
 *     responses:
 *       200:
 *         description: Partenaires supprimés avec succès
 *       400:
 *         description: Liste d'IDs invalide ou vide
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 */
router.delete('/bulk', controller.bulkDelete);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   put:
 *     summary: Mettre à jour un partenaire
 *     description: |
 *       Met à jour les informations d'un partenaire existant. Tous les champs sont
 *       optionnels — seuls les champs envoyés seront modifiés. Requiert le rôle ADMIN.
 *     tags: [Partners]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Identifiant UUID du partenaire à modifier
 *         example: "a3f5c8d2-1234-5678-abcd-ef9012345678"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Partner'
 *           example:
 *             isActive: false
 *     responses:
 *       200:
 *         description: Partenaire mis à jour avec succès
 *       404:
 *         description: Partenaire introuvable
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 */
router.put('/:id', validationMiddleware(UpdatePartnerDto), controller.update);

/**
 * @swagger
 * /api/v1/partners/{id}:
 *   delete:
 *     summary: Supprimer définitivement un partenaire
 *     description: |
 *       Supprime un partenaire et toutes ses informations associées de la base de données.
 *       Cette action est irréversible. Requiert le rôle ADMIN.
 *     tags: [Partners]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Identifiant UUID du partenaire à supprimer
 *         example: "a3f5c8d2-1234-5678-abcd-ef9012345678"
 *     responses:
 *       200:
 *         description: Partenaire supprimé avec succès
 *       404:
 *         description: Partenaire introuvable
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Non autorisé
 */
router.delete('/:id', controller.remove);

export default router;
