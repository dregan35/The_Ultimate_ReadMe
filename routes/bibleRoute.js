"use strict";

const { Router } = require("express");
const router = Router();
const {
  getBible,
  getBook,
  getVersion,
  getBible1,
  getBible2,
  getBible3,
  getBible4,
  getBible5,
  getBible6
} = require("../controllers/bibleCtrl");

router.get("/bible", getBible);
router.get("/bible1", getBible1);
router.get("/bible2", getBible2);
router.get("/bible3", getBible3);
router.get("/bible4", getBible4);
router.get("/bible4", getBible4);
router.get("/bible5", getBible5);
router.get("/bible6", getBible6);
router.get("/book", getBook);
router.get("/version", getVersion);
module.exports = router;
