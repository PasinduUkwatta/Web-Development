import React, { Component } from "react";
import axios from "axios"
import Profile from './profile.component'
import {connect} from "react-redux"


class Login extends Component {
   

    constructor(props) {
        super (props)

        this.state ={
            email: '',
            password: '',
            data:[]
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
       
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }


       submitHandler = e => {
        e.preventDefault()
       
        console.log(this.state);
        axios.post('/sign-in',this.state,{
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        } 
        })
            .then(response => {
                console.log(response)
                this.setState({data:response.data});
                console.log(this.state)
               
                
               
                
                if(response.data==[]){
                    this.props.history.push('/payment')
                    console.log("User did not have any payment yet")
                }

                else if(response.data =="user details are invalid"){
                    this.props.history.push('/sign-up')
                    console.log("Please Try Again")
                                       
                }
                
                else{
                    
                    console.log("Welcome to the site")
                    this.props.history.push({
                        pathname: '/profile',
                        state: { email: this.state.email,
                                password: this.state.password }
                               
                            }) 

                }
               

            })
            .catch(error => {
                console.log(error.response)
               
                console.log("Please Try Again")
                this.props.history.push('/sign-in')
            }
            
        )

        }
  

    render() {
        const{email, password} = this.state
     

        return (

            <form onSubmit={this.submitHandler}  >
            
                <h3>Sign In</h3>

                

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    type="email" 
                    name ="email"
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={this.changeHandler}  />
                </div>

                
                <button 
                onClick={(e)=>this.props.setName(e)}
                type="submit" 
                className="btn btn-primary btn-block">
                Sign In
                </button>
                
            </form>
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        email: state.email,
        password: state.password

     }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setName(){
            dispatch({type:"SET_NAME"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)