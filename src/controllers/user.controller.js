var userService = require("../services/user.service");

var userController = {
    createUser: function (req, res) {
        const userBody = req.body;
        const newUser = userService.create({
            name: userBody.name,
            email: userBody.email,
            type: userBody.type,
            password: userBody.password
        })
        return res.status(200).send(newUser);
    },

    listUser: function (req, res) {
        const userList = userService.findAll();
        return res.status(200).send(userList);
    },

    clearUser: function () {
        userService.clear();
    },
    UpdateUser: function (req, res) {
        const userId = parseInt(req.params.id);        
        const userBody = req.body;
        const updatedUser = userService.updateById(userId, {
            name: userBody.name,
            email: userBody.email,
            type: userBody.type,
            password: userBody.password
        })
        if (updatedUser) {
            return res.status(200).send(updatedUser);
        } else {
            return res.status(404).send({ message: "Usuario no encontrado" }); 
        }

    },

    deleteUser: function (req, res) {
        const userId = parseInt(req.params.id); 
        const deletedUser = userService.deleteById(userId); 
        if (deletedUser) {
            return res.status(200).send({ message: "Usuario eliminado exitosamente", user: deletedUser });
        } else {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }
    }
    
}

module.exports = userController;