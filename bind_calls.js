var john ={
    name :'john',
    age :24,
    job:"teacher",
    prsentation :function (style,timeOfDay) {
        if(style=='formal'){
            console.log('Good '+timeOfDay+',Ladies and gentlemen ')
        }
        else if (style=="friendly"){
            console.log('hey whts up '+timeOfDay+',my friend ')
        }
    }
}

john.prsentation('formal','morning')

var emily={
    name :'emily',
    age :34,
    job:'desinegner'
}
john.prsentation.call(emily,'friendly','afternoon')

var johnFriendly =john.prsentation.bind(john,'friendly')

johnFriendly('morning')
johnFriendly('night')

var emilyFormal = john.prsentation.bind(emily,'formal')

emilyFormal('afternoon')

