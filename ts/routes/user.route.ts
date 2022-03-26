import express from "express";
import { RouteConfig } from '../config/routesConfig';
import userController from "../controllers/user.controller";
import auth from "../middlewares/auth.middleware";

export class UserRoute extends RouteConfig {

    constructor(app: express.Application) {
        super(app, "UserRoute")
    }

    configureRoute(): express.Application {
        this.app
            .route("/login")
            .post(
                userController.login
            );
        
        this.app
            .route("/accessToken")
            .post(
                auth.validateToken,
                userController.generateAccessToken
            );
        

        return this.app;
    }
    
}