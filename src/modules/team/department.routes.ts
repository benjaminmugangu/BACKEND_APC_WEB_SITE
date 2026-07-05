import { Router } from 'express';
import { DepartmentService } from './department.service';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { ResponseUtil } from '@/common/utils/response.util';

const router = Router();
const service = new DepartmentService();

/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Gestion des départements de l'équipe APC
 */

/**
 * @swagger
 * /api/v1/departments:
 *   get:
 *     summary: Récupérer tous les départements actifs (public)
 *     tags: [Departments]
 *     responses:
 *       200:
 *         description: Liste des départements
 */
router.get('/', async (req, res, next) => {
  try {
    const departments = await service.findAll(true);
    return ResponseUtil.success(res, 'Liste des départements actifs récupérée', departments);
  } catch (err) {
    next(err);
  }
});

// ─── Routes protégées (ADMIN_RH ou ADMIN) ──────────────────────────────

// Récupérer tous les départements (y compris inactifs) pour l'admin
router.get('/admin/all', authMiddleware, authorize(UserRole.ADMIN, UserRole.ADMIN_RH), async (req, res, next) => {
  try {
    const departments = await service.findAll(false);
    return ResponseUtil.success(res, 'Liste complète des départements récupérée', departments);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const department = await service.findOne(req.params.id as string);
    return ResponseUtil.success(res, 'Détails du département récupérés', department);
  } catch (err) {
    next(err);
  }
});

// ─── Middleware auth pour l'écriture (ADMIN_RH uniquement) ─────────────────────────────
router.use(authMiddleware);
router.use(authorize(UserRole.ADMIN_RH));

router.post(
  '/',
  validationMiddleware(CreateDepartmentDto),
  async (req, res, next) => {
    try {
      const department = await service.create(req.body);
      return ResponseUtil.created(res, 'Département créé avec succès', department);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  '/:id',
  validationMiddleware(UpdateDepartmentDto),
  async (req, res, next) => {
    try {
      const department = await service.update(req.params.id as string, req.body);
      return ResponseUtil.success(res, 'Département mis à jour', department);
    } catch (err) {
      next(err);
    }
  }
);

router.patch('/:id/toggle', async (req, res, next) => {
  try {
    const department = await service.toggleActive(req.params.id as string);
    return ResponseUtil.success(res, 'Statut du département modifié', department);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await service.remove(req.params.id as string);
    return ResponseUtil.success(res, 'Département supprimé avec succès');
  } catch (err) {
    next(err);
  }
});

export default router;
