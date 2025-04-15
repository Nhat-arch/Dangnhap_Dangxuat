const db = require("../../config/db/connect")
const hash = require("bcrypt")
const jwt = require("jsonwebtoken")
let refreshToken = []
exports.getRegister = (req,res) => {
    res.render("auth/register")
}
exports.postRegister = (req,res) =>{
    const { email, password,username } = req.body;

    const checkUser = "SELECT email FROM user where email = ?"
    db.query(checkUser, [email], (err, resluts) => {
        if (err) {
            return res.status(500).send("Lỗi sever")
        }
        if (resluts.length > 0) {
            return res.status(401).send("Email đã tồn tại")
        }
        const salt = hash.genSaltSync(10);
        const pass_mahoa = hash.hashSync(password, salt);

        const user_info = {
            username: username,
            email: email,
            password: pass_mahoa
        }

        let sql = "INSERT INTO user set ?"
        db.query(sql, user_info)
        res.redirect("login")
    })
}
exports.getLogin = (req,res ,next)=>{
    res.render("auth/login")
    next()
}
exports.postLogin = (req,res,next)=>{
    const { email, password } = req.body
    let sql = "SELECT email FROM user where email = ?"
    db.query(sql, [email], (err, resluts) => {
        if (err) {
            res.send("Error")
        }
        if (resluts.length === 0) {
            res.send("Lỗi email or password")
        }
        const user = resluts[0]
        const check = hash.compareSync(String(password), String(user.password))
        if (check) {
        return res.sendStatus(401)
        }
        else{
            const accessToken = jwt.sign({
                email: user.email
            },
                process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: process.env.ACCESS_TOKEN_LIFE,
            })
            // console.log(accessToken);
            
            res.redirect("/dashboard")
        }   
    })
    next()
}
exports.logout = (req,res)=>{
    return res.redirect("login")

}