const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user : "postgres",
    password : "@Mainly17",
    host : "localhost",
    port : 5432,
    database: 'todoapp'
})

module.exports = pool;