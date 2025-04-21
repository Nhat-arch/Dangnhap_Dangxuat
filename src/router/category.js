const express = require("express")
const router = express.Router()
const categoryController = require("../controller/admin/categoryController")
router.get("/create",categoryController.create)
router.post("/create",categoryController.postCreate)
router.get("/update/:id",categoryController.update)
router.post("/update/:id",categoryController.postUpdate)
router.get("/delete/:id",categoryController.getDel)
module.exports = router