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
import {
  FaFilePdf,
  FaFileExcel,
  FaFileCsv,
  FaPrint,
  FaCopy,
} from "react-icons/fa";
import * as XLSX from "xlsx";

const AccessoryHistoryReportview = () => {
  const demoData = [
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
    },
    {
      slno: 1,
      access_id: "ACC001",
      access_name: "Keyboard",
      asset_id: "ASSET001",
      asset_name: "Desktop Computer",
      serial_number: "KB12345",
      ass_serial_number: "PC67890",
      mat_name: "Electronics",
      mat_sub_name: "Peripherals",
      assigned_date: "2024-03-10",
      delink_date: "2024-03-15",
      employee_name: "John Doe",
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
      { Header: "ACCESSORY ID", accessor: "access_id" },
      { Header: "ACCESSORY NAME", accessor: "access_name" },
      { Header: "ASSET ID", accessor: "asset_id" },
      { Header: "ASSET NAME", accessor: "asset_name" },
      { Header: "ACCESSORY SERIAL NUMBER", accessor: "serial_number" },
      { Header: "ASSET SERIAL NUMBER", accessor: "ass_serial_number" },
      { Header: "MATERIAL GROUP NAME", accessor: "mat_name" },
      { Header: "MATERIAL SUB GROUP NAME", accessor: "mat_sub_name" },
      { Header: "LINK DATE", accessor: "assigned_date" },
      { Header: "DELINK DATE", accessor: "delink_date" },
      { Header: "CLIENT NAME", accessor: "employee_name" },
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
  const exportToExcel = () => {
    const sheetName = "Asset_Status_Report";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const formattedData = responseData.map(item => ({
      "SL NO": item.slno,
      "ACCESSORY ID": item.access_id,
      "ACCESSORY NAME": item.access_name,
      "ASSET ID": item.asset_id,
      "ASSET NAME": item.asset_name,
      "ACCESSORY SERIAL NUMBER": item.serial_number,
      "ASSET SERIAL NUMBER": item.ass_serial_number,
      "MATERIAL GROUP NAME": item.mat_name,
      "MATERIAL SUB GROUP NAME": item.mat_sub_name,
      "LINK DATE": item.assigned_date,
      "DELINK DATE": item.delink_date,
      "CLIENT NAME": item.employee_name,
    }));
    
    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = { Sheets: { [sheetName]: ws }, SheetNames: [sheetName] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    saveAs(data, sheetName + fileExtension);
  };

  const handleCopy = () => {
    const headers = columns
      .map(column => column.Header)
      .filter(header => header !== "SL NO")
      .join("\t");
    const data = responseData
      .map(row => {
        const rowData = Object.entries(row).filter(
          ([key, value]) => key !== "slno"
        );
        return rowData.map(([key, value]) => value).join("\t");
      })
      .join("\n");
    const textToCopy = `${headers}\n${data}`;

    navigator.clipboard.writeText(textToCopy);
  };
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
                GENERATED ACCESSORY/SOFTWARE HISTORY REPORT{" "}
              </h1>
            </CardHeader>
            <div className="container pt-2">
              <div className="rmb-2 row">
                <div className="col-md-2">
                  <select className="form-select">
                    <option value="10">SHOW 10</option>
                    <option value="20">SHOW 20</option>
                    <option value="30">SHOW 30</option>
                    <option value="40">SHOW 40</option>
                    <option value="50">SHOW 50</option>
                  </select>
                </div>

                <div className="col-md-3">
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
                          onChange={e =>
                            setGlobalFilter(e.target.value.toUpperCase())
                          }
                        />
                        <i className="bx bx-search-alt search-icon"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-end">
                    <Button
                      className="btn btn-secondary-subtle border border-secondary"
                      onClick={exportToExcel}
                    >
                      <FaFileExcel />
                      EXCEL
                    </Button>
                    <CSVLink data={responseData}>
                      <Button className="btn btn-secondary-subtle border border-secondary">
                        <FaFileCsv />
                        CSV
                      </Button>
                    </CSVLink>
                    <Button
                      className="btn btn-secondary-subtle border border-secondary"
                      onClick={handleCopy}
                    >
                      <FaCopy /> COPY
                    </Button>
                    <Button
                      className="btn btn-secondary-subtle border border-secondary"
                      onClick={() => navigate("/accessory_history_report")}
                      style={{
                        paddingTop: "5px",
                        width: "80px",
                        height: "37px",
                        marginLeft: "10px",
                      }}
                    >
                      BACK{" "}
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="table-responsive react-table">
            <table className="table table-bordered table-hover text-center">
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
                                    {String(cell.value).toUpperCase()}{" "}
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

export default AccessoryHistoryReportview;
