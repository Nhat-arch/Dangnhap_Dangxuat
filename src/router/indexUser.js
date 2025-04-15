const express = require("express")
const router = express.Router()
const indexUser = require("../controller/user/indexController")
router.get("/index",indexUser.index)
router.get("/information",indexUser.information)
router.post("/information",indexUser.postInformation)
router.get("/post",indexUser.post)
module.exports = router