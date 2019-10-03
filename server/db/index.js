const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'blog',
    host: 'localhost',
    port: '3306'
});

let blogDb = {};

blogDb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tbl_blogs', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = blogDb;