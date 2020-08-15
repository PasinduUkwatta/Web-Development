import React, { Component ,useEffect} from "react";

export default class Login extends Component {

    constructor(props) {
        super (props)

        this.state ={
            email: '',
            password: ''
        }
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
                Email :${this.state.email}
                Password : ${this.state.password}`
        )
        event.preventDefault()
        this.props.history.push('/sign-up')

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange}  />
                </div>

                
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        );
    }
}