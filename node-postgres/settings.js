const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "bank_db",
  password: "",
  port: 5432,
});
