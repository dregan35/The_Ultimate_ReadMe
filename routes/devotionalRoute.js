"use strict";

const {
  Router
} = require("express");
const router = Router();
const {
  postDevotional,
  getDevotional,
  destroyDevotional
} = require("../controllers/devotionalCtrl");

router.post("/devotional", postDevotional);
router.get("/devotional", getDevotional);
router.delete("/devotional/:devid", destroyDevotional);
module.exports = router;
