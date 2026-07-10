import { Router } from 'express';
import { ContactController } from './contact.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateMessageDto, UpdateMessageStatusDto } from './dto/contact.dto';
const router = Router();
const controller = new ContactController();
/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Gestion des messages de contact, demandes de partenariats, dons et réponses administratives (Module Contact)
 */
/**
 * @swagger
 * /api/v1/contact:
 *   post:
 *     summary: Soumettre un nouveau message de contact (Public)
 *     description: Permet aux visiteurs publics de soumettre un formulaire de contact, une demande de partenariat ou de don.
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sender
 *               - email
 *               - subject
 *               - content
 *             properties:
 *               sender:
 *                 type: string
 *                 example: "Jean Dupont"
 *                 description: Nom et prénom de l'expéditeur
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "jean.dupont@gmail.com"
 *                 description: Adresse email de contact
 *               phone:
 *                 type: string
 *                 example: "+243972581216"
 *                 description: Numéro de téléphone (facultatif)
 *               subject:
 *                 type: string
 *                 example: "Demande de Partenariat Agricole"
 *                 description: Sujet ou objet du message
 *               content:
 *                 type: string
 *                 example: "Bonjour, nous aimerions collaborer avec l'APC sur vos projets d'autonomisation agricole au Kivu."
 *                 description: Contenu détaillé du message
 *               type:
 *                 type: string
 *                 enum: [contact, partnership, donation, other]
 *                 example: "partnership"
 *                 description: Catégorie thématique de la demande
 *     responses:
 *       201:
 *         description: Message créé et transmis avec succès
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
 *                   example: "Message envoyé avec succès"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     sender:
 *                       type: string
 *                       example: "Jean Dupont"
 *                     email:
 *                       type: string
 *                       example: "jean.dupont@gmail.com"
 *                     phone:
 *                       type: string
 *                       example: "+243972581216"
 *                     subject:
 *                       type: string
 *                       example: "Demande de Partenariat Agricole"
 *                     content:
 *                       type: string
 *                       example: "Bonjour, nous aimerions collaborer avec l'APC..."
 *                     type:
 *                       type: string
 *                       example: "partnership"
 *                     status:
 *                       type: string
 *                       example: "unread"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-05-18T15:12:00.000Z"
 *       400:
 *         description: Payload invalide ou champs obligatoires manquants
 */
router.post('/', validationMiddleware(CreateMessageDto), controller.create);
// ── ROUTES ADMINISTRATIVES (PROTÉGÉES PAR JWT & RÔLE ADMIN) ──
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN, UserRole.ADMIN_RH));
/**
 * @swagger
 * /api/v1/contact:
 *   get:
 *     summary: Récupérer la liste paginée et filtrée des messages (Admin)
 *     description: Permet aux administrateurs de consulter l'ensemble des messages avec tri antéchronologique, recherche textuelle et filtrage multicritère.
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Numéro de la page à retourner
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Nombre d'éléments par page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [unread, read, replied, archived]
 *         description: Filtrer par statut de lecture/réponse
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [contact, partnership, donation, other]
 *         description: Filtrer par type ou nature de demande
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Recherche textuelle floue (sur l'expéditeur, l'email ou le sujet)
 *     responses:
 *       200:
 *         description: Liste des messages récupérée avec métadonnées
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
 *                   example: "Liste des messages récupérée"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       sender:
 *                         type: string
 *                       email:
 *                         type: string
 *                       subject:
 *                         type: string
 *                       status:
 *                         type: string
 *                         enum: [unread, read, replied, archived]
 *                       createdAt:
 *                         type: string
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       example: 12
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 20
 *                     totalPages:
 *                       type: integer
 *                       example: 1
 */
router.get('/', controller.findAll);
/**
 * @swagger
 * /api/v1/contact/unread-count:
 *   get:
 *     summary: Obtenir le compteur global des messages non lus (Admin)
 *     description: Permet d'afficher un indicateur visuel (badge) dans le menu d'administration avec le nombre de nouveaux messages.
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Compteur récupéré avec succès
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
 *                   example: "Nombre de messages non lus récupéré"
 *                 data:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: integer
 *                       example: 5
 */
router.get('/unread-count', controller.getUnreadCount);
/**
 * @swagger
 * /api/v1/contact/{id}:
 *   get:
 *     summary: Consulter les détails d'un message spécifique (Admin)
 *     description: Récupère la totalité des informations d'un message, y compris le contenu et les réponses éventuelles.
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID unique du message
 *     responses:
 *       200:
 *         description: Détails complets du message
 *       404:
 *         description: Message introuvable
 */
router.get('/:id', controller.findOne);
/**
 * @swagger
 * /api/v1/contact/{id}/status:
 *   patch:
 *     summary: Mettre à jour le statut d'un message (Admin)
 *     description: Permet de classer manuellement un message comme lu, non lu ou archivé.
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID unique du message
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
 *                 enum: [unread, read, replied, archived]
 *                 example: "archived"
 *     responses:
 *       200:
 *         description: Statut du message modifié avec succès
 */
router.patch('/:id/status', authorize(UserRole.ADMIN), validationMiddleware(UpdateMessageStatusDto), controller.setStatus);
/**
 * @swagger
 * /api/v1/contact/{id}/read:
 *   patch:
 *     summary: Marquer rapidement un message comme lu (Admin)
 *     description: Raccourci direct pour passer le statut d'un message à "read".
 *     tags: [Messages]
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
 *         description: Message marqué comme lu
 */
router.patch('/:id/read', authorize(UserRole.ADMIN), controller.markAsRead);
/**
 * @swagger
 * /api/v1/contact/{id}/reply:
 *   post:
 *     summary: Répondre par e-mail et enregistrer la réponse (Admin)
 *     description: Permet à l'administrateur de consigner la réponse apportée au message de contact.
 *     tags: [Messages]
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
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Bonjour Jean, merci pour votre sollicitation. Notre équipe de partenariats reviendra vers vous ce mercredi avec les documents requis."
 *     responses:
 *       200:
 *         description: Réponse enregistrée avec succès, statut mis à jour à 'replied'
 */
router.post('/:id/reply', authorize(UserRole.ADMIN), controller.reply);
/**
 * @swagger
 * /api/v1/contact/bulk:
 *   delete:
 *     summary: Supprimer en masse plusieurs messages (Admin)
 *     description: Permet le nettoyage rapide de la messagerie en fournissant un tableau d'identifiants de messages à supprimer.
 *     tags: [Messages]
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
 *                 example: ["123e4567-e89b-12d3-a456-426614174000", "890e4567-e89b-12d3-a456-426614174111"]
 *     responses:
 *       200:
 *         description: Messages supprimés de la base de données avec succès
 */
router.delete('/bulk', authorize(UserRole.ADMIN), controller.bulkDelete);
/**
 * @swagger
 * /api/v1/contact/{id}:
 *   delete:
 *     summary: Supprimer définitivement un message spécifique (Admin)
 *     tags: [Messages]
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
 *         description: Message supprimé de la base de données avec succès
 */
router.delete('/:id', authorize(UserRole.ADMIN), controller.remove);
export default router;
