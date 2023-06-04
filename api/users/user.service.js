const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO users (name, email, password, location) VALUES (?,?,?,?)`,
      [data.name, data.email, data.password, data.location],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callback) => {
    pool.query(
      `SELECT * FROM users WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getUserByUserId: (id, callback) => {
    pool.query(
      `SELECT * FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getUserByLocation: (location, callback) => {
    pool.query(
      `SELECT * FROM users WHERE location = ?`,
      [location],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },  

  getUsers: callback => {
    pool.query(`SELECT * FROM users`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getColumnLocationCctv: callback => {
    pool.query(`SELECT location FROM cctv`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  updateUser: (data, callback) => {
    pool.query(
      `UPDATE users SET name=?, email=?, password=?, location=? WHERE id=?`,
      [data.name, data.email, data.password, data.location, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  addUserLocation: (userId, locationId, callback) => {
    pool.query(
      `UPDATE users SET location = ? WHERE id = ?`,
      [locationId, userId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  deleteUser: (data, callback) => {
    pool.query(
      `DELETE FROM users WHERE id=?`,
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
