require("dotenv").config()
const  express = require('express')
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
app.use(express())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","ejs")
app.set("views",path.join("src","./views/"))
app.use(express.static(path.join("src","public")))
app.use(bodyParser.json())


const config = require("./src/config/index")
const router = require("./src/router/index")

router(app)
app.listen(config.port, () => console.log(`Connect with http://${config.host}:${config.port}`))