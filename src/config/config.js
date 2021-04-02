module.exports = {
  MongoURL: process.env.MONGO_URL || 'localhost',
  MongoPort: Number(process.env.MONGO_PORT || '7777'),
  MongoDbName: process.env.MONGO_DBNAME || 'myonlystar',

  AppUrl: process.env.APP_URL || 'localhost',
  AppPort: Number(process.env.APP_PORT || '3000'),

  FrontendDir: process.env.FRONTEND_DIR || process.cwd(),

  NoFrontend: process.env.NO_FRONTEND === 'true',
}