const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2203",
    host: "localhost",
    port: 5432,
    database: "tables"
});

module.exports = pool;