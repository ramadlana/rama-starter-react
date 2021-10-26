import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import NotFound from "./Notfound";
import Person from "./Persons";
import PersonDetail from "./PersonDetail";

const Contents = () => {
  return (
    <React.Fragment>
      <div className="page-body">
        <div className="container-fluid">
          <div className="row row-deck row-cards">
            <Switch>
              <Route path="/persons/:id" component={PersonDetail}></Route>
              <Route path="/persons" exact component={Person}></Route>
              <Route path="/notfound" exact component={NotFound}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Redirect from="/" exact to="/home"></Redirect>
              <Redirect to="/notfound"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contents;
