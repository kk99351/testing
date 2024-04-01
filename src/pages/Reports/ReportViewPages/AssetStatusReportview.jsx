// // import React, { useEffect, useMemo, useState } from "react";
// // import { Container, Button, Input, Card, CardHeader } from "reactstrap";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   useTable,
// //   useSortBy,
// //   usePagination,
// //   useGlobalFilter,
// // } from "react-table";
// // import { useGet } from "src/API/useGet";
// // import { saveAs } from "file-saver";
// // import { CSVLink } from "react-csv";
// // import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
// // import { CopyToClipboard } from "react-copy-to-clipboard";
// // import { FaCopy, FaFilePdf, FaFileExcel } from "react-icons/fa";

// // const AssetStatusReportview = () => {
// //   const demoData = [
// //     {
// //       asset_id: "001",
// //     asset_name: "Laptop",
// //     client_name: "John Doe",
// //     serial_number: "SN123456",
// //     material_number: "MN7890",
// //     device_status: "Active",
// //     process_type: "Manufacturing",
// //     storage_type: "SSD",
// //     acc_history: "None",
// //     ram_type: "DDR4"
// //     },
// //     {
// //       asset_id: "001",
// //     asset_name: "Laptop",
// //     client_name: "John Doe",
// //     serial_number: "SN123456",
// //     material_number: "MN7890",
// //     device_status: "Active",
// //     process_type: "Manufacturing",
// //     storage_type: "SSD",
// //     acc_history: "None",
// //     ram_type: "DDR4"
// //     },
// //   ];

// //   const [responseData, setResponseData] = useState(demoData);
// //   const navigate = useNavigate();

// //   const MyDocument = () => (
// //     <Document>
// //       <Page>
// //         <Text>Generated PDF Content</Text>
// //       </Page>
// //     </Document>
// //   );
// //   const columns = useMemo(
// //     () => [
// //       { Header: "SL NO", accessor: "slno" },
// //       { Header: "ASSET ID", accessor: "asset_id" },
// //       { Header: "ASSET NAME", accessor: "asset_name" },
// //       { Header: "CLIENT NAME", accessor: "client_name" },
// //       { Header: "SERIAL NUMBER", accessor: "serial_number" },
// //       { Header: "MATERIAL NUMBER", accessor: "material_number" },
// //       { Header: "DIVICE STATUS", accessor: "device_status" },
// //       { Header: "PROCESS TYPE", accessor: "process_type" },
// //       { Header: "STORAGE TYPE", accessor: "storage_type" },
// //       { Header: "ACCESSORY HISTORY", accessor: "acc_history" },
// //       { Header: "RAM TYPE", accessor: "ram_type" },
// //     ],
// //     []
// //   );

// //   const dataWithSlno = useMemo(() => {
// //     return responseData.map((item, index) => ({
// //       ...item,
// //       slno: index + 1,
// //     }));
// //   }, [responseData]);

// //   const {
// //     getTableProps,
// //     getTableBodyProps,
// //     headerGroups,
// //     page,
// //     prepareRow,
// //     nextPage,
// //     previousPage,
// //     canPreviousPage,
// //     canNextPage,
// //     state: { pageIndex, globalFilter },
// //     pageCount,
// //     gotoPage,
// //     setGlobalFilter,
// //   } = useTable(
// //     {
// //       columns,
// //       data: dataWithSlno,
// //       initialState: { pageSize: 10 },
// //     },
// //     useGlobalFilter,
// //     useSortBy,
// //     usePagination
// //   );

// //   return (
// //     <React.Fragment>

// //       <Container fluid>
// //         <div className="page-content">
// //           <Card>
// //             <CardHeader>
// //               <h1 className="card-title" style={{ fontSize: "20px" }}>
// //                 GENERATED ASSET STATUS REPORT DETAILS{" "}
// //               </h1>
// //             </CardHeader>
// //             <div className="container pt-2">
// //               <div className="rmb-2 row">
// //               <div className="col-md-2">
// //                 <select className="form-select" >
// //                     <option value="10">SHOW 10</option>
// //                     <option value="20">SHOW 20</option>
// //                     <option value="30">SHOW 30</option>
// //                     <option value="40">SHOW 40</option>
// //                     <option value="50">SHOW 50</option>
// //                   </select>
// //                 </div>

// //                 <div className="col-md-8">
// //                   <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
// //                     <div className="position-relative">
// //                       <label htmlFor="search-bar-0" className="search-label">
// //                         <span id="search-bar-0-label" className="sr-only">
// //                           Search this table
// //                         </span>
// //                         <input
// //                           id="search-bar-0"
// //                           type="text"
// //                           className="form-control"
// //                           placeholder="SEARCH ..."
// //                           value={globalFilter || ""}
// //                           onChange={e => setGlobalFilter(e.target.value)}
// //                         />
// //                         <i className="bx bx-search-alt search-icon"></i>
// //                       </label>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="table-responsive react-table">
// //             <table className="table table-bordered table-hover text-center">
// //                 <thead className="table-light table-nowrap">
// //                   {headerGroups.map(headerGroup => (
// //                     <tr
// //                       key={headerGroup.id}
// //                       {...headerGroup.getHeaderGroupProps()}
// //                     >
// //                       {headerGroup.headers.map(column => (
// //                         <th
// //                           key={column.id}
// //                           {...column.getHeaderProps(
// //                             column.getSortByToggleProps()
// //                           )}
// //                           style={
// //                             column.id === "slno"
// //                               ? { width: "6%" }
// //                               : { backgroundColor: "" }
// //                           }
// //                         >
// //                           <div className="d-flex justify-content-between">
// //                             <span className="font-weight-bold">
// //                               {column.render("Header")}
// //                             </span>
// //                             <span>
// //                               {column.isSorted
// //                                 ? column.isSortedDesc
// //                                   ? " 🔽"
// //                                   : " 🔼"
// //                                 : ""}
// //                             </span>
// //                           </div>
// //                         </th>
// //                       ))}
// //                     </tr>
// //                   ))}
// //                 </thead>
// //                 <tbody {...getTableBodyProps()}>
// //                   {page.length > 0 ? (
// //                     page.map(row => {
// //                       prepareRow(row);
// //                       return (
// //                         <tr key={row.id} {...row.getRowProps()}>
// //                           {row.cells.map(cell => (
// //                             <td key={cell.column.id} {...cell.getCellProps()}>
// //                                     {String(cell.value).toUpperCase()}{" "}
// //                             </td>
// //                           ))}
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr>
// //                       <td
// //                         colSpan={headerGroups[0].headers.length}
// //                         style={{ textAlign: "center" }}
// //                       >
// //                         {" "}
// //                         NO SEARCH RESULTS FOUND{" "}
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <div className="row">
// //               <div className="col-sm-6">
// //                 <p className="ps-2">
// //                   Showing {pageIndex + 1} of {pageCount} pages
// //                 </p>
// //               </div>
// //               <div className="col-sm-6">
// //                 {" "}
// //                 <div className="pagination justify-content-end pb-2 pe-2">
// //                   <button
// //                     className="btn btn-info"
// //                     disabled={pageIndex === 0}
// //                     onClick={() => gotoPage(0)}
// //                   >
// //                     FIRST
// //                   </button>
// //                   <button
// //                     className="btn btn-primary"
// //                     disabled={!canPreviousPage}
// //                     onClick={previousPage}
// //                   >
// //                     PRE
// //                   </button>
// //                   <span className="btn btn-light">{pageIndex + 1}</span>
// //                   <button
// //                     className="btn btn-primary"
// //                     disabled={!canNextPage}
// //                     onClick={nextPage}
// //                   >
// //                     NEXT
// //                   </button>
// //                   <button
// //                     className="btn btn-info"
// //                     disabled={pageIndex >= pageCount - 1}
// //                     onClick={() => gotoPage(pageCount - 1)}
// //                   >
// //                     LAST
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </Card>
// //         </div>
// //       </Container>
// //       {/* )} */}
// //     </React.Fragment>
// //   );
// // };

// // export default AssetStatusReportview;
import React, { useMemo, useState } from "react";
import { Container, Button, Card, CardHeader } from "reactstrap";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { CSVLink } from "react-csv";
import { saveAs } from "file-saver";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import {
  FaFilePdf,
  FaFileExcel,
  FaFileCsv,
  FaPrint,
  FaCopy,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const AssetStatusReportview = () => {
  const navigate = useNavigate();

  const demoData = [
    {
      asset_id: "001",
      asset_name: "Laptop",
      client_name: "John Doe",
      serial_number: "SN123456",
      material_number: "MN7890",
      device_status: "Active",
      process_type: "Manufacturing",
      storage_type: "SSD",
      acc_history: "None",
      ram_type: "DDR4",
    },
    {
      asset_id: "001",
      asset_name: "Laptop",
      client_name: "John Doe",
      serial_number: "SN123456",
      material_number: "MN7890",
      device_status: "Active",
      process_type: "Manufacturing",
      storage_type: "SSD",
      acc_history: "None",
      ram_type: "DDR4",
    },
  ];

  const [responseData, setResponseData] = useState(demoData);

  const columns = useMemo(
    () => [
      { Header: "SL NO", accessor: "slno" },
      { Header: "ASSET ID", accessor: "asset_id" },
      { Header: "ASSET NAME", accessor: "asset_name" },
      { Header: "CLIENT NAME", accessor: "client_name" },
      { Header: "SERIAL NUMBER", accessor: "serial_number" },
      { Header: "MATERIAL NUMBER", accessor: "material_number" },
      { Header: "DEVICE STATUS", accessor: "device_status" },
      { Header: "PROCESS TYPE", accessor: "process_type" },
      { Header: "STORAGE TYPE", accessor: "storage_type" },
      { Header: "ACCESSORY HISTORY", accessor: "acc_history" },
      { Header: "RAM TYPE", accessor: "ram_type" },
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
      "ASSET ID": item.asset_id,
      "ASSET NAME": item.asset_name,
      "CLIENT NAME": item.client_name,
      "SERIAL NUMBER": item.serial_number,
      "MATERIAL NUMBER": item.material_number,
      "DEVICE STATUS": item.device_status,
      "PROCESS TYPE": item.process_type,
      "STORAGE TYPE": item.storage_type,
      "ACCESSORY HISTORY": item.acc_history,
      "RAM TYPE": item.ram_type,
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
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                GENERATED ASSET STATUS REPORT DETAILS{" "}
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
                          onChange={e => setGlobalFilter(e.target.value)}
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
                      onClick={() => navigate("/asset_status_report")}
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
                              {String(cell.value).toUpperCase()}
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

export default AssetStatusReportview;
