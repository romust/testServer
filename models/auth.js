var db          = require('../db');
const ObjectID  = require('mongoDB').ObjectID;

exports.users = (user) => {
  return db.get().collection('users').findOne(user);
}
