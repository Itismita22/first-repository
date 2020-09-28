let mongodb = require("mongodb");
let pruthiIT = mongodb.MongoClient;
let updateEmployee = require ("express").Router().put("/",(req,res)=>{
    let basedOnProperty = {"empId" : req.body.empId};
    let newProperties = {$set:{"Name": req.body.Name,
                             "Age": req.body.Age,
                             "Salary": req.body.Salary,
                             "DOB" : req.body.DOB}};
        pruthiIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
            if (err) throw err;
            else{
                db.collection("employees").updateOne(basedOnProperty,newProperties,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({update:"success"});
                    }
                });
            }
        });                   
});

module.exports = updateEmployee;