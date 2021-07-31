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
        const useDBQuery = `USE ${process.env.DB}`;
        connection.query(useDBQuery, (err, res) => {
            const createTableQuery = `CREATE table if not exists employees(
                id int primary key auto_increment,
                name varchar(255) not null,
                email varchar(255),
                phone varchar(255),
                designation varchar(255) not null,
                salary varchar(255) not null
            )`;
            connection.query(createTableQuery, function (err) {
                if (err) console.log(err.message);
            });
        });
        connection.on('error', (err, res) => {
            res.json({ "code": 100, "status": "Error while connection database" });
            return;
        });
        return connection;
    });
    return pool;
};