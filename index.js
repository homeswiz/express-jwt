const express = require('express')
const app = express();
const { PORT }  = require("./config");
const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.listen(PORT, function (){
  console.log(`app listening at PORT : ${PORT}`);
});