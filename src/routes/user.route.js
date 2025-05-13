const { Router } = require("express");

const routes = Router();

var userController = require("../controllers/user.controller");

routes.post("/", userController.createUser);
routes.get("/", userController.listUser);
routes.put("/:id", userController.UpdateUser);
routes.delete("/:id", userController.deleteUser); 
module.exports = routes;