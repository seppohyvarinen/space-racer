// tba
const express = require("express");
let connections = require("../connections/connections.js");

let scores = express.Router();

scores.get("/", async (req, res) => {
  console.log("called");
  try {
    let all = await connections();
    res.send(all);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

module.exports = scores;
