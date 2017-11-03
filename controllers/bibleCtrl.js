"use strict";

const {
  getkjvBible, getBooks, getVersions
} = require("../sqlModels/bible");

module.exports.getBible = (req, res, next) => {
  getkjvBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBook = (req, res, next) => {
  getBooks()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => next(err));
};

module.exports.getVersion = (req, res, next) => {
  getVersions()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => next(err));
};