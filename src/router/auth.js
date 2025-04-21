const express = require("express")
const router = express.Router()
const authController = require("../controller/admin/authController")
const {validateRegister,validateLogin} = require("../validation/index")
router.get("/register",authController.getRegister)
router.post("/register",authController.validateRegister(),authController.postRegister)
router.get("/login",authController.getLogin)
router.post("/login",authController.validateLogin(),authController.postLogin)

module.exports = router