import { Router } from 'express';
import { MessageSubjectService } from './message-subject.service';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { CreateMessageSubjectDto, UpdateMessageSubjectDto } from './dto/message-subject.dto';
import { ResponseUtil } from '@/common/utils/response.util';

const router = Router();
const service = new MessageSubjectService();

/**
 * @swagger
 * tags:
 *   name: Message Subjects
 *   description: Gestion des sujets de messages de contact
 */

/**
 * @swagger
 * /api/v1/message-subjects:
 *   get:
 *     summary: Récupérer tous les sujets de contact (actifs uniquement en public)
 *     tags: [Message Subjects]
 *     parameters:
 *       - in: query
 *         name: all
 *         schema:
 *           type: boolean
 *         description: Si true et authentifié Admin, retourne aussi les inactifs
 *     responses:
 *       200:
 *         description: Liste des sujets
 */
router.get('/', async (req, res, next) => {
  try {
    const subjects = await service.findAll(true); // public = actifs seulement
    return ResponseUtil.success(res, 'Liste des sujets récupérée', subjects);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/v1/message-subjects/{id}:
 *   get:
 *     summary: Récupérer un sujet par ID
 *     tags: [Message Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails du sujet
 *       404:
 *         description: Sujet non trouvé
 */
router.get('/:id', async (req, res, next) => {
  try {
    const subject = await service.findOne(req.params.id);
    return ResponseUtil.success(res, 'Sujet récupéré', subject);
  } catch (err) {
    next(err);
  }
});

// ─── Routes protégées (Admin Tech uniquement) ──────────────────────────────
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN));

/**
 * @swagger
 * /api/v1/message-subjects/admin/all:
 *   get:
 *     summary: Récupérer tous les sujets (actifs + inactifs) — Admin seulement
 *     tags: [Message Subjects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste complète des sujets
 */
router.get('/admin/all', async (req, res, next) => {
  try {
    const subjects = await service.findAll(false);
    return ResponseUtil.success(res, 'Liste complète des sujets récupérée', subjects);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/v1/message-subjects:
 *   post:
 *     summary: Créer un nouveau sujet de contact
 *     tags: [Message Subjects]
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
 *             properties:
 *               name:
 *                 type: string
 *               nameEn:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               order:
 *                 type: number
 *     responses:
 *       201:
 *         description: Sujet créé
 *       409:
 *         description: Un sujet avec ce nom existe déjà
 */
router.post(
  '/',
  validationMiddleware(CreateMessageSubjectDto),
  async (req, res, next) => {
    try {
      const subject = await service.create(req.body);
      return ResponseUtil.created(res, 'Sujet créé avec succès', subject);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @swagger
 * /api/v1/message-subjects/{id}:
 *   put:
 *     summary: Mettre à jour un sujet de contact
 *     tags: [Message Subjects]
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
 *         description: Sujet mis à jour
 */
router.put(
  '/:id',
  validationMiddleware(UpdateMessageSubjectDto),
  async (req, res, next) => {
    try {
      const subject = await service.update(req.params.id as string, req.body);
      return ResponseUtil.success(res, 'Sujet mis à jour', subject);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @swagger
 * /api/v1/message-subjects/{id}/toggle:
 *   patch:
 *     summary: Activer/désactiver un sujet
 *     tags: [Message Subjects]
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
 *         description: Statut modifié
 */
router.patch('/:id/toggle', async (req, res, next) => {
  try {
    const subject = await service.toggleActive(req.params.id);
    return ResponseUtil.success(res, 'Statut du sujet modifié', subject);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/v1/message-subjects/{id}:
 *   delete:
 *     summary: Supprimer un sujet de contact
 *     tags: [Message Subjects]
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
 *         description: Sujet supprimé
 */
router.delete('/:id', async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    return ResponseUtil.success(res, 'Sujet supprimé avec succès');
  } catch (err) {
    next(err);
  }
});

export default router;
