var mysql = require('mysql');

var con = mysql.createConnection({

  user: "root",
  password: "",
  host: "localhost",
  database: "pubblicoregistrociclisticodb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
