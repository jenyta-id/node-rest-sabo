const { createAdmin, login, getAdminByAdminId, getAdmins, updateAdmin, deleteAdmin } = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createAdmin", createAdmin);
router.post("/login", login);
router.get("/:id", checkToken, getAdminByAdminId);
router.get("/", checkToken, getAdmins);
router.put("/update", checkToken, updateAdmin);
router.delete("/", checkToken, deleteAdmin);

module.exports = router;
