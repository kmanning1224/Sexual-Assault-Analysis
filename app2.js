const { Pool, Client } = require('pg')
const connectionString = 'postgres://ozanjhjyyivzlm:39da857ae1301adae785280dc1a1da959a74a0614d75f83446b0bbcc96b3e2c0@ec2-34-231-56-78.compute-1.amazonaws.com:5432/dcuvohmeofi05g'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

// d3.json(`/fulldate`, function(id) {
//   // let names = id.gender
//   console.log(id)
// });
client
  .query('SELECT NOW() as now')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))