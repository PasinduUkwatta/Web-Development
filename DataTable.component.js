 import React from 'react'
 import axios from "axios";

class DataTable extends React.Component{

    constructor(props) {
        super (props)

        this.state ={
            paymentDetails:'',
            userPaymentDetails:''


        }



        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
    }

    componentDidMount() {
        let auth = localStorage.getItem('accessTokenLogin');
        console.log(auth)

        console.log(typeof(auth))
        axios.post('protected',null,{
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': "Bearer" + " " + auth,
            }
        })
            .then(responce=>{
                console.log(responce)

                var user_email =(responce.data.user_email).toString()
                var data =user_email
                console.log(user_email)
                console.log(typeof (user_email))
                axios.post('user-payment-details',{
                    email: user_email,

                })
                    .then(responce=>{
                        console.log(responce)
                        this.setState({userPaymentDetails:responce.data.result})
                        console.log(this.state.userPaymentDetails)



                    })

            })





        if (auth === null) {
            console.log("User Details is not Verified")
            window.location = "/sign-in"
            console.log("User Details is not Verified")
        } else {


            const userPayments = {
                paymentDetails: localStorage.getItem('paymentDetails'),
                setState:localStorage.getItem('paymentDetails'),

            }

            let userPaymentDetails = {
                userPaymentDetails: userPayments.paymentDetails
            }


            console.log("Payments details to show")
            console.log(userPaymentDetails)




        }



    }



    render() {





        let Payments = JSON.parse(localStorage.getItem('paymentDetails'));

        if (Payments === null) {
            console.log("You do not have any Payment Yet")
            window.location = "/sign-in"

        } else {


            let Payments = JSON.parse(localStorage.getItem('paymentDetails'));
            console.log(Payments)
            console.log(typeof (Payments))
            var resultArray = Object.keys(Payments).map((key) => [Number(key), Payments[key]])

            //var stringResult =JSON.stringify(Payments)
            //console.log(stringResult)
            //console.log(typeof (Payments))
            //console.log(resultArray)
            for(let i = 0;i< resultArray.length;i++){
                //console.log(resultArray[i])
                for(let j = 1;j<2;j++){
                    //console.log(resultArray[i][j])
                    for(let k = 0;k<5;k++) {
                        //console.log(resultArray[i][j][k])
                    }
                        return (

                            <div>

                                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                                    <div className="ui segment"
                                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <table className="ui celled selectable table">
                                            <thead>
                                            <tr>
                                                <th className="center  aligned"> Payment ID</th>
                                                <th className="center  aligned">Payment Type</th>
                                                <th className="center  aligned">Amount</th>
                                                <th className="center  aligned">User Email</th>
                                                <th className="center  aligned">User Name</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className ="ui celled inverted fixed single line table ">
                                                <th className="center aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[0]}


                                                        </li>
                                                    ))}
                                                </th>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[1]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[2]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[3]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[4]}

                                                        </li>
                                                    ))}
                                                </td>

                                            </tr>


                                            </tbody>
                                        </table>




                                        <div>


                                        </div>


                                    </div>

                                </div>
                                <br/>


                            </div>









                        )

                    }
                }
            }





        }

}

export default DataTable