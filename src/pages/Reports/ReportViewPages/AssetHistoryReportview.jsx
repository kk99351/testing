import React, { useEffect, useMemo, useState } from "react";
import { Container, Button, Input, Card, CardHeader } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { useGet } from "src/API/useGet";
import { saveAs } from "file-saver";
import { CSVLink } from "react-csv";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaFilePdf, FaFileExcel } from "react-icons/fa";

const AssetHistoryReportview = () => {
  const demoData = [
    {
        "slno": 1,
        "asset_id": "ASSET001",
        "asset_name": "Laptop",
        "emp_name": "John Doe",
        "client_name": "Company XYZ",
        "allocate_Date": "2024-03-10",
        "deallocate_date": "2024-03-15",
        "cmpny_group": "Tech Division",
        "status": "Allocated",
        "city": "New York",
        "location": "Headquarters",
        "building": "Main Building",
        "floor": "10th Floor"
      },
      {
        "slno": 1,
        "asset_id": "ASSET001",
        "asset_name": "Laptop",
        "emp_name": "John Doe",
        "client_name": "Company XYZ",
        "allocate_Date": "2024-03-10",
        "deallocate_date": "2024-03-15",
        "cmpny_group": "Tech Division",
        "status": "Allocated",
        "city": "New York",
        "location": "Headquarters",
        "building": "Main Building",
        "floor": "10th Floor"
      }, {
        "slno": 1,
        "asset_id": "ASSET001",
        "asset_name": "Laptop",
        "emp_name": "John Doe",
        "client_name": "Company XYZ",
        "allocate_Date": "2024-03-10",
        "deallocate_date": "2024-03-15",
        "cmpny_group": "Tech Division",
        "status": "Allocated",
        "city": "New York",
        "location": "Headquarters",
        "building": "Main Building",
        "floor": "10th Floor"
      },
  ];

  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();
  // const { getData, data, isLoading } = useGet();
  // useEffect(() => {
  //   fetch("http://localhost:3000/plant")
  //     .then(response => response.json())
  //     .then(data => setResponseData(data))
  //     .catch(error => console.error("Error fetching users:", error));
  // }, []);
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>Generated PDF Content</Text>
      </Page>
    </Document>
  );
  const columns = useMemo(
    () => [
      { Header: "SL NO", accessor: "slno" },
      { Header: "ASSET ID", accessor: "asset_id" },
      { Header: "ASSET NAME", accessor: "asset_name" },
      { Header: "EMPLOYEE NAME", accessor: "emp_name" },
      { Header: "CLIENT NAME", accessor: "client_name" },
      { Header: "ALLOCATE DATE", accessor: "allocate_Date" },
      { Header: "DE-ALLOCATE DATE", accessor: "deallocate_date" },
      { Header: "COMPANY GROUP", accessor: "cmpny_group" },
      { Header: "STATUS", accessor: "status" },
      { Header: "CITY", accessor: "city" },
      { Header: "LOCATION", accessor: "location" },
      { Header: "BUILDING", accessor: "building" },
      { Header: "FLOOR", accessor: "floor" },    
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
      {/* {isLoading ? (
      <div className="page-content">
        <Card>
          <div>
            <h1>Loading...</h1>
          </div>
        </Card>
      </div>
    ) : ( */}
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                GENERATED ASSET HISTORY REPORT DETAILS{" "}
              </h1>
            </CardHeader>
            <div className="container pt-2">
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

                <div className="col-md-8">
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
                </div>                {/* <div className="col-sm-2 mb-2">
                  <div className="text-sm-end d-flex justify-content-between">
                    <div>
                      <CopyToClipboard text="data to be copied">
                        <FaCopy className="icon" />
                      </CopyToClipboard>
                      <PDFDownloadLink
                        document={<MyDocument />}
                        fileName="report.pdf"
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? (
                            <span>Loading...</span>
                          ) : (
                            <FaFilePdf className="icon" />
                          )
                        }
                      </PDFDownloadLink>

                      <CSVLink
                        data={demoData}
                        filename={"report.csv"}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        <FaFileExcel className="icon" />
                      </CSVLink>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="table-responsive react-table">
              <table className="table table-bordered table-hover">
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
                          style={
                            column.id === "slno"
                              ? { width: "6%" }
                              : { backgroundColor: "" }
                          }
                        >
                          <div className="d-flex justify-content-between">
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
                {" "}
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
      {/* )} */}
    </React.Fragment>
  );
};

export default AssetHistoryReportview;
