// import React, { useState, useMemo } from "react";
// import {
//   Col,
//   Row,
//   CardBody,
//   CardHeader,
//   Card,
//   Label,
//   Input,
//   Container,
//   Table,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const DeAllocate = () => {
// const [responseData, setResponseData] = useState([
//   {
//     slno: 1,
//     assetId: "A001",
//     assetName: "Laptop",
//     serialNumber: "SN001",
//     assetRemarks: "Good condition",
//     allocateType: "Active",
//     checked: false,
//     employeename: "John Doe",
//     client: "ABC Corp",
//     allocatedDate: "2023-01-15",
//   },
//   {
//     slno: 2,
//     assetId: "A002",
//     assetName: "Desktop",
//     serialNumber: "SN002",
//     assetRemarks: "Minor scratches on the back",
//     checked: false,
//     employeename: "Jane Smith",
//     client: "XYZ Inc",
//     allocatedDate: "2023-02-20",
//   },
//   {
//     slno: 3,
//     assetId: "A003",
//     assetName: "Printer",
//     serialNumber: "SN003",
//     assetRemarks: "Needs toner replacement",
//     allocateType: "Inactive",
//     checked: false,
//     employeename: "Michael Johnson",
//     client: "DEF Ltd",
//     allocatedDate: "2023-03-10",
//   },
//   {
//     slno: 4,
//     assetId: "A004",
//     assetName: "Monitor",
//     serialNumber: "SN004",
//     assetRemarks: "No issues",
//     allocateType: "Active",
//     checked: false,
//     employeename: "Emily Brown",
//     client: "GHI Corp",
//     allocatedDate: "2023-04-05",
//   },
//   {
//     slno: 5,
//     assetId: "A005",
//     assetName: "Keyboard",
//     serialNumber: "SN005",
//     assetRemarks: "Missing key",
//     allocateType: "Inactive",
//     checked: false,
//     employeename: "David Lee",
//     client: "JKL Ltd",
//     allocatedDate: "2023-05-12",
//   },
// ]);
//   const handleDeallocate = () => {
//     // Add logic for deallocation here
//     console.log("Deallocate button clicked");
//   };
//   const [searchValue, setSearchValue] = useState("");
//   const navigate = useNavigate();

//   const filteredData = useMemo(() => {
//     if (!searchValue) return responseData;
//     return responseData.filter(item => {
//       return Object.values(item).some(value =>
//         String(value).toLowerCase().includes(searchValue.toLowerCase())
//       );
//     });
//   }, [responseData, searchValue]);

//   const handleInputChange = e => {
//     setSearchValue(e.target.value);
//   };
//   const handleCheckboxChange = index => {
//     const updatedData = [...responseData];
//     updatedData[index].checked = !updatedData[index].checked;
//     setResponseData(updatedData);
//   };
//   const handleDeallocationDateChange = (e, index) => {
//     const updatedData = [...responseData];
//     updatedData[index].deallocationDate = e.target.value;
//     setResponseData(updatedData);
//   };

//   const handleAssetStatusChange = (e, index) => {
//     const updatedData = [...responseData];
//     updatedData[index].assetStatus = e.target.value;
//     setResponseData(updatedData);
//   };

//   return (
//     <Container fluid>
//       <div className="page-content">
//         <Card className="mt-3">
//           <CardHeader>
//             <h1 className="card-title" style={{ fontSize: "20px" }}>
//               DE ALLOCATION DETAILS
//             </h1>
//           </CardHeader>
//           <CardBody>
//             <div className="container pt-1">
//               <div className="rmb-2 row">
//                 <div className="col-md-1">
//                   <select className="form-select">
//                     <option value="10">Show 10</option>
//                     <option value="20">Show 20</option>
//                     <option value="30">Show 30</option>
//                     <option value="40">Show 40</option>
//                     <option value="50">Show 50</option>
//                   </select>
//                 </div>

//                 <div className="col-md-4">
//                   <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
//                     <div className="position-relative">
//                       <label htmlFor="search-bar-0" className="search-label">
//                         <span id="search-bar-0-label" className="sr-only">
//                           Search this table
//                         </span>
//                         <input
//                           id="search-bar-0"
//                           type="text"
//                           className="form-control"
//                           placeholder="Search..."
//                           value={searchValue}
//                           onChange={handleInputChange}
//                         />
//                         <i className="bx bx-search-alt search-icon"></i>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-sm-7">
//                   <div className="text-sm-end">
//                     <button
//                       type="button"
//                       className="btn mb-2 me-2 btn btn-primary"
//                       onClick={handleDeallocate}
//                     >
//                       <i className="mdi mdi-minus-circle-outline me-1"></i>
//                       Deallocate
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="col-md-4">
//               <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
//                 <div className="position-relative">
//                     <label htmlFor="search-bar-0" className="search-label">
//                       <span id="search-bar-0-label" className="sr-only">
//                         Search this table
//                       </span>
//                       <input
//                         id="search-bar-0"
//                         type="text"
//                         className="form-control"
//                         placeholder="Search..."
//                         value={searchValue}
//                         onChange={handleInputChange}
//                       />
//                       <i className="bx bx-search-alt search-icon"></i>
//                     </label>
//                   </div>
//                 </div>
//                 </div>

//                    <div className="col-sm-7">
//               <div className="text-sm-end">
//               <utton color="danger" onClick={handleDeallocate}>
//                   DEALLOCATE
//                 </button>
//               </div>
//             </div>
//                 */}

//             <div className="table-responsive">
//               <Table className="table table-bordered table-hover">
//                 <thead>
//                   <tr>
//                     <th>SL NO</th>
//                     <th>ASSET ID</th>
//                     <th>ASSET NAME</th>
//                     <th>SERIAL NUMBER</th>
//                     <th>EMPLOYEE NAME</th>
//                     <th>CLIENT</th>
//                     <th>ALLOCATED DATE</th>
//                     <th>ASSET REMARKS</th>

//                     <th>DEALLOCATION DATE</th>
//                     <th>ASSET STATUS</th>
//                     <th>CHECK/UNCHECK</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.slno}</td>
//                       <td>{row.assetId}</td>
//                       <td>{row.assetName}</td>
//                       <td>{row.serialNumber}</td>
//                       <td>{row.employeename}</td>
//                       <td>{row.client}</td>
//                       <td>{row.allocatedDate}</td>
//                       <td>
//                         <Input
//                           className="form-control"
//                           type="text"
//                           value={row.assetRemarks}
//                           onChange={e => {
//                             // handleAllocatedDateChange(e, index);
//                           }}
//                         />
//                       </td>
//                       <td>
//                         <Input
//                           className="form-control"
//                           type="date"
//                           value={row.deallocationDate}
//                           onChange={e => handleDeallocationDateChange(e, index)}
//                         />
//                       </td>
//                       <td>
//                         <select
//                           className="form-control"
//                           value={row.assetStatus}
//                           onChange={e => handleAssetStatusChange(e, index)}
//                         >
//                           <option value="select">Select</option>
//                           <option value="Active">Active</option>
//                           <option value="Inactive">Inactive</option>
//                         </select>
//                       </td>
//                       <td
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           marginBottom: "20px",
//                         }}
//                       >
//                         <Input
//                           type="checkbox"
//                           checked={row.checked}
//                           onChange={() => handleCheckboxChange(index)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//               <div className="text-center">
//                 {filteredData.length === 0 && (
//                   <div>No search results found</div>
//                 )}
//               </div>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </Container>
//   );
// };

// export default DeAllocate;
import React, { useState, useEffect, useMemo } from "react";
import {
  Col,
  Row,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Button,
  Container,
  Table,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const DeAllocate = () => {
  DeAllocate.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "ASSET001",
      assetName: "Laptop",
      serialNumber: "SN12345",
      employeename: "John Doe",
      client: "RA Corporation",
      assetRemarks: "Good condition",
      allocateDate: "2024-03-25",
      allocateType: "Active",
    },
    {
      slno: 2,
      assetId: "ASSET002",
      assetName: "Desktop",
      serialNumber: "SN67890",
      employeename: "Jane Smith",
      client: "CA Corporation",
      assetRemarks: "Needs maintenance",
      allocateDate: "2024-03-24",
      allocateType: "Inactive",
    },
  ]);
  const navigate = useNavigate();

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
      assetId: item.assetId.toUpperCase(), 
      assetName: item.assetName.toUpperCase(), 
      serialNumber: item.serialNumber.toUpperCase(), 
      employeename: item.employeename.toUpperCase(), 
      client: item.client.toUpperCase(),
      assetRemarks: item.assetRemarks.toUpperCase(), 
      client: item.client.toUpperCase(), 
      allocateType: item.allocateType.toUpperCase(), 
 

    }));
  }, [responseData]);
  const requiredFields = {
    assignTo: "ASSIGN TO",
    flr: "FLOOR",
  };
  const initialFormData = {
    assignTo: "",
    flr: "",
    alocationDate: "",
  };
  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });
  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
      },
      {
        Header: "ASSET ID",
        accessor: "assetId",
      },
      {
        Header: "ASSET NAME",
        accessor: "assetName",
      },
      {
        Header: "SERIAL NUMBER",
        accessor: "serialNumber",
      },
      {
        Header: "EMPLOYEE NAME",
        accessor: "employeename",
      },
      {
        Header: "CLIENT",
        accessor: "client",
      },
      {
        Header: "ASSET REMARKS",
        accessor: "assetRemarks",
        Cell: ({ row }) => (
          <Input
            type="text"
            value={row.original.assetRemarks}
            onChange={e => handleAssetRemarkChange(row.index, e.target.value)}
          />
        ),
      },
      {
        Header: "ALLOCATED DATE",
        accessor: "allocateDate",
        Cell: ({ row }) => (
          <Input
            type="date"
            value={row.original.allocateDate}
            onChange={e =>
              handleAllocationDateChange(row.index, e.target.value)
            }
            className="form-control"
          />
        ),
      },
      {
        Header: "ASSET STATUS",
        accessor: "allocateType",
        Cell: ({ row }) => (
          <Input
            type="select"
            value={row.original.allocateType}
            onChange={e =>
              handleAllocationTypeChange(row.index, e.target.value)
            }
          >
            <option value="Active">ACTIVE</option>
            <option value="Inactive">INACTIVE</option>
          </Input>
        ),
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
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleDropdownChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleAssetRemarkChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        assetRemarks: value,
      };
      return newData;
    });
  };
  const handleAllocationDateChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        allocateDate: value,
      };
      return newData;
    });
  };
  const handleAllocationTypeChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        allocateType: value,
      };
      return newData;
    });
  };

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
    setSelectedRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: dataWithSlno,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const AllocateHandle = async e => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} IS REQUIRED`,
        }));
        isValid = false;
      }
    });

    if (isValid) {
      try {
        // await axios.post(`http://localhost:3000/region/`, formData);
        // navigate("/company_group");
        console.log("Form submitted successfully");
      } catch (error) {
        console.log("error in creating group data" + error);
      }
    }
  };
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
                DE-ALOCATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              {/* <Row className="justify-content-center">
                <Col xl={10}> */}

              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-2">
                    <select className="form-select">
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

                  <div className="col-sm-6">
                    <div className="text-sm-end">
                      <button
                        type="button"
                        className="btn mb-2 me-2 btn btn-primary"
                        // onClick={() => navigate("/create_all_asset")}
                      >
                        <i className="mdi mdi-minus-circle-outline me-1"></i>
                        DEALLOCATE
                      </button>
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
              {/* <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-2">Showing 1 of 1 pages</p>
                    </div>
                    <div className="col-sm-6">
                      <div className="pagination justify-content-end pb-2 pe-2">
                      </div>
                    </div>
                  </div> */}
              {/* </Col>
              </Row> */}
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default DeAllocate;
