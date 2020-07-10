import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Form, Input,FormGroup,Label} from 'reactstrap';
 function App() {
  return (
    <Form className="login-form">
      <h1>
          <span className ="font-weight-bold">User Login</span>
      </h1>
        <h2 className="text-center">
            Welcome !
        </h2>
        <FormGroup>
            <label>E-mail</label>
            <input type="email" placeholder ="Email"/>
        </FormGroup>

        <FormGroup>
            <label>Password</label>
            <input type="password" placeholder ="Password"/>
        </FormGroup>
        <Button className ="btn-lg btn-dark btn-block">Log in</Button>
    </Form>
  );
}

export default App;
