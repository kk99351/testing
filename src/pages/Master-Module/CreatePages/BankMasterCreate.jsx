import React, { useState } from "react";
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
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BankMasterCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bankName: "",
  });
  const [errors, setErrors] = useState({
    bankName: "",
  });

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

  const createHandle = async e => {
    e.preventDefault();
    let isValid = true;
    if (!formData.bankName.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        bankName: "Bank name is required",
      }));
      isValid = false;
    }
   
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

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                BANK DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="bankName">
                          BANK NAME<font color="red">*</font>
                        </Label>
                        <Input
                        placeholder="ENTER BANK NAME"
                          name="bankName"
                          id="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.bankName ? "is-invalid" : ""
                          }`}
                        />
                        <span className="text-danger">{errors.bankName}</span>
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
                          onClick={createHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>CREATE</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/bankmaster");
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
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BankMasterCreate;
