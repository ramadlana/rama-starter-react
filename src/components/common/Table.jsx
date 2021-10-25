import _ from "lodash";
const Table = ({ keyForTableRows, tableRows, tableColumn, handleChange }) => {
  const renderCell = (data, col) => {
    // if componentAspath available, return component as path
    if (col.componentAsPath) return col.componentAsPath(data);
    // if not, path retruned using lodash get
    return _.get(data, col.path);
  };

  return (
    <div>
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
              onChange={(e) => handleChange(e)}
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
                <td key={col.id}>{renderCell(data, col)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
