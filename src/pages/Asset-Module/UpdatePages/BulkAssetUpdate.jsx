// import React, { useMemo, useEffect, useState, useCallback } from "react";
// import {
//   Col,
//   Row,
//   CardBody,
//   CardHeader,
//   Card,
//   Label,
//   Input,
//   Button,
//   Container,
// } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";

// import {
//   useTable,
//   useGlobalFilter,
//   useSortBy,
//   usePagination,
// } from "react-table";

// const BulkAssetUpdate = () => {
//   const demoData = [
//     {
//       slno: 1,
//       assetId: "A001",
//       assetName: "Laptop",
//       serialNumber: "SN001",
//       assetRemarks: "INV-001",
//       allocateType: "Active",
//     },
//     {
//       slno: 2,
//       assetId: "A002",
//       assetName: "Desktop",
//       serialNumber: "SN002",
//       assetRemarks: "INV-002",
//       allocateType: "Active",
//     },
//     {
//       slno: 3,
//       assetId: "A003",
//       assetName: "Printer",
//       serialNumber: "SN003",
//       assetRemarks: "INV-003",
//       allocateType: "Inactive",
//     },
//     {
//       slno: 4,
//       assetId: "A004",
//       assetName: "Monitor",
//       serialNumber: "SN004",
//       assetRemarks: "INV-004",
//       allocateType: "Active",
//     },
//     {
//       slno: 4,
//       assetId: "A004",
//       assetName: "Monitor",
//       serialNumber: "SN004",
//       assetRemarks: "INV-004",
//       allocateType: "Active",
//     },
//     {
//       slno: 4,
//       assetId: "A004",
//       assetName: "Monitor",
//       serialNumber: "SN004",
//       assetRemarks: "INV-004",
//       allocateType: "Active",
//     },
//   ];

//   const [responseData, setResponseData] = useState(demoData);
//   const navigate = useNavigate();

//   const columns = useMemo(
//     () => [
//       {
//         Header: "SL NO",
//         accessor: "slno",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "ASSET ID",
//         accessor: "assetId",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "ASSET NAME",
//         accessor: "assetName",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "SERIAL NUMBER",
//         accessor: "serialNumber",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "ASSET REMARKS",
//         accessor: "assetRemarks",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "ALLOCATE TYPE",
//         accessor: "allocateType",
//         disableFilters: true,
//         filterable: true,
//       },
//       {
//         Header: "CHECK/UNCHECK",
//         accessor: "checkUncheck",
//         disableFilters: true,
//         filterable: true,
//       },
//     ],
//     []
//   );
//   const dataWithSlno = useMemo(() => {
//     return responseData.map((item, index) => ({
//       ...item,
//       slno: index + 1,
//     }));
//   }, [responseData]);
//   const requiredFields = {
//     assignTo: "Deligation By",
//     flr: "Deligation To",
//   };
//   const initialFormData = {
//     assignTo: "",
//     flr: "",
//     alocationDate: "",
//   };
//   const initialErrors = {};
//   Object.keys(requiredFields).forEach(key => {
//     initialFormData[key] = "";
//     initialErrors[key] = "";
//   });

//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState(initialErrors);

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleDropdownChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const AllocateHandle = async e => {
//     e.preventDefault();
//     let isValid = true;

//     Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
//       if (!formData[fieldName].trim()) {
//         setErrors(prevErrors => ({
//           ...prevErrors,
//           [fieldName]: `${fieldLabel} is required`,
//         }));
//         isValid = false;
//       }
//     });

//     if (isValid) {
//       try {
//         // await axios.post(`http://localhost:3000/region/`, formData);
//         // navigate("/company_group");
//         console.log("Form submitted successfully");
//       } catch (error) {
//         console.log("error in creating group data" + error);
//       }
//     }
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     nextPage,
//     previousPage,
//     canPreviousPage,
//     canNextPage,
//     state: { pageIndex, globalFilter },
//     pageCount,
//     gotoPage,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data: dataWithSlno,
//       initialState: { pageSize: 10 },
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   // const { getData, data, isLoading } = useGet();
//   // useEffect(() => {
//   //   async function fetch() {
//   //     await getData("http://localhost:3000/employeemaster");
//   //   }
//   //   fetch();
//   // }, [getData]);

//   // useEffect(() => {
//   //   setResponseData(data);
//   // }, [data]);

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card className="mt-5">
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 BULK ASSET ALOCATION DETAILS
//               </h1>
//             </CardHeader>
//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <form className="needs-validation" noValidate>
//                     <Row className="mb-2">
//                       <Col md={4}>
//                         <Label for="assignTo">
//                           ASSIGN TO<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="assignTo"
//                           id="assignTo"
//                           value={formData.assignTo}
//                           onChange={handleDropdownChange}
//                           invalid={!!errors.assignTo}
//                         >
//                           <option value="">SELECT ASSIGN TO</option>
//                           <option value="group1">Group 1</option>
//                           <option value="group2">Group 2</option>
//                         </Input>
//                         <span className="text-danger">{errors.assignTo}</span>
//                       </Col>
//                       <Col md={4}>
//                         <Label for="flr">
//                           FLOOR<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="flr"
//                           id="flr"
//                           value={formData.flr}
//                           onChange={handleDropdownChange}
//                           invalid={!!errors.flr}
//                         >
//                           <option value="">SELECT FLOOR</option>
//                           <option value="group1">Group 1</option>
//                           <option value="group2">Group 2</option>
//                         </Input>
//                         <span className="text-danger">{errors.flr}</span>
//                       </Col>
//                       <Col md={4}>
//                         <Label for="alocationDate">
//                           ALLOCATE DATE<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="date"
//                           name="alocationDate"
//                           id="alocationDate"
//                           value={formData.alocationDate}
//                           onChange={handleInputChange}
//                           invalid={!!errors.alocationDate}
//                         />
//                         <span className="text-danger">
//                           {errors.alocationDate}
//                         </span>
//                       </Col>
//                       <hr className="mb-0 mt-3" />
//                     </Row>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         marginBottom: "20px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "space-around",
//                         }}
//                       >
//                         <button
//                           type="button"
//                           className="btn btn-success-subtle border border-success"
//                           onClick={AllocateHandle}
//                           style={{
//                             paddingTop: "10px",
//                             height: "45px",
//                             width: "100px",
//                             marginRight: "30px",
//                           }}
//                         >
//                           <Label>ALLOCATE</Label>
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-secondary-subtle border border-secondary"
//                           onClick={() => {
//                             navigate("/bulk_asset_allocate");
//                           }}
//                           style={{
//                             paddingTop: "10px",
//                             width: "80px",
//                             height: "45px",
//                           }}
//                         >
//                           <Label>BACK</Label>
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                   <div className="container pt-4">
//                     <div className="rmb-2 row">
//                       <div className="col-md-1">
//                         <select className="form-select">
//                           <option value="10">Show 10</option>
//                           <option value="20">Show 20</option>
//                           <option value="30">Show 30</option>
//                           <option value="40">Show 40</option>
//                           <option value="50">Show 50</option>
//                         </select>
//                       </div>

//                       <div className="col-md-4">
//                         <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
//                           <div className="position-relative">
//                             <label
//                               htmlFor="search-bar-0"
//                               className="search-label"
//                             >
//                               <span id="search-bar-0-label" className="sr-only">
//                                 Search this table
//                               </span>
//                               <input
//                                 id="search-bar-0"
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="search ..."
//                                 value={globalFilter || ""}
//                                 onChange={e => setGlobalFilter(e.target.value)}
//                               />
//                               <i className="bx bx-search-alt search-icon"></i>
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       {/* <div className="col-sm-7">
//                        <div className="text-sm-end">
//                          <button
//                            type="button"
//                            className="btn mb-2 me-2 btn btn-primary"
//                            onClick={() => navigate("/create_all_asset")}
//                          >
//                            <i className="mdi mdi-plus-circle-outline me-1"></i>
//                            Create New
//                          </button>
//                        </div>
//                      </div> */}
//                     </div>
//                   </div>
//                   <div className="table-responsive react-table">
//                     <table
//                       className="table table-bordered table-hover"
//                       {...getTableProps()}
//                     >
//                       <thead className="table-light table-nowrap">
//                         {headerGroups.map(headerGroup => (
//                           <tr
//                             key={headerGroup.id}
//                             {...headerGroup.getHeaderGroupProps()}
//                           >
//                             {headerGroup.headers.map(column => (
//                               <th
//                                 key={column.id}
//                                 {...column.getHeaderProps(
//                                   column.getSortByToggleProps()
//                                 )}
//                                 style={
//                                   column.id === "slno"
//                                     ? { width: "6%" }
//                                     : { backgroundColor: "" }
//                                 }
//                               >
//                                 <div className="d-flex justify-content-between">
//                                   <span className="font-weight-bold">
//                                     {column.render("Header")}
//                                   </span>
//                                   <span>
//                                     {column.isSorted
//                                       ? column.isSortedDesc
//                                         ? " 🔽"
//                                         : " 🔼"
//                                       : ""}
//                                   </span>
//                                 </div>
//                               </th>
//                             ))}
//                           </tr>
//                         ))}
//                       </thead>
//                       <tbody {...getTableBodyProps()}>
//                         {page.length > 0 ? (
//                           page.map(row => {
//                             prepareRow(row);
//                             return (
//                               <tr key={row.id} {...row.getRowProps()}>
//                                 {row.cells.map(cell => (
//                                   <td
//                                     key={cell.column.id}
//                                     {...cell.getCellProps()}
//                                   >
//                                     {cell.column.id !== "id"
//                                       ? // <Link to={`/modify_all_asset/${row.original.id}`}>
//                                         //      {cell.render("Cell")}
//                                         //    </Link>
//                                         cell.render("Cell")
//                                       : cell.render("Cell")}
//                                   </td>
//                                 ))}
//                               </tr>
//                             );
//                           })
//                         ) : (
//                           <tr>
//                             <td
//                               colSpan={headerGroups[0].headers.length}
//                               style={{ textAlign: "center" }}
//                             >
//                               {" "}
//                               No search results found.
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="row">
//                     <div className="col-sm-6">
//                       <p className="ps-2">
//                         Showing {pageIndex + 1} of {pageCount} pages
//                       </p>
//                     </div>
//                     <div className="col-sm-6">
//                       <div className="pagination justify-content-end pb-2 pe-2">
//                         <button
//                           className="btn btn-info"
//                           disabled={pageIndex === 0}
//                           onClick={() => gotoPage(0)}
//                         >
//                           FIRST
//                         </button>
//                         <button
//                           className="btn btn-primary"
//                           disabled={!canPreviousPage}
//                           onClick={previousPage}
//                         >
//                           PRE
//                         </button>
//                         <span className="btn btn-light">{pageIndex + 1}</span>
//                         <button
//                           className="btn btn-primary"
//                           disabled={!canNextPage}
//                           onClick={nextPage}
//                         >
//                           NEXT
//                         </button>
//                         <button
//                           className="btn btn-info"
//                           disabled={pageIndex >= pageCount - 1}
//                           onClick={() => gotoPage(pageCount - 1)}
//                         >
//                           LAST
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default BulkAssetUpdate;

import React, { useState ,useMemo} from "react";
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

const BulkAssetUpdate = () => {
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "A001",
      assetName: "Laptop",
      serialNumber: "SN001",
      assetRemarks: "INV-001",
      allocateType: "Active",
      checked: false,
    },
    {
      slno: 2,
      assetId: "A002",
      assetName: "Desktop",
      serialNumber: "SN002",
      assetRemarks: "INV-002",
      checked: false,
    },
    {
      slno: 3,
      assetId: "A003",
      assetName: "Printer",
      serialNumber: "SN003",
      assetRemarks: "INV-003",
      allocateType: "Inactive",
      checked: false,
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "INV-004",
      allocateType: "Active",
      checked: false,
    },
    {
      slno: 5,
      assetId: "A005",
      assetName: "Keyboard",
      serialNumber: "SN005",
      assetRemarks: "INV-005",
      allocateType: "Inactive",
      checked: false,
    },
  ]);
  const navigate = useNavigate();


    const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));
  }, [responseData]);
  const requiredFields = {
    assignTo: "Deligation By",
    flr: "Deligation To",
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

  const AllocateHandle = async e => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} is required`,
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

  const handleCheckboxChange = index => {
    const updatedData = [...responseData];
    updatedData[index].checked = !updatedData[index].checked;
    setResponseData(updatedData);
  };
  const handleRemarkChange = (e, index) => {
    const updatedData = [...responseData];
    updatedData[index].assetRemarks = e.target.value;
    setResponseData(updatedData);
  };

  const handleAllocateTypeChange = (e, index) => {
    const updatedData = [...responseData];
    updatedData[index].allocateType = e.target.value;
    setResponseData(updatedData);
  };

  return (
       <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                BULK ASSET ALOCATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assignTo">
                          ASSIGN TO<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="assignTo"
                          id="assignTo"
                          value={formData.assignTo}
                          onChange={handleDropdownChange}
                          invalid={!!errors.assignTo}
                        >
                          <option value="">SELECT ASSIGN TO</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">{errors.assignTo}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="flr">
                          FLOOR<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="flr"
                          id="flr"
                          value={formData.flr}
                          onChange={handleDropdownChange}
                          invalid={!!errors.flr}
                        >
                          <option value="">SELECT FLOOR</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">{errors.flr}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="alocationDate">
                          ALLOCATE DATE
                        </Label>
                        <Input
                          type="date"
                          name="alocationDate"
                          id="alocationDate"
                          value={formData.alocationDate}
                          onChange={handleInputChange}
                          invalid={!!errors.alocationDate}
                        />
                        <span className="text-danger">
                          {errors.alocationDate}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-success-subtle border border-success"
                          onClick={AllocateHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "100px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>ALLOCATE</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/bulk_asset_allocate");
                          }}
                          style={{
                            paddingTop: "10px",
                            width: "80px",
                            height: "45px",
                          }}
                        >
                          <Label>BACK</Label>
                        </button>
                      </div>
                    </div>
                  </form>
                
                  <div className="table-responsive">
                    <Table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>SL NO</th>
                          <th>ASSET ID</th>
                          <th>ASSET NAME</th>
                          <th>SERIAL NUMBER</th>
                          <th>ASSET REMARKS</th>
                          <th>ALLOCATE TYPE</th>
                          <th>CHECK/UNCHECK</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responseData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.slno}</td>
                            <td>{row.assetId}</td>
                            <td>{row.assetName}</td>
                            <td>{row.serialNumber}</td>
                            <td>
                              <Input
                                className="form-control"
                                type="text"
                                value={row.assetRemarks}
                                onChange={e => handleRemarkChange(e, index)}
                              />
                            </td>
                            <td>
                              <select
                                className="form-control"
                                value={row.allocateType}
                                onChange={e =>
                                  handleAllocateTypeChange(e, index)
                                }
                              >
                                <option value="select">Select</option>
                                <option value="Active">PERMANENT</option>
                                <option value="Inactive">TEMPORORY</option>
                              </select>
                            </td>
                            <td  style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                              
                              <Input
                                type="checkbox"
                                checked={row.checked}
                                onChange={() => handleCheckboxChange(index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BulkAssetUpdate;
