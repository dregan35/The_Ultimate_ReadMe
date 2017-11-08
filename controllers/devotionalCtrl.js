"use strict";

const {
  postDevotionals,
  getDevotionals,
  destroyDevotionals
} = require("../sqlModels/devotional");

module.exports.postDevotional = (req, res, next) => {
  console.log("req", req.body.username);
  postDevotionals(req.body.devotional, req.body.username)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getDevotional = (req, res, next) => {
  console.log("datajj", req.body.journal);
  getDevotionals()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.destroyDevotional = (req, res, next) => {
  destroyDevotionals(req.params.devid)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};
