import express from "express";
import * as http from "http";
import cors from "cors";
import debug from "debug";
import { RouteConfig } from './config/routesConfig';
import { UserRoute } from './routes/user.route';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 4000;
const debugLog: debug.IDebugger = debug('app');
const routes: Array<RouteConfig> = [];

app.use(express.json());
app.use(cors());

routes.push(new UserRoute(app));

app.get("/", (req: express.Request, res: express.Response,) => {
    res.status(200).send(`running on port : ${port}`)
})

server.listen(port, () => {
    routes.forEach((route: RouteConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
})