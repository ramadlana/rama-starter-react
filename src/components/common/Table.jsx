import React from "react";
import _ from "lodash";

class Table extends React.Component {
  renderCell = (data, col) => {
    // if componentAspath available, return component as path
    if (col.componentAsPath) return col.componentAsPath(data);
    // if not, path retruned using lodash get
    return _.get(data, col.path);
  };

  loader = () => {
    if (this.props.isLoading)
      return (
        <div class="progress progress-sm">
          <div class="progress-bar progress-bar-indeterminate"></div>
        </div>
      );
  };

  render() {
    const {
      keyForTableRows,
      tableRows,
      tableColumn,
      handleMaxPerPage,
      handlePagination,
      handleSearch,
      errMessage,
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
                  return null;
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
        {this.loader()}
        <div className="table-responsive">
          <table className="table card-table table-vcenter text-nowrap datatable mt-3">
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
        </div>

        {errMessage && (
          <div className="alert alert-warning alert-dismissible" role="alert">
            <div className="d-flex">
              <div />
              <div>
                <h4 className="alert-title">Uh oh, something went wrong</h4>
                <div className="text-muted">{errMessage}</div>
              </div>
            </div>
            <button
              href="#!"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="close"
            ></button>
          </div>
        )}
        <div className="card-footer d-flex align-items-center">
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
                prev Data |
              </button>
            </li>

            <li className="page-item">
              <button
                className="page-link"
                value={1}
                onClick={(e) => handlePagination(e.currentTarget.value)}
              >
                next Data{" "}
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
