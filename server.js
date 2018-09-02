var express=require("express");
var bodyParser=require("body-parser");
var path= require("path");
var app=express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
var wr=require("./crud/write.js");

app.use(express.static("public"));
app.get('/',function(req,res){

})


app.get('/getStudents',function(req,res){
var toSend=[{"name":"Atharva","course":"GRE"},{"name":"Parv","course":"GRE"}];
res.set('Content-Type', 'text/json');
res.end(JSON.stringify(toSend));
})

app.get('/checkPoint',function(req,res){
var toSend=[{"name":"Atharva","course":"GRE"},{"name":"Parv","course":"GRE"}];
res.set('Content-Type', 'text/json');
res.end(JSON.stringify(toSend));
})

app.post('/addCardEntery',function(req,res){
var cardId=req.param("cardId");
res.end({"status":G,"cardId":cardId});
})

app.post('/addStudent',(req,res)=>{
var student=req.param("student");
  var obj={
    TableName:"StudentDetail",
    Item:student
}
wr.save(obj,res);

})
app.listen(process.env.PORT || 3000);
