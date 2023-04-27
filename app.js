const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("howdy parnter");
});
app.post("/", (req, res) => {
  res.status(405).send("not allowed");
});
module.exports = app;
