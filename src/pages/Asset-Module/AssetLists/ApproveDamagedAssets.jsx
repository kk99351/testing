import React, { useMemo, useEffect, useState, useCallback } from "react";
import { Container, CardHeader, Button, Card, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const ApproveDamagedAssets = () => {
  const demoData = [
    {
      slno: 1,
      assetId: "A001",
      modelNo: "SN001",
      assetName: "Laptop",
      serialNumber: "INV-001",
    },
    {
      slno: 2,
      assetId: "A002",
      modelNo: "SN002",
      assetName: "Desktop",
      serialNumber: "INV-002",
    },
    {
      slno: 3,
      assetId: "A003",
      modelNo: "SN003",
      assetName: "Printer",
      serialNumber: "INV-003",
    },
    {
      slno: 4,
      assetId: "A004",
      modelNo: "SN004",
      assetName: "Monitor",

      serialNumber: "INV-004",
    },
    {
      slno: 4,
      assetId: "A004",
      modelNo: "SN004",
      assetName: "Monitor",

      serialNumber: "INV-004",
    },
    {
      slno: 4,
      assetId: "A004",
      modelNo: "SN004",
      assetName: "Monitor",

      serialNumber: "INV-004",
    },
  ];

  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ASSET ID",
        accessor: "assetId",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "MODEL NUMBER",
        accessor: "modelNo",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ASSET NAME",
        accessor: "assetName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "SERIAL NUMBER",
        accessor: "serialNumber",
        disableFilters: true,
        filterable: true,
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
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, globalFilter },
    pageCount,
    gotoPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: dataWithSlno,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // const { getData, data, isLoading } = useGet();
  // useEffect(() => {
  //   async function fetch() {
  //     await getData("http://localhost:3000/employeemaster");
  //   }
  //   fetch();
  // }, [getData]);

  // useEffect(() => {
  //   setResponseData(data);
  // }, [data]);

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                APPROVE DAMAGED ASSETS DETAILS
              </h1>
            </CardHeader>
            <div className="container pt-4">
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
                          value={globalFilter || ""}
                          onChange={e => setGlobalFilter(e.target.value)}
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
                {...getTableProps()}
              >
                <thead className="table-light table-nowrap">
                  {headerGroups.map(headerGroup => (
                    <tr
                      key={headerGroup.id}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map(column => (
                            <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} style={{ width: column.width }}>

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
                <tbody {...getTableBodyProps()}>
                  {page.length > 0 ? (
                    page.map(row => {
                      prepareRow(row);
                      return (
                        <tr key={row.id} {...row.getRowProps()}>
                          {row.cells.map(cell => (
                            <td key={cell.column.id} {...cell.getCellProps()}>
                              {cell.column.id !== "id" ? (
                                <Link
                                  to={`/modify_approve_damaged_asset/${row.original.id}`}
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
                        colSpan={headerGroups[0].headers.length}
                        style={{ textAlign: "center" }}
                      >
                        {" "}
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
                  Showing {pageIndex + 1} of {pageCount} pages
                </p>
              </div>
              <div className="col-sm-6">
                <div className="pagination justify-content-end pb-2 pe-2">
                  <button
                    className="btn btn-info"
                    disabled={pageIndex === 0}
                    onClick={() => gotoPage(0)}
                  >
                    FIRST
                  </button>
                  <button
                    className="btn btn-primary"
                    disabled={!canPreviousPage}
                    onClick={previousPage}
                  >
                    PRE
                  </button>
                  <span className="btn btn-light">{pageIndex + 1}</span>
                  <button
                    className="btn btn-primary"
                    disabled={!canNextPage}
                    onClick={nextPage}
                  >
                    NEXT
                  </button>
                  <button
                    className="btn btn-info"
                    disabled={pageIndex >= pageCount - 1}
                    onClick={() => gotoPage(pageCount - 1)}
                  >
                    LAST
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ApproveDamagedAssets;
