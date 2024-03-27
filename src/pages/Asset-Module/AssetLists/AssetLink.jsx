import React, { useState, useMemo } from "react";
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

const AssetLink = () => {
  AssetLink.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "ASSET001",
      assetName: "Laptop",
      serialNumber: "SN12345",
      assetRemarks: "Good condition",
    },
    {
      slno: 2,
      assetId: "ASSET002",
      assetName: "Desktop",
      serialNumber: "SN67890",
      assetRemarks: "Needs maintenance",
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
    linkTo: "LINK TO ",
    assetId: "ASSET ID",
  };
  const initialFormData = {
    linkTo: "",
    assetId: "",
    linkDate: "",
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
        accessor: "serialNumber",
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                LINK SOFTWARE/ACCESSORIES DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              {/* <Row className="justify-content-center">
                <Col xl={10}> */}
              <form className="needs-validation" noValidate>
                <Row className="mb-2">
                  <Col md={4}>
                    <Label for="linkTo">
                      LINK TO<font color="red">*</font>
                    </Label>
                    <Input
                      type="select"
                      name="linkTo"
                      id="linkTo"
                      value={formData.linkTo}
                      onChange={handleDropdownChange}
                      invalid={!!errors.linkTo}
                    >
                      <option value="">SELECT LINK TO</option>
                      <option value="website">Website</option>
                      <option value="document">Document</option>
                      <option value="email">Email</option>
                      <option value="folder">Folder</option>
                    </Input>
                    <span className="invalid-feedback">{errors.linkTo}</span>
                  </Col>
                  <Col md={4}>
                    <Label for="assetId">
                      ASSET-ID<font color="red">*</font>
                    </Label>
                    <Input
                      type="select"
                      name="assetId"
                      id="assetId"
                      value={formData.assetId}
                      onChange={handleDropdownChange}
                      invalid={!!errors.assetId}
                    >
                      <option value="">SELECT ASSET-ID</option>
                      <option value="ASSET001">ASSET001</option>
                      <option value="ASSET002">ASSET002</option>
                      <option value="ASSET003">ASSET003</option>
                    </Input>
                    <span className="invalid-feedback">{errors.assetId}</span>
                  </Col>
                  <Col md={4}>
                    <Label for="linkDate">LINK DATE</Label>
                    <Input
                      type="date"
                      name="linkDate"
                      id="linkDate"
                      value={formData.linkDate}
                      onChange={handleInputChange}
                      invalid={!!errors.linkDate}
                    />
                    <span className="invalid-feedback">{errors.linkDate}</span>
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
                      <Label>LINK</Label>
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

              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-1">
                    <select className="form-select" style={{ width: "88PX" }}>
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
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AssetLink;
