import React from 'react'
import UserForm from './UserForm'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  createUser = (dateUser) => {
    console.log(dateUser);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App