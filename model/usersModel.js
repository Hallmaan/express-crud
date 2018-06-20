const db = require('../lib/database');

module.exports = {
  getUser: async function(userId) {
  const rows = await db.executeQuery(`select * from ms_customer where id = '${userId}'`)
  const user = rows[0]

  return user
}
}

// module.exports.getUser = getUser;