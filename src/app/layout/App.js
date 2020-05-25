import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/eventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/peopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/userDetailed/UserDetailedPage";
import EventForm from "../../features/event/eventForm/EventForm";
import TestComponent from "../../features/testArea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route exact path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
        <Route />
      </Fragment>
    );
  }
}

export default withRouter(App);
// The App consists of all the components of the application 
// Consists of all the routing and features like exact , {[,]} multiple routes to same page,  path="/(.+)"
// Switch to control the switching of routes with same component reference
