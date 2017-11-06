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
    db.all(
      `SELECT version from bible_version_key`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

const getkjvBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_kjv`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getasvBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_asv`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getyltBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_ylt`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getwebBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_web`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getwbtBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_wbt`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getdarbyBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_dby`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getbbeBible = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT DISTINCT c, v, t FROM t_bbe`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

// const getVerse = () => {
//   return new Promise((resolve, reject) => {
//     db.all(`SELECT verse FROM bibles`, (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// };

module.exports = {
  getkjvBible,
  getBooks,
  getVersions,
  getasvBible,
  getyltBible,
  getwebBible,
  getwbtBible,
  getdarbyBible,
  getbbeBible,
  getVerse
};
