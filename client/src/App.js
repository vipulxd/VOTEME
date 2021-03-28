import "./App.scss";

import Login from "./component/login";
import {PrivateRoute} from "./component/routing/PrivateRoute";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import store from "./redux/Store";
import {Provider} from "react-redux";

// install axios and work with the whole framework

function App() {
  return (
    <div className="main-outer">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <PrivateRoute exact path="/user/:userid" />
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
