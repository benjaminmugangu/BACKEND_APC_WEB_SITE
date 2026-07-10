import { ResponseUtil } from '@/common/utils/response.util';
export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return ResponseUtil.unauthorized(res);
        }
        if (!allowedRoles.includes(req.user.role)) {
            return ResponseUtil.forbidden(res, "Vous n'avez pas les permissions nécessaires pour cette action");
        }
        next();
    };
};
