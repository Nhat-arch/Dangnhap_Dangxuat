const express = require("express")
const router = express.Router()
const dashboard = require("../controller/admin/dashboardController")
router.get("/dashboard",dashboard.dashboard)
router.get("/user",dashboard.user)
router.get("/news",dashboard.news)
router.get("/category",dashboard.category)

module.exports = router