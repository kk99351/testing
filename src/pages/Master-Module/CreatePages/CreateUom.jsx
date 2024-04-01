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
import { CreateUomApis } from "src/API/Master/MaterialMaster/Api";
import { ToastContainer, toast } from "react-toastify";

const CreateUom = () => {
  const navigate = useNavigate();
  const requiredFields = {
    uom_name: "UNIT OF MEASUREMENT NAME",
    uom_code: "UNIT OF MEASUREMENT CODE ",
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

  const createHandle = async e => {
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
        CreateUomApis([
          {
            iduom: 0,
            nmuom: formData.uom_name,
            cduom: formData.uom_code,
          },
        ])
          .then(res => {
            console.log(res);
            if (res.ok) {
              toast("UOM created successfully");
              navigate("/unit");
            } else {
              toast("UOM already exists");
            }
          })
          .catch(err => {
            toast(err.message);
          });
      } catch (error) {
        console.log("error in creating group data" + error);
      }
    }
  };

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE UNIT OF MEASUREMENT
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="uom_name">
                          UOM NAME<font color="red">*</font>
                        </Label>
                        <Input
                          name="uom_name"
                          id="uom_name"
                          placeholder="PLEASE ENTER UNIT OF MEASUREMENT NAME"
                          value={formData.uom_name}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.uom_name ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.uom_name}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="uom_code">
                          UOM CODE<font color="red">*</font>
                        </Label>
                        <Input
                          name="uom_code"
                          placeholder="PLEASE ENTER UNIT OF MEASUREMENT CODE"
                          id="uom_code"
                          value={formData.uom_code}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.uom_code ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.uom_code}
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
                            navigate("/unit");
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

export default CreateUom;
