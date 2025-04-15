const db = require("../../config/db/connect")
exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
exports.user = (req,res)=>{
    let sql = "SELECT * FROM user"
    db.query(sql,(err,data)=>{
        if(err){
            console.log(err)
        }
        res.render("./user/index",{
            listuser: data
        })
    })
}
