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

const BulkAssetAllocate = () => {
  BulkAssetAllocate.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "ASSET001",
      assetName: "Laptop",
      allocateTo: "John Doe",
      assetRemarks: "Good condition",
      allocateType: "Active",
    },
    {
      assetId: "ASSET002",
      assetName: "Desktop",
      allocateTo: "Jane Smith",
      assetRemarks: "Needs maintenance",
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
      allocateTo: item.allocateTo.toUpperCase(), 
      assetRemarks: item.assetRemarks.toUpperCase(), 
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
        width: "6%", // Set the width to 6%
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
        accessor: "allocateTo",
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
        Header: "ALLOCATION TYPE",
        accessor: "allocateType",
        Cell: ({ row }) => (
          <Input
            type="select"
            value={row.original.allocateType}
            onChange={e =>
              handleAllocationTypeChange(row.index, e.target.value)
            }
          >
            <option value="Active"> ACTIVE</option>
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
                BULK ASSET ALOCATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              {/* <Row className="justify-content-center">
                <Col xl={10}> */}
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
                      <option value="JohnDoe">John Doe</option>
                      <option value="JaneSmith">Jane Smith</option>
                      <option value="RobertJohnson">Robert Johnson</option>
                    </Input>
                    <span className="invalid-feedback">{errors.assignTo}</span>
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
                      <option value="group1">1ST FLOOR</option>
                      <option value="group2">2ST FLOOR</option>
                    </Input>
                    <span className="invalid-feedback">{errors.flr}</span>
                  </Col>
                  <Col md={4}>
                    <Label for="alocationDate">ALLOCATE DATE</Label>
                    <Input
                      type="date"
                      name="alocationDate"
                      id="alocationDate"
                      value={formData.alocationDate}
                      onChange={handleInputChange}
                      invalid={!!errors.alocationDate}
                    />
                    <span className="invalid-feedback">
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
                    {/* <button
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
                        </button> */}
                  </div>
                </div>
              </form>

              <div className="container pt-3">
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
                            onChange={e =>
                              setGlobalFilter(e.target.value.toUpperCase())
                            }
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

export default BulkAssetAllocate;
