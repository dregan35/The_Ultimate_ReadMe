"use strict";

const { postDevotionals } = require("../sqlModels/devotional");

module.exports.postDevotional = (req, res, next) => {
  console.log("req", req.body.username);
  postDevotionals(req.body.devotional, req.body.username)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};
