import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Table,
} from "reactstrap";
import axios from "axios";

const PrintGatePassPreview = () => {
  const [formData, setFormData] = useState({
    companyGroup: "COMPANY GROUP",
    state: "INDORE",
    city: "RAJWAD",
    location: "BLUE",
    building: "BUBULE SPACE",
    floor: "2ND",
    department: "ACCOUNTANT",
    requestBy: "",
    requestDate: "",
    approvedBy: "",
    requestNumber: "",
    tableData: [],
  });

  useEffect(() => {
    axios
      .get("api/table_data")
      .then(response => {
        const data = response.data;
        setFormData(prevState => ({
          ...prevState,
          tableData: data,
        }));
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };
  useEffect(() => {
    // Simulating backend API call to fetch data
    const data = [
      {
        slno: 1,
        warehouseId: "WH001",
        assetName: "Laptop",
        serialNumber: "SN001",
        model: "Model A",
      },
      {
        warehouseId: "WH002",
        assetName: "Printer",
        serialNumber: "SN002",
        model: "Model B",
      },
      {
        slno: 3,
        warehouseId: "WH003",
        assetName: "Monitor",
        serialNumber: "SN003",
        model: "Model C",
      },
    ];
    const newData = data.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));

    setFormData(prevState => ({
      ...prevState,
      tableData: newData,
    }));
  }, []);

  // Sample table columns
  const columns = [
    { Header: "SLNO", accessor: "slno" },
    { Header: "WARE HOUSE ID", accessor: "warehouseId" },
    { Header: "ASSET NAME", accessor: "assetName" },
    { Header: "SERIAL NUMBER", accessor: "serialNumber" },
    { Header: "MODEL", accessor: "model" },
  ];

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <Button
            onClick={handlePrint}
            color="secondary"
            className="btn btn-secondary-subtle border border-secondary d-print-none"
          >
            CLICK HERE TO PRINT GATE PASS
          </Button>

          <CardHeader>
            <h1
              className="card-title"
              style={{ fontSize: "20px", textAlign: "center" }}
            >
              PIONEER-TOYOTA
            </h1>
          </CardHeader>
          <CardHeader>
            <h3 style={{ fontSize: "20px", textAlign: "center" }}>GATE PASS</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "20px" }}>
                    <strong>:FROM:</strong>
                  </p>
                  <div className="justify-contend-end">
                    <p>{formData.companyGroup.toUpperCase()}</p>
                    <p>{formData.state.toUpperCase()}</p>
                    <p>{formData.city.toUpperCase()}</p>
                    <p>{formData.location.toUpperCase()}</p>
                    <p>{formData.building.toUpperCase()}</p>
                    <p>{formData.floor.toUpperCase()}</p>
                    <p>{formData.department.toUpperCase()}</p>
                  </div>
                </div>
              </Col>
              <Col sm="3"></Col> <Col sm="3"></Col>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "20px" }}>
                    <strong>:TO:</strong>
                  </p>
                  <p>{formData.companyGroup.toUpperCase()}</p>
                  <p>{formData.state.toUpperCase()}</p>
                  <p>{formData.city.toUpperCase()}</p>
                  <p>{formData.location.toUpperCase()}</p>
                  <p>{formData.building.toUpperCase()}</p>
                  <p>{formData.floor.toUpperCase()}</p>
                  <p>{formData.department.toUpperCase()}</p>
                </div>
              </Col>
            </Row>
            <hr className="mt-2 mb-4" />
            <Row>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "15px" }}>
                    <strong>REQUEST BY:</strong>
                  </p>
                  <Input type="text" value={formData.requestBy} readOnly />
                </div>
              </Col>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "15px" }}>
                    <strong>REQUEST DATE:</strong>
                  </p>
                  <Input type="text" value={formData.requestDate} readOnly />
                </div>
              </Col>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "15px" }}>
                    <strong>APPROVED BY:</strong>
                  </p>
                  <Input type="text" value={formData.approvedBy} readOnly />
                </div>
              </Col>
              <Col sm="3">
                <div className="text-center">
                  <p style={{ fontSize: "15px" }}>
                    <strong>REQUEST NUMBER</strong>
                  </p>
                  <Input type="text" value={formData.requestNumber} readOnly />
                </div>
              </Col>
            </Row>
            <hr className="mt-4 mb-4" />
            <Row>
              <Col>
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      {columns.map(column => (
                        <th key={column.Header}>{column.Header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.tableData.map((row, index) => (
                      <tr key={index}>
                        {columns.map(column => (
                          <td key={column.Header}>
                            {String(row[column.accessor]).toUpperCase()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default PrintGatePassPreview;
