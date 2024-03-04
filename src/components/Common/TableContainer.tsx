import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col, Button } from "reactstrap";
import { Filter, DefaultColumnFilter } from "../Common/Filter";
import JobListGlobalFilter from "../../components/Common/GlobalSearchFilter";

interface GlobalFilterProps {
  preGlobalFilteredRows?: any;
  globalFilter?: any;
  setGlobalFilter?: any;
  isJobListGlobalFilter?: any;
}

const handleButtonClick = (displayDiv: string, hideDiv: string) => {
  const displayElement = document.getElementById(displayDiv);
  const hideElement = document.getElementById(hideDiv);

  if (displayElement) {
    displayElement.style.display = "none";
  }

  if (hideElement) {
    hideElement.style.display = "block";
  }
};

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isJobListGlobalFilter,
}: GlobalFilterProps) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);
  
  return (
    <React.Fragment>
      <Col md={4}>
        <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
          <div className="position-relative">
            <label htmlFor="search-bar-0" className="search-label">
              <span id="search-bar-0-label" className="sr-only">
                Search this table
              </span>
              <input
                onChange={e => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
                id="search-bar-0"
                type="text"
                className="form-control"
                placeholder={`${count} records...`}
                value={value || ""}
              />
            </label>
            <i className="bx bx-search-alt search-icon"></i>
          </div>
        </div>
      </Col>
      {isJobListGlobalFilter && (
        <JobListGlobalFilter />
      )}
    </React.Fragment>
  );
}

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isJobListGlobalFilter?: any;
  isAddOptions?: any;
  isAddUserList?: any;
  handleUserClick?: any;
  handleOrderClicks?: any;
  handleCustomerClick?: any;
  isAddCustList?: any;
  customPageSize?: any;
  className?: any;
  customPageSizeOptions?: any;
  isAddInvoiceList?: any;
  handleInvoiceClick?: any;
  displayDiv: string; 
  hideDiv: string;
  button: string;
  onRowClick?: (rowData: any) => void;
}

const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  isJobListGlobalFilter,
  isAddOptions,
  isAddUserList,
  handleUserClick,
  handleOrderClicks,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  className,
  customPageSizeOptions,
  isAddInvoiceList,
  handleInvoiceClick,
  displayDiv,
  hideDiv,
  button,
  onRowClick,
}: TableContainerProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize || 10,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column: any) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event: any) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <Fragment>
      <Row className="mb-2">
        <Col md={customPageSizeOptions ? 2 : 1}>
          <select
            className="form-select"
            value={pageSize}
            onChange={onChangeInSelect}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </Col>
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isJobListGlobalFilter={isJobListGlobalFilter}
          />
        )}
        <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={() => handleButtonClick(displayDiv, hideDiv)}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                {button}
              </Button>
            </div>
          </Col>
      </Row>

      <div className="table-responsive react-table">
        <Table bordered hover {...getTableProps()} className={className}>
          <thead className="table-light table-nowrap">
            {headerGroups.map((headerGroup: any) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns: any) => (
                  <th key={columns.id}>
                    <div className="mb-2" {...columns.getSortByToggleProps()}>
                      {columns.render("Header")}
                      {generateSortingIndicator(columns)}
                    </div>
                    <Filter column={columns} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr onClick={() => onRowClick && onRowClick(row.original)}>
                    {row.cells.map((cell: any) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row>
      <Col sm={6}>
          <p>Showing {pageIndex * pageSize + 1} to {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length} entries</p>
        </Col>
        <Col sm={6}>
          <ul className="pagination justify-content-end mb-0">
            <li className={`page-item ${!canPreviousPage ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                First
              </button>
            </li>
            <li className={`page-item ${!canPreviousPage ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
            </li>
            {pageIndex >= 4 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            {Array.from({ length: pageCount }, (_, i) => {
              if (
                (pageIndex <= 3 && i <= 5) ||
                (pageIndex >= 4 && i >= pageIndex - 1 && i <= pageIndex + 2) ||
                (i === pageCount - 1)
              ) {
                return (
                  <li
                    key={i}
                    className={`page-item ${pageIndex === i ? "active" : ""}`}
                  >
                    <button className="page-link" onClick={() => gotoPage(i)}>
                      {i + 1}
                    </button>
                  </li>
                );
              }
              return null;
            })}
            {pageIndex <= pageCount - 5 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </li>
            <li className={`page-item ${!canNextPage ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                Last
              </button>
            </li>
          </ul>
        </Col>
      </Row>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;
