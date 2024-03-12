// import React, { useMemo, useState } from "react";
// import { Col, Row, CardBody, CardHeader, Card, Label, Input, Container } from "reactstrap";
// import PropTypes from 'prop-types'; // Import PropTypes for prop type validations
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   useTable,
//   useGlobalFilter,
//   useSortBy,
//   usePagination,
// } from "react-table";
// import JsBarcode from "jsbarcode";

// const QrCode = () => {

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
//         Cell: ({ row }) => (
//           <Input
//             type="checkbox"
//             checked={row.values.checkUncheck}
//             onChange={() => handleCheckboxToggle(row.original)}
//           />
//         ),
//       },
//     ],
//     []
//   );
//   const [selectedIds, setSelectedIds] = useState([]);

//   // Your existing component code...

//   const handleCheckboxToggle = (id) => {
//     // Check if the ID is already in the array
//     if (selectedIds.includes(id)) {
//       // If the ID exists, remove it from the array
//       setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
//     } else {
//       // If the ID doesn't exist, add it to the array
//       setSelectedIds([...selectedIds, id]);
//     }
//   };
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

//   const AllocateHandle = async (e) => {
//     e.preventDefault();

//     if (selectedIds.length === 0) {
//       alert("Please select an item.");
//       return;
//     }

//     // Continue with your logic if at least one checkbox is checked
//     try {
//       generateBarcodes();
//       // await axios.post(`http://localhost:3000/region/`, formData);
//       // navigate("/company_group");
//       console.log("Form submitted successfully");
//     } catch (error) {
//       console.log("error in creating group data" + error);
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
//   const generateBarcodes = () => {
//     // Open a new tab for displaying barcodes
//     const newTab = window.open("", "_blank");

//     // Check if there are selected IDs
//     if (selectedIds.length > 0) {
//       // Iterate over each selected ID
//       selectedIds.forEach((id) => {
//         // Create a <div> element for the barcode
//         const barcodeDiv = newTab.document.createElement("div");

//         // Generate barcode for the ID inside the <div> element
//         JsBarcode(barcodeDiv, "HELLO");

//         // Append the barcode <div> to the new tab
//         newTab.document.body.appendChild(barcodeDiv);

//         // Optionally, you can also display the ID below the barcode
//         const idElement = newTab.document.createElement("div");
//         idElement.textContent = id;
//         newTab.document.body.appendChild(idElement);
//       });
//     } else {
//       // If no IDs are selected, display a message in the new tab
//       newTab.document.write("<div>No IDs selected</div>");
//     }

//     // Close the document for writing
//     newTab.document.close();
//   };

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
//                 Generate QR Code
//               </h1>
//             </CardHeader>
//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <form className="needs-validation" noValidate>
//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <Label for="assignTo">
//                           Category<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="id_grp"
//                           id="id_grp"
//                           value={formData.assignTo}
//                           onChange={handleDropdownChange}
//                         >
//                           <option value="">SELECT CATEGORY</option>
//                           <option value="1">LAPTOP</option>
//                           <option value="2">DESKTOP</option>
//                         </Input>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="assignTo">
//                           Sub-Category<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="id_sgrp"
//                           id="id_sgrp"
//                           value={formData.assignTo}
//                           onChange={handleDropdownChange}
//                         >
//                           <option value="">SELECT SUB-CATEGORY</option>
//                           <option value="1">DELL</option>
//                           <option value="2">HP</option>
//                         </Input>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="assignTo">
//                           PO No./Bill No.<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="no_po"
//                           id="no_po"
//                           value={formData.assignTo}
//                           onChange={handleDropdownChange}
//                         >
//                           <option value="">SELECT PO/Bill No.</option>
//                           <option value="po1">PO001</option>
//                           <option value="po2">PO002</option>
//                         </Input>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="no_inv">
//                           Invoice No.<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="select"
//                           name="no_inv"
//                           id="no_inv"
//                           value={formData.assignTo}
//                           onChange={handleDropdownChange}
//                         >
//                           <option value="">SELECT INVOICE No.</option>
//                           <option value="inv1">INVOICE001</option>
//                           <option value="inv2">INVOICE002</option>
//                         </Input>
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
//                           <Label>Next</Label>
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                   <div className="container pt-4">
//                     <div className="rmb-2 row">
//                       <div className="col-md-2">
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
// QrCode.propTypes = {
//   toggleCheckbox: PropTypes.func.isRequired, // Add prop type validation for the 'toggleCheckbox' function
//   // Add prop type validation for other props used in the component
//   row: PropTypes.object.isRequired,
//   row: PropTypes.shape({
//     values: PropTypes.object.isRequired,
//     original: PropTypes.object.isRequired,
//   }),
// };

// export default QrCode;
import React, { useMemo, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Col,
  FormFeedback,
  Input,
  Label,
  Row,
  Form,
  FormGroup,
  CardBody,
  CardHeader,
  Container,
  Card,
  Table,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const QrCode = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      cat: "",
      subCat: "",
      poNo: "",
      invoiceNo: "",
    },
    validationSchema: Yup.object({
      cat: Yup.string().required("Material is required"),
      subCat: Yup.string().required("Sub-Material is required"),
      poNo: Yup.string().required("PO.Number is required"),
      invoiceNo: Yup.string().required("Invoice Number is required"),
    }),

    onSubmit: async values => {
      console.log("Form submitted successfully!");
      setSubmitted(true);
    },
  });
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "03/IT/EBE-0001/2024",
      assetName: "Laptop",
      serialNumber: "AB1",
      assetRemarks: "Good condition",
      allocateType: "Active",
      checked: false,
      employeename: "John Doe",
      client: "ABC Corp",
      allocatedDate: "2023-01-15",
    },
    {
      slno: 2,
      assetId: "03/IT/EBE-0002/2024",
      assetName: "Desktop",
      serialNumber: "AB2",
      assetRemarks: "Good condition",
      allocateType: "Active",
      checked: false,
      employeename: "Jane Doe",
      client: "XYZ Corp",
      allocatedDate: "2023-01-16",
    },
  ]);

  const handleGenerateQR = () => {
    console.log("Generate QR button clicked");
    if (selectedRows.length > 0) {
      setQrData(selectedRows);
    }
  };

  const [searchValue, setSearchValue] = useState("");

  const filteredData = useMemo(() => {
    if (!searchValue) return responseData;
    return responseData.filter(item => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [responseData, searchValue]);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleCheckboxChange = index => {
    const updatedData = [...responseData];
    updatedData[index].checked = !updatedData[index].checked;
    setResponseData(updatedData);

    const selectedRow = responseData[index];
    const selectedIndex = selectedRows.findIndex(
      row => row.assetId === selectedRow.assetId
    );

    if (selectedIndex > -1) {
      setSelectedRows([
        ...selectedRows.slice(0, selectedIndex),
        ...selectedRows.slice(selectedIndex + 1),
      ]);
    } else {
      setSelectedRows([...selectedRows, selectedRow]);
    }
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-3">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                QR CODE DETAILS
              </h1>
            </CardHeader>

            <CardBody>
              <Row className="justify-content-center">
                <Col xl={12}>
                  <Form
                    className="needs-validation"
                    onSubmit={validation.handleSubmit}
                  >
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cat">
                            MATERIAL <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cat"
                            id="cat"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cat && validation.errors.cat
                            }
                          >
                            <option value="">Select Material</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.cat && validation.errors.cat ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cat}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="subCat">
                            SUB-MATERIAL <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="subCat"
                            id="subCat"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subCat &&
                              validation.errors.subCat
                            }
                          >
                            <option value="">Select Sub Material</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.subCat &&
                          validation.errors.subCat ? (
                            <FormFeedback type="invalid">
                              {validation.errors.subCat}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="poNo">
                            PO.NUMBER <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="poNo"
                            id="poNo"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.poNo && validation.errors.poNo
                            }
                          >
                            <option value="">Select Asset</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.poNo && validation.errors.poNo ? (
                            <FormFeedback type="invalid">
                              {validation.errors.poNo}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="invoiceNo">
                            INVOICE NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="invoiceNo"
                            id="invoiceNo"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.invoiceNo &&
                              validation.errors.invoiceNo
                            }
                          >
                            <option value="">Select Invoice Number</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.invoiceNo &&
                          validation.errors.invoiceNo ? (
                            <FormFeedback type="invalid">
                              {validation.errors.invoiceNo}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
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
                        <Button
                          type="submit"
                          color="success-subtle"
                          className="btn btn-success-subtle border border-success"
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          NEXT
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>

          {submitted && (
            <Card className="mt-3">
              <CardBody>
                <div>
                  <div className="container pt-1">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="search-box me-2 my-3 my-md-0 d-inline-block">
                          <div className="position-relative">
                            <label
                              htmlFor="search-bar-0"
                              className="search-label"
                            >
                              <span id="search-bar-0-label" className="sr-only">
                                Search this table
                              </span>
                              <input
                                id="search-bar-0"
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={handleInputChange}
                              />
                              <i className="bx bx-search-alt search-icon"></i>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-8">
                        <div className="text-sm-end">
                          <button
                            type="button"
                            className="btn btn-success-subtle border border-success"
                            onClick={handleGenerateQR}
                          >
                            <i className="mdi me-1"></i>
                            PREVIEW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <Table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>SL NO</th>
                          <th>ASSET ID</th>
                          <th>ASSET REF.NO</th>
                          <th>SERIAL NUMBER</th>
                          <th>SUB MATERIAL</th>
                          <th>CHECK/UNCHECK</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.slno}</td>
                            <td>{row.assetId}</td>
                            <td>{row.assetName}</td>
                            <td>{row.serialNumber}</td>
                            <td>{row.assetName}</td>
                            <td
                              style={{
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
                    {filteredData.length === 0 && <div>No data found</div>}
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {qrData && (
            <React.Fragment>
              {qrData.map((data, index) => (
                <Card key={index} className="mt-3 text-center">
                  <CardBody>
                    <h3>Generated QR Code {index + 1}</h3>
                    <p>Location: BANGLORE</p>
                    <p>Asset ID: {data.assetId}</p>
                    <p>Serial No: {data.serialNumber}</p>
                    <p>Model No: E BLOCK EQUIPMENT (POSITIVO)</p>
                    <QRCode value={data.assetId} />
                  </CardBody>
                </Card>
              ))}
            </React.Fragment>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default QrCode;
