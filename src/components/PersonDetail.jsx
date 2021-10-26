import React from "react";

const PersonDetail = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="col-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Hello {props.match.params.id}</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group mb-3 ">
                <label className="form-label">Email address</label>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Title Home col-xl-4</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">Content Components col-xl-4</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonDetail;
