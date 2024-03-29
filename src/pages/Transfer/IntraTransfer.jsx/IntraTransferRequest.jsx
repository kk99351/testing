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

const IntraTransferRequest = () => {
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
    },
    validationSchema: Yup.object({
      companygroup: Yup.string().required("COUNTRY IS REQUIRED"),
      statename: Yup.string().required("STATE NAME IS REQUIRED"),
      cityname: Yup.string().required("CITY NAME IS REQUIRED"),
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
    }),

    onSubmit: async values => {
      console.log("Form submitted successfully!");
      setShowTable(true);
    },
  });
  const requiredFields = {
    floor: "FLOOR",
  };

  const initialFormData = {
    floor: "",
  };

  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
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

  const demoData = useMemo(
    () => [
      {
        "slno": 1,
        "assetid": "ASSET001",
        "assetname": "Laptop",
        "sn": "SN12345",
        "assetdes": "Good condition"
      },
      {
        "slno": 2,
        "assetid": "ASSET002",
        "assetname": "Desktop",
        "sn": "SN67890",
        "assetdes": "Needs maintenance"
      },
      {
        "slno": 3,
        "assetid": "ASSET003",
        "assetname": "Printer",
        "sn": "SN24680",
        "assetdes": "Ink levels low"
      }
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
                INTRA TRANSFER REQUEST 
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
                            <option value="">
                              SELECT COUNTRY
                            </option>
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
                      <Col md={12}>
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
                INTRA TRANSFER REQUEST DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="row">
                  <div className="col-md-2">
                    <select className="form-select" >
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
                            placeholder="SEARCH...."
                            value={globalFilter || ""}
                            onChange={e =>
                              setGlobalFilter(e.target.value.toUpperCase())
                            }                           />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-2">
                    <div className="text-sm-end">
                      <Button
                        onClick={createHandle}
                        className="btn btn-success-subtle border border-success"
                        style={{
                          paddingTop: "5px",
                          width: "150px",
                          height: "35px",
                          marginLeft: "10px",
                        }}
                      >
                        SEND APPROVAL{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="md-2 mt-2" />
              <Row className="justify-content-center">
                <Col xl={12}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="floor">FLOOR<font color="red">*</font></Label>
                        <Input
                          type="select"
                          name="floor"
                          id="floor"
                          value={formData.floor}
                          onChange={handleDropdownChange}
                          invalid={!!errors.floor}
                        >
                          <option value="">SELECT FLOOR</option>
                          <option value="group1">2st floor</option>
                          <option value="amgroup2c">3rd floor</option>
                        </Input>
                        <span className="invalid-feedback">{errors.floor}</span>
                      </Col>

                      <hr className="mb-0 mt-3" />
                    </Row>
                  </form>
                </Col>
              </Row>

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
                          NO SEARCH RESULT FOUND{" "}
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
            </CardBody>
          </Card>
        )}
      </div>
    </Container>
  );
};

IntraTransferRequest.propTypes = {
  row: PropTypes.object,
};

IntraTransferRequest.defaultProps = {
  row: {},
};

export default IntraTransferRequest;
