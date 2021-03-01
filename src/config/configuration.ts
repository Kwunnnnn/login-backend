const timeExpire = +process.env.EXPIRATION_TIME * 3600000;
export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  secretToken: process.env.SECRET_TOKEN,
  expiresIn: timeExpire,
  dbURL: process.env.DB_HOST,
});
