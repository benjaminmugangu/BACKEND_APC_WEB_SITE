import { DashboardService } from './dashboard.service';
import { ResponseUtil } from '@/common/utils/response.util';
export class DashboardController {
    service = new DashboardService();
    getStats = async (req, res, next) => {
        try {
            const role = req.user?.role;
            const stats = await this.service.getStats(role);
            return ResponseUtil.success(res, 'Statistiques du tableau de bord récupérées', stats);
        }
        catch (error) {
            next(error);
        }
    };
}
