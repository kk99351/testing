import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

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
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllAssetCreate = () => {
  const navigate = useNavigate();
  const requiredFields = {
    assetId: "Asset ID",
    taggable: "Tagable",
    typeOfProc: "Type Of Procurement",
    leaseStatus: "Lease Status",
    amcStartDate: "AMC/Warranty Start Date",
    amcEndDate: "AMC/Warranty End Date",
    leaseStartDate: "Lease Start Date",
    leaseStatus: "Lease Status",
    leaseEndDate: "Lease End Date",
  };

  const initialFormData = {
    assetId: "",
    invoiceNumber: "",
    invoiceDate: "",
    poNumber: "",
    poDate: "",
    serialNumber: "",
    assetRef: "",
    diviceStatus: "",
    processType: "",
    storageType: "",
    ramType: "",
    assetName: "",
    assetRemarks: "",
    serviceVendor: "",
    assetDescription: "",
    taggable: "",
    typeOfProc: "",
    amc: "",
    amcStartDate: "",
    amcEndDate: "",
    leaseStatus: "",
    leaseStartDate: "",
    leaseEndDate: "",
    additionalCost: "",
    totalUnitPrice: "",
    netValue: "",
  };

  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [showAmcDates, setShowAmcDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);

  const demoData = useMemo(
    () => [
      {
        slno: 1,
        fieldName: "Asset Name",
        oldValue: "Laptop",
        newValue: "Desktop",
        editedBy: "John Doe",
        editDate: "2024-03-01",
      },
      {
        slno: 2,
        fieldName: "Serial Number",
        oldValue: "123456",
        newValue: "654321",
        editedBy: "Alice Smith",
        editDate: "2024-03-02",
      },
      {
        slno: 3,
        fieldName: "Asset Status",
        oldValue: "Active",
        newValue: "Inactive",
        editedBy: "Bob Johnson",
        editDate: "2024-03-03",
      },
      {
        slno: 4,
        fieldName: "Asset Location",
        oldValue: "Room A",
        newValue: "Room B",
        editedBy: "Emily Davis",
        editDate: "2024-03-04",
      },
      {
        slno: 5,
        fieldName: "Asset Owner",
        oldValue: "John Doe",
        newValue: "Alice Smith",
        editedBy: "John Doe",
        editDate: "2024-03-05",
      },
      {
        slno: 5,
        fieldName: "Asset Owner",
        oldValue: "John Doe",
        newValue: "Alice Smith",
        editedBy: "John Doe",
        editDate: "2024-03-05",
      },
    ],
    []
  );
  
  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "FIELD NAME",
        accessor: "fieldName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "OLD VALUE",
        accessor: "oldValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "NEW VALUE",
        accessor: "newValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "EDITED BY",
        accessor: "editedBy",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "EDIT DATE",
        accessor: "editDate",
        disableFilters: true,
        filterable: true,
      },
    ],
    []
  );

  const dataWithSlno = useMemo(() => {
    return demoData.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));
  }, [demoData]);

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
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

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
    // Check if AMC or Warranty is selected
    if (name === "amc") {
      setShowAmcDates(value === "amc" || value === "warrenty");
    }
    // Check if Lease Status is selected
    if (name === "leaseStatus") {
      setShowLeaseDates(value === "underlease");
    }
  };

  const createHandle = async e => {
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
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ALL ASSET DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetId">
                          ASSET ID<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          name="assetId"
                          id="assetId"
                          value={formData.assetId}
                          onChange={handleInputChange}
                          invalid={!!errors.assetId}
                        />
                        <span className="text-danger">{errors.assetId}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="invoiceNumber">INVOICE NUMBER</Label>
                        <Input
                          type="text"
                          name="invoiceNumber"
                          id="invoiceNumber"
                          value={formData.invoiceNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceNumber}
                        />
                        <span className="text-danger">
                          {errors.invoiceNumber}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="invoiceDate">INVOICE DATE</Label>
                        <Input
                          type="date"
                          name="invoiceDate"
                          id="invoiceDate"
                          value={formData.invoiceDate}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceDate}
                        />
                        <span className="text-danger">
                          {errors.invoiceDate}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="poNumber">PO NUMBER</Label>
                        <Input
                          type="text"
                          name="poNumber"
                          id="poNumber"
                          value={formData.poNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.poNumber}
                        />
                        <span className="text-danger">{errors.poNumber}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="poDate">PO DATE</Label>
                        <Input
                          type="date"
                          name="poDate"
                          id="poDate"
                          value={formData.poDate}
                          onChange={handleInputChange}
                          invalid={!!errors.poDate}
                        />
                        <span className="text-danger">{errors.poDate}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="serialNumber">SERIAL NUMBER</Label>
                        <Input
                          type="text"
                          name="serialNumber"
                          id="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.serialNumber}
                        />
                        <span className="text-danger">
                          {errors.serialNumber}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetRef">ASSET RFQ NUMBER</Label>
                        <Input
                          type="text"
                          name="assetRef"
                          id="assetRef"
                          value={formData.assetRef}
                          onChange={handleInputChange}
                          invalid={!!errors.assetRef}
                        />
                        <span className="text-danger">{errors.assetRef}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="diviceStatus">DIVICE STATUS</Label>
                        <Input
                          type="text"
                          name="diviceStatus"
                          id="poDate"
                          value={formData.diviceStatus}
                          onChange={handleInputChange}
                          invalid={!!errors.diviceStatus}
                        />
                        <span className="text-danger">
                          {errors.diviceStatus}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="processType">PROCESS TYPE</Label>
                        <Input
                          type="text"
                          name="processType"
                          id="processType"
                          value={formData.processType}
                          onChange={handleInputChange}
                          invalid={!!errors.processType}
                        />
                        <span className="text-danger">
                          {errors.processType}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="storageType">STORAGE TYPE</Label>
                        <Input
                          type="text"
                          name="storageType"
                          id="storageType"
                          value={formData.storageType}
                          onChange={handleInputChange}
                          invalid={!!errors.storageType}
                        />
                        <span className="text-danger">
                          {errors.storageType}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="ramType">RAM TYPE</Label>
                        <Input
                          type="text"
                          name="ramType"
                          id="ramType"
                          value={formData.ramType}
                          onChange={handleInputChange}
                          invalid={!!errors.ramType}
                        />
                        <span className="text-danger">{errors.ramType}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="assetName">ASSET NAME</Label>
                        <Input
                          type="text"
                          name="assetName"
                          id="assetName"
                          value={formData.assetName}
                          onChange={handleInputChange}
                          invalid={!!errors.assetName}
                        />
                        <span className="text-danger">{errors.assetName}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetRemarks">ASSET REMARKS </Label>
                        <Input
                          type="text"
                          name="assetRemarks"
                          id="assetRemarks"
                          value={formData.assetRemarks}
                          onChange={handleInputChange}
                          invalid={!!errors.assetRemarks}
                        />
                        <span className="text-danger">
                          {errors.assetRemarks}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="serviceVendor">SERVICE VENDOR</Label>
                        <Input
                          type="select"
                          name="serviceVendor"
                          id="serviceVendor"
                          value={formData.serviceVendor}
                          onChange={handleDropdownChange}
                          invalid={!!errors.serviceVendor}
                        >
                          <option value="">SELECT SERVICE VENDOR</option>
                          <option value="group1">GROUP 2</option>
                          <option value="amgroup2c">GROUP 1</option>
                          <option value="wargrpop3renty">GROUP 1</option>
                        </Input>
                        <span className="text-danger">
                          {errors.serviceVendor}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="assetDescription">ASSET DISCRIPTION</Label>
                        <Input
                          type="text"
                          name="assetDescription"
                          id="assetDescription"
                          value={formData.assetDescription}
                          onChange={handleInputChange}
                          invalid={!!errors.assetDescription}
                        />
                        <span className="text-danger">
                          {errors.assetDescription}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="taggable">
                          TAGGABLE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="taggable"
                          id="taggable"
                          value={formData.taggable}
                          onChange={handleDropdownChange}
                          invalid={!!errors.taggable}
                        >
                          <option value="">SELECT TAGGABLE OR NOT</option>
                          <option value="group1">YES</option>
                          <option value="group2">NO</option>
                        </Input>
                        <span className="text-danger">{errors.taggable}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="typeOfProc">
                          TYPE OF PROCUREMENT<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="typeOfProc"
                          id="typeOfProc"
                          value={formData.typeOfProc}
                          onChange={handleDropdownChange}
                          invalid={!!errors.typeOfProc}
                        >
                          <option value="">SELECT TYPE OF PROCUREMENT</option>
                          <option value="group1">OUTRIGHT PURCHASE</option>
                          <option value="group2">LOAN BASIC</option>
                          <option value="group3">ADD-ON</option>
                        </Input>
                        <span className="text-danger">{errors.typeOfProc}</span>
                      </Col>
                      <Col md={4}>
                        <Label for="amc">AMC/WARRENTY</Label>
                        <Input
                          type="select"
                          name="amc"
                          id="amc"
                          value={formData.amc}
                          onChange={handleDropdownChange}
                          invalid={!!errors.amc}
                        >
                          <option value="">SELECT AMC / WARRENTY</option>
                          <option value="no">NO</option>
                          <option value="amc">AMC</option>
                          <option value="warrenty">WARRENTY</option>
                        </Input>
                        <span className="text-danger">{errors.amc}</span>
                      </Col>
                      <Col md={6}>
                        {showAmcDates && (
                          <>
                            <hr className="mb-0 mt-3" />
                            <Label for="amcStartDate">
                              AMC/WARRENTY START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcStartDate"
                              id="amcStartDate"
                              value={formData.amcStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcStartDate}
                            />
                            <span className="text-danger">
                              {errors.amcStartDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <Col md={6}>
                        {showAmcDates && (
                          <>
                            <hr className="mb-0 mt-3" />
                            <Label for="amcEndDate">
                              AMC/WARRENTY END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcEndDate"
                              id="amcEndDate"
                              value={formData.amcEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcEndDate}
                            />
                            <span className="text-danger">
                              {errors.amcEndDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="leaseStatus">
                          LEASE STATUS<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="leaseStatus"
                          id="leaseStatus"
                          value={formData.leaseStatus}
                          onChange={handleDropdownChange}
                          invalid={!!errors.leaseStatus}
                        >
                          <option value="">SELECT LEASE STATUS</option>
                          <option value="Notunderlease">NOT UNDER LEASE</option>
                          <option value="underlease">UNDER LEASE</option>
                        </Input>
                        <span className="text-danger">
                          {errors.leaseStatus}
                        </span>
                      </Col>
                      {showLeaseDates && (
                        <>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="leaseStartDate">
                              LEASE START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseStartDate"
                              id="leaseStartDate"
                              value={formData.leaseStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseStartDate}
                            />
                            <span className="text-danger">
                              {errors.leaseStartDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="leaseEndDate">
                              LEASE END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseEndDate"
                              id="leaseEndDate"
                              value={formData.leaseEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseEndDate}
                            />
                            <span className="text-danger">
                              {errors.leaseEndDate}
                            </span>
                          </Col>
                        </>
                      )}
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="additionalCost">ADDITIONAL COST</Label>
                        <Input
                          type="text"
                          name="additionalCost"
                          id="additionalCost"
                          value={formData.additionalCost}
                          onChange={handleInputChange}
                          invalid={!!errors.additionalCost}
                        />
                        <span className="text-danger">
                          {errors.additionalCost}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="totalUnitPrice">TOTAL UNIT PRICE</Label>
                        <Input
                          type="text"
                          name="totalUnitPrice"
                          id="totalUnitPrice"
                          value={formData.totalUnitPrice}
                          onChange={handleInputChange}
                          invalid={!!errors.totalUnitPrice}
                        />
                        <span className="text-danger">
                          {errors.totalUnitPrice}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="netValue">NET VALUE</Label>
                        <Input
                          type="text"
                          name="netValue"
                          id="netValue"
                          value={formData.netValue}
                          onChange={handleInputChange}
                          invalid={!!errors.netValue}
                        />
                        <span className="text-danger">{errors.netValue}</span>
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
                          onClick={createHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>CREATE</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/all_asset");
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
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xl={10}>
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

export default AllAssetCreate;
