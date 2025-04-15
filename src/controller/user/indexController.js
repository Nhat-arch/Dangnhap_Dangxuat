const db = require("../../config/db/connect")
exports.index = ((req,res)=>{
    res.render("pages/index")
})
exports.information = (req,res) =>{
    res.render("pages/information")
}
exports.postInformation = (req,res) =>{
    const { name , email ,description } =req.body
    const info = { name:name , email:email ,description:description}
    let sql = "INSERT INTO contact SET ?"
    db.query(sql,info,(err,resluts)=>{
        if(err){
            console.log(err)
        }
        return console.log(resluts);
    })
    return res.redirect("information")
}
exports.post = (req,res) =>{
    res.render("pages/post")
}