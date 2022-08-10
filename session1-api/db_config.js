const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "session1",
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting" + err.stack);
    return;
  }

  console.log("connected as id " + conn.threadId);
});

module.exports = conn;
