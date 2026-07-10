export class ResponseUtil {
    static success(res, message, data = null, meta = null, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
            meta
        });
    }
    static error(res, message, statusCode = 500, errors = []) {
        return res.status(statusCode).json({
            success: false,
            message,
            errors
        });
    }
    // Helpers pour les cas courants
    static created(res, message, data = null) {
        return this.success(res, message, data, null, 201);
    }
    static unauthorized(res, message = 'Non autorisé') {
        return this.error(res, message, 401);
    }
    static forbidden(res, message = 'Accès interdit') {
        return this.error(res, message, 403);
    }
    static notFound(res, message = 'Ressource non trouvée') {
        return this.error(res, message, 404);
    }
    static badRequest(res, message, errors = []) {
        return this.error(res, message, 400, errors);
    }
}
