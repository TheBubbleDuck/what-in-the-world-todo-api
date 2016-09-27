import mongoose from 'mongoose';
import bluebird from 'bluebird';

//  Setup mongoose promise lib
mongoose.Promise = bluebird;

//  Custom Imports
import APP_CONFIG from '../server-config/config.json';

let MONGO_CONNECTION;

//  Check the configuration for different options
if (APP_CONFIG) {
  MONGO_CONNECTION = APP_CONFIG.mongo.connection_url;
} else {
  MONGO_CONNECTION = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost/witwt-api';
}
console.log(MONGO_CONNECTION);
mongoose.connect(MONGO_CONNECTION);

//  Handle connection event
mongoose.connection.on('connected', function () {
  console.log('Connected to Mongo', MONGO_CONNECTION);
});
