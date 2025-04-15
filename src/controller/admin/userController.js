const db = require("../../config/db/connect")
const hash = require("bcrypt")
const { postRegister } = require("./authController")
create = (req,res) =>{

    res.render("./user/create")
}
postcreate = (req,res)=>{
    db.query("SELECT iduser from user where iduser = ?",[req.params.iduser],(err,resluts)=>{
        if(err){
            console.log(err);  
        }
        console.log(resluts);})
}
update = (req,res) =>{
    res.render("./user/update")
}
postupdate = (req,res)=>{
    db.query("SELECT iduser from user where iduser = ?",[req.params.iduser],(err,resluts)=>{
        if(err){
            console.log(err);  
        }
        console.log(resluts);})
}
getDel = (req,res)=>{
    db.query("DELETE from user where iduser = ?",[req.params.iduser],(err,resluts)=>{
        if(err){
            console.log(err);  
        }
        res.send(200)
    })
}
reset = (req,res)=>{
    res.render("./user/reset")
}
postResetPassword = (req,res)=>{
    const { password } = req.body
    const iduser = req.params.iduser
    let sql = "SELECT iduser from user where iduser = ?"
    db.query(sql,iduser ,(err,results)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
        const user = results[0]
        const check = hash.compareSync(String(password) , String(user.password))
        if(check){
            const genSalt = hash.genSaltSync(10)
            const newpassword = hash.hashSync(newpassword,genSalt)
            const insertNewPassword =  {
                password : newpassword
            }
            let sql = "UPDATE user set password = ?"
            db.query(sql,insertNewPassword)
        }
        res.redirect("dashboard")
    })
}


module.exports = {
    create,
    postcreate,
    update,
    postupdate,
    getDel,
    reset,
    postResetPassword
}