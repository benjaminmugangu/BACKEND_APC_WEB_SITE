import { Request, Response, NextFunction } from 'express';
import { DashboardService } from './dashboard.service';
import { ResponseUtil } from '@/common/utils/response.util';
import { UserRole } from '@/common/enums/role.enum';

export class DashboardController {
  private service = new DashboardService();

  getStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const role = (req as any).user?.role as UserRole;
      const stats = await this.service.getStats(role);
      return ResponseUtil.success(res, 'Statistiques du tableau de bord récupérées', stats);
    } catch (error) {
      next(error);
    }
  };
}
