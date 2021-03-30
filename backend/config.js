const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'scaffoldzoid',
  port:3306,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});


/* var connection = mysql.createConnection({
  host: "localhost",
  user: "arkpass",
  password: "Temp@12345",
  database : 'arkpass',
  connectionLimit: 10
})
 */


connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;