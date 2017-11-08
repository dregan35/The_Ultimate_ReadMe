"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/bible-sqlite.db");

const postDevotionals = (devotional, username) => {
  console.log("user2", username);
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Journals VALUES (
      NULL,
      '${devotional.text}',
      '${username}'
    
      )
      `),
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
