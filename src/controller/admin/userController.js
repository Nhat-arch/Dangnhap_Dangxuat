const db = require("../../config/db/connect")
const hash = require("bcrypt")
create = (req, res) => {
    res.render("./user/create")
}
postcreate = (req, res) => {
    const { username, address, phone, email, password } = req.body
    const check = "SELECT * from user where email = ?"
    db.query(check, [email], (err, resluts) => {
        if (err) {
            res.status(500).send("error connect")
        }
        if (resluts.length > 0) {
            return res.status(401).send("Email đã tồn tại")
        }
    })
    const hashP = hash.genSaltSync(10)
    const pass_mahoa = hash.hashSync(password, hashP)
    let sql = "Insert into user set ?"
    const infomationUser = {
        username: username,
        address: address,
        phone: phone,
        email: email,
        password: pass_mahoa,
    }
    db.query(sql, infomationUser)
    res.redirect("./create")
}
update = (req, res) => {
    res.render("./user/update")
}
postupdate = (req, res) => {
    const { username, address, phone, email } = req.body
    const check = "SELECT * from user where email = ?"
    db.query(check, [email], (err, resluts) => {
        if (err) {
            res.status(500).send("error connect")
        }
        if (resluts.length > 0) {
            return res.status(401).send("Email đã tồn tại")
        }
    })
    let sql = "update user set ? where iduser = ?"
    const infomationUser = {
        username: username,
        address: address,
        phone: phone,
        email: email,
    }
    db.query(sql, [infomationUser, req.params.iduser])
    res.redirect("/user")

}
getDel = (req, res) => {
    db.query("DELETE from user where iduser = ?", [req.params.iduser], (err, resluts) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/user")
    })
}
reset = (req, res) => {
    res.render("./user/reset")
}
postResetPassword = (req, res) => {
    const { password, newpassword } = req.body
    const iduser = req.params.iduser
    let sql = "SELECT iduser ,password from user where iduser = ?"
    db.query(sql, iduser, (err, results) => {
        if (err) {
            console.log(err);
        }
        const user = results[0]
        const check = hash.compareSync(String(password), String(user.password))
        if (check) {
            const genSalt = hash.genSaltSync(10)
            const new_mahoa = hash.hashSync(newpassword, genSalt)
            let sql = "UPDATE user set password = ? where iduser = ?"
            db.query(sql, [new_mahoa, iduser], (data) => {
                console.log(data);
            })
        }
        res.redirect("/dashboard")
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