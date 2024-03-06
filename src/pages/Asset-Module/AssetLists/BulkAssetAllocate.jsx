// import React from 'react'

// function BulkAssetAllocate() {
//   return (
//     <div>BulkAssetAllocate</div>
//   )
// }

// export default BulkAssetAllocate
import React, { useMemo, useEffect, useState, useCallback } from "react";
import { Container,Button, Card, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const BulkAssetAllocate = () => {
  const demoData = [
    {
      "slno": 1,
      "reqNum": "A001",
      "typeAsset": "Laptop",
      "discription": "SN001",
      "reqBy": "INV-001",
      "reqDate": "John Doe"
    },
    {
      "slno": 2,
      "reqNum": "A002",
      "typeAsset": "Desktop",
      "discription": "SN002",
      "reqBy": "INV-002",
      "reqDate": "Jane Smith"
    },
    {
      "slno": 3,
      "reqNum": "A003",
      "typeAsset": "Printer",
      "discription": "SN003",
      "reqBy": "INV-003",
      "reqDate": "Alice Johnson"
    },
    {
      "slno": 4,
      "reqNum": "A004",
      "typeAsset": "Monitor",
      "discription": "SN004",
      "reqBy": "INV-004",
      "reqDate": "Bob Smith"
    },
    {
      "slno": 4,
      "reqNum": "A004",
      "typeAsset": "Monitor",
      "discription": "SN004",
      "reqBy": "INV-004",
      "reqDate": "Bob Smith"
    },
    {
      "slno": 4,
      "reqNum": "A004",
      "typeAsset": "Monitor",
      "discription": "SN004",
      "reqBy": "INV-004",
      "reqDate": "Bob Smith"
    }
  ];
  
  const [responseData, setResponseData] = useState(demoData);
  const navigate = useNavigate();

  const columns = useMemo(
        () => [
          {
            Header: "SL NO",
            accessor: "slno",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "REQUEST NUMBER",
            accessor: "reqNum",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "TYPE ASSET",
            accessor: "typeAsset",
            disableFilters: true,
            filterable: true,
          },
          {
            Header: "DISCRIPTION",
            accessor: "discription",
            disableFilters: true,
            filterable: true,
          },{
            Header: "REQUEST BY",
            accessor: "reqBy",
            disableFilters: true,
            filterable: true,
          },{
            Header: "REQUEST DATE",
            accessor: "reqDate",
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
        <div className="container pt-4">
          <div className="rmb-2 row">
            <div className="col-md-1">
              <select className="form-select">
                <option value="10">Show 10</option>
                <option value="20">Show 20</option>
                <option value="30">Show 30</option>
                <option value="40">Show 40</option>
                <option value="50">Show 50</option>
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
                      placeholder="search ..."
                      value={globalFilter || ""}
                      onChange={e => setGlobalFilter(e.target.value)}
                    />
                    <i className="bx bx-search-alt search-icon"></i>
                  </label>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-7">
              <div className="text-sm-end">
                <button
                  type="button"
                  className="btn mb-2 me-2 btn btn-primary"
                  onClick={() => navigate("/create_bulk_asset_allocate")}
                >
                  <i className="mdi mdi-plus-circle-outline me-1"></i>
                  Create New
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="table-responsive react-table">
          <table
            className="table table-bordered table-hover"
            {...getTableProps()}
          >
            <thead className="table-light table-nowrap">
              {headerGroups.map(headerGroup => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={column.id === 'slno' ? { width:'6%' } : { backgroundColor: "" }}
                    >
                      <div className="d-flex justify-content-between">
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
                                ?  <Link to={`/modify_bulk_asset_allocate/${row.original.id}`}>
                                     {cell.render("Cell")}
                                   </Link>
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
                        No search results found.
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
      </Card>
      </div>
      </Container>
    </React.Fragment>
  );
};

export default BulkAssetAllocate;
