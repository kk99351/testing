import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
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
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const DepreciationMaster = () => {
  DepreciationMaster.propTypes = {
    row: PropTypes.object.isRequired,
  };
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "FURNITURE",
      inf: "23",
      csv: "12",
    },
    {
      slno: 2,
      assetId: "Information TECHNOLOGY",
      inf: "12",
      csv: "21",
    },
    {
      slno: 3,
      assetId: "NON IT",
      inf: "56",
      csv: "89",
    },
    {
      slno: 4,
      assetId: "PRINCIPLE",
      inf: "11",
      csv: "55",
    },
    {
      slno: 5,
      assetId: "TEACHER",
      inf: "75",
      csv: "43",
    },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
      },
      {
        Header: "ASSET MATERIAL-GROUP",
        accessor: "assetId",
      },
      {
        Header: "INCOME TAX ACT(WDV)",
        accessor: "inf",
        Cell: ({ row }) => (
          <Input
            type="text"
            value={row.original.inf}
            onChange={e => handleIncomeTaxChange(row.index, e.target.value)}
            className="form-control"
          />
        ),
      },
      {
        Header: "COMPANY ACT(SLM)",
        accessor: "csv",
        Cell: ({ row }) => (
          <Input
            type="text"
            value={row.original.csv}
            onChange={e => handleCompanyActChange(row.index, e.target.value)}
            className="form-control"
          />
        ),
      },
    ],
    []
  );
  const handleIncomeTaxChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        inf: value,
      };
      return newData;
    });
  };

  const handleCompanyActChange = (index, value) => {
    setResponseData(prevData => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        csv: value,
      };
      return newData;
    });
  };
  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
        assetId: item.assetId.toUpperCase(), 
        inf: item.inf.toUpperCase(), 
        csv: item.csv.toUpperCase(), 

    }));
  }, [responseData]);

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
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                DEPRECIATION DETAILS
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
                        className="btn btn-success-subtle border border-success"
                        style={{width:"100px"}}
                        // onClick={() => navigate("/create_all_asset")}
                      >
                        {/* <i className="mdi mdi-minus-circle-outline me-1"></i> */}
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive react-table">
                <Table
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
                    {page.map(row => {
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
                    })}
                  </tbody>
                </Table>
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
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default DepreciationMaster;
