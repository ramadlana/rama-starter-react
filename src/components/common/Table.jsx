import React from "react";
import _ from "lodash";

class Table extends React.Component {
  renderCell = (data, col) => {
    // if componentAspath available, return component as path
    if (col.componentAsPath) return col.componentAsPath(data);
    // if not, path retruned using lodash get
    return _.get(data, col.path);
  };

  render() {
    const {
      keyForTableRows,
      tableRows,
      tableColumn,
      handleMaxPerPage,
      handlePagination,
      handleSearch,
    } = this.props;
    return (
      <div>
        <div className="d-flex">
          <div className="text-muted">
            Show
            <div className="ms-2 d-inline-block">
              <select
                onChange={(e) => handleMaxPerPage(e.currentTarget.value)}
                className="form-select form-select-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
              </select>
            </div>
            entries
          </div>

          <div className="ms-auto text-muted md-2">
            Search By:
            <div className="ms-2 d-inline-block">
              <select
                name="searchBy"
                onChange={(e) =>
                  handleSearch(e.currentTarget.name, e.currentTarget.value)
                }
                className="form-select form-select-sm"
              >
                {tableColumn.map((col) => {
                  if (col.searchAble)
                    return (
                      <option key={col.id} value={col.path}>
                        {col.columnName}
                      </option>
                    );
                })}
              </select>
            </div>
            <div className="ms-2 d-inline-block">
              <input
                type="text"
                name="searchQuery"
                placeholder="text to search here...."
                className="form-control form-control-sm"
                aria-label="Search invoice"
                onChange={(e) =>
                  handleSearch(e.currentTarget.name, e.currentTarget.value)
                }
              />
            </div>
          </div>
        </div>

        <table className="table table-striped table-sm mt-3">
          <thead>
            <tr>
              {tableColumn.map((col) => {
                return <th key={col.id}>{col.columnName}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((data) => (
              <tr key={data[keyForTableRows]}>
                {tableColumn.map((col) => (
                  <td key={col.id}>{this.renderCell(data, col)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-footer d-flex align-items-center">
          <p className="m-0 text-muted">
            Showing <span>1</span> to <span>8</span> of <span>16</span> entries
          </p>
          <ul className="pagination m-0 ms-auto">
            <li className="page-item">
              <button
                className="page-link"
                value={-1}
                onClick={(e) => handlePagination(e.currentTarget.value)}
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
            <li className="page-item active">
              <button value={1} className="page-link">
                1
              </button>
            </li>
            <li className="page-item">
              <button value={2} className="page-link">
                2
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                value={1}
                onClick={(e) => handlePagination(e.currentTarget.value)}
              >
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
    );
  }
}

export default Table;
