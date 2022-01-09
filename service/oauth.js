const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("../config");
const db = require("../models");
const { Kakao, Naver, Google } = require("../util/oauth");

class OauthService {

    constructor(COPERATION, CODE) {
        this.KAKAO_CODE = COPERATION === "KAKAO" ? CODE : null;
    }

    async getOption(coperation) {
        switch (coperation) {
            case "KAKAO":
                return new Kakao(this.KAKAO_CODE);
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

    async getAccessToken(coperation, option) {
        let accessToken;
        switch (coperation) {
            case "KAKAO":
                accessToken = await axios({
                    method: "POST",
                    url: option.accessTokenGenerateUrl,
                    headers: {
                        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    data: {
                        grant_type: "KAKAO_AUTHORIZATION",
                        client_id: option.clientId,
                        redirect_uri: option.redirectUri,
                        code: option.code,
                        client_secret: option.clientSecret
                    }  
                })
                break;
        
            default:
                break;
        }

        return accessToken;
    }

    async getUserInfo(coperation, option) {
        let userInfo = {
            email: null,
            name: null
        };
        switch (copertation) {
            case "KAKAO":
                const kakaUserInfo = await axios({
                    method: "GET",
                    url: option.userInfoUrl,
                    headers: {
                        'Authorization': `Bearer ${option.accessToken}`,
                        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                    }
                })
                
                userInfo.email = kakaUserInfo.kakao_account.email
                userInfo.name = kakaUserInfo.kakao_account.nickname
                
                break;
            default:
                break;
        }

        return userInfo;
    }
}


module.exports = { OauthService };