//this is a example for creating functions in node js

function hello(name){
    return "hello "+name;
}

function add(a,b){
    return "answer is "+(a+b);
}

function mul(a,b){
    return "answer is"+(a*b);
}


//this is the anonymuoes functions
//this function does not have any name
//it initalize to the variable

var sub =function(a,b){
    return "answer is"+(a-b);
}

console.log(hello("pasindu"));
console.log(add(10,20));
console.log(mul(5,6));
console.log(sub(10,6));