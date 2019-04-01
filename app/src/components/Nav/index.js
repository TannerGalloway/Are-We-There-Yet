import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import axios from "axios";

class Example extends Component {

  state = {
    trips: []
}
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }
  


  
  render() {
    
  return (
      <div>
        <Navbar style={{ backgroundColor: "#f5f5f5" }} light expand="md">
          <NavbarBrand href="/">Welcome,</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/trip">Trip</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                {localStorage.getItem("token") ? <NavLink href="/savedTrips">Recent Trips</NavLink> : null}
              </NavItem>
              <NavItem>
                <NavLink href="register">Sign in/ Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
        </Navbar>
      </div>
    );
  }
}

export default Example;