import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import NotFound from "./Notfound";
import Person from "./Persons";
import Write from "./Write";

const Contents = () => {
  return (
    <React.Fragment>
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Main Title</h1>

          <div className="row">
            <Switch>
              <Route path="/write" exact component={Write}></Route>
              <Route path="/persons" exact component={Person}></Route>
              <Route path="/notfound" exact component={NotFound}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Redirect from="/" exact to="/home"></Redirect>
              <Redirect to="/notfound"></Redirect>
            </Switch>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contents;
