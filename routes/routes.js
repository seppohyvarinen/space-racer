// tba
const express = require("express");
let connections = require("../connections/connections.js");

let scores = express.Router();

scores.get("/", async (req, res) => {
  try {
    let all = await connections.connect();
    res.send(all);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

module.exports = scores;
