const db = require("../../config/db/connect")
create = (req,res)=>{
    res.render("./category/create")
}
postCreate = (req,res)=>{
    const { name,editor } = req.body
    const categoryInfo = {
        name:name,
        description:editor
    }
    let sql = "insert into category set ?"
    db.query(sql,categoryInfo)
}
update = (req,res)=>{
    res.render("./category/update")
}
postUpdate = (req,res)=>{
    const id = req.params.id
    const { name } = req.body
    const categoryInfo = {
        name:name,
    }
    let sql = "UPDATE category set = ? where id = ? "
    db.query(sql,[categoryInfo,id])
    res.redirect("/category")
}
getDel = (req, res) => {
    db.query("DELETE from category where id = ?", [req.params.id], (err, resluts) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/category")
    })
}
module.exports = {
    create,
    postCreate,
    update,
    postUpdate,
    getDel
}