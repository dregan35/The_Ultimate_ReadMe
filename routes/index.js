"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./auth"));

router.use(require("./bibleRoute"));


module.exports = router;
