import axios from "axios";
import _ from "lodash";
import React from "react";
import Table from "./common/Table";

// params for Axios
const apiHost = "http://localhost:8000";
const apiEndpoint = "/example/show-person-division-searching-sort-pagination";
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczYzZlOGU0ODJiZDJjNjhjMWRlOGEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM0OTc3NTk1LCJleHAiOjE2NjY1MTM1OTV9.D9N49GIXXySANYe3vgHqEkfTX4dH2KdtXb6gNIg0IMg";

class Person extends React.Component {
  state = {
    tableRowsData: [],
    // Default value searchBy must be filled for searching
    searchBy: "name",
    searchQuery: "",
    maxPerPage: 10,
    currentPage: 1,
    sortBy: "",
  };

  tableColumnData = [
    {
      id: "id-col",
      columnName: "Name",
      path: "name",
      searchAble: true,
    },
    {
      id: "id-add",
      columnName: "Address",
      path: "address",
      searchAble: true,
    },
    {
      id: "id-phone",
      columnName: "Phone",
      path: "phone",
      searchAble: true,
    },
    {
      id: "id-div",
      columnName: "Division Name",
      path: "divisionId.divisionName",
      searchAble: false,
    },
    {
      id: "id-act",
      columnName: "Action",
      searchAble: false,
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

  // Axios Call Function Block
  axiosParams = {
    method: "POST",
    url: apiHost + apiEndpoint,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": apiToken,
    },
    data: {
      searchBy: this.state.searchBy,
      searchQuery: this.state.searchQuery,
      currentPage: this.state.currentPage,
      maxPerPage: this.state.maxPerPage,
      sortBy: this.sortBy,
    },
  };

  async axiosCall() {
    const { data } = await axios.request(this.axiosParams);
    return data.message.data;
  }

  // START REUSABLE FUNC
  // Handling Event
  handleDelete = (data) => {
    const copytableRowsData = [...this.state.tableRowsData];
    _.remove(copytableRowsData, { _id: data._id });
    this.setState({ tableRowsData: copytableRowsData });
  };

  handleMaxPerPage = async (e) => {
    const value = e;
    this.setState({ maxPerPage: value });
    this.axiosParams.data.maxPerPage = value;
    const newData = await this.axiosCall();
    this.setState({ tableRowsData: newData });
  };

  handlePagination = async (cur) => {
    const valCur = parseInt(cur);
    let copyState = { ...this.state };
    copyState.currentPage += valCur;
    // Reset to page 1 if current page state is bellow 0
    if (copyState.currentPage <= 0) copyState.currentPage = 1;
    // set state cur page
    this.setState({ currentPage: copyState.currentPage });
    // assign axios params with new value
    this.axiosParams.data.currentPage = copyState.currentPage;
    // call server using modified axios params
    const newData = await this.axiosCall();
    // push to new dataset table
    this.setState({ tableRowsData: newData });
  };

  handleSearch = async (inputName, val) => {
    if (inputName == "searchBy") this.axiosParams.data.searchBy = val;
    this.setState({ [inputName]: val });
    if (inputName == "searchQuery") {
      this.axiosParams.data.searchQuery = val;

      // call server using modified axios params
      const newData = await this.axiosCall();
      // push to new dataset table
      this.setState({ tableRowsData: newData });
    }
  };

  // Load Init Table Data Component did Mount
  async componentDidMount() {
    const dataTable = await this.axiosCall();
    this.setState({ tableRowsData: dataTable });
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
              maxPerPage={this.state.maxPerPage}
              handleMaxPerPage={this.handleMaxPerPage}
              handlePagination={this.handlePagination}
              handleSearch={this.handleSearch}
            ></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
