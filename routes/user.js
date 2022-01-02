const express = require("express");
const { UserService } = require("../service/user");
const router = express.Router();

router.post("/signUp", async (req, res, next) => {
    try {
        // const userDto = req.body;
        // const result = await new UserService().SignUp(userDto);
        // res.send(result)

        res.send(true)
    } catch (error) {
        console.error(error);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const userDto = req.body;
        const result = await new UserService().Login(userDto);
        res.send(result);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;