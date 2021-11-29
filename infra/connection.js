const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    password: 'root',
    database: 'petshop'
})

module.exports = connection