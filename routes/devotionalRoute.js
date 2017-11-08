"use strict";

const { Router } = require("express");
const router = Router();
const { postDevotional } = require("../controllers/devotionalCtrl");

router.post("/devotional", postDevotional);

module.exports = router;
