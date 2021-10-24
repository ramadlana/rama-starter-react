import { NavLink } from "react-router-dom";
import React from "react";

const Sidebars = () => {
  return (
    <React.Fragment>
      {/* <!-- START SIDEBAR --> */}
      <nav id="sidebar" className="sidebar">
        <div className="sidebar-content">
          <a className="sidebar-brand" href="index.html">
            <i className="align-middle" data-feather="box"></i>
            <span className="align-middle">Sidebars Comp</span>
          </a>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Main</li>
            <li className="sidebar-item">
              <a
                href="#dashboards"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="sliders"></i>
                <span className="align-middle">Dashboard</span>
              </a>
              <ul
                id="dashboards"
                className="sidebar-dropdown list-unstyled collapse"
                data-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <NavLink
                    className="sidebar-link"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink
                    className="sidebar-link"
                    aria-current="page"
                    to="/persons"
                  >
                    List Persons
                  </NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink
                    className="sidebar-link"
                    aria-current="page"
                    to="/write"
                  >
                    Write
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div className="sidebar-bottom d-none d-lg-block">
            <div className="media">
              <div className="media-body">
                <h5 className="mb-1">Hidayah Ramadlana</h5>
                <div>
                  <i className="fas fa-circle text-success"></i> Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- END SIDEBAR --> */}
    </React.Fragment>
  );
};

export default Sidebars;
