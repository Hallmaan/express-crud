var mysql = require('mysql');


// var connection = mysql.createConnection({
// 	host: 'tukangapp.cypp2wlj7brs.us-east-1.rds.amazonaws.com',
// 	user: 'tukangdotcom',
// 	password: 'Tukangdotcom!!*',
// 	database: 'tukangapp_dummy'
// });


const executeQuery = (qry) => {
    return new Promise((resolve, reject) => {
      const conn = mysql.createConnection({
        host: 'tukangapp.cypp2wlj7brs.us-east-1.rds.amazonaws.com',
        user: 'tukangdotcom',
        password: 'Tukangdotcom!!*',
        database: 'tukangapp_dummy'
      })
  
      return conn.connect(err => {
        if (err) reject(err)
  
        conn.query(qry, (err, rows, fields) => {
          resolve(rows)
        })
      })
    })
  }

// var executeQuery = function(querys){
//     return new Promise(async function(resolve,reject){
//         try
//         {
//             var connection = mysql.createConnection({
//                 host: 'tukangapp.cypp2wlj7brs.us-east-1.rds.amazonaws.com',
//                 user: 'tukangdotcom',
//                 password: 'Tukangdotcom!!*',
//                 database: 'tukangapp_dummy'
//             });
//             connection.query(querys, function(rows){
//                 console.log(querys);
//                 resolve(rows);
//             });
            
//         } catch(err)
//         {
//             console.log('error occured', err);
//                 reject(err);
//         }
//     })
// }

// var executeQuery = function(query) {    
// 	var connection = mysql.createConnection({
// 		host: 'tukangapp.cypp2wlj7brs.us-east-1.rds.amazonaws.com',
// 		user: 'tukangdotcom',
// 		password: 'Tukangdotcom!!*',
// 		database: 'tukangapp_dummy'
// 	});
// 	connection.connect();
// 	connection.query(query, function(err, rows, fields) {
// 		if (err) throw err;
// 		connection.end();
// 		// console.log("Here in Dao: " + rows);
// 		// callback(rows);
// 	});
// };

// connection.connect();

module.exports = {
	// connection: connection,
	executeQuery: executeQuery
};
