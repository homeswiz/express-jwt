const express = require("express");
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
        const reuslt = await new UserService().OauthSignUp();
        res.json(reuslt);
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