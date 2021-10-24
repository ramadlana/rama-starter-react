import _ from "lodash";
const Table = ({ keyForTableRows, tableRows, tableColumn }) => {
  const renderCell = (data, col) => {
    // if componentAspath available, return component as path
    if (col.componentAsPath) return col.componentAsPath(data);
    // if not, path retruned using lodash get
    return _.get(data, col.path);
  };
  return (
    <div className="table-responsive">
      <table className="table card-table table-vcenter text-nowrap datatable">
        <thead>
          <tr>
            {tableColumn.map((col) => (
              <th key={col.path}>{col.columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((data) => (
            <tr key={data[keyForTableRows]}>
              {tableColumn.map((col) => (
                <td key={col.path}>{renderCell(data, col)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
