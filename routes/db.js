var pool = require('mysql')

var db = pool.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sdcone',
  multipleStatements: true
});

db.connect(function (err) {
  if (err) throw err;
  console.log('connected')
})

module.exports = db