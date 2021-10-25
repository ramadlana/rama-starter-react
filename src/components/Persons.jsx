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
      id: "id-col",
      columnName: "Name",
      path: "name",
    },
    {
      id: "id-add",
      columnName: "Address",
      path: "address",
    },
    {
      id: "id-phone",
      columnName: "Phone",
      path: "phone",
    },
    {
      id: "id-div",
      columnName: "Division Name",
      path: "divisionId.divisionName",
    },
    {
      id: "id-act",
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
            <h5 className="card-title mb-0">Persons Page</h5>
          </div>
          {/* BODY of MAIN BAR HERE */}
          <div className="card-body">
            {/* Pass Data into Table */}
            <Table
              keyForTableRows="_id"
              tableColumn={this.tableColumnData}
              tableRows={this.state.tableRowsData}
              handleChange={this.handleChange}
            ></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
