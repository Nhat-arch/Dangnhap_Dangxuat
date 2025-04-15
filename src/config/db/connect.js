const mysql = require("mysql2")

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Connect success")
})
const user = "create table if not exists user(iduser int primary key AUTO_INCREMENT not null,username nvarchar(20) not null,address nvarchar(50),phone varchar(10) not null,email varchar(50) not null,password varchar(20) not null,status bit,date date,sex nvarchar(3),role int not null,token nvarchar(255) not null,Created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP)"
const contact = "create table if not exists contact(id int primary key AUTO_INCREMENT not null,name nvarchar(20) not null,email varchar(50) not null,status bit,description nvarchar(255) not null,Created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP)"
const post = "create table if not exists post(idpost int primary key AUTO_INCREMENT not null,iduser int not null,album nvarchar(50),content nvarchar(255) not null,img nvarchar(50),name varchar(50) not null,title nvarchar(100) not null,status bit,description nvarchar(255) not null,created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP)"
const category = "create table if not exists category (id int primary key auto_increment not null,idpost int not null,parentid int,lft int,rgt int,level int,created_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP)"
// db.query(post,(err)=>{
//     if(err){
//         console.log("Create table fails", err)
//     }
//     else{
//         console.log("Create table successfully")
//     }
// })
// db.query(user,(err)=>{
//     if(err){
//         console.log("Create table fails", err)
//     }
//     else{
//         console.log("Create table successfully")
//     }
// })
// const drop = "DROP TABLE user"

// db.query(drop,(err)=>{
//     if(err){
//         console.log("Create table fails", err)
//     }
//     else{
//         console.log("drop table successfully")
//     }
// })

module.exports = db