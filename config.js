module.exports = {
  MongoURL: process.env.MONGO_URL || 'localhost',
  MongoPort: Number(process.env.MONGO_PORT || '7777'),
  MongoDbName: process.env.MONGO_DBNAME || 'myonlystar',

  AppPort: Number(process.env.APP_PORT || '3000'),
}