import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import { Navbar,Button} from 'react-bootstrap';

class NavBar extends Component {
  
  OnLogin = () => {
    if(this.props.value.isLoggedIn === false){
    return(this.props.history.push('/login'));
    }
  }

  OnSignup = () =>{
    if(this.props.value.isLoggedIn === false){
      return(this.props.history.push('/signup'));
      }
    else
    {
      //Enter code to clear state values
      //if error with push enclose component in withrouter from react router dom in export statement
      return(this.props.history.push('/'));
    }
  }

  onlogout = () =>{
    const value={
      isLoggedIn : false,
      loggedUser : ""
    }
    this.props.mutateState(value);
  }

  Onuser = () => {
    // console.log(this.props.value.loggedUser)
      this.props.history.push(`/users/${this.props.value.loggedUser}`)
  }

  render() {

    var textbox1 = "Log In"
    var textbox2 = "Sign Up"
    const data = this.props.value;
    if (data.isLoggedIn === true){
        textbox1 = data.loggedUser;
        textbox2 = "Log Out";
        return (
          <Navbar className = "navbar navbar-dark navbar-static-top ">
            <Link to='/'>Reddit Clone</Link> 
            <Button onClick={this.Onuser} className="Login">{textbox1}</Button>
            <Button onClick={this.onlogout} className="Login">{textbox2}</Button>
          </Navbar>
    );
  }
  else{
    return (
      <Navbar className = "navbar navbar-dark navbar-static-top ">
        <Link to='/'>Reddit Clone</Link> 
        <Button onClick={this.OnLogin} className="Login">{textbox1}</Button>
        <Button onClick={this.OnSignup} className="Login">{textbox2}</Button>
      </Navbar>
  );
  }
}
}
 
export default withRouter(NavBar);