import React,{Component} from 'react'

class LoginForm extends Component{
    render(){
        return(
            <form>
            <label>
              Name:
              <input type = 'text'/>
            </label>
            <label>
              Password
              <input type ='text'/>
            </label>   
            <input type = 'submit'/>
          </form> 
        );
    }
}

export default LoginForm; 