import React from "react";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*     <Route path="/home-light" component={HomeLight} />
  <Route path="/rtl-home-light" component={RtlHomeLight} />*/}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
