import React from "react";

import { Component } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../consts";

class Register extends Component {
    state = {email:"",username:"",password:""  } 

    componentDidMount() {
        if (this.props.user) {
          const {  email, username ,password} = this.props.user;
          this.setState({   email, username,password });
        }
      }

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      createuser = e => {
        e.preventDefault();
        axios.post(API_URL+"/register", this.state)
      };

      defaultIfEmpty = value => {
        return value === "" ? "" : value;
      };


    render() { 
        return (

            <Form onSubmit={ this.createuser}>
        
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="phone">username:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>


        );
    }
}
 
export default Register;