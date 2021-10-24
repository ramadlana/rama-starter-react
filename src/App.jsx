import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home";
import Sidebars from "./components/Sidebars";
import Person from "./components/Persons";
import notfound from "./components/Notfound";

class App extends React.Component {
  date = 2021;
  render() {
    return (
      <div className="wrapper">
        {/* <Login></Login> */}
        <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
          <Sidebars></Sidebars>
        </aside>
        <div className="page-wrapper">
          <div className="container-fluid">
            {/* Page title */}
            <div className="page-header d-print-none">
              <div className="row align-items-center">
                <div className="col">
                  {/* Page pre-title */}
                  <div className="page-pretitle">{this.date}</div>
                  <h2 className="page-title">StarterKit v1</h2>
                </div>
                {/* Page title actions */}
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-fluid">
              <div className="row row-deck row-cards">
                <Switch>
                  <Route path="/persons" exact component={Person}></Route>
                  <Route path="/notfound" exact component={notfound}></Route>
                  <Route path="/home" exact component={Home}></Route>
                  <Redirect from="/" exact to="/home"></Redirect>
                  <Redirect to="/notfound"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
          <footer className="footer footer-transparent d-print-none">
            <div className="container">
              <div className="row text-center align-items-center flex-row-reverse">
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      Copyright © 2021
                      <a href="." className="link-secondary">
                        Tabler
                      </a>
                      . All rights reserved.
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="./changelog.html"
                        className="link-secondary"
                        rel="noopener"
                      >
                        v1.0.0
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
