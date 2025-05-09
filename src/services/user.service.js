var userModel = require("../models/user.model");

class UserService {
    constructor() {
        this.users = [];
        this.currentId = 1;
    }

    generateId() {
        return this.currentId++;
    }

    create(userData) {
        const id = this.generateId();
        const user = new userModel({ id, ...userData });
        this.users.push(user);
        return user;
    }

    findAll() {
        return this.users;
    }

    findById(id) {
        return this.users.find(user => user.id === id);
    }
    
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    deleteById(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }

    clear() {
        this.users = [];
        this.currentId = 1;
    }
}

const userService = new UserService();
module.exports = userService;