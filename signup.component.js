import React, { Component,useEffect,useState } from "react";


class SignUp extends Component {


    constructor(props) {
        super (props)

        this.state ={
            firstName:'',
            lastName :'',
            email:'',
            password: ''
        }
    }
    
    handleFirstNameChange=(event)=>{
        this.setState({
            firstName: event.target.value

        })
    }

    handleLastNameChange=(event)=>{
        this.setState({
            lastName: event.target.value

        })
    }

    handleEmailChange=(event)=>{
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }



    handleSubmit =(event)=>{
        alert(`
                First Name : ${this.state.firstName} 
                Last Name : ${this.state.lastName}
                Email :${this.state.email}
                Password : ${this.state.password}`
        )
        event.preventDefault()
        this.props.history.push('/sign-in')

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={this.state.firstname} onChange={this.handleFirstNameChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Sign Up</button>

            </form>
        )
    }
}


export default (SignUp)