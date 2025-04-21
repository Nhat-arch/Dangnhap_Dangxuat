const  express = require('express')
express.Router();


const auth = require("./auth")
const dashboard = require("./dashboard")
const user = require("./user")
const index = require("./indexUser")
const category = require("./category")
function router(app){
    app.use("/admin",auth)
    app.use("/",dashboard)
    app.use("/user",user)
    app.use("/",index)
    app.use("/category",category)
}
module.exports = router