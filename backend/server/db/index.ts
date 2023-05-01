import mysql from 'mysql'
export let db = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user: 'tony',
    password: 'farmmint',
    database: 'test'
})
