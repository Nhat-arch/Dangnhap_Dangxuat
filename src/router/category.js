const express = require("express")
const router = express.Router()
const categoryController = require("../controller/admin/categoryController")
router.get("/create",categoryController.create)
router.post("/create",categoryController.postCreatecategory)
module.exports = router