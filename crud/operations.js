const MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://papa:globalizers10@ds245532.mlab.com:45532/globalizers', (err, client) => {
  if (err) return console.log(err)
  db = client.db('globalizers') // whatever your database name is
})

exports.insert=function(obj,res){
db.collection('students').save(obj, (err, result) => {
    if (err)  res.send(err)
    else
    {
      res.send({"status":true});
    }
    })
}

exports.insert=function(obj){
db.collection('transactions').save(obj, (err, result) => {
    if (err) throw (err)
    else
    {
      return(true);
    }
    })
}


exports.getAllTransactions=(res)=>{
  db.collection('transactions').find().toArray(function(err, results) {
     res.send(JSON.stringify(results));
    })
}

exports.selectAllStudent=function(res)
{

  db.collection('students').find().toArray(function(err, results) {
     res.send(JSON.stringify(results));
    })
}


exports.deleteStudent=function(objD){
db.collection("students").deleteOne(objD, function(err, obj) {
    if (err) return err;
    else return {"status":true};
  });
}

exports.findStudent=function(obj){
db.collection("students").findOne(obj, function(err, result) {
   if (err) throw err;
   else return result;
});
}
