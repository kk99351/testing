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

const AssetDeLink = () => {
  AssetDeLink.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const [responseData, setResponseData] = useState([
    {
      "slno": 1,
      serialNumbere:"KEYBOARD ACCESSORIES",
      "accessoriesId": "ACC001",
      "serialNumber": "SN12345",
      "assetName": "Laptop",
      "assetId": "ASSET001",
      "linkedDate": "2024-03-25",
      "assetRemarks": "Good condition",
      "delinkDate": "2024-04-10"
    },
    {
      "slno": 2,
      serialNumbere:"software Item Added",
      "accessoriesId": "ACC002",
      "serialNumber": "SN67890",
      "assetName": "Desktop",
      "assetId": "ASSET002",
      "linkedDate": "2024-03-24",
      "assetRemarks": "Needs maintenance",
      "delinkDate": "2024-04-12"
    },
  ]);
  const navigate = useNavigate();

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
      serialNumbere: item.serialNumbere.toUpperCase(), 
      accessoriesId: item.accessoriesId.toUpperCase(), 
      serialNumber: item.serialNumber.toUpperCase(), 
      assetName: item.assetName.toUpperCase(), 
      assetId: item.assetId.toUpperCase(),    
      assetRemarks: item.assetRemarks.toUpperCase(), 


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
        width: "6%",
      },
      {
        Header: "ACCESSORIES ID",
        accessor: "accessoriesId",
      },
      {
        Header: "SERIAL NUMBER",
        accessor: "assetName",
      },
      {
        Header: "ACCESSORIES NAME",
        accessor: "serialNumbere",
      },
      {
        Header: "ASSET NAME",
        accessor: "serialNumber",
      },
      {
        Header: "ASSET ID",
        accessor: "assetId",
      },
      {
        Header: "LINKED DATE",
        accessor: "linkedDate",
      },
      {
        Header: "ACCESSORIES  REMARKS",
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
        Header: "DE-LINK DATE",
        accessor: "delinkDate",
        Cell: ({ row }) => (
          <Input
            type="date"
            value={row.original.allocateDate}
            onChange={e =>
              handleAllocationDateChange(row.index, e.target.value)
            }
            className="form-control"
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
  const handleAllocationDateChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        allocateDate: value,
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
              DE-LINK SOFTWARE/ACCESSORIES DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              {/* <Row className="justify-content-center">
                <Col xl={10}> */}

              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-2">
                    <select className="form-select" >
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
                            }                           />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="text-sm-end">
                      <button
                        type="button"
                        className="btn mb-2 me-2 btn btn-primary"
                        // onClick={() => navigate("/create_all_asset")}
                      >
                        <i className="mdi mdi-minus-circle-outline me-1"></i>
                        DE-LINK
                      </button>
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

export default AssetDeLink;
