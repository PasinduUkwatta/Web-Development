function hello(){
    console.log("welcome to the javascript coding");
    console.log("function called from the function ");
}

hello();

//we doesnt need to declare the variable type
//automatically declare the variable type

function Calculator(a,b){

    var add = a+b;
    var sub = a-b;
    var mul = a*b;
    var div = a/b;
 
    console.log("addition is :"+add);
    console.log("substraction is :"+sub);
    console.log("multiplication is :"+mul);
    console.log("division is :"+div);

};

Calculator(20,10);