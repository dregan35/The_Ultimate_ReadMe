"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./auth"));



// pipe all other requests through the route modules
// router.use(require('./authRoute'));
// router.use(require('./productRoute'));
// router.use(require('./orderRoute'));
// router.use(require('./userRoute'));
// router.use(require('./paymentRoute'));
module.exports = router;
