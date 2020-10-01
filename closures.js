function retirement(retirementAge){
    var a ='years left until retirenmnet'
    return function(yearOfBirth){
        var age =2020 -yearOfBirth
        console.log(retirementAge-age+a)
    }
}

var retirementUs = retirement(66)
retirementUs(1996)

retirement(57)(2000) 

function interviewQuestions(job){
    return function (name) {
        if(job=='designer'){
            console.log("how many years of experinece")

        }else if (job=="teacher"){
            console.log("How many schools do you teach ?")

        }
    }
}