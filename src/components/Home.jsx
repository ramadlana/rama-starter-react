import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="col-xl-8">
        <div className="card">
          <div className="card-header">
            <div className="card-actions float-right">
              <div className="dropdown show">
                <a href="#!" data-toggle="dropdown" data-display="static">
                  <i
                    className="align-middle"
                    data-feather="more-horizontal"
                  ></i>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Home Page col-xl-8</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">This is Home Components col-xl-4</div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-header">
            <div className="card-actions float-right">
              <div className="dropdown show">
                <a href="#!" data-toggle="dropdown" data-display="static">
                  <i
                    className="align-middle"
                    data-feather="more-horizontal"
                  ></i>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Home Page with col-xl-4</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">This is Home Components col-xl-4</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
