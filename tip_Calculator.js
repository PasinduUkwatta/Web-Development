function tipCalculator(amount){
    if(amount<50){
        return amount*0.2
    }else if (amount>=50&&amount<200){
        return amount*0.15
    }else if (amount>=200){
        return amount*0.1
    }else {
        return 'Please enter the Amount again'
    }
}

var bills =[124,48,268]
var tips =[tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])]
var total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(tips)
console.log(total)

