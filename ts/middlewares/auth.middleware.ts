import express from 'express';
class Auth {
    private static instance: Auth;

    public static getInstance () { 
        return this.instance || (this.instance = new this());
    }

    validateToken(req: express.Request) {
        // jwt decode
    }
}

export default new Auth();