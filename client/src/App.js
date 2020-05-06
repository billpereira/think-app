import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GroupsPage from "./components/GroupsPage";
import "./App.css";

const isAuthenticated = () => localStorage.getItem("auth") === true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/groups" component={GroupsPage} />
    </Router>
  );
}

export default App;
