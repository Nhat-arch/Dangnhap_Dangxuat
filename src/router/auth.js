const express = require("express")
const router = express.Router()
const authController = require("../controller/admin/authController")
const authMiddleware = require("../middleware/authMiddleware")


router.get("/register",authController.getRegister)
router.post("/register",authController.postRegister)
router.get("/login",[authMiddleware.checklogin],authController.getLogin)
router.post("/login",[authMiddleware.checklogin],authController.postLogin)
router.get("/logout",authController.logout)

module.exports = router