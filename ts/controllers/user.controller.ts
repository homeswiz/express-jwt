import express from "express";
import debug from 'debug';
import userService from "../services/user.service";

class UsersController {
    async login(req: express.Request, res: express.Response) {
        const { email, password } = req.body;
        const user = userService.login(email, password);

        if(user) res.status(200).send(user);
        else res.status(401).send();
    }

    async generateAccessToken(req: express.Request, res: express.Response) {
        const { accessToken, refreshToken } = req.body;
        //check refreshToken

        //generate accessToken

        //send refreshToken & accessToken
    }
}

export default new UsersController();