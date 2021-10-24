import axios from "axios";
import _ from "lodash";
import React from "react";
import Table from "./common/Table";

class Person extends React.Component {
  state = {
    tableRowsData: [],
    maxPerPage: 10,
    currentPage: 1,
  };

  tableColumnData = [
    {
      columnName: "Name",
      path: "name",
    },
    {
      columnName: "Address",
      path: "address",
    },
    {
      columnName: "Phone",
      path: "phone",
    },
    {
      columnName: "Division Name",
      path: "divisionId.divisionName",
    },
    {
      columnName: "Action",
      componentAsPath: (data) => (
        <div className="btn-group btn-group-sm">
          <button
            type="button"
            className="btn btn-info dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Action
          </button>
          <div className="dropdown-menu">
            <button
              className="dropdown-item "
              onClick={() => this.handleDelete(data)}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    },
  ];

  // Handling Event
  handleDelete = (data) => {
    const copytableRowsData = [...this.state.tableRowsData];
    _.remove(copytableRowsData, { _id: data._id });
    this.setState({ tableRowsData: copytableRowsData });
  };

  handleChange = async (e) => {
    const value = e.target.value;
    const options = {
      method: "GET",
      url:
        "http://localhost:8000/example/show-person-division-pagination/" +
        `${this.state.currentPage}/${value}`,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczYzZlOGU0ODJiZDJjNjhjMWRlOGEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM0OTc3NTk1LCJleHAiOjE2NjY1MTM1OTV9.D9N49GIXXySANYe3vgHqEkfTX4dH2KdtXb6gNIg0IMg",
      },
    };

    const { data } = await axios.request(options);
    this.setState({ tableRowsData: data.message.data });
  };

  async componentDidMount() {
    const options = {
      method: "GET",
      url:
        "http://localhost:8000/example/show-person-division-pagination/" +
        `${this.state.currentPage}/${this.state.maxPerPage}`,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczYzZlOGU0ODJiZDJjNjhjMWRlOGEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM0OTc3NTk1LCJleHAiOjE2NjY1MTM1OTV9.D9N49GIXXySANYe3vgHqEkfTX4dH2KdtXb6gNIg0IMg",
      },
    };

    const { data } = await axios.request(options);
    this.setState({ tableRowsData: data.message.data });
  }

  render() {
    return (
      <div className="col-xl-12">
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
            <h5 className="card-title mb-0">Persons Page</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">
            This is Persons Components
            <div className="d-flex">
              <div className="text-muted">
                Show
                <div className="mx-2 d-inline-block">
                  <input
                    type="number"
                    name="maxPerPage"
                    className="form-control form-control-sm"
                    defaultValue={10}
                    size={1}
                    aria-label="count per Page"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                entries
              </div>

              <div className="ms-auto text-muted md-2">
                Search By:
                <div className="ms-2 d-inline-block">
                  <select className="form-select form-select-sm">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="ms-2 d-inline-block">
                  <input
                    type="text"
                    placeholder="text to search here...."
                    className="form-control form-control-sm"
                    aria-label="Search invoice"
                  />
                </div>
              </div>
            </div>
            {/* Pass Data into Table */}
            <Table
              keyForTableRows="_id"
              tableColumn={this.tableColumnData}
              tableRows={this.state.tableRowsData}
            ></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
