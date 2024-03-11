import React, { useMemo, useState } from "react";
import { Col, Row, CardBody, CardHeader, Card, Label, Input, Container } from "reactstrap";
import PropTypes from 'prop-types'; // Import PropTypes for prop type validations
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import JsBarcode from "jsbarcode";


const Barcode = () => {

  const demoData = [
    {
      slno: 1,
      assetId: "A001",
      assetName: "Laptop",
      serialNumber: "SN001",
      assetRemarks: "INV-001",
      allocateType: "Active",
    },
    {
      slno: 2,
      assetId: "A002",
      assetName: "Desktop",
      serialNumber: "SN002",
      assetRemarks: "INV-002",
      allocateType: "Active",
    },
    {
      slno: 3,
      assetId: "A003",
      assetName: "Printer",
      serialNumber: "SN003",
      assetRemarks: "INV-003",
      allocateType: "Inactive",
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "INV-004",
      allocateType: "Active",
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "INV-004",
      allocateType: "Active",
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "INV-004",
      allocateType: "Active",
    },
  ];

  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
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
        Header: "ASSET REMARKS",
        accessor: "assetRemarks",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ALLOCATE TYPE",
        accessor: "allocateType",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "CHECK/UNCHECK",
        accessor: "checkUncheck",
        disableFilters: true,
        Cell: ({ row }) => (
          <Input
            type="checkbox"
            checked={row.values.checkUncheck}
            onChange={() => handleCheckboxToggle(row.original)}
          />
        ),
      },
    ],
    []
  );
  const [selectedIds, setSelectedIds] = useState([]);

  // Your existing component code...

  const handleCheckboxToggle = (id) => {
    // Check if the ID is already in the array
    if (selectedIds.includes(id)) {
      // If the ID exists, remove it from the array
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      // If the ID doesn't exist, add it to the array
      setSelectedIds([...selectedIds, id]);
    }
  };
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

  const AllocateHandle = async (e) => {
    e.preventDefault();

    if (selectedIds.length === 0) {
      alert("Please select an item.");
      return;
    }

    // Continue with your logic if at least one checkbox is checked
    try {
      generateBarcodes();
      // await axios.post(`http://localhost:3000/region/`, formData);
      // navigate("/company_group");
      console.log("Form submitted successfully");
    } catch (error) {
      console.log("error in creating group data" + error);
    }
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
  const generateBarcodes = () => {
    // Open a new tab for displaying barcodes
    const newTab = window.open("", "_blank");
  
    // Check if there are selected IDs
    if (selectedIds.length > 0) {
      // Iterate over each selected ID
      selectedIds.forEach((id) => {
        // Create a <div> element for the barcode
        const barcodeDiv = newTab.document.createElement("div");
        
        // Generate barcode for the ID inside the <div> element
        JsBarcode(barcodeDiv, id);
  
        // Append the barcode <div> to the new tab
        newTab.document.body.appendChild(barcodeDiv);
  
        // Optionally, you can also display the ID below the barcode
        const idElement = newTab.document.createElement("div");
        idElement.textContent = id;
        newTab.document.body.appendChild(idElement);
      });
    } else {
      // If no IDs are selected, display a message in the new tab
      newTab.document.write("<div>No IDs selected</div>");
    }
  
    // Close the document for writing
    newTab.document.close();
  };
  
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
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                Generate Bar Code
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="assignTo">
                          Category<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="id_grp"
                          id="id_grp"
                          value={formData.assignTo}
                          onChange={handleDropdownChange}
                        >
                          <option value="">SELECT CATEGORY</option>
                          <option value="1">LAPTOP</option>
                          <option value="2">DESKTOP</option>
                        </Input>
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          Sub-Category<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="id_sgrp"
                          id="id_sgrp"
                          value={formData.assignTo}
                          onChange={handleDropdownChange}
                        >
                          <option value="">SELECT SUB-CATEGORY</option>
                          <option value="1">DELL</option>
                          <option value="2">HP</option>
                        </Input>
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          PO No./Bill No.<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="no_po"
                          id="no_po"
                          value={formData.assignTo}
                          onChange={handleDropdownChange}
                        >
                          <option value="">SELECT PO/Bill No.</option>
                          <option value="po1">PO001</option>
                          <option value="po2">PO002</option>
                        </Input>
                      </Col>
                      <Col md={6}>
                        <Label for="no_inv">
                          Invoice No.<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="no_inv"
                          id="no_inv"
                          value={formData.assignTo}
                          onChange={handleDropdownChange}
                        >
                          <option value="">SELECT INVOICE No.</option>
                          <option value="inv1">INVOICE001</option>
                          <option value="inv2">INVOICE002</option>
                        </Input>
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
                          <Label>Next</Label>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="container pt-4">
                    <div className="rmb-2 row">
                      <div className="col-md-2">
                        <select className="form-select">
                          <option value="10">Show 10</option>
                          <option value="20">Show 20</option>
                          <option value="30">Show 30</option>
                          <option value="40">Show 40</option>
                          <option value="50">Show 50</option>
                        </select>
                      </div>

                      <div className="col-md-4">
                        <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
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
                                placeholder="search ..."
                                value={globalFilter || ""}
                                onChange={e => setGlobalFilter(e.target.value)}
                              />
                              <i className="bx bx-search-alt search-icon"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-sm-7">
                       <div className="text-sm-end">
                         <button
                           type="button"
                           className="btn mb-2 me-2 btn btn-primary"
                           onClick={() => navigate("/create_all_asset")}
                         >
                           <i className="mdi mdi-plus-circle-outline me-1"></i>
                           Create New
                         </button>
                       </div>
                     </div> */}
                    </div>
                  </div>
                  <div className="table-responsive react-table">
                    <table
                      className="table table-bordered table-hover"
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
                                  <td
                                    key={cell.column.id}
                                    {...cell.getCellProps()}
                                  >
                                    {cell.column.id !== "id"
                                      ? // <Link to={`/modify_all_asset/${row.original.id}`}>
                                        //      {cell.render("Cell")}
                                        //    </Link>
                                        cell.render("Cell")
                                      : cell.render("Cell")}
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
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};
Barcode.propTypes = {
  toggleCheckbox: PropTypes.func.isRequired, // Add prop type validation for the 'toggleCheckbox' function
  // Add prop type validation for other props used in the component
  row: PropTypes.object.isRequired,
  row: PropTypes.shape({
    values: PropTypes.object.isRequired,
    original: PropTypes.object.isRequired,
  }),
};

export default Barcode;
