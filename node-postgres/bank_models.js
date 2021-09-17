const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "bank_db",
  password: "103101",
  port: 5432,
});

const getBanks = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM list_bank ", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
const createBank = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, name, rate, max_loan, min_payment, commission, loan_term } = body;
    pool.query(
      "INSERT INTO list_bank (id,name, rate, max_loan, min_payment, commission, loan_term) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *",
      [id, name, rate, max_loan, min_payment, commission, loan_term],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new bank has been added added: ${results.rows[0]}`);
      }
    );
  });
};
const deleteBank = () => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(request.params.id);
    console.log(id);
    pool.query("DELETE FROM list_bank WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`Bank deleted with ID: ${id}`);
    });
  });
};
const editBank = () => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query("UPDATE list_bank SET * WHERE id = $1;", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`Bank update with ID: ${id}`);
    });
  });
};

module.exports = {
  getBanks,
  createBank,
  deleteBank,
  editBank,
};
