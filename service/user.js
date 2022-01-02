const jwt = require("jsonwebtoken");
const db = require("../models");
const UserModel = db.User;

class UserService {

    constructor() {}

    async SignUp(user) {
        await UserModel.create(user);
        return true;
    }

    async Login(user) {
        const user = await UserModel.findOne({
            where: {
                email: user.email,
                password: user.password
            }
        })

        let token;
        if(user) [
            jwt.sign({ id: user.id }, )
        ]

        return { token };
    }
}


module.exports = { UserService };