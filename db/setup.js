import mongoose from 'mongoose';
import bluebird from 'bluebird';
import fs       from 'fs';

const SERVER_CONFIG_PATH = process.env.SERVER_CONFIG_PATH || '../server-config/config.json';
let APP_CONFIG;
let MONGO_CONNECTION;

//TODO: Makes this check more global and provide global config
try {
  fs.accessSync(SERVER_CONFIG_PATH);
  APP_CONFIG = require(SERVER_CONFIG_PATH);
} catch (e) {
  console.log('There is no configuration file. Continuing priority checks');
}
//  Check the configuration for different options
const { MONGO_DB_CONNECTION } = process.env;

//  Check for Connection by priority
if (MONGO_DB_CONNECTION) {
  MONGO_CONNECTION = MONGO_DB_CONNECTION;             // Overridden Mongo Connection
} else if (APP_CONFIG) {
  MONGO_CONNECTION = APP_CONFIG.mongo.connection_url; //  Local App Config
} else {
  MONGO_CONNECTION = 'mongodb://localhost/witwt-api'; //  Default Local Mongo
}

//  Setup mongoose promise lib
mongoose.Promise = bluebird;

//  Setup Mongoose
console.log('Connection for Mongo: ', MONGO_CONNECTION);
mongoose.connect(MONGO_CONNECTION);

//  Handle connection event
mongoose.connection.on('connected', function () {
  console.log('Connected to Mongo', MONGO_CONNECTION);
});
