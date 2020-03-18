const mysql = require('mysql');

const credentials = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodetypescript'
};

const mysqlConnection = mysql.createConnection(credentials);

mysqlConnection.connect((err) => {
  if (err) {
      console.error("Database error: ", err);
  } else {
      console.log('DB is connected!');
  }
});

module.exports = mysqlConnection;