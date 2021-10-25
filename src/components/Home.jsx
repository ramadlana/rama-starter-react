import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="col-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Title Of Home Page col-xl-8</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">
            Content Home Components col-xl-8
            <div className="row">
              <div className="col-2">
                <a
                  href="#!"
                  className="btn btn-primary d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                >
                  {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                  App Modal
                </a>
                <a
                  href="#!"
                  className="btn btn-primary d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                  aria-label="Create new report"
                >
                  {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </a>
              </div>
            </div>
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

      {/* MODAL START */}
      <div
        class="modal modal-blur fade"
        id="modal-report"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New Form</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Component Here</div>
            <div class="modal-body">Component 2 Here</div>
            <div class="modal-footer">
              <a
                href="#!"
                class="btn btn-link link-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <a
                href="#!"
                class="btn btn-primary ms-auto"
                data-bs-dismiss="modal"
              >
                Create new report
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL END */}
    </React.Fragment>
  );
};

export default Home;
