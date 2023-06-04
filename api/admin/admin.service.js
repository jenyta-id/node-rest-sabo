const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
        pool.query(`INSERT INTO admin (name, email, password) VALUES (?,?,?)`,
        [data.name, data.email, data.password], 
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        });
    },

  getAdmins: (callback) => {
    pool.query(`SELECT * FROM admin`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getAdminByAdminId: (id, callback) => {
    pool.query(`SELECT * FROM admin WHERE id = ?`, 
    [id], 
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },

  getAdminByAdminEmail: (email, callback) => {
    pool.query(
      `SELECT * FROM admin WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        if (results.length === 0) {
            return callback(null, null);
        }
        return callback(null, results[0]);
      }
    );
  },

  updateAdmin: (id, data, callback) => {
    pool.query(`UPDATE admin SET name=?, email=?, password=? WHERE id=?`,
    [data.name, data.email, data.password, data.cctv, data.location, data.id], 
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  deleteAdmin: (id, callback) => {
    pool.query(`DELETE FROM admin WHERE id = ?`, 
    [id], 
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  }
};
