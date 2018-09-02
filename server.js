var express=require("express");
var bodyParser=require("body-parser");
var path    = require("path");
app=express();
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

app.post('/addRecord',function(req,res){
var cardId=req.param("cardId");
res.end({"status":G,"cardId":cardId});
})

app.listen(process.env.PORT || 3000);
