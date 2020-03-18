import React, { Component } from "react";
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,NavbarText  } from 'react-bootstrap';
class NavBar extends Component {
  render() {
    return (
      <Navbar className = "navbar navbar-expand-sm bg-dark navbar-dark sticky-top" >Reddit-Clone
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse> */}
    </Navbar>
    );
  }
}
 
export default NavBar;