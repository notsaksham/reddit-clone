import React,{Component} from 'react';
import { button,form } from 'react-bootstrap';


class LoginForm extends Component{
   constructor(){
    super();
    this.state={
      Username:'',
      Password:''
    }
  }

  render(){
        return(
        <form className="login-box" action="http://localhost:4000/login" method="POST">
          <div >
            <label htmlFor="username">Username</label>
            <input  className="form-control" type="text" name="username" />
          </div>

          <div>
            <label htmlFor = "password">Password</label>
            <input className="form-control" type="text" name="password"/>
          </div>   

          <button type="submit">Submit</button>
        </form>
      );
    }
}

export default LoginForm; 