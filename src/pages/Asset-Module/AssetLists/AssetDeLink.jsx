import React, { useState, useMemo } from "react";
import {
  Col,
  Row,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Container,
  Table,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const AssetDeLink = () => {
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "A001",
      assetName: "Laptop",
      serialNumber: "SN001",
      assetRemarks: "Good condition",
      allocateType: "Active",
      checked: false,
      employeename: "John Doe",
      client: "ABC Corp",
      allocatedDate: "2023-01-15",
    },
    {
      slno: 2,
      assetId: "A002",
      assetName: "Desktop",
      serialNumber: "SN002",
      assetRemarks: "Minor scratches on the back",
      checked: false,
      employeename: "Jane Smith",
      client: "XYZ Inc",
      allocatedDate: "2023-02-20",
    },
    {
      slno: 3,
      assetId: "A003",
      assetName: "Printer",
      serialNumber: "SN003",
      assetRemarks: "Needs toner replacement",
      allocateType: "Inactive",
      checked: false,
      employeename: "Michael Johnson",
      client: "DEF Ltd",
      allocatedDate: "2023-03-10",
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "No issues",
      allocateType: "Active",
      checked: false,
      employeename: "Emily Brown",
      client: "GHI Corp",
      allocatedDate: "2023-04-05",
    },
    {
      slno: 5,
      assetId: "A005",
      assetName: "Keyboard",
      serialNumber: "SN005",
      assetRemarks: "Missing key",
      allocateType: "Inactive",
      checked: false,
      employeename: "David Lee",
      client: "JKL Ltd",
      allocatedDate: "2023-05-12",
    },
  ]);
  const handleDeallocate = () => {
    // Add logic for deallocation here
    console.log("Deallocate button clicked");
  };
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    if (!searchValue) return responseData;
    return responseData.filter(item => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [responseData, searchValue]);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };
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
        <Card className="mt-3">
          <CardHeader>
            <h1 className="card-title " style={{ fontSize: "20px" }}>
              DE-LINK SOFTWARE/ACCESSORIES DETAILS
            </h1>
          </CardHeader>
          <CardBody>
            <div className="container pt-1">
              <div className="rmb-2 row">
                {/* <div className="col-md-1">
                  <select className="form-select">
                    <option value="10">Show 10</option>
                    <option value="20">Show 20</option>
                    <option value="30">Show 30</option>
                    <option value="40">Show 40</option>
                    <option value="50">Show 50</option>
                  </select>
                </div> */}

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
                          placeholder="Search..."
                          value={searchValue}
                          onChange={handleInputChange}
                        />
                        <i className="bx bx-search-alt search-icon"></i>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-8">
                  <div className="text-sm-end">
                    <button
                      type="button"
                      className="btn mb-2 me-2 btn btn-primary"
                      onClick={handleDeallocate}
                    >
                  <i className="mdi mdi-minus-circle-outline me-1"></i>
                      Deallocate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <Table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>SL NO</th>
                    <th>ACCESSORIES ID</th>
                    <th>SERIAL NUMBER</th>
                    <th>ASSET NAME</th>
                    <th>ASSET ID</th>
                    <th>LINKED DATE</th>
                    <th>ASSET REMARKS</th>
                    <th>DE-LINK DATE</th>
                    <th>CHECK/UNCHECK</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.slno}</td>
                      <td>{row.accessoriestId}</td>
                      <td>{row.serialNumber}</td>
                      <td>{row.assetName}</td>
                      <td>{row.assetId}</td>
                      <td>{row.linkeddDate}</td>
                      <td>
                        <Input
                          className="form-control"
                          type="text"
                          value={row.assetRemarks}
                          onChange={e => {
                            // handleAllocatedDateChange(e, index);
                          }}
                        />
                      </td>
                      <td>
                        <Input
                          className="form-control"
                          type="date"
                          value={row.deallocationDate}
                          onChange={e => handleDeallocationDateChange(e, index)}
                        />
                      </td>
                      
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <Input
                          type="checkbox"
                          checked={row.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="text-center">
                {filteredData.length === 0 && (
                  <div>No search results found</div>
                )}
              </div>            </div>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default AssetDeLink;
