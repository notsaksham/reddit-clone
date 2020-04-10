import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'


import Header from './Header';

class LoginForm extends Component{
   constructor(){
    super();
    this.state={
      Username:'',
      Password:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleuser = this.handleuser.bind(this);
    this.handlepass = this.handlepass.bind(this);
    this.onlogin = this.onlogin.bind(this);
  }

  componentDidMount(){
    console.log(this.props.value)
  }

  handlepass = (e) =>{
    this.setState(
      {
        Password : e.target.value}
    );
  }

  handleuser =(e) =>{
    this.setState(
      {
        Username : e.target.value}
    );
  }

  onlogin = () =>{
    const value={
      isLoggedIn : true,
      loggedUser : this.state.Username
    }
    this.props.mutateState(value);
  }


  onSubmit = (e) =>{

    e.preventDefault();
    // console.log(JSON.stringify(this.state));
    fetch('http://localhost:4000/login',{
      method:"POST",
      headers: {
        Accept: 'application/json','Content-Type': 'application/json',
    },
      body : JSON.stringify(this.state)
    })
    .then(response =>{
      console.log(response);
      if (response.status === 200){
          alert('Login Successful ');
          this.onlogin();
          this.props.history.push("/");
      }
      else if(response.status === 201){
        alert ('Incorrect Details Login Unsucessful');
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  render(){
    var head = "Log In";
        return(
        <div>
          <Header value ={head}/>
          <form className="login-box" >
            <div >
          <label htmlFor="username">Username</label>
              <input  className="form-control" type="text" name="username"  value = {this.state.Username} onChange={this.handleuser}/>
            </div>

            <div>
              <label htmlFor = "password">Password</label>
              <input className="form-control" type="text" name="password"  value = {this.state.Password} onChange={this.handlepass}/>
            </div>   

            <button type="submit" onClick ={this.onSubmit}>Submit</button>
          </form>
        </div>
      );
    }
}

export default withRouter(LoginForm); 