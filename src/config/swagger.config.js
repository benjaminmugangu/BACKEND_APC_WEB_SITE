import swaggerJsdoc from 'swagger-jsdoc';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'APC Agri-Peace and Child API',
            version: '1.0.0',
            description: 'Documentation complète du backend modulaire de l\'APC (Propre & Confiance Architecture)',
            contact: {
                name: 'Equipe Technique APC',
            },
        },
        servers: [
            {
                url: process.env.API_URL || '/',
                description: 'Serveur de l\'API',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/modules/**/*.ts', './src/entities/*.ts'], // Analyse des annotations dans les modules
};
export const swaggerSpec = swaggerJsdoc(options);
