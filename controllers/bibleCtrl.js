"use strict";

const {
  getkjvBible,
  getBooks,
  getVersions,
  getasvBible,
  getyltBible,
  getwebBible,
  getwbtBible,
  getdarbyBible,
  getbbeBible
} = require("../sqlModels/bible");

module.exports.getBible = (req, res, next) => {
  getkjvBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible1 = (req, res, next) => {
  getasvBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible2 = (req, res, next) => {
  getyltBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible3 = (req, res, next) => {
  getwebBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible4 = (req, res, next) => {
  getwbtBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible5 = (req, res, next) => {
  getdarbyBible()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};

module.exports.getBible6 = (req, res, next) => {
  getbbeBible()
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
