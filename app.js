"use strict";

require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/");

const app = express();

const port = process.env.PORT || 8080;

// using require('./models') to get the models may create more than one connection to the database. To avoid that, the models variable must be somehow singleton-esque. This can be achieved by attaching the models module to the application:
app.set("models", require("./models")); //pulls in models/index.js by default. Index exports all the models you define in the models folder. So cool.
// And when you need to require a class of the model in a controller, use this insise a middleware function rather than a direct import:
// const { Computer } = req.app.get('models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1/", routes);

// Add a 404 error handler
app.use((req, res, next) => {
  let error = new Error("sorry, not found.");
  error.status = 404;
  next(error);
});

if (app.get("env") === "development" || app.get("env") === "test") {
  app.use((err, req, res, next) => {
    console.log("error", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
