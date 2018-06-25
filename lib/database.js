var mysql = require('mysql');

const executeQuery = (qry) => {
    return new Promise((resolve, reject) => {
      const conn = mysql.createConnection({
        host: 'tukangapp.cypp2wlj7brs.us-east-1.rds.amazonaws.com',
        user: 'tukangdotcom',
        password: 'Tukangdotcom!!*',
        database: 'tukangapp_dummy'
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
