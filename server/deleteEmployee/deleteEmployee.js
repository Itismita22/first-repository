let mongodb = require ("mongodb");
let pruthiIT = mongodb.MongoClient;
let deleteEmployee = require("express").Router().delete("/",(req,res)=>{
    pruthiIT.connect("mongodb://loclahost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").deleteOne({"empId":req.body.empId},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({delete:"success"});
                }
            });
        }
    });
});
module.exports = deleteEmployee;