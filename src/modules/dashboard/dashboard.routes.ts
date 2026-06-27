import { Router } from 'express';
import { DashboardController } from './dashboard.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { UserRole } from '@/common/enums/role.enum';

const router = Router();
const controller = new DashboardController();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Statistiques agrégées du tableau de bord administrateur
 */

/**
 * @swagger
 * /api/v1/stats/dashboard:
 *   get:
 *     summary: Récupérer les statistiques du tableau de bord
 *     description: |
 *       Retourne les métriques agrégées adaptées au rôle de l'utilisateur connecté.
 *       - **ADMIN** : reçoit toutes les statistiques (projets, actualités, messages, services + données RH).
 *       - **ADMIN_RH** : reçoit uniquement les statistiques RH (emplois, équipe, appels d'offres).
 *     tags: [Dashboard]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
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
 *                   type: object
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Accès refusé
 */
router.get(
  '/',
  authMiddleware,
  authorize(UserRole.ADMIN, UserRole.ADMIN_RH),
  controller.getStats
);

export default router;
