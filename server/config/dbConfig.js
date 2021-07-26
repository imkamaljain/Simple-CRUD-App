const mysql = require('mysql');

require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database connected");
    const useQuery = `USE ${process.env.DB}`;
    con.query(useQuery, (err, res) => {
        const createTableQuery = `CREATE table if not exists employees(
            id int primary key auto_increment,
            name varchar(255) not null,
            email varchar(255),
            phone varchar(255),
            designation varchar(255) not null,
            salary varchar(255) not null
        )`;
        con.query(createTableQuery, function (err, results) {
            if (err) console.log(err.message);
        });
    });
});

module.exports = con;