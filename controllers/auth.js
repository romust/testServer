var Auth         = require('../models/auth');
const jwt        = require('jsonwebtoken');
const expressjwt = require('express-jwt');

exports.login = async (req, res) => {
  try {
    if(!req.body.username || !req.body.password){
      res.status(400).send("You need a username and password");
      return;
    }
    const user = await Auth.users({username: req.body.username, password: req.body.password});

    if(!user){
      res
      .status(401)
      .send("User not found");
      return;
    }
    const token = jwt.sign({
      sub: user.id,
      username: user.username
    }, "mysupersecretkey", {expiresIn: "10 hours"});
    res.status(200).send({access_token: token});
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
