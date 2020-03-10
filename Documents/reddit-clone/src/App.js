import React, { Component } from 'react';
import LoginForm from './form';
import NavBar from './Navbar';
import "bootstrap/dist/css/bootstrap.css"
class App extends Component {
  render() {
    return (
      <div>
         <NavBar />
         <LoginForm /> 
      </div>
    );
  }
}

export default App;