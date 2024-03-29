import React, { useState, useMemo, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Container,
  Table,
  Form,
  FormGroup,
  FormFeedback,
} from "reactstrap";
import PropTypes from "prop-types";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const InterTarnsferReq = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      companygroup: "",
      statename: "",
      cityname: "",
      plantname: "",
      building: "",
      floor: "",
      department: "",
    },
    validationSchema: Yup.object({
      companygroup: Yup.string().required("COUNTRY IS REQUIRED"),
      statename: Yup.string().required("STATE NAME IS REQUIRED"),
      cityname: Yup.string().required("CITY NAME IS REQUIRED"),
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
      department: Yup.string().required("DEPARTMENT IS REQUIRED"),
      floor: Yup.string().required("FLOOR IS REQUIRED"),
    }),

    onSubmit: async values => {
      console.log("Form submitted successfully!");
      setShowTable(true);
    },
  });

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
        accessor: "assetid",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ASSET NAME",
        accessor: "assetname",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "SERIAL NUMBER",
        accessor: "sn",
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

  const createHandle = async e => {
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

  const requiredFields = {
    transType: "TRANSFER TYPE",
    ComGroup: "COMPANY GROUP",
    state: "STATE",
    city: "CITY",
    location: "LOCATION",
    building: "BUILDING",
    floor: "FLOOR",
    department: "DEPARTMENT",
    RDate: "REQUEST DATE",
  };

  const initialFormData = {
    transType: "",
    ComGroup: "",
    state: "",
    city: "",
    location: "",
    building: "",
    floor: "",
    RDate: "",
    department: "",
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
  const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);

  const demoData = useMemo(
    () => [
      {
        assetid: "ASSET001",
        assetname: "Laptop",
        sn: "123456",
        assetdes: "Good condition",
      },
      {
        assetid: "ASSET002",
        assetname: "Desktop",
        sn: "789012",
        assetdes: "Needs maintenance",
      },
      {
        assetid: "ASSET003",
        assetname: "Printer",
        sn: "345678",
        assetdes: "Ink levels low",
      },
    ],
    []
  );
  const [responseData, setResponseData] = useState(demoData);

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
      assetid: item.assetid.toUpperCase(), 
      assetname: item.assetname.toUpperCase(), 
      sn: item.sn.toUpperCase(), 
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
    setSelectedRows,
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

  const handleDeallocate = () => {
    // Add logic for deallocation here
    console.log("Deallocate button clicked");
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

  // const handleInputChange = e => {
  //   setSearchValue(e.target.value);
  // };
  const handleCheckboxChange = index => {
    const updatedData = [...responseData];
    updatedData[index].checked = !updatedData[index].checked;
    setResponseData(updatedData);
  };
  const handleDeallocationDateChange = (e, index) => {
    const updatedData = [...responseData];
    updatedData[index].deallocationDate = e.target.value;
    setResponseData(updatedData);
  };

  const handleAssetStatusChange = (e, index) => {
    const updatedData = [...responseData];
    updatedData[index].assetStatus = e.target.value;
    setResponseData(updatedData);
  };

  return (
    <Container fluid>
      <div className="page-content">
        {!showTable ? (
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                INTER TRANSFER REQUEST
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <Form
                    className="needs-validation"
                    onSubmit={validation.handleSubmit}
                  >
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="companygroup">
                            COUNTRY <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="companygroup"
                            id="companygroup"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companygroup &&
                              validation.errors.companygroup
                            }
                          >
                            <option value="">SELECT COUNTRY</option>
                            <option value="USA">United States</option>
                            <option value="CAN">Canada</option>
                            <option value="UK">United Kingdom</option>
                          </Input>
                          {validation.touched.companygroup &&
                          validation.errors.companygroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.companygroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="statename">
                            STATE NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="statename"
                            id="statename"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.statename &&
                              validation.errors.statename
                            }
                          >
                            <option value="">SELECT STATE NAME</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                          </Input>
                          {validation.touched.statename &&
                          validation.errors.statename ? (
                            <FormFeedback type="invalid">
                              {validation.errors.statename}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cityname">
                            CITY NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cityname"
                            id="cityname"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cityname &&
                              validation.errors.cityname
                            }
                          >
                            <option value="">SELECT CITY NAME</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Houston">Houston</option>
                          </Input>
                          {validation.touched.cityname &&
                          validation.errors.cityname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cityname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="plantname">
                            LOCATION NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="plantname"
                            id="plantname"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.plantname &&
                              validation.errors.plantname
                            }
                          >
                            <option value="">SELECT LOCATION NAME</option>
                            <option value="NewYork">New York</option>
                            <option value="LosAngeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Houston">Houston</option>
                          </Input>
                          {validation.touched.plantname &&
                          validation.errors.plantname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.plantname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="building">
                            BUILDING NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="building"
                            id="building"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }
                          >
                            <option value="">SELECT BUILDING NAME</option>
                            <option value="EmpireState">
                              Empire State Building
                            </option>
                            <option value="Chrysler">Chrysler Building</option>
                            <option value="Rockefeller">
                              Rockefeller Center
                            </option>
                            <option value="Flatiron">Flatiron Building</option>
                          </Input>
                          {validation.touched.building &&
                          validation.errors.building ? (
                            <FormFeedback type="invalid">
                              {validation.errors.building}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="floor">
                            FLOOR <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="floor"
                            id="floor"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              validation.errors.floor
                            }
                          >
                            <option value="">SELECT FLOOR</option>
                            <option value="building1">1st floor</option>
                            <option value="building2"> 2nd floor</option>
                          </Input>
                          {validation.touched.floor &&
                          validation.errors.floor ? (
                            <FormFeedback type="invalid">
                              {validation.errors.floor}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="department">
                            DEPARTMENT <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="department"
                            id="department"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.department &&
                              validation.errors.department
                            }
                          >
                            <option value="">SELECT DEPARTMENT</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Human Resources">
                              Human Resources
                            </option>
                            <option value="IT">IT</option>
                          </Input>
                          {validation.touched.building &&
                          validation.errors.department ? (
                            <FormFeedback type="invalid">
                              {validation.errors.department}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
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
        ) : (
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                INTER TRANSFER REQUEST DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        {" "}
                        <Label for="transType">TRANSFER TYPE</Label>
                        <Input
                          type="select"
                          name="transType"
                          id="transType"
                          value={formData.transType}
                          onChange={handleDropdownChange}
                          invalid={!!errors.transType}
                        >
                          <option value="">SELECT TRANSFER TYPE</option>
                          <option value="Internal">Internal Transfer</option>
                          <option value="External">External Transfer</option>
                          <option value="Departmental">
                            Departmental Transfer
                          </option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.transType}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="ComGroup">COMPANY GROUP/COUNTRY</Label>
                        <Input
                          type="select"
                          name="ComGroup"
                          id="ComGroup"
                          value={formData.ComGroup}
                          onChange={handleDropdownChange}
                          invalid={!!errors.ComGroup}
                        >
                          <option value="">SELECT COMPANY GROUP/COUNTRY</option>
                          <option value="USA">United States</option>
                          <option value="CAN">Canada</option>
                          <option value="UK">United Kingdom</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.ComGroup}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="state">STATE</Label>
                        <Input
                          type="select"
                          name="state"
                          id="state"
                          value={formData.state}
                          onChange={handleDropdownChange}
                          invalid={!!errors.state}
                        >
                          <option value="">SELECT STATE</option>
                          <option value="Alabama">Alabama</option>
                          <option value="Alaska">Alaska</option>
                          <option value="Arizona">Arizona</option>
                          <option value="Arkansas">Arkansas</option>
                        </Input>
                        <span className="invalid-feedback">{errors.state}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="city">CITY</Label>
                        <Input
                          type="select"
                          name="city"
                          id="city"
                          value={formData.city}
                          onChange={handleDropdownChange}
                          invalid={!!errors.city}
                        >
                          <option value="">SELECT CITY</option>
                          <option value="New York">New York</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                        </Input>
                        <span className="invalid-feedback">{errors.city}</span>
                      </Col>
                    </Row>{" "}
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="location">LOCATION</Label>
                        <Input
                          type="select"
                          name="location"
                          id="city"
                          value={formData.location}
                          onChange={handleDropdownChange}
                          invalid={!!errors.location}
                        >
                          <option value="">SELECT LOCATION</option>
                          <option value="NewYork">New York</option>
                          <option value="LosAngeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.location}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="building">
                          BUILDING<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="building"
                          id="building"
                          value={formData.building}
                          onChange={handleDropdownChange}
                          invalid={!!errors.building}
                        >
                          <option value="">SELECT BUILDING</option>
                          <option value="EmpireState">
                            Empire State Building
                          </option>
                          <option value="Chrysler">Chrysler Building</option>
                          <option value="Rockefeller">
                            Rockefeller Center
                          </option>
                          <option value="Flatiron">Flatiron Building</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.building}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="floor">
                          FLOOR<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="floor"
                          id="floor"
                          value={formData.floor}
                          onChange={handleDropdownChange}
                          invalid={!!errors.floor}
                        >
                          <option value="">SELECT FLOOR</option>
                          <option value="Notunderlease">1st floor</option>
                          <option value="underlease">2nd floor</option>
                        </Input>
                        <span className="invalid-feedback">{errors.floor}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="department">
                          DEPARTMENT<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="department"
                          id="department"
                          value={formData.department}
                          onChange={handleDropdownChange}
                          invalid={!!errors.department}
                        >
                          <option value="">SELECT DEPARTMENT</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Finance">Finance</option>
                          <option value="Human Resources">
                            Human Resources
                          </option>
                          <option value="IT">IT</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.department}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="RDate">
                          REQUEST DATE<font color="red">*</font>
                        </Label>
                        <Input
                          type="date"
                          name="RDate"
                          id="RDate"
                          value={formData.RDate}
                          onChange={handleInputChange}
                          invalid={!!errors.RDate}
                        />
                        <span className="invalid-feedback">{errors.RDate}</span>
                      </Col>
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
                            width: "150px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>SEND REQUEST</Label>
                        </button>
                      </div>
                    </div>
                  </form>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col xl={10}>
                  <div className="container pt-0">
                    <div className="row">
                      <div className="col-md-2">
                        <select
                          className="form-select"
                          
                        >
                          <option value="10">SHOW 10</option>
                          <option value="20">SHOW 20</option>
                          <option value="30">SHOW 30</option>
                          <option value="40">SHOW 40</option>
                          <option value="50">SHOW 50</option>
                        </select>
                      </div>

                      <div className="col-md-10 d-flex justify-content-end">
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
                                placeholder="SEARCH...."
                                value={globalFilter || ""}
                                onChange={e =>
                                  setGlobalFilter(e.target.value.toUpperCase())
                                }                               />
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
                              NO SEARCH RESULTS FOUND.
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
        )}
      </div>
    </Container>
  );
};

InterTarnsferReq.propTypes = {
  row: PropTypes.object,
};

InterTarnsferReq.defaultProps = {
  row: {},
};

export default InterTarnsferReq;
