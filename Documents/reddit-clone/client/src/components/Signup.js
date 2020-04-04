import React,{Component} from 'react';


class SignUp extends Component{
   constructor(){
    super();
    this.state={
      Username:'',
      Password:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleuser = this.handleuser.bind(this);
    this.handlepass = this.handlepass.bind(this);
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

  onSubmit = (e) =>{
    e.preventDefault(); 
    fetch(`http://localhost:4000/users/add?username=${this.state.Username}&password=${this.state.Password}`)
    .then(res => {
        console.log(res);
        if(res.status === 200 ){
            alert("New login created");
            this.props.history.push("http://localhost:3000/home");
        }
        else if(res.status === 201){
            alert("Failed to create user");
        }
    })  
    .catch(err => console.log(err))
  }

  render(){
        return(
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

      );
    }
}

export default SignUp; 