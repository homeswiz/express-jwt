const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("../config");
const db = require("../models");
const { Kakao, Naver, Google } = require("../util/oauth");
const UserModel = db.User;

class OauthService {

    constructor() {}

    async getOption(coperation) {
        switch (copertaion) {
            case "KAKAO":
                return new Kakao();
                break;
            case "NAVER":
                return new Naver();
                break;
            case "GOOGLE":
                return new Google();
                break;
            default:
                return false;
                break;
        }
    }

    async getAccessToken(option) {}

    async getUserInfo(coperation, accessToken) {}
}


module.exports = { OauthService };