import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ResponseUtil } from '@/common/utils/response.util';
export const validationMiddleware = (type, value = 'body') => {
    return (req, res, next) => {
        const input = plainToInstance(type, req[value]);
        validate(input, { whitelist: true, forbidNonWhitelisted: false }).then((errors) => {
            if (errors.length > 0) {
                const errorMessages = errors.map((error) => ({
                    property: error.property,
                    constraints: Object.values(error.constraints || {})
                }));
                return ResponseUtil.badRequest(res, 'Erreur de validation', errorMessages);
            }
            else {
                req[value] = input;
                next();
            }
        });
    };
};
