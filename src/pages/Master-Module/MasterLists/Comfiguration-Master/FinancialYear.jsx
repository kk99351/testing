import React, { useMemo, useEffect, useState } from "react";
import { Container, CardHeader, CardBody, Card } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const FinancialYear = () => {
  FinancialYear.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const demoData = [
    {
      stDate: "2022-04-01",
      endDate: "2024-03-31",
      halfendDate: "2022-04-01",
      halfstDate: "2022-10-31",
      secStDate: "2022-11-01",
      secEndDate: "2024-03-31",
    },
    {
      stDate: "2022-04-01",
      endDate: "2024-03-31",
      halfendDate: "2022-04-01",
      halfstDate: "2022-10-31",
      secStDate: "2022-11-01",
      secEndDate: "2024-03-31",
    },
    {
      stDate: "2022-04-01",
      endDate: "2024-03-31",
      halfendDate: "2022-04-01",
      halfstDate: "2022-10-31",
      secStDate: "2022-11-01",
      secEndDate: "2024-03-31",
    },
    {
      stDate: "2022-04-01",
      endDate: "2024-03-31",
      halfendDate: "2022-04-01",
      halfstDate: "2022-10-31",
      secStDate: "2022-11-01",
      secEndDate: "2024-03-31",
    },
  ];

  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  const firstTableColumns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "FINANCIAL YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "stDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "endDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: "FIRST HALF YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "halfstDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "halfendDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: "SECOND HALF YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "secStDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "secEndDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: "MANIPULATION",
        columns: [
          {
            Header: "ACTIVE",
            id: "checkbox",
            accessor: "",
            Cell: ({ row }) => (
              <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => {}}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  const secondTableColumns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "PARENT COMPANY FINANCIAL YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "stDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "endDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: " FIRST HALF YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "halfstDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "halfendDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: " SECOND HALF YEAR",
        columns: [
          {
            Header: "START DATE",
            accessor: "secStDate",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "END DATE",
            accessor: "secEndDate",
            disableFilters: true,
            filterable: true,
          },
        ],
      },
      {
        Header: "MANIPULATION",
        columns: [
          {
            Header: "CHECK/UNCHECK",
            id: "checkbox",
            accessor: "",

            Cell: ({ row }) => (
              <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => {}}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));
  }, [responseData]);

  const {
    getTableProps: getFirstTableProps,
    getTableBodyProps: getFirstTableBodyProps,
    headerGroups: firstHeaderGroups,
    page: firstPage,
    prepareRow: prepareFirstRow,
    nextPage: nextFirstPage,
    previousPage: previousFirstPage,
    canPreviousPage: canPreviousFirstPage,
    canNextPage: canNextFirstPage,
    state: { pageIndex: firstPageIndex, globalFilter: firstGlobalFilter },
    pageCount: firstPageCount,
    gotoPage: goToFirstPage,
    setGlobalFilter: setFirstGlobalFilter,
  } = useTable(
    {
      columns: firstTableColumns,
      data: dataWithSlno,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps: getSecondTableProps,
    getTableBodyProps: getSecondTableBodyProps,
    headerGroups: secondHeaderGroups,
    page: secondPage,
    prepareRow: prepareSecondRow,
    nextPage: nextSecondPage,
    previousPage: previousSecondPage,
    canPreviousPage: canPreviousSecondPage,
    canNextPage: canNextSecondPage,
    state: { pageIndex: secondPageIndex, globalFilter: secondGlobalFilter },
    pageCount: secondPageCount,
    gotoPage: goToSecondPage,
    setGlobalFilter: setSecondGlobalFilter,
  } = useTable(
    {
      columns: secondTableColumns,
      data: dataWithSlno,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                FINANCIAL YEAR DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-1">
                    <select className="form-select" style={{ width: "88PX" }}>
                      <option value="10">SHOW 10</option>
                      <option value="20">SHOW 20</option>
                      <option value="30">SHOW 30</option>
                      <option value="40">SHOW 40</option>
                      <option value="50">SHOW 50</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
                      <div className="position-relative">
                        <label htmlFor="search-bar-0" className="search-label">
                          <span id="search-bar-0-label" className="sr-only">
                            Search this table
                          </span>
                          <input
                            id="search-bar-0"
                            type="text"
                            className="form-control"
                            placeholder="SEARCH ..."
                            value={firstGlobalFilter || ""}
                            onChange={e => setFirstGlobalFilter(e.target.value)}
                          />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="text-sm-end">
                      <button
                        type="button"
                        className="btn mb-2 me-2 btn btn-primary"
                        onClick={() => navigate("/create_finanacial_year")}
                      >
                        <i className="mdi mdi-plus-circle-outline me-1"></i>
                        CREATE NEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive react-table">
                <table
                  className="table table-bordered table-hover text-center"
                  {...getFirstTableProps()}
                >
                  <thead className="table-light table-nowrap">
                    {firstHeaderGroups.map(headerGroup => (
                      <tr
                        key={headerGroup.id}
                        {...headerGroup.getHeaderGroupProps()}
                      >
                        {headerGroup.headers.map(column => (
                          <th
                            key={column.id}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            style={{ width: column.width }}
                          >
                            <div className="d-flex justify-content-center">
                              <span className="font-weight-bold">
                                {column.render("Header")}
                              </span>
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " 🔽"
                                    : " 🔼"
                                  : ""}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getFirstTableBodyProps()}>
                    {firstPage.length > 0 ? (
                      firstPage.map(row => {
                        prepareFirstRow(row);
                        return (
                          <tr key={row.id} {...row.getRowProps()}>
                            {row.cells.map((cell, index) => (
                              <td key={cell.column.id} {...cell.getCellProps()}>
                                {cell.column.id === "stDate" ? (
                                  <Link
                                    to={`/modify_financial_year/${row.original.id}`}
                                  >
                                    {cell.render("Cell")}
                                  </Link>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </td>
                            ))}
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={firstHeaderGroups[0].headers.length}
                          style={{ textAlign: "center" }}
                        >
                          No search results found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="ps-2">
                    Showing {firstPageIndex + 1} of {firstPageCount} pages
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="pagination justify-content-end pb-2 pe-2">
                    <button
                      className="btn btn-info"
                      disabled={firstPageIndex === 0}
                      onClick={() => goToFirstPage(0)}
                    >
                      FIRST
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={!canPreviousFirstPage}
                      onClick={previousFirstPage}
                    >
                      PRE
                    </button>
                    <span className="btn btn-light">{firstPageIndex + 1}</span>
                    <button
                      className="btn btn-primary"
                      disabled={!canNextFirstPage}
                      onClick={nextFirstPage}
                    >
                      NEXT
                    </button>
                    <button
                      className="btn btn-info"
                      disabled={firstPageIndex >= firstPageCount - 1}
                      onClick={() => goToFirstPage(firstPageCount - 1)}
                    >
                      LAST
                    </button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                PARENT COMPANY FINANCIAL YEAR DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-1">
                    <select className="form-select" style={{ width: "88PX" }}>
                      <option value="10">SHOW 10</option>
                      <option value="20">SHOW 20</option>
                      <option value="30">SHOW 30</option>
                      <option value="40">SHOW 40</option>
                      <option value="50">SHOW 50</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
                      <div className="position-relative">
                        <label htmlFor="search-bar-1" className="search-label">
                          <span id="search-bar-1-label" className="sr-only">
                            Search this table
                          </span>
                          <input
                            id="search-bar-1"
                            type="text"
                            className="form-control"
                            placeholder="SEARCH ..."
                            value={secondGlobalFilter || ""}
                            onChange={e =>
                              setSecondGlobalFilter(e.target.value)
                            }
                          />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive react-table">
                <table
                  className="table table-bordered table-hover text-center"
                  {...getSecondTableProps()}
                >
                  <thead className="table-light table-nowrap">
                    {secondHeaderGroups.map(headerGroup => (
                      <tr
                        key={headerGroup.id}
                        {...headerGroup.getHeaderGroupProps()}
                      >
                        {headerGroup.headers.map(column => (
                          <th
                            key={column.id}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            style={{ width: column.width }}
                          >
                            <div className="d-flex justify-content-center">
                              <span className="font-weight-bold">
                                {column.render("Header")}
                              </span>
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " 🔽"
                                    : " 🔼"
                                  : ""}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getSecondTableBodyProps()}>
                    {secondPage.length > 0 ? (
                      secondPage.map(row => {
                        prepareSecondRow(row);
                        return (
                          <tr key={row.id} {...row.getRowProps()}>
                            {row.cells.map((cell, index) => (
                              <td key={cell.column.id} {...cell.getCellProps()}>
                                {cell.column.id === "stDate" ? (
                                  <Link
                                    to={`/modify_financial_year/${row.original.id}`}
                                  >
                                    {cell.render("Cell")}
                                  </Link>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </td>
                            ))}
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={secondHeaderGroups[0].headers.length}
                          style={{ textAlign: "center" }}
                        >
                          NO SEARCH RESULTS FOUND{" "}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="ps-2">
                    Showing {secondPageIndex + 1} of {secondPageCount} pages
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="pagination justify-content-end pb-2 pe-2">
                    <button
                      className="btn btn-info"
                      disabled={secondPageIndex === 0}
                      onClick={() => goToSecondPage(0)}
                    >
                      FIRST
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={!canPreviousSecondPage}
                      onClick={previousSecondPage}
                    >
                      PRE
                    </button>
                    <span className="btn btn-light">{secondPageIndex + 1}</span>
                    <button
                      className="btn btn-primary"
                      disabled={!canNextSecondPage}
                      onClick={nextSecondPage}
                    >
                      NEXT
                    </button>
                    <button
                      className="btn btn-info"
                      disabled={secondPageIndex >= secondPageCount - 1}
                      onClick={() => goToSecondPage(secondPageCount - 1)}
                    >
                      LAST
                    </button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FinancialYear;
