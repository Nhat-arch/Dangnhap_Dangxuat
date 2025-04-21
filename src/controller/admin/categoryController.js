const db = require("../../config/db/connect")
create = (req,res)=>{
    res.render("./category/create")
}
postCreatecategory = (req,res)=>{
    const { name,editor } = req.body
    const categoryInfo = {
        name:name,
        description:editor
    }
    let sql = "insert into category set ?"
    db.query(sql,categoryInfo)
}
module.exports = {
    create,
    postCreatecategory
}