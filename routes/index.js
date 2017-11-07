"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./auth"));
router.use(require("./bibleRoute"));
// router.use(require("./devotionalRoute"));


module.exports = router;
