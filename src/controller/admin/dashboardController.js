const db = require("../../config/db/connect")
exports.dashboard = (req, res) => {
    res.render("dashboard")
}
exports.user = (req, res) => {
    let sql = "SELECT * FROM user"
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render("./user/index", {
            listuser: data
        })
    })
}
exports.news = (req, res) => {
    res.render("./news/new")

}
exports.category = (req, res) => {
    let sql = "select * from category"
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.render("./category/category", {
            listCategory: data
        })
    })
}
