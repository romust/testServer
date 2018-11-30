var Notes = require('../models/notes');

exports.all = async (req, res) => {
  try {
    res.send({
      documents: await Notes.all(req.headers['limit'], req.headers['offset']),
      count: await Notes.count()
    });
  }
  catch (err){
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.findById = async (req, res) => {
  try {
    res.send(await Notes.findById(req.params.id));
  }
  catch (err){
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.findById = async (req, res) => {
  try {
    res.send(await Notes.findById(req.params.id));
  }
  catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.create = async (req, res) => {
  try {
    var note = {
      text: req.body.text,
      status: req.body.status,
      date: Date.now()
    };
    await Notes.create(note);
    res.send(note);
  }
  catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.update = async (req, res) => {
  try {
    await Notes.update(req.params.id, {text: req.body.text});
    res.send(req.body.text);
  }
  catch (err){
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.delete = async (req, res) => {
  try {
    await Notes.delete(req.params.id);
    res.sendStatus(200);
  }
  catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

exports.deleteAll = async (req, res) => {
  try {
    await Notes.deleteAll();
    res.sendStatus(200);
  }
  catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
