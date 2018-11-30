var db          = require('../db');
const ObjectID  = require('mongoDB').ObjectID;

exports.count = () => {
  return db.get()
           .collection('notes')
           .countDocuments();
}

exports.all = (limit, offset) => {
  return db.get()
           .collection('notes')
           .find()
           .skip(Number(offset))
           .limit(Number(limit))
           .toArray();
};

exports.findById = (id) => {
  return db.get()
           .collection('notes')
           .findOne({_id: ObjectID(id)});
};

exports.create = (note, cb) => {
  return db.get()
           .collection('notes')
           .insertOne(note);
}

exports.update = (id, newData) => {
  return db.get()
           .collection('notes')
           .updateOne(
             { _id: ObjectID(id) },
             {$set: newData});
}

exports.delete = (id) =>{
  return db.get()
           .collection('notes')
           .deleteOne({ _id: ObjectID(id)});
}

exports.deleteAll = () => {
  return db.get()
           .collection('notes')
           .deleteMany({})
}
