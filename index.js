const express = require('express')
const app = express();
const { SERVER_PORT }  = require("./config");
const userRouter = require("./routes/user");
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get("/", (req,res,next) => {
  res.send("healthy");
})

app.use("/user", userRouter);

app.listen(SERVER_PORT, function (){
  console.log(`app listening at SERVER_PORT : ${SERVER_PORT}`);
});

//for test
module.exports = app;