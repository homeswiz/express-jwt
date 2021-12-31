const express = require('express')
const app = express();
const { PORT }  = require("./config");

app.listen(PORT, function (){
  console.log(`app listening at PORT :${PORT}`);
});