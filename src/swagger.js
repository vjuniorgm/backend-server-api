// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API PARA USERS',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia según tu entorno
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Archivos donde están los comentarios Swagger
};

const swaggerSpec = swaggerJsDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
