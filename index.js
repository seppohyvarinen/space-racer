const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

const routes = require("./routes/routes.js");

let cors = require("cors");
app.use(cors());
app.use(express.static("frontend/build"));
app.use(express.json());
app.use("/scores", routes);

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
