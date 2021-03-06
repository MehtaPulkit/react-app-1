import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false,
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };
// Pushes to homepage

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} exact to="/" header>
              <img src="assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/events" name="Events" />
            <Menu.Item as={NavLink} to="/people" name="People" />
            <Menu.Item as={NavLink} to="/test" name="Test" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
            {authenticated ? (
              <SignedInMenu signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar)
// Used higherorder component withRouter