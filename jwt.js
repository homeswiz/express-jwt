const jwt = require("jsonwebtoken");
const privateKey = process.env.Jwt_Private_Key;

const createJwtToken = (info) => {
  return jwt.sign(info, privateKey, {
    expiresIn: "1d"
  })
}

module.exports = {
  createJwtToken
}