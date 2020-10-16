import React from 'react'
import axios from "axios";

class PaymentTable extends React.Component{

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

        console.log(typeof (auth))
        axios.post('protected', null, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': "Bearer" + " " + auth,
            }
        })
            .then(responce => {
                console.log(responce)

                var user_email = (responce.data.user_email).toString()

                console.log(user_email)
                console.log(typeof (user_email))
                axios.post('user-payment-details', {
                    email: user_email,

                })
                    .then(responce => {
                        console.log(responce)
                        this.setState({userPaymentDetails: responce.data.result})
                        console.log(this.state.userPaymentDetails)


                    })

            })
    }

    render() {
        const{userPaymentDetails} = this.state
        console.log(userPaymentDetails)
        console.log(typeof (userPaymentDetails))
        var resultArray = Object.keys(userPaymentDetails).map((key) => [Number(key), userPaymentDetails[key]])


        return(
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <table className="ui  table">
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
                        <tr className ="ui celled  fixed single line table ">
                            <th className="center aligned">

                                {resultArray.map((data,index)=>(
                                    <li key={index}>
                                        {data[1][0]}


                                    </li>
                                ))}
                            </th>

                            <td className="left aligned">

                                {resultArray.map((data,index)=>(
                                    <li key={index}>
                                        {data[1][1]}

                                    </li>
                                ))}
                            </td>

                            <td className="left aligned">

                                {resultArray.map((data,index)=>(
                                    <li key={index}>
                                        {data[1][2]}

                                    </li>
                                ))}
                            </td>

                            <td className="left aligned">

                                {resultArray.map((data,index)=>(
                                    <li key={index}>
                                        {data[1][3]}

                                    </li>
                                ))}
                            </td>

                            <td className="left aligned">

                                {resultArray.map((data,index)=>(
                                    <li key={index}>
                                        {data[1][4]}

                                    </li>
                                ))}
                            </td>

                        </tr>


                        </tbody>
                    </table>

                </div>
            </div>
        )


    }
}

export default PaymentTable