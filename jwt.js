const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("./config");

const createJwtToken = (info) => {
  return jwt.sign(info, JWT_PRIVATE_KEY, {
    expiresIn: "1d"
  })
}

const validateJwtToken = (token) => {
  return jwt.verify(token, JWT_PRIVATE_KEY)
}

module.exports = {
  createJwtToken,
  validateJwtToken
}