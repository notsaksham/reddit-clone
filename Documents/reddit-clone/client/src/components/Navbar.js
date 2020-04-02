import React, { Component } from "react";
import {Link,withRouter} from 'react-router-dom';
import { Navbar,Button} from 'react-bootstrap';

class NavBar extends Component {
  
  OnLogin = () => {
    return(this.props.history.push('/login'));
  }

  render() {
    return (
      <Navbar className = "mynavbar">
        <Link to='/'>Reddit Clone</Link>
        <Button onClick={this.OnLogin} className="Login">Log in</Button>
      </Navbar>
    );
  }
}
 
export default withRouter(NavBar);