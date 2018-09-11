var express=require("express");
var bodyParser=require("body-parser");
var path= require("path");
var app=express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
var dbop=require("./crud/operations.js");
var helper=require("./crud/helper.js");

app.use(express.static("public"));

app.get('/',function(req,res){
})

app.post('/addCardEntery',function(req,res){
var cardId=req.param("cardId");
res.end({"status":G,"cardId":cardId});
})

app.post('/addStudent',(req,res)=>{
var student=req.param("student");
dbop.insert(student,res);
})
app.get('/getAllStudents',(req,res)=>{
  res.set('Content-Type', 'text/json');
  dbop.selectAllStudent(res);
});

app.get('/addTransaction',function(req,res){
if(req.param("punch")!=undefined)
{
  var punch=req.param("punch");
  if(punch.CardID==undefined)
  {
    res.send("R");
  }
    else if(punch.CardID!=undefined||punch!=undefined){
      var student=dbop.findStudent({"CardID":punch.CardID});
      punch.PersonalContact=student.PersonalContact;
      punch.Name=student.Name;
      dbop.insert(punch);
      res.send(helper.CheckDefaulter(punch,student));
      }
}
else{
  res.send("R");
}

});
app.get('/getAllTransactions',(req,res)=>{
  res.set('Content-Type', 'text/json');
  dbop.getAllTransactions(res);
})
app.listen(process.env.PORT || 3000);
