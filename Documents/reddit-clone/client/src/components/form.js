import React,{Component} from 'react';
import { Form,Button } from 'react-bootstrap';
class LoginForm extends Component{
    
  constructor(){
    super();
    this.state={
      user:{
        Username:'Username',
        Firstname:'Firstname',
        Lastname:'Lastname',
        Age:20
    }
  }
}
  
  render(){
        return(
          <Form className="Myform">
            <Form.Group >
              <Form.Label>
                UserName
              </Form.Label>  
              <Form.Control input value={this.state.user.Username} type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                FirstName
              </Form.Label>
              <Form.Control input value={this.state.user.Firstname} type="text" placeholder="Firstname" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                LastName
              </Form.Label>
              <Form.Control input value={this.state.user.Lastname} type="text" placeholder="Lastname" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                Age
              </Form.Label>
              <Form.Control input value={this.state.user.Age} type="text" placeholder="Age" />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
}

export default LoginForm; 