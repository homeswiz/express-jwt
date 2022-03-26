import express from "express";
import * as http from "http";
import cors from "cors";
import debug from "debug";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 4000;
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response,) => {
    res.status(200).send(`running on port : ${port}`)
})

server.listen(port, () => {

})