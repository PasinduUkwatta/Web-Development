//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./route/route');
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to the database mongoDB @ 27017')
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in the database connection :'+err)
    }
    
})



//define the port number
const port=3000;

//adding middle ware -cors
app.use(cors());

//body - parser 
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')))


//routes
app.use('/api',route);


//testing server
app.get('./',(req,res)=>{
    res.send('foober');
})


app.listen(port,()=>{
    console.log("server started at port :"+port);
})
