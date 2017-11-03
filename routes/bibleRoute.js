"use strict";

const { Router } = require("express");
const router = Router();
const { getBible, getBook, getVersion } = require("../controllers/bibleCtrl");

router.get("/bible", getBible);
router.get("/book", getBook);
router.get("/version", getVersion);
;
module.exports = router;
