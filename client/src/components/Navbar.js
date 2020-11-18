import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logoi from "../images/logosubaway.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
        <Router>
          <MDBNavbar color="" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
              <img className="subLogo" src={logoi} alt="subawaylogo" />

            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink id="navStyle" to="/">Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBLink id="navStyle" to="/member">Member</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <LogoutButton />
                </MDBNavItem>
                <MDBNavItem>
                  <LoginButton />
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </header>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;