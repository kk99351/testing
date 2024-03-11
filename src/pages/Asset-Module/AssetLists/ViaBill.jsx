// import React, { useMemo, useEffect, useState, useCallback } from "react";
// import { Button, Card, Input } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   useTable,
//   useGlobalFilter,
//   useSortBy,
//   usePagination,
// } from "react-table";
// import { useGet } from "src/API/useGet";

// const ViaBill = () => {
//   const [responseData, setResponseData] = useState([]);
//   const navigate = useNavigate();

//   const { getData, data, isLoading } = useGet();
//   useEffect(() => {
//     async function fetch() {
//       await getData("http://localhost:3000/viabill");
//     }
//     fetch();
//   }, [getData]);

//   useEffect(() => {
//     setResponseData(data);
//   }, [data]);

//   const columns = useMemo(
//     () => [
//       {
//         Header: "SL NO",
//         accessor: (row, index) => index + 1,
//       },
//       {
//         Header: "Bill Number",
//         accessor: "bill_no",
//       },
//       {
//         Header: "Bill Date",
//         accessor: "dt_bill",
//       },
//       {
//         Header: "Zoho Bill No.",
//         accessor: "no_zoho",
//       },
//       {
//         Header: "Item name",
//         accessor: "nm_model",
//       },
//       {
//         Header: "Vendor Name",
//         accessor: "nm_ven",
//       },
//       {
//         Header: "Total Qty",
//         accessor: "qty",
//       }
//     ],
//     []
//   );
    
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     nextPage,
//     previousPage,
//     canPreviousPage,
//     canNextPage,
//     state: { pageIndex, globalFilter },
//     pageCount,
//     gotoPage,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data: responseData,
//       initialState: { pageSize: 10 },
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   return (
//     <React.Fragment>
//       {isLoading ? (
//         <div className="page-content">
//           <Card>
//             <div>
//               <h1>Loading...</h1>
//             </div>
//           </Card>
//         </div>
//       ) : (
//         <div className="page-content">
//           <div className="container-fluid">
//             <Card>
//               <div className="container pt-4">
//                 <div className="rmb-2 row">
//                   <div className="col-md-2">
//                     <select className="form-select">
//                       <option value="10">Show 10</option>
//                       <option value="20">Show 20</option>
//                       <option value="30">Show 30</option>
//                       <option value="40">Show 40</option>
//                       <option value="50">Show 50</option>
//                     </select>
//                   </div>

//                   <div className="col-md-4">
//                     <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
//                       <div className="position-relative">
//                         <label htmlFor="search-bar-0" className="search-label">
//                           <span id="search-bar-0-label" className="sr-only">
//                             Search this table
//                           </span>
//                           <input
//                             id="search-bar-0"
//                             type="text"
//                             className="form-control"
//                             placeholder="search ..."
//                             value={globalFilter || ""}
//                             onChange={e => setGlobalFilter(e.target.value)}
//                           />
//                           <i className="bx bx-search-alt search-icon"></i>
//                         </label>
//                       </div>
//                     </div>
//                   </div>

                  
//                 </div>
//               </div>

//               <div className="table-responsive react-table">
//                 <table className="table table-bordered table-hover">
//                   <thead className="table-light table-nowrap">
//                     {headerGroups.map(headerGroup => (
//                       <tr
//                         key={headerGroup.id}
//                         {...headerGroup.getHeaderGroupProps()}
//                       >
//                         {headerGroup.headers.map(column => (
//                           <th
//                             key={column.id}
//                             {...column.getHeaderProps(
//                               column.getSortByToggleProps()
//                             )}
//                           >
//                             <div className="d-flex justify-content-between">
//                               <span className="font-weight-bold">
//                                 {column.render("Header")}
//                               </span>
//                               <span>
//                                 {column.isSorted
//                                   ? column.isSortedDesc
//                                     ? " 🔽"
//                                     : " 🔼"
//                                   : ""}
//                               </span>
//                             </div>
//                           </th>
//                         ))}
//                       </tr>
//                     ))}
//                   </thead>
//                   <tbody {...getTableBodyProps()}>
//                     {page.length > 0 ? (
//                       page.map(row => {
//                         prepareRow(row);
//                         return (
//                           <tr key={row.id} {...row.getRowProps()}>
//                             {row.cells.map(cell => (
//                               <td key={cell.column.id} {...cell.getCellProps()}>
//                                 {cell.column.id !== "SL NO" ? (
//                                   <Link to={`/via_bill/${row.original.id}`}>
//                                     {cell.render("Cell")}
//                                   </Link>
//                                 ) : (
//                                   cell.render("Cell")
//                                 )}
//                               </td>
//                             ))}
//                           </tr>
//                         );
//                       })
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={headerGroups[0].headers.length}
//                           style={{ textAlign: "center" }}
//                         >
//                           {" "}
//                           No search results found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="row">
//                 <div className="col-sm-6">
//                   <p className="ps-2">
//                     Showing {pageIndex + 1} of {pageCount} pages
//                   </p>
//                 </div>
//                 <div className="col-sm-6">
//                   {" "}
//                   <div className="pagination justify-content-end pb-2 pe-2">
//                     <button
//                       className="btn btn-info"
//                       disabled={pageIndex === 0}
//                       onClick={() => gotoPage(0)}
//                     >
//                       FIRST
//                     </button>
//                     <button
//                       className="btn btn-primary"
//                       disabled={!canPreviousPage}
//                       onClick={previousPage}
//                     >
//                       PRE
//                     </button>
//                     <span className="btn btn-light">{pageIndex + 1}</span>
//                     <button
//                       className="btn btn-primary"
//                       disabled={!canNextPage}
//                       onClick={nextPage}
//                     >
//                       NEXT
//                     </button>
//                     <button
//                       className="btn btn-info"
//                       disabled={pageIndex >= pageCount - 1}
//                       onClick={() => gotoPage(pageCount - 1)}
//                     >
//                       LAST
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default ViaBill;
import React, { useMemo, useEffect, useState } from "react";
import { Button, Card, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useGet } from "src/API/useGet";

const ViaBill = () => {
  const [responseData, setResponseData] = useState([
    {
      id: 1,
      bill_no: "B001",
      dt_bill: "2024-03-10",
      no_zoho: "Z001",
      nm_model: "Item 1",
      nm_ven: "Vendor A",
      qty: 5,
    },
    {
      id: 2,
      bill_no: "B002",
      dt_bill: "2024-03-11",
      no_zoho: "Z002",
      nm_model: "Item 2",
      nm_ven: "Vendor B",
      qty: 10,
    },
    {
      id: 3,
      bill_no: "B003",
      dt_bill: "2024-03-12",
      no_zoho: "Z003",
      nm_model: "Item 3",
      nm_ven: "Vendor C",
      qty: 8,
    },
  ]);
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Bill Number",
        accessor: "bill_no",
      },
      {
        Header: "Bill Date",
        accessor: "dt_bill",
      },
      {
        Header: "Zoho Bill No.",
        accessor: "no_zoho",
      },
      {
        Header: "Item name",
        accessor: "nm_model",
      },
      {
        Header: "Vendor Name",
        accessor: "nm_ven",
      },
      {
        Header: "Total Qty",
        accessor: "qty",
      }
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
      data: responseData,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Card>
            <div className="container pt-4">
              <div className="rmb-2 row">
                <div className="col-md-2">
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
                          onChange={(e) => setGlobalFilter(e.target.value)}
                        />
                        <i className="bx bx-search-alt search-icon"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-responsive react-table">
              <table className="table table-bordered table-hover">
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
                              {cell.column.id !== "SL NO" ? (
                                 <Link to={`/via_bill/${row.original.id}`} state={{ formData: row.original }}>
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
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViaBill;
