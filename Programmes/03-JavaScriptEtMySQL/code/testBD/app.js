var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

connection.connect();
 
connection.query('SELECT * FROM question', function (error, results, fields) {
  if (error) throw error;
  console.log('Les questions sont: ', results);
});
 
connection.end();