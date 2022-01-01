const db = require("../models");
const UserModel = db.User;

class UserService {

    constructor() {}

    async SignUp(user) {
        await UserModel.create(user);
        return true;
    }
}


module.exports = { UserService };