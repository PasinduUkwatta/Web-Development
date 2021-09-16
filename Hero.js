import React from "react"

function Hero({heroname}){
    if(Error){
        throw new Error("Not A hero")
    }



    return(
        <div>
            {heroname}
        </div>
    )
}

export default Hero