const {
    create,
    getAdminByAdminEmail,
    getAdminByAdminId,
    getAdmins,
    updateAdmin,
    deleteAdmin
  } = require("./admin.service");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    createAdmin: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },

    login: (req, res) => {
      const body = req.body;
      getAdminByAdminEmail(body.email, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, "qwe1234", {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            message: "Login successfully",
            token: jsontoken
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    },

    getAdminByAdminId: (req, res) => {
      const id = req.params.id;
      getAdminByAdmimId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },

    getAdmins: (req, res) => {
      getAdmins((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },

    updateAdmin: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      updateAdmin(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "Updated successfully"
        });
      });
    },
    
    deleteAdmin: (req, res) => {
      const data = req.body;
      deleteAdmin(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not found"
          });
        }
        return res.json({
          success: 1,
          message: "Admin deleted successfully"
        });
      });
    }
  };
  