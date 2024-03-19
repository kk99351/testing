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
const ReturnAknowPreview = () => {
  const [showTable, setShowTable] = useState(false);
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
        accessor: "fieldName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ASSET NAME",
        accessor: "oldValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "REQUEST NUMBER",
        accessor: "newValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "REQUEST BY",
        accessor: "editedBy",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "RECEIVE DATE",
        accessor: "receiveDate",
        Cell: ({ row }) => (
          <input
          className="form-control"
            type="date"
            value={row.values.receiveDate}
            onChange={e => handleReceiveDateChange(e, row)}
         
          />
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
  const handleReceiveDateChange = (e, row) => {
    const { value } = e.target;
    row.original.receiveDate = value;
  };
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
    state: "TRANSFER DATE",
    city: "TRANSFER TYPE",
    location: "TRANSFER RETURN DATE",
  };

  const initialFormData = {
    transType: "",
    ComGroup: "",
    state: "",
    city: "",
    location: "",
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
  const [responseData, setResponseData] = useState(demoData);

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

  return (
    <Container fluid>
      <div className="page-content">
        <Card className="mt-0">
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              INTER RETURN ACKNOWLEDGE DETAILS
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="justify-content-center">
              <Col xl={10}>
                <form className="needs-validation" noValidate>
                  <Row className="mb-2">
                    <Col md={6}>
                      {" "}
                      <Label for="transType">REQUEST NUMBER</Label>
                      <Input
                        type="text"
                        name="transType"
                        id="transType"
                        value={formData.transType}
                        onChange={handleDropdownChange}
                        invalid={!!errors.transType}
                      />
                      <span className="invalid-feedback">
                        {errors.transType}
                      </span>
                    </Col>

                    <Col md={6}>
                      <Label for="ComGroup">TRANSFER TYPE</Label>
                      <Input
                        type="text"
                        name="ComGroup"
                        id="ComGroup"
                        value={formData.ComGroup}
                        onChange={handleDropdownChange}
                        invalid={!!errors.ComGroup}
                      ></Input>
                      <span className="invalid-feedback">
                        {errors.ComGroup}
                      </span>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label for="state">
                        TRANSFER DATE<font color="red">*</font>
                      </Label>
                      <Input
                        type="date"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleDropdownChange}
                        invalid={!!errors.state}
                      ></Input>
                      <span className="invalid-feedback">{errors.state}</span>
                    </Col>
                    <Col md={6}>
                      <Label for="city">
                        TRANSFER RECIEVE DATE<font color="red">*</font>
                      </Label>
                      <Input
                        type="date"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleDropdownChange}
                        invalid={!!errors.city}
                      ></Input>
                      <span className="invalid-feedback">{errors.city}</span>
                    </Col>
                  </Row>{" "}
                  <Row className="mb-2">
                    <Col md={12}>
                      <Label for="location">
                        TRANSFER RETURN DATE<font color="red">*</font>
                      </Label>
                      <Input
                        type="date"
                        name="location"
                        id="city"
                        value={formData.location}
                        onChange={handleDropdownChange}
                        invalid={!!errors.location}
                      ></Input>
                      <span className="invalid-feedback">
                        {errors.location}
                      </span>
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
                          width: "80px",
                          marginRight: "30px",
                        }}
                      >
                        <Label>UPDATE</Label>
                      </button>
                      <Button
                        className="btn btn-secondary-subtle border border-secondary"
                        onClick={() => navigate("/inter_return_acknowledge")}
                        style={{
                          paddingTop: "5px",
                          width: "80px",
                          height: "45px",
                          marginLeft: "10px",
                        }}
                      >
                        BACK{" "}
                      </Button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xl={10}>
                <div className="container pt-0">
                  <div className="row">
                    <div className="col-md-1">
                      <select className="form-select" style={{ width: "84PX" }}>
                        <option value="10">SHOW 10</option>
                        <option value="20">SHOW 20</option>
                        <option value="30">SHOW 30</option>
                        <option value="40">SHOW 40</option>
                        <option value="50">SHOW 50</option>
                      </select>
                    </div>

                    <div className="col-md-11 d-flex justify-content-end">
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
                              onChange={e => setGlobalFilter(e.target.value)}
                            />
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
      </div>
    </Container>
  );
};

ReturnAknowPreview.propTypes = {
  row: PropTypes.object,
};

ReturnAknowPreview.defaultProps = {
  row: {},
};

export default ReturnAknowPreview;
