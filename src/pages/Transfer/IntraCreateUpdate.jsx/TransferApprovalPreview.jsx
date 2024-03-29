import React, { useMemo, useEffect, useState } from "react";
import { Container, CardHeader, Button, Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import PropTypes from "prop-types"; // Import PropTypes

const TransferApprovalPreview = () => {
  const demoData = [
    {
      "slno": 1,
      "assetId": "ASSET001",
      "assetName": "Laptop",
      "serialNumber": "SN12345",
      "assetdes": "Good condition"
    },
    {
      "slno": 2,
      "assetId": "ASSET002",
      "assetName": "Desktop",
      "serialNumber": "SN67890",
      "assetdes": "Needs maintenance"
    },
    {
      "slno": 3,
      "assetId": "ASSET003",
      "assetName": "Printer",
      "serialNumber": "SN24680",
      "assetdes": "Ink levels low"
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
      {
        Header: "ASSET DISCRIPTION",
        accessor: "assetdes",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "CHECK/UNCHECK",
        id: "checkbox",
        accessor: "",
        Cell: ({ row }) => (
          <input type="checkbox" checked={row.isSelected} onChange={() => {}} />
        ),
      },
    ],
    []
  );

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
      assetId: item.assetId.toUpperCase(), 
      assetName: item.assetName.toUpperCase(), 
      serialNumber: item.serialNumber.toUpperCase(), 
      assetdes: item.assetdes.toUpperCase(),
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
    state: { pageIndex, globalFilter, selectedRowIds },
    pageCount,
    gotoPage,
    setGlobalFilter,
    setSelectedRows, // Add setSelectedRows to destructuring
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

  useEffect(() => {
    console.log("Selected Row Ids:", selectedRowIds);
  }, [selectedRowIds]);

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                INTRA TRANSFER APPROVE DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-2">
                    <select className="form-select" >
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
                            onChange={e =>
                              setGlobalFilter(e.target.value.toUpperCase())
                            }                           />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-2">
                    <div className="text-sm-end">
                      <Button
                        className="btn btn-success-subtle border border-success"
                        style={{
                          paddingTop: "5px",
                          width: "90px",
                          height: "35px",
                          marginLeft: "10px",
                        }}
                      >
                        APPROVE{" "}
                      </Button>
                      <Button
                        className="btn btn-secondary-subtle border border-secondary"
                        onClick={() => navigate("/intra_transfer_approval")}
                        style={{
                          paddingTop: "5px",
                          width: "80px",
                          height: "35px",
                          marginLeft: "10px",
                        }}
                      >
                        CANCEL{" "}
                      </Button>
                      <Button
                        className="btn btn-success-subtle border border-success"
                        style={{
                          paddingTop: "5px",
                          width: "80px",
                          height: "35px",
                          marginLeft: "10px",
                        }}
                      >
                        REJECT{" "}
                      </Button>
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
                            {row.cells.map(cell => {
                              return (
                                <td
                                  key={cell.column.id}
                                  {...cell.getCellProps()}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
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

TransferApprovalPreview.propTypes = {
  row: PropTypes.object, // Add prop validation for row object
};

TransferApprovalPreview.defaultProps = {
  row: {}, // Set default value for row object
};

export default TransferApprovalPreview;
