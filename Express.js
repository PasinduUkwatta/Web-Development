
//creating a server from express
var express = require('express');
var http =require('http');
var fs =require('fs');

var app = express();
var server = http.createServer(app);

app.get('/',function(req,res){
    //this message is shown in the main page of the server
    res.send('express works')
});

app.get('/tasks',function(req,res){
    //this will show in the tasks page of the server
    //we can call the task page by putting/tasks after the localhost addres
   
    fs.readFile('./db.json',function(err,data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    });
});

server.listen(3000,function(){
    console.log("server is listening in the port 3000");

})
