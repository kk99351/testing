import React, { useMemo, useState } from "react";
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
import { Link } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const BillsEntry = () => {
  const initialData = [
    {
      bill_no: "B001",
      dt_bill: "2024-03-10",
      nm_ven: "CA Suppliers",
    },
    {
      bill_no: "B002",
      dt_bill: "2024-03-11",
      nm_ven: "RA Enterprises",
    },
    {
      id: 3,
      bill_no: "B003",
      dt_bill: "2024-03-12",
      nm_ven: "HCL Traders",
    },
  ];

  const [responseData, setResponseData] = useState(initialData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        width: "6%",
      },
      {
        Header: "BILL NUMBER",
        accessor: "bill_no",
      },
      {
        Header: "BILL DATE",
        accessor: "dt_bill",
      },
      {
        Header: "VENDOR NAME",
        accessor: "nm_ven",
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

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = e => {
    setEndDate(e.target.value);
  };

  const handleSearch = () => {
    // Filter data based on the selected date range
    const filteredData = initialData.filter(item => {
      return item.dt_bill >= startDate && item.dt_bill <= endDate;
    });
    setResponseData(filteredData);
  };

  const clearSearch = () => {
    setResponseData(initialData);
    setStartDate("");
    setEndDate("");
    setSearchValue("");
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              BILLS ENTRY{" "}
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="mb-2">
              <Col md={5}>
                <Label for="startDate">
                  FROM DATE<font color="red">*</font>
                </Label>
                <Input
                  type="date"
                  name="startDate"
                  id="startDate"
                  placeholder="From Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  style={{ textTransform: "uppercase" }}
                />
              </Col>
              <Col md={5}>
                <Label for="endDate">
                  TO DATE<font color="red">*</font>
                </Label>
                <Input
                  type="date"
                  name="endDate"
                  id="endDate"
                  placeholder="To Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  style={{ textTransform: "uppercase" }}
                />
              </Col>
              <Col md={2} className="d-flex align-items-end">
                <Button
                  className="btn btn-success-subtle border border-success"
                  color="primary"
                  onClick={handleSearch}
                >
                  SEARCH
                </Button>
                <Button
                  className="btn btn-secondary-subtle border border-secondary"
                  color="danger"
                  onClick={clearSearch}
                  style={{width:"85px", marginLeft:"5px"}}
                >
                  CLEAR
                </Button>
              </Col>
            </Row>

            <div className="table-responsive">
              <Table className="table table-bordered table-hover text-center">
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
                                <Link to={`/bill_entry/${row.original.id}`}>
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
                        NO SEARCH RESULTS AVAILABLE
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
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
  );
};

export default BillsEntry;
