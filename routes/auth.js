const { register, login } = require("../controller/Auth");

const router = require("express").Router();

//REGISTRATION
router.post("/register", register)

//LOGIN
router.post("/login", login);


module.exports = router