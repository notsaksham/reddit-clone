import React, { Component } from 'react';
import LoginForm from './components/form';
import NavBar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
//import { response } from 'express';
class App extends Component {

  state  ={
    users:[]
  }

  componentDidMount(){
    this.getusers();
  }

  getusers = _ =>{
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(response =>this.setState({users:response.users}))
      .catch(err => console.error(err)) 
  }

renderuser  = ({id,Name,First,Last,Age}) => <div key = {id}><br />{Name},{First},{Last},{Age}</div>
  
  render() {
    const {users} = this.state;
    return (
      <div className = "myapp">
         <NavBar />
        <LoginForm />
        {users.map(this.renderuser)}
      </div>
    );
  }
}

export default App;