const { 
    KAKAO_ACCESS_TOKEN_GENERATE_URL,
    KAKAO_USER_INFO_URL,
    KAKAO_CLIENT_ID, 
    KAKAO_CLIENT_SECRET ,
    KAKAO_REDIRECT_URI
} = require("../config");

class Kakao {
    constructor (code) {
        this.accessTokenGenerateUrl = KAKAO_ACCESS_TOKEN_GENERATE_URL;
        this.userInfoUrl = KAKAO_USER_INFO_URL;
        this.clientId = KAKAO_CLIENT_ID;
        this.clientSecret = KAKAO_CLIENT_SECRET;
        this.redirectUri = KAKAO_REDIRECT_URI;
        this.code = code;
    }
}

class Naver {
    constructor () {}
}

class Google {
    constructor () {}
}

module.exports = { Kakao, Naver, Google }