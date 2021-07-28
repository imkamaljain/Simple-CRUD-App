const mysql = require('mysql');

require('dotenv').config();

module.exports = (req, res) => {
    var pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB
    });
    pool.getConnection((err, connection) => {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error while connecting database" });
            return;
        }
        connection.on('error', (err) => {
            res.json({ "code": 100, "status": "Error while connection database" });
            return;
        });
        return connection;
    });
    return pool;
};