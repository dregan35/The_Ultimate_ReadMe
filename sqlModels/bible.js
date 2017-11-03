"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/bible-sqlite.db");

const getBooks = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT n from key_english`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getVersions = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT version from bible_version_key`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getkjvBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_kjv, `, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports = {
  getkjvBible, getBooks, getVersions
};
