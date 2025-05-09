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
    }
}

module.exports = userController;