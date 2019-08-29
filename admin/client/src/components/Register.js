import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../helpers/api.js';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { username, password, department } = this.state;

      const result = await api.post('/register', {
        username,
        password,
        department
      });
      localStorage.setItem('token', result.data.token);
      this.props.history.push('/users');
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            onChange={this.handleChange}
            placeholder='Username'
            value={this.state.username}
          />
          <input
            type='password'
            name='password'
            onChange={this.handleChange}
            placeholder='Password'
            value={this.state.password}
          />
          <input
            type='text'
            name='department'
            onChange={this.handleChange}
            placeholder='Department'
            value={this.state.department}
          />
          <button type='submit'>Sign Up</button>
        </form>
      </>
    );
  }
}

export default withRouter(Register);
