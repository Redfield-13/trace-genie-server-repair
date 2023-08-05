const mysql = require('mysql2');


const pool = mysql.createPool({
    host:'localhost',
    user:'trace',
    password:'Mj2002dr%',
    database:'results'
}).promise()

async function getCustomersOnPostCode(postcode){
    const [rows] = await pool.query(`SELECT * FROM finalS WHERE postcode = ?`,[postcode])
    return(rows)
}
async function getCustomersOnPostCodeAndAddress(postcode,address){
    const [rows] = await pool.query(`SELECT * FROM finalS WHERE address = ? AND postcode = '${postcode}'`, [address])
    return(rows)
}
async function getCustomersOnNameAndTown(name,town){
    const [rows] = await pool.query(`SELECT * FROM finalS WHERE name = ? AND town = '${town}'`, [name])
    return(rows)
}


module.exports = {
    getCustomersOnPostCode,
    getCustomersOnPostCodeAndAddress,
    getCustomersOnNameAndTown
}