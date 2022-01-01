require("dotenv").config();

module.exports = {
  SERVER_PORT : process.env.SERVER_PORT,
  DB_HOST : process.env.DB_HOST,
  DB_PORT : process.env.DB_PORT,
  DB_DIALECT : process.env.DB_DIALECT,
  DB_DATABASE : process.env.DB_DATABASE,
  DB_USER : process.env.DB_USER,
  DB_PASSWORD : process.env.DB_PASSWORD,
  JWT_PRIVATE_KEY : process.env.JWT_PRIVATE_KEY,
}