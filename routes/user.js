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

router.post("/oauth/signUp", async (req, res, next) => {
    try {
        const { coperation } = req.query;
        const Oauth = new OauthService();

        const option = Oauth.getOption(coperation);
        const accessToken = await Oauth.getAccessToken(option)
        const userInfo = await Oauth.getUserInfo(accessToken);
        const userDto = {
            // Todo
            email: userInfo.email,
            name: userInfo.name,
            password: userInfo.password
        }
        const result = await new UserService().SignUp(userDto);

        res.json(result);
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