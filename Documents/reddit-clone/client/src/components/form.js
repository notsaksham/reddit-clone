import React,{Component} from 'react'
import { Form,Button } from 'react-bootstrap';
class LoginForm extends Component{
    render(){
        return(
          <Form className="Myform">
            <Form.Group >
              <Form.Label>
                UserName
              </Form.Label>  
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                FirstName
              </Form.Label>
              <Form.Control type="text" placeholder="Firstname" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                LastName
              </Form.Label>
              <Form.Control type="text" placeholder="Lastname" />
            </Form.Group>

            <Form.Group >
              <Form.Label>
                Age
              </Form.Label>
              <Form.Control type="text" placeholder="Age" />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
}

export default LoginForm; 