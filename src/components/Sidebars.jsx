import { NavLink } from "react-router-dom";
import React from "react";

const Sidebars = () => {
  return (
    <React.Fragment>
      <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="navbar-brand navbar-brand-autodark">
            <a href=".">
              <img
                src="/static/logo-white.svg"
                width={110}
                height={32}
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="navbar-nav pt-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/home */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="5 12 3 12 12 3 21 12 19 12" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> Home </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/persons">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/home */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="5 12 3 12 12 3 21 12 19 12" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> Persons </span>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-base"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/package */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                      <line x1={12} y1={12} x2={20} y2="7.5" />
                      <line x1={12} y1={12} x2={12} y2={21} />
                      <line x1={12} y1={12} x2={4} y2="7.5" />
                      <line x1={16} y1="5.25" x2={8} y2="9.75" />
                    </svg>
                  </span>
                  <span className="nav-link-title"> Interface </span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <a className="dropdown-item" href="./empty.html">
                        Empty page
                      </a>
                      <div className="dropend">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-authentication"
                          data-bs-toggle="dropdown"
                          role="button"
                          aria-expanded="false"
                        >
                          Authentication
                        </a>
                        <div className="dropdown-menu">
                          <a href="./sign-in.html" className="dropdown-item">
                            Sign in
                          </a>
                          <a href="./sign-up.html" className="dropdown-item">
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebars;
