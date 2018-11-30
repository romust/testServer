const express           = require('express');
const bodyParser        = require('body-parser');
const notesController   = require('./controllers/notes');
const authController    = require('./controllers/auth');
const jwt               = require('jsonwebtoken');
const expressjwt        = require('express-jwt');
const ObjectID          = require('mongoDB').ObjectID;
const db                = require('./db');
const app               = express();
const url               = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const jwtCheck = expressjwt({
  secret: "mysupersecretkey"
});

app.get('/', (req, res) => {res.send('Hello API')});
app.get('/notes', notesController.all);
app.get('/notes/:id', jwtCheck, notesController.findById);
app.post('/notes', notesController.create);
app.post('/login', authController.login);
app.put('/notes/:id', notesController.update);
app.delete('/notes/:id', jwtCheck, notesController.delete);
app.delete('/notes/', notesController.deleteAll);

db.connect(url, (err) => {
  if(err){
    return console.log(err);
  }
  app.listen(3000, () => {
    console.log('API app started');
  });
});
