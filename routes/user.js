const express = require("express");
const { OauthService } = require("../service/oauth");
const { UserService } = require("../service/user");
const router = express.Router();

router.post("/signUp", async (req, res, next) => {
    try {
        const userDto = req.body;
        const result = await new UserService().SignUp(userDto);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const userDto = req.body;
        const result = await new UserService().Login(userDto);
        res.json(result);
    } catch (error) {
        next(error);
    }
})

/*
    카카오 
    - 로그인 이해하기 : https://developers.kakao.com/docs/latest/ko/kakaologin/common#login
    - 로그인 설정하기 : https://developers.kakao.com/docs/latest/ko/kakaologin/prerequisite

    네이버

    구글
*/
router.post("/oauth/signUp", async (req, res, next) => {
    try {
        const { 
            coperation, /* KAKAO || NAVER */
            code
        } = req.query;
        const Oauth = new OauthService(coperation, code);

        const option = await Oauth.getOption(coperation);
        const { accessToken, refreshToken } = await Oauth.getAccessToken(coperation, option);
        Oauth.setAccesToken(accessToken);
        Oauth.setRefreshToken(refreshToken);
        
        const userInfo = await Oauth.getUserInfo(coperation, option);
        const userDto = {
            // Todo
            email: userInfo.email,
            name: userInfo.name,
            password: userInfo.password
        }
        const userToken = await new UserService().SignUp(userDto);

        res.json(userToken);
    } catch (error) {
        next(error);
    }
})

router.post("/oauth/login", async (req, res, next) => {
    try {
        const result = await new UserService().OauthLogin();
        res.json(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;