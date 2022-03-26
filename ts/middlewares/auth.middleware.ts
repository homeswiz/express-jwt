import express from 'express';
class Auth {
    private static instance: Auth;

    public static getInstance () { 
        return this.instance || (this.instance = new this());
    }

    validate(req: express.Request) {
        // jwt decode
    }
}

export default new Auth();