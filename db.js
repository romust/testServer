var MongoClient = require('mongodb').MongoClient;
const dbName    = 'myproject';
var state = {
  db: null
};

exports.connect = (url, done) => {
  if(state.db){
    return done();
  }
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      return done(err);
    }
    state.db = db.db(dbName);
    done();
  })
}

exports.get = () => {
  return state.db;
}
