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

  //Oauth
  KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
  KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
  KAKAO_ACCESS_TOKEN_GENERATE_URL: process.env.KAKAO_ACCESS_TOKEN_GENERATE_URL,
  KAKAO_USER_INFO_URL: process.env.KAKAO_USER_INFO_URL,
}