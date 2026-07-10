import { Router } from 'express';
import { TeamController } from './team.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateTeamMemberDto, UpdateTeamMemberDto } from './dto/team.dto';
const router = Router();
const controller = new TeamController();
/**
 * @swagger
 * tags:
 *   name: Team
 *   description: Gestion des membres de l'équipe APC
 */
/**
 * @swagger
 * /api/v1/team:
 *   get:
 *     summary: Récupérer tous les membres de l'équipe
 *     tags: [Team]
 *     responses:
 *       200:
 *         description: Liste des membres
 */
router.get('/', controller.findAll);
/**
 * @swagger
 * /api/v1/team/{id}:
 *   get:
 *     summary: Récupérer un membre par son ID
 *     tags: [Team]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails du membre
 */
router.get('/:id', controller.findOne);
// Routes administratives (Protégées)
router.use(authMiddleware);
// Écriture : ADMIN_RH seulement
router.post('/', authorize(UserRole.ADMIN_RH), validationMiddleware(CreateTeamMemberDto), controller.create);
/**
 * @swagger
 * /api/v1/team/{id}:
 *   put:
 *     summary: Mettre à jour un membre
 *     tags: [Team]
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
 *             $ref: '#/components/schemas/TeamMember'
 *     responses:
 *       200:
 *         description: Membre mis à jour
 */
router.put('/:id', authorize(UserRole.ADMIN_RH), validationMiddleware(UpdateTeamMemberDto), controller.update);
router.delete('/bulk', authorize(UserRole.ADMIN_RH), controller.bulkDelete);
router.delete('/:id', authorize(UserRole.ADMIN_RH), controller.remove);
router.patch('/:id/status', authorize(UserRole.ADMIN_RH), controller.setStatus);
export default router;
