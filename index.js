const express = require('express')
const app = express();
const { SERVER_PORT }  = require("./config");
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandler');
const logger = require('./util/logger');

app.use(bodyParser.json());

app.use((req,res,next) => {
  logger.info(`${req.method} - ${req.originalUrl} - ${req.ip}`);
  next();
});

app.get("/", (req,res,next) => {
  res.send("healthy");
})

app.use("/user", userRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, function (){
  console.log(`app listening at SERVER_PORT : ${SERVER_PORT}`);
});

//for test
module.exports = app;