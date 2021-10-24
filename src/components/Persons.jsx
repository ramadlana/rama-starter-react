import axios from "axios";
import _ from "lodash";
import React from "react";
import Table from "./common/Table";

class Person extends React.Component {
  state = {
    tableRowsData: [
      {
        _id: "6172b1f7a46167c53279a03a",
        name: "Angga Juliantoro",
        address: "Babakan Madang",
        phone: 8133344191,
        divisionId: {
          _id: "6172a0f7a46167c53279a02b",
          divisionName: "SALES",
        },
        __v: 0,
      },
      {
        _id: "6172b1f7a46167c53279a03x",
        name: "Bambang Kentolet",
        address: "Babakan Madang",
        phone: 8133344191,
        divisionId: {
          _id: "6172a0f7a46167c53279a02b",
          divisionName: "SALES",
        },
        __v: 0,
      },
    ],
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
        <td className="text-end">
          <span className="dropdown">
            <button
              className="btn dropdown-toggle align-text-top"
              data-bs-boundary="viewport"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <button
                className="dropdown-item"
                onClick={() => this.handleDelete(data)}
              >
                Delete
              </button>
            </div>
          </span>
        </td>
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
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Persons</h3>
          </div>
          <div className="card-body border-bottom py-3">
            <div className="d-flex">
              <div className="text-muted">
                Show
                <div className="mx-2 d-inline-block">
                  <input
                    type="text"
                    name="maxPerPage"
                    className="form-control form-control-sm"
                    defaultValue={10}
                    size={3}
                    aria-label="count per Page"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                entries
              </div>
              <div className="ms-auto text-muted">
                Search:
                <div className="ms-2 d-inline-block">
                  <input
                    type="text"
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
          <div classname="card-footer d-flex align-items-center">
            <div className="card-footer d-flex align-items-center">
              <p className="m-0 text-muted">
                Showing <span>1</span> to <span>8</span> of <span>16</span>{" "}
                entries
              </p>
              <ul className="pagination m-0 ms-auto">
                <li className="page-item disabled">
                  <button
                    className="page-link"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
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
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    prev
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">4</button>
                </li>
                <li className="page-item">
                  <button className="page-link">5</button>
                </li>
                <li className="page-item">
                  <button className="page-link">
                    next{" "}
                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
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
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
