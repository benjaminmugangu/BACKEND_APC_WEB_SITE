import { Router } from 'express';
import { CareerTypeController } from './career-type.controller';
import { authMiddleware } from '@/middleware/auth/auth.middleware';
import { authorize } from '@/middleware/auth/roles.middleware';
import { validationMiddleware } from '@/middleware/validation/validation.middleware';
import { UserRole } from '@/common/enums/role.enum';
import { CreateCareerTypeDto, UpdateCareerTypeDto } from './dto/career-type.dto';
const router = Router();
const controller = new CareerTypeController();
/**
 * @swagger
 * tags:
 *   - name: CareerTypes
 *     description: Gestion des types de contrat (CDI, CDD, etc.)
 */
// Lecture publique (types actifs uniquement)
router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
// Routes administratives (Protégées)
router.use(authMiddleware);
// Lecture : accessible aux deux rôles (tous les types, y compris inactifs)
router.get('/admin/all', authorize(UserRole.ADMIN, UserRole.ADMIN_RH), controller.findAll);
// Écriture : ADMIN_RH seulement
router.post('/', authorize(UserRole.ADMIN_RH), validationMiddleware(CreateCareerTypeDto), controller.create);
router.put('/:id', authorize(UserRole.ADMIN_RH), validationMiddleware(UpdateCareerTypeDto), controller.update);
router.patch('/:id/toggle', authorize(UserRole.ADMIN_RH), controller.toggleStatus);
router.delete('/:id', authorize(UserRole.ADMIN_RH), controller.remove);
export default router;
