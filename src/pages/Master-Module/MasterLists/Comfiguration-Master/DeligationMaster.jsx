import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  Container,
  CardHeader,
  CardBody,
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

const DeligationMaster = () => {
  const demoData = [
    {
      slno: 1,
      id_delgation_by: "John Doe",
      id_delgation_to: "Manager",
      dt_start: "2024-03-01",
      dt_end: "2024-03-15",
    },
    {
      slno: 2,
      id_delgation_by: "Jane Smith",
      id_delgation_to: "Staff",
      dt_start: "2024-02-15",
      dt_end: "2024-02-28",
    },
    {
      slno: 3,
      id_delgation_by: "Alice Johnson",
      id_delgation_to: "Guest",
      dt_start: "2024-04-01",
      dt_end: "2024-04-15",
    },
    {
      slno: 4,
      id_delgation_by: "Bob Brown",
      id_delgation_to: "Supervisor",
      dt_start: "2024-03-10",
      dt_end: "2024-03-25",
    },
  ];
  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  const dataWithSlno = useMemo(() => {
    return responseData.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));
  }, [responseData]);

  // const { getData, data, isLoading } = useGet();
  // useEffect(() => {
  //   async function fetch() {
  //     await getData("http://localhost:3000/companygroup");
  //   }
  //   fetch();
  // }, [getData]);

  // useEffect(() => {
  //   const updatedData = data.map((row, index) => ({ ...row, slno: index + 1 }));
  //   setResponseData(updatedData);
  // }, [data]);
  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
      },
      {
        Header: "DELEGATED BY",
        accessor: "id_delgation_by",
      },
      {
        Header: "USER TYPE",
        accessor: "id_delgation_to",
      },
      {
        Header: "START DATE",
        accessor: "dt_start",
      },
      {
        Header: "END DATE",
        accessor: "dt_end",
      },
    ],
    []
  );
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

  // const { getData, data, isLoading } = useGet();
  // useEffect(() => {
  //   async function fetch() {
  //     await getData("http://localhost:3000/employeemaster");
  //   }
  //   fetch();
  // }, [getData]);

  // useEffect(() => {
  //   setResponseData(data);
  // }, [data]);

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                DELEGATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
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
                        onClick={() => navigate("/deligation_create")}
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
                                {cell.column.id !== "id" ? (
                                  <Link
                                    to={`/modify_deligation_master/${row.original.id}`}
                                  >
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
      </Container>
    </React.Fragment>
  );
};

export default DeligationMaster;

{
  /* <div
style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}}
>
<button
  type="button"
  className="btn btn-success-subtle border border-success"
  onClick={e => createHandle(e)}
  style={{
    paddingTop:"10px",
    height:"45px",
    wight:"80px"
  }}
>
  <Label>CREATE</Label>
</button>

<button
  type="button"
  className="btn btn-secondary-subtle border border-secondary"
  onClick={() => {
    navigate("/region");
  }}
  style={{paddingTop:"10px",width:"80px",height:"45px"}}
  
>
  <Label>BACK</Label>
</button>
</div> */
}
