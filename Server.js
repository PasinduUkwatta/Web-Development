var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();




//code for creating the server in node js
    var server = http.createServer(function(req,res){
    
    //Event triggeer
        eventEmitter.emit('someone requested','Test'); 
    res.end("server works!!!"); 
});


//event listner
eventEmitter.on('someone requsted',function(){
    console.log('a request has been done on the server !!',data)
});
/*

listen method have to arguments
/first one is port number 
second is the host name
default name is local host
but we can give our name if we need to do it

*/
server.listen(3000,'localhost',function(){
    console.log("server stared on port no : 3000");
});