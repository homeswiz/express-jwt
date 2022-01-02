const express = require('express')
const app = express();
const { SERVER_PORT }  = require("./config");
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorHandler');

app.use(bodyParser.json());

app.use("/user", userRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, function (){
  console.log(`app listening at SERVER_PORT : ${SERVER_PORT}`);
});