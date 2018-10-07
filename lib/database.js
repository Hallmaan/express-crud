var mysql = require('mysql');

const executeQuery = (qry) => {
    return new Promise((resolve, reject) => {
      const conn = mysql.createConnection({
        host: 'hostlu',
        user: 'user',
        password: 'pass',
        database: 'db'
      })
  
      return conn.connect(err => {
        if (err)
        { 
        reject(err)
        connection.end();
        }
        conn.query(qry, (err, rows, fields) => {
          resolve(rows)
        })
      })
    })
  }
  
module.exports = {
	// connection: connection,
	executeQuery: executeQuery
};
