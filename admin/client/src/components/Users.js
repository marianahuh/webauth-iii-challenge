import React from 'react';
import withAuth from '../helpers/auth.js';
import api from '../helpers/api';

class Users extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const results = await api.get('/users');
      this.setState({
        users: results.data
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user, i) => {
            return (
              <div key={i}>
                <h2>{user.username}</h2>
                <p>{user.department}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(Users);
