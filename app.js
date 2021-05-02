const express = require("express");
const helmet = require("helmet");
// const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");

const app = express();
// Set security HTTP headers
app.use(helmet());
// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
//compress app
app.use(compression());
//CORS enable
app.use(cors());
//app.use("/api", userRouter);
app.all("*", (req, res, next) => {
  res.json({
    status: "fail",
    error: `Can't find ${req.originalUrl} on this server!`,
  });
  next();
});

module.exports = app;
