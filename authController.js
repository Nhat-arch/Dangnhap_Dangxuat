const db = require("../../config/db/connect");
const bcrypt = require("bcrypt");
const { validateLogin, validateRegister } = require("../../validation/index");

const { body, validationResult } = require("express-validator");

const getRegister = (req, res) => {
    res.render("auth/register", { thongbao: null });
};

const postRegister = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('auth/register', { thongbao: errors.array().map(e => e.msg).join(', ') });
    }

    const { email, password, username } = req.body;
    const checkUser = "SELECT email FROM user WHERE email = ?";

    db.query(checkUser, [email], (err, results) => {
        if (err) {
            console.error("Lỗi truy vấn kiểm tra email:", err);
            return res.status(500).send("Lỗi server");
        }
        if (results.length > 0) {
            return res.render('auth/register', { thongbao: "Email đã tồn tại" });
        }

        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const user_info = { username, email, password: hashedPassword };
        
        let sql = "INSERT INTO user SET ?";
        db.query(sql, user_info, (err, results) => {
            if (err) {
                console.error("Lỗi khi chèn người dùng:", err);
                return res.render('auth/register', { thongbao: "Lỗi hệ thống, đăng ký thất bại" });
            }
        
            if (results.affectedRows > 0) {
                return res.redirect("login?message=Đăng ký thành công!");
            } else {
                return res.render('auth/register', { thongbao: "Không thể thêm người dùng, vui lòng thử lại." });
            }
        });
    });
};
const getLogin = (req, res) => {
    res.render("auth/login", { thongbao: null });
};
const postLogin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('auth/login', { thongbao: errors.array().map(e => e.msg).join(', ') });
    }

    const { email, password } = req.body;
    let sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error("Lỗi truy vấn cơ sở dữ liệu:", err);
            return res.status(500).send("Lỗi truy vấn cơ sở dữ liệu");
        }
        if (results.length === 0) {
            return res.render('auth/login', { thongbao: "Email không tồn tại" });
        }

        bcrypt.compare(password, results[0].password, (err, check) => {
            if (err) {
                console.error("Lỗi khi so sánh mật khẩu:", err);
                return res.status(500).send("Lỗi hệ thống");
            }
            if (check) {
                req.session.isLogin = true;
                req.session.user = {
                    id: results[0].id,
                    username: results[0].username,
                    email: results[0].email
                };
                return res.redirect("/dashboard");
            }     
            return res.render('auth/login', { thongbao: "Mật khẩu không đúng" });
        });
    });
};

module.exports = {
    getRegister,
    validateRegister,
    postRegister,
    getLogin,
    validateLogin,
    postLogin,
};