import React, { useMemo, useEffect, useState, useCallback } from "react";
import Icon from "@ailibs/feather-react-ts";
import {
  Container,
  CardBody,
  CardHeader,
  Button,
  Card,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useGet } from "src/API/useGet";

const Branch = () => {
  const demoData = [
    {
      slno: 1,
      companygroup: "United States",
      region: "California",
      entityName: "PR Limited", 

      city: "Los Angeles",
      branch: "Downtown Branch",
    },
    {
      slno: 2,
      companygroup: "United States",
      region: "New York",
      city: "New York City",
      entityName: "PR Limited", 

      branch: "Midtown Branch",
    },
    {
      slno: 3,
      companygroup: "United Kingdom",
      region: "England",
      city: "London",
      entityName: "AR Corporation", 

      branch: "Westminster Branch",
    },
    {
      slno: 4,
      companygroup: "Canada",
      region: "Ontario",
      entityName: "AR Corporation", 

      city: "Toronto",
      branch: "Downtown Branch",
    },
    {
      slno: 5,
      companygroup: "Australia",
      region: "New South Wales",
      entityName: "AR Corporation", 

      city: "Sydney",
      branch: "CBD Branch",
    },
  ];
  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  // const { getData, data, isLoading } = useGet();
  // useEffect(() => {
  //   async function fetch() {
  //     await getData("http://localhost:3000/branch");
  //   }
  //   fetch();
  // }, [getData]);

  // useEffect(() => {
  //   setResponseData(data);
  // }, [data]);

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
        Header: "ENTITY",
        accessor: "entityName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "COUNTRY",
        accessor: "companygroup",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "STATE ",
        accessor: "region",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "CITY ",
        accessor: "city",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "LOCATION NAME",
        accessor: "branch",
        disableFilters: true,
        filterable: true,
      },
    ],
    []
  );
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

  const handleRowClick = row => {
    console.log("Selected Row:", row.original.id);
  };

  return (
    <React.Fragment>
      {/* {isLoading ? (
        <div className="page-content">
          <Card>
            <div><h1>Loading...</h1></div>
          </Card>
        </div>
      ) : ( */}
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                LOCATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              {" "}
              <div className="container pt-0">
                <div className="rmb-2 row">
                  <div className="col-md-1">
                    <select className="form-select" style={{ width: "88PX" }}>
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
                            placeholder="SEARCH ..."
                            value={globalFilter || ""}
                            onChange={e => setGlobalFilter(e.target.value)}
                          />
                          <i className="bx bx-search-alt search-icon"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-7">
                    <div className="text-sm-end">
                      <button
                        type="button"
                        className="btn mb-2 me-2 btn btn-primary"
                        onClick={() => navigate("/createbranch")}
                      >
                        <i className="mdi mdi-plus-circle-outline me-1"></i>
                        CREATE NEW{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive react-table">
                <table className="table table-bordered table-hover text-center">
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
                                {cell.column.id !== "SL NO" ? (
                                  <Link to={`/branch/${row.original.id}`}>
                                    {cell.render("Cell")}
                                  </Link>
                                ) : (
                                  cell.render("Cell")
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
                          NO SEARCH RESULTS FOUND{" "}
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
                  {" "}
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
        {/* )} */}
      </Container>
    </React.Fragment>
  );
};

export default Branch;
