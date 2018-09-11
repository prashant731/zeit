exports.CheckDefaulter=(punch,student)=>{
var expire=parseInt(student.DueDate.split("/").join(""));
var date= new Date();
var today=date.getDate()+""+date.getMonth()+""+date.getFullYear();
var today=parseInt(today);
if(today<expire)
{
return "G";
}

else if(today==expire||(today+1)==expire)
{
return "Y";
}

else
{
return "R";
}
}
