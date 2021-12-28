const jwt = require("jsonwebtoken");
const JwtScretKey = process.env.Jwt_Secret_Key;

const createJwtToken = (info) => {
  return jwt.sign(info, JwtScretKey, {
    expiresIn: "1d"
  })
}

const validateJwtToken = (token) => {
  return jwt.verify(token, JwtScretKey)
}

module.exports = {
  createJwtToken,
  validateJwtToken
}