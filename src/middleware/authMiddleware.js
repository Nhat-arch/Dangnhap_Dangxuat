const jwt = require("jsonwebtoken")
const { promisify } = require("util")
exports.checklogin = (req,res,next) =>{
    const token = req.headers.accessToken;
    if(token){
        const test2 = token.split("",[1])
        const test =  promisify(jwt.verify)(test2,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.iduser = decoded.iduser;
              next();
            });
    }
}