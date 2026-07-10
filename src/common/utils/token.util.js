import jwt from 'jsonwebtoken';
import { jwtConfig } from '@/config/jwt.config';
export class TokenUtil {
    static generateAccessToken(payload) {
        return jwt.sign(payload, jwtConfig.accessSecret, {
            expiresIn: jwtConfig.accessExpiration,
        });
    }
    static generateRefreshToken(payload) {
        return jwt.sign(payload, jwtConfig.refreshSecret, {
            expiresIn: jwtConfig.refreshExpiration,
        });
    }
    static verifyRefreshToken(token) {
        return jwt.verify(token, jwtConfig.refreshSecret);
    }
}
