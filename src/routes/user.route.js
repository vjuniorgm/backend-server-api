const { Router } = require("express");

const routes = Router();

var userController = require("../controllers/user.controller");

routes.post("/", userController.createUser);
routes.get("/", userController.listUser);

module.exports = routes;