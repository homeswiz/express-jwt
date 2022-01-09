const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("../config");
const db = require("../models");
const { Kakao, Naver, Google } = require("../util/oauth");

class OauthService {

    constructor(COPERATION, CODE) {
        /*
            KAKAO_CODE,
            NAVER_CODE
        */
        this[`${COPERATION}_CODE`] = CODE;
        this.accessToken = null;
        this.refreshToken = null;
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
            case "NAVER":
                /*
                    참고 : https://developers.naver.com/docs/login/devguide/devguide.md#:~:text=%EB%B0%98%ED%99%98%EB%B0%9B%EB%8A%94%20%EC%97%90%EB%9F%AC%20%EB%A9%94%EC%8B%9C%EC%A7%80-,3.4.4%20%EC%A0%91%EA%B7%BC%20%ED%86%A0%ED%81%B0%20%EB%B0%9C%EA%B8%89%20%EC%9A%94%EC%B2%AD,-Callback%EC%9C%BC%EB%A1%9C%20%EC%A0%84%EB%8B%AC%EB%B0%9B%EC%9D%80
                */
                accessToken = await axios({
                    method: "POST",
                    url: `${option.accessTokenGenerateUrl}?grant_type=authorization_code&client_id=${option.clientId}&client_secret=${option.clientSecret}&code=${option.code}&state=NAVER_AUTHORIZATION`,
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

    async setAccesToken(accessToken) {
        this.accessToken = accessToken
    }

    async setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken
    }
}


module.exports = { OauthService };