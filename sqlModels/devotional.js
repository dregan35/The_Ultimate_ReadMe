"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/bible-sqlite.db");

const postDevotionals = (devotional, username) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE Users SET journal = 
      '${devotional.text}' WHERE username = '${username}'`),
      (err, data) => {
        console.log("data", data);
        if (err) return reject(err);
        resolve(data);
      };
  });
};

module.exports = {
  postDevotionals
};
