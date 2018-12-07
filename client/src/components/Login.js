import React, { Component } from 'react';
import axios from 'axios';



const initialUser = {
  username: '',
  password: '',
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
    };
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/login", this.state.user)
      .then(res => {
        console.log(res.data);
        if (res.status === 201) {
          this.setState({
            user: { ...initialUser },
            message: "Login Successful!"
          });
          localStorage.setItem("jwt", res.data.token);
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          user: { ...initialUser },
          message: "Login Failed"
        });
      });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>
        { this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
      </div>

    );
  }
}
