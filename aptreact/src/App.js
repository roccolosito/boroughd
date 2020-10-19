import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import Landing from "./pages/Landing";
import Newsfeed from "./pages/Newsfeed";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/Newsfeed" component={Newsfeed} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/About" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;