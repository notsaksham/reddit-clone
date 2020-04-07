import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/Navbar';
import LoginForm from './components/form';
import SignUp from './components/Signup';
import Post from './components/Post';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      isLoggedIn : false,
      loggedUser : ""
    }
    this.mutatestate = this.mutatestate.bind(this);
  }
  
  componentDidMount(){
    console.log(this.state);
  }

  componentDidUpdate(){
    console.log(this.state);
  }
  
  mutatestate = (value) =>{
    this.setState({
        isLoggedIn:value.isLoggedIn,
        loggedUser:value.loggedUser,
        headertext:value.headertext
    })
  }


  render() {
      return (      
        <div>
         <BrowserRouter> 
          <NavBar value = {this.state}/>
          <Switch>
            <Route path="/" component={Home} exact value= {this.state}/>
            <Route path="/login"  component={() => (<LoginForm  value={this.state} mutateState={this.mutatestate}/>)}/>
            <Route path = "/signup" exact  component ={SignUp} value ={this.state}/>
            <Route path = "/post" component={Post} value={this.state}/>
          </Switch>
        </BrowserRouter>
        </div>
      );
    }
  }
   
  export default App