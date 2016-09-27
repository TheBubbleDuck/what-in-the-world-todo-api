import mongoose from 'mongoose';
import bluebird from 'bluebird';

//  Setup mongoose promise lib
mongoose.Promise = bluebird;

//  Custom Imports
import APP_CONFIG from '../server-config/config.json';

let MONGO_CONNECTION;

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
console.log(MONGO_CONNECTION);
mongoose.connect(MONGO_CONNECTION);

//  Handle connection event
mongoose.connection.on('connected', function () {
  console.log('Connected to Mongo', MONGO_CONNECTION);
});
