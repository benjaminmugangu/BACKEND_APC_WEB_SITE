import { Request, Response, NextFunction } from 'express';
import { SettingsService } from './settings.service';
import { ResponseUtil } from '@/common/utils/response.util';

export class SettingsController {
  private service = new SettingsService();

  getSettings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Désactiver le cache pour garantir que l'interface admin récupère toujours les données fraîches
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Surrogate-Control', 'no-store');
      
      const result = await this.service.getSettings();
      return ResponseUtil.success(res, 'Paramètres récupérés avec succès', result);
    } catch (error) {
      next(error);
    }
  };

  updateSettings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updateSettings(req.body);
      return ResponseUtil.success(res, 'Paramètres mis à jour avec succès', result);
    } catch (error) {
      next(error);
    }
  };
}
