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

const BulkAssetAllocate = () => {
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "A001",
      assetName: "Laptop",
      serialNumber: "SN001",
      assetRemarks: "INV-001",
      allocateType: "Active",
      checked: false,
    },
    {
      slno: 2,
      assetId: "A002",
      assetName: "Desktop",
      serialNumber: "SN002",
      assetRemarks: "INV-002",
      checked: false,
    },
    {
      slno: 3,
      assetId: "A003",
      assetName: "Printer",
      serialNumber: "SN003",
      assetRemarks: "INV-003",
      allocateType: "Inactive",
      checked: false,
    },
    {
      slno: 4,
      assetId: "A004",
      assetName: "Monitor",
      serialNumber: "SN004",
      assetRemarks: "INV-004",
      allocateType: "Active",
      checked: false,
    },
    {
      slno: 5,
      assetId: "A005",
      assetName: "Keyboard",
      serialNumber: "SN005",
      assetRemarks: "INV-005",
      allocateType: "Inactive",
      checked: false,
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
    assignTo: "Deligation By",
    flr: "Deligation To",
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

  const AllocateHandle = async e => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} is required`,
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
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                BULK ASSET ALOCATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
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
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">{errors.assignTo}</span>
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
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">{errors.flr}</span>
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
                        <span className="text-danger">
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
                        <button
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
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="table-responsive">
                    <Table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>SL NO</th>
                          <th>ASSET ID</th>
                          <th>ASSET NAME</th>
                          <th>SERIAL NUMBER</th>
                          <th>ASSET REMARKS</th>
                          <th>ALLOCATE TYPE</th>
                          <th>CHECK/UNCHECK</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responseData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.slno}</td>
                            <td>{row.assetId}</td>
                            <td>{row.assetName}</td>
                            <td>{row.serialNumber}</td>
                            <td>
                              <Input
                                className="form-control"
                                type="text"
                                value={row.assetRemarks}
                                onChange={e => handleRemarkChange(e, index)}
                              />
                            </td>
                            <td>
                              <select
                                className="form-control"
                                value={row.allocateType}
                                onChange={e =>
                                  handleAllocateTypeChange(e, index)
                                }
                              >
                                <option value="select">Select</option>
                                <option value="Active">PERMANENT</option>
                                <option value="Inactive">TEMPORORY</option>
                              </select>
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
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BulkAssetAllocate;
