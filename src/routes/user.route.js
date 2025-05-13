const { Router } = require("express");

const routes = Router();

var userController = require("../controllers/user.controller");

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
routes.post("/", userController.createUser);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
routes.get("/", userController.listUser);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 */
routes.put("/:id", userController.UpdateUser);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 */
routes.delete("/:id", userController.deleteUser); 
module.exports = routes;