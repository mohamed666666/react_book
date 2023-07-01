import React from "react";
import axios from "axios";
import { Component } from "react";


class Login extends Component {
    state = {email:"",password:""  } 

    componentDidMount() {
        if (this.props.user) {
          const {  email, password} = this.props.user;
          this.setState({   email,password });
        }
      }

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      createuser = e => {
        e.preventDefault();
        axios.post(API_URL+"/login", this.state)
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
 
export default Login;