const mysql = require("mysql2/promise");
require("dotenv").config();

async function connect() {
  try {
    const con = mysql.createConnection({});
  } catch (e) {
    console.error(e);
  }
}
