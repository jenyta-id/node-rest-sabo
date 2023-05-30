const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO cctv (name, location) VALUES (?,?)`,
      [data.name, data.location],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getCctvByCctvId: (id, callback) => {
    pool.query(
      `SELECT * FROM cctv WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getCctvs: callback => {
    pool.query(`SELECT * FROM cctv`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  updateCctv: (data, callback) => {
    pool.query(
      `UPDATE cctv SET name=?, location=? WHERE id=?`,
      [data.name, data.location, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteCctv: (data, callback) => {
    pool.query(
      `DELETE FROM cctv WHERE id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
};
