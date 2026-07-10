import jwt from 'jsonwebtoken';
import { jwtConfig } from '@/config/jwt.config';
import { ResponseUtil } from '@/common/utils/response.util';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return ResponseUtil.unauthorized(res, 'Token manquant ou format invalide');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwtConfig.accessSecret);
        req.user = {
            id: decoded.sub,
            email: decoded.email,
            role: decoded.role
        };
        next();
    }
    catch (error) {
        return ResponseUtil.unauthorized(res, 'Token invalide ou expiré');
    }
};
export const optionalAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next();
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwtConfig.accessSecret);
        req.user = {
            id: decoded.sub,
            email: decoded.email,
            role: decoded.role
        };
    }
    catch (error) {
        // Ignorer l'erreur pour l'auth facultative sur les routes publiques, ne pas renvoyer de 401
    }
    next();
};
