const bcrypt = require("bcryptjs");
const { User } = require("../models");
const localAuth = require("./local.js");

function createUser(req) {
  console.log("req", req.body.username);
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  console.log('user', hash);
  return User.create({
    id: null,
    username: req.body.username,
    password: hash
  })
    .then(data => {
      console.log("data", data);
      return data.dataValues;
    })
    .catch(err => {
      return err;
    });
}

function getUser(username) {
  console.log("username", username);
  return User.findOne({ where: { username: username } }).then(data => {
    console.log("data", data);
    return data.dataValues;
  });
}

function comparePass(userPassword, databasePassword) {
  console.log("datapass", databasePassword);
  const bool = bcrypt.compareSync(userPassword, databasePassword);
  if (!bool) throw new Error("bad pass silly monkey");
  else return true;
}

function ensureAuthenticated(req, res, next) {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: "Please log in"
    });
  }
  // decode the token
  var header = req.headers.authorization.split(" ");
  var token = header[1];
  localAuth.decodeToken(token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: "Token has expired"
      });
    } else {
      // check if the user still exists in the db
      User.findOne({ where: { id: parseInt(payload.sub) } })
        .then(user => {
          next();
        })
        .catch(err => {
          res.status(500).json({
            status: "error"
          });
        });
    }
  });
}

module.exports = {
  createUser,
  getUser,
  comparePass,
  ensureAuthenticated
};
