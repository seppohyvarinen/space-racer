const mysql = require("mysql2/promise");
require("dotenv").config();

async function connect() {
  try {
    const con = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
    });

    const result = await con.query("Select * from SpaceRacerHiScores");
    console.table(result[0]);
    return result[0];
  } catch (e) {
    console.error(e);
  }
}

module.exports = connect;
