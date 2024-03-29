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
import { Link, useNavigate } from "react-router-dom";

const AdditionDeletion = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      year: "",
      group: "",
      subgroup: "",
    },
    validationSchema: Yup.object({
      year: Yup.string().required("FINANCIAL YEAR IS REQUIRED"),
      group: Yup.string().required("ASSET MATERIAL GROUP IS REQUIRED"),
      subgroup: Yup.string().required("ASSET MATERIAL SUB GROUP IS REQUIRED"),
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
        Header: "ASSET",
        accessor: "asset",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "ASSET RFQ NUMBER",
        accessor: "assetnum",
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
        asset: "ASSET001",
        assetnum: "RFQ12345",
        assetname: "Laptop",
        sn: "SN12345",
      },
      {
        asset: "ASSET002",
        assetnum: "RFQ67890",
        assetname: "Desktop",
        sn: "SN67890",
      },
      {
        asset: "ASSET003",
        assetnum: "RFQ24680",
        assetname: "Printer",
        sn: "SN24680",
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
                ADDITION AND DELETION{" "}
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
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="year">
                            FINANCIAL YEAR <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="year"
                            id="year"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.year && validation.errors.year
                            }
                          >
                            <option value="">SELECT FINANCIAL YEAR</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                          </Input>
                          {validation.touched.year && validation.errors.year ? (
                            <FormFeedback type="invalid">
                              {validation.errors.year}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="group">
                            ASSET MATERIAL GROUP <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="group"
                            id="group"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.group &&
                              validation.errors.group
                            }
                          >
                            <option value="">
                              SELECT ASSET MATERIAL GROUP{" "}
                            </option>
                            <option value="Metals">Metals</option>
                            <option value="Plastics">Plastics</option>
                            <option value="Wood">Wood</option>
                            <option value="Glass">Glass</option>
                          </Input>
                          {validation.touched.group &&
                          validation.errors.group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>{" "}
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="subgroup">
                            ASSET MATERIAL SUB GROUP <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="subgroup"
                            id="subgroup"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subgroup &&
                              validation.errors.subgroup
                            }
                          >
                            <option value="">
                              SELECT ASSET MATERIAL SUB GROUP{" "}
                            </option>
                            <option value="Steel">Steel</option>
                            <option value="Aluminum">Aluminum</option>
                            <option value="Copper">Copper</option>
                          </Input>
                          {validation.touched.subgroup &&
                          validation.errors.subgroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.subgroup}
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
                ADDITION OR DELETION DETAILS{" "}
              </h1>
            </CardHeader>
            <CardBody>
              <div className="container pt-0">
                <div className="row">
                  <div className="col-md-2">
                    <select className="form-select">
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
                            onChange={e => setGlobalFilter(e.target.value)}
                          />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="md-2 mt-2" />

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
                                {cell.column.id !== "id" ? (
                                  <Link
                                    to={`/addition_Deletion_view/${row.original.id}`}
                                  >
                                    {String(cell.value).toUpperCase()}{" "}
                                  </Link>
                                ) : (
                                  String(cell.value).toUpperCase()
                                )}
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

AdditionDeletion.propTypes = {
  row: PropTypes.object,
};

AdditionDeletion.defaultProps = {
  row: {},
};

export default AdditionDeletion;
