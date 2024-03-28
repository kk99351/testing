import React, { useMemo, useState } from "react";
import { Container, Card, CardHeader, Button, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const VendorApprovelL1 = () => {
  VendorApprovelL1.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const demoData = [
    {
      nm_ven: "CA Suppliers",
      cd_ven: "VEN001",
      person: "John Doe",
      nm_contact: "1234567890",
      status: "Approved",
    },
    {
      nm_ven: "HCL Enterprises",
      cd_ven: "VEN002",
      person: "Jane Smith",
      nm_contact: "9876543210",
      status: "Pending",
    },
    {
      nm_ven: "RA Traders",
      cd_ven: "VEN003",
      person: "Michael Johnson",
      nm_contact: "5556667777",
      status: "Approved",
    },
  ];

  const [responseData] = useState(demoData);
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
      },
      {
        Header: "SUPPLIER NAME",
        accessor: "nm_ven",
      },
      {
        Header: "SUPPLIER CODE",
        accessor: "cd_ven",
      },
      {
        Header: "CONTACT PERSON",
        accessor: "person",
      },
      {
        Header: "MOBILE NUMBER",
        accessor: "nm_contact",
      },

      {
        Header: "ACCEPT/REJECT",
        accessor: "invoiceNumber",
        Cell: ({ row }) => (
          <Link to={`/PROVIDE PAGE/${row.original.assetId}`}>
            {/* <Button
              size="MD"
              className="btn btn-success-subtle border border-success"
            > */}
            ACCEPT/REJECT {/* </Button> */}
          </Link>
        ),
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

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            {" "}
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                SUPPLIER APPROVAL DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-1">
                    <select className="form-select" style={{ width: "88PX" }}>
                      {" "}
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
                            placeholder="SEARCH..."
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
                          // <th
                          //   key={column.id}
                          //   {...column.getHeaderProps(
                          //     column.getSortByToggleProps()
                          //   )}
                          //   style={
                          //     column.id === "slno"
                          //       ? { width: "6%" }
                          //       : { backgroundColor: "" }
                          //   }
                          //   className="text-center"
                          // >
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
                  <tbody {...getTableBodyProps()}>
                    {page.length > 0 ? (
                      page.map(row => {
                        prepareRow(row);
                        return (
                          <tr key={row.id} {...row.getRowProps()}>
                            {row.cells.map(cell => (
                              <td key={cell.column.id} {...cell.getCellProps()}>
                                {cell.render("Cell")}
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
                          NO SEARCH REASULT FOUND
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
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default VendorApprovelL1;
