const express = require("express");
const app = express();

const port = 8080;

let cors = require("cors");

app.use(cors());
app.use(express.static("frontend/build"));
app.use(express.json());
const scores = require("./routes/routes.js");
app.use("/scores", scores);

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
