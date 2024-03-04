import React, { useMemo } from "react";
import PropTypes from "prop-types"; 
import { Table } from "reactstrap";

const TableGenerator = ({ columns, data }) => {
  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {memoizedColumns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {memoizedColumns.map((column) => (
              <td key={column.accessor}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableGenerator.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      accessor: PropTypes.string.isRequired,
      Header: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableGenerator;
