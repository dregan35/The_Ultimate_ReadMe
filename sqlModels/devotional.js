"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/bible-sqlite.db");

const postDevotionals = (devotional, username) => {
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

const getDevotionals = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT journal, id FROM Journals`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const destroyDevotionals = (devid) => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM Journals 
            WHERE  id = ${devid} `,
      (err, data) => {
        if (err) {
          console.log("error", err);
          return reject(err);
        }
        resolve(data);
      }
    );
  });
};

module.exports = {
  postDevotionals,
  getDevotionals,
  destroyDevotionals
};
