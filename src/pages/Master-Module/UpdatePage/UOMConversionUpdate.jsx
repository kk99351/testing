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

const UOMConversionUpdate = () => {
  const navigate = useNavigate();
  const requiredFields = {
    material: "MATERIAL",
    qyt: "QYT",
    uom: "UOM",
    uomconverted: "UOM CONVERTED",
  };
  const initialFormData = {
    material: "",
    qyt: "",
    uom: "",
    quality: "",
    uomconverted: "",
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

  const UpdateHandle = async e => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} IS REQUIRED`,
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                UNIT OF MEASUREMENT CONVERSION DEATILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="material">
                          MATERIAL GROUP<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="material"
                          id="material"
                          value={formData.material}
                          onChange={handleDropdownChange}
                          invalid={!!errors.material}
                        >
                          <option value="">SELECT MATERIAL GROUP</option>
                          <option value="group1">Steel</option>
                          <option value="group2">Glass</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.material}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="qyt">
                          QUANTITY <font color="red">*</font>
                        </Label>
                        <input
                          type="number"
                          name="qyt"
                          id="qyt"
                          placeholder="PLEASE ENTER QUANTITY"
                          value={formData.qyt}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.qyt ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">{errors.qyt}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="uom">
                          UOM<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="uom"
                          id="uom"
                          value={formData.uom}
                          onChange={handleDropdownChange}
                          invalid={!!errors.uom}
                        >
                          <option value="">SELECT UOM</option>
                          <option value="group1">M</option>
                          <option value="group2">Liter</option>
                        </Input>
                        <span className="invalid-feedback">{errors.uom}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="uomconverted">
                          UOM CONVERSION<font color="red">*</font>
                        </Label>
                        <input
                          name="uomconverted"
                          id="uomconverted"
                          placeholder="PLEASE ENTER UNIT OF MEASUREMENT CONVERSION"
                          value={formData.uomconverted}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.uomconverted ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.uomconverted}
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
                            navigate("/uom_conversion");
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

export default UOMConversionUpdate;
