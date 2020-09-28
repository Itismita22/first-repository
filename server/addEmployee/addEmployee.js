//const { response } = require("response");
let mongodb = require ("mongodb");
let pruthiIT = mongodb.MongoClient;
let addEmployee = require("express").Router().post("/",(req,res)=>{
      let newRecord = {
          "Name" : req.body.Name,
          "Age" : req.body.Age,
          "empId" : req.body.empId,
          "Salary" : req.body.Salary,
          "DOB" : req.body.DOB
      };
      pruthiIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
          if(err) throw err;
          else{
              db.collection("employees").insertOne(newRecord,(err,result)=>{
                  if(err) throw err;
                  else{
                      res.send({insert:success});
                  }
              });
          }
      });
});
module.exports = addEmployee;