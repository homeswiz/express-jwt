const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("../config");
const db = require("../models");
const UserModel = db.User;

class UserService {

    constructor() {}

    async SignUp(user) {
        await UserModel.create(user);
        return true;
    }

    async Login(userDto) {
        const user = await UserModel.findOne({
            where: {
                email: userDto.email,
                password: userDto.password
            }
        })

        let token;
        if(user) [
            jwt.sign({ id: user.id }, JWT_PRIVATE_KEY)
        ]

        return { token };
    }
}


module.exports = { UserService };