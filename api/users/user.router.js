const { createUser, login, getUserByUserId, getUsers, updateUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.post("/login", login);
router.get("/:id", checkToken, getUserByUserId);
router.get("/", checkToken, getUsers);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
