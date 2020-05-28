//this is the way of reading the file in node js
//we need to call toString() method to take the string 
//else we get a buffer without the string

var fs = require('fs');

fs.writeFile("./Hello.txt",'how are you ?',function(err){
   if(!err){
    fs.readFile('./Hello.txt',function(err,data){
        if(!err){
            //toString() method is called for making the string from the buffer
            console.log(data.toString());
        }
        });

    

}



});