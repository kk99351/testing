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

const FinancialYearModify = () => {
  const navigate = useNavigate();
  const requiredFields = {
    stDate: "Start Date",
    // endDate: "",
    // halfstDate: "",
    // halfendDate: "",
    // secStDate: "",
    // secEndDate: "",
  };
  const initialFormData = {};
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

  const UpdateHandle = async e => {
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

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                FINANCIAL YEAR DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <h1 className="card-title" style={{ fontSize: "20px" }}>
                    FINANCIAL YEAR
                  </h1>
                  <hr className="mb-0 mt-2" />

                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="stDate">
                          START DATE<font color="red">*</font>
                        </Label>
                        <Input
                          type="date"
                          name="stDate"
                          id="stDate"
                          value={formData.nmTax1}
                          onChange={handleInputChange}
                          invalid={!!errors.stDate}
                        />
                        <span className="text-danger">{errors.stDate}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="endDate">
                          END DATE
                        </Label>
                        <Input
                          type="date"
                          name="endDate"
                          id="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          invalid={!!errors.endDate}
                        />
                        <span className="text-danger">{errors.endDate}</span>
                      </Col>
                    </Row>
                    <hr className="mb-0 mt-3 mb-2" />
                    <h1 className="card-title" style={{ fontSize: "20px" }}>
                      FIRST HALF YEAR
                    </h1>
                    <hr className="mb-0 mt-2" />
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="halfstDate">
                          START DATE
                        </Label>
                        <Input
                          type="date"
                          name="halfstDate"
                          id="halfstDate"
                          value={formData.halfstDate}
                          onChange={handleInputChange}
                          invalid={!!errors.halfstDate}
                        />
                        <span className="text-danger">{errors.halfstDate}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="halfendDate">
                          END DATE
                        </Label>
                        <Input
                          type="date"
                          name="halfendDate"
                          id="halfendDate"
                          value={formData.halfendDate}
                          onChange={handleInputChange}
                          invalid={!!errors.halfendDate}
                        />
                        <span className="text-danger">{errors.halfendDate}</span>
                      </Col>
                    </Row>
                    <hr className="mb-0 mt-3 mb-2" />
                    <h1 className="card-title" style={{ fontSize: "20px" }}>
                      SECOND HALF YEAR
                    </h1>{" "}
                    <hr className="mb-0 mt-2" />
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="secStDate">
                          START DATE
                        </Label>
                        <Input
                          type="date"
                          name="secStDate"
                          id="secStDate"
                          value={formData.secStDate}
                          onChange={handleInputChange}
                          invalid={!!errors.secStDate}
                        />
                        <span className="text-danger">{errors.secStDate}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="secEndDate">
                          END DATE
                        </Label>
                        <Input
                          type="date"
                          name="secEndDate"
                          id="secEndDate"
                          value={formData.secEndDate}
                          onChange={handleInputChange}
                          invalid={!!errors.secEndDate}
                        />
                        <span className="text-danger">
                          {errors.secEndDate}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3 mb-2" />
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
                          onClick={UpdateHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>UPDATE</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/financial_year");
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

export default FinancialYearModify;
