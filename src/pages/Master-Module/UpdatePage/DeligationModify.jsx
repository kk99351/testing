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
  
  const DeligationModify = () => {
    const navigate = useNavigate();
      const requiredFields = {
        id_delgation_by: "Deligation By",
    id_delgation_to: "Deligation To",
    dt_start: "Start Date",
    dt_end: "End Date",
    // remarks: "",
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
                DELIGATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="id_delgation_by">
                          DELIGATION BY<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="id_delgation_by"
                          id="id_delgation_by"
                          value={formData.id_delgation_by}
                          onChange={handleDropdownChange}
                          invalid={!!errors.id_delgation_by}
                        >
                          <option value="">SELECT DELEGATION BY</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">
                          {errors.id_delgation_by}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="id_delgation_to">
                          DELIGATION TO<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="id_delgation_to"
                          id="id_delgation_to"
                          value={formData.id_delgation_to}
                          onChange={handleDropdownChange}
                          invalid={!!errors.id_delgation_to}
                        >
                          <option value="">SELECT DELEGATION TO</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">
                          {errors.id_delgation_to}
                        </span>
                      </Col>
                     <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="dt_start">
                          START DATE<font color="red">*</font>
                        </Label>
                        <Input
                          type="date"
                          name="dt_start"
                          id="dt_start"
                          value={formData.dt_start}
                          onChange={handleInputChange}
                          invalid={!!errors.dt_start}
                        />
                        <span className="text-danger">
                          {errors.dt_start}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="dt_end">
                          END DATE<font color="red">*</font>
                        </Label>
                        <Input
                          type="date"
                          name="dt_end"
                          id="dt_end"
                          value={formData.dt_end}
                          onChange={handleInputChange}
                          invalid={!!errors.dt_end}
                        />
                        <span className="text-danger">
                          {errors.dt_end}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />

                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="remarks">
                          REMARKS
                        </Label>
                        <textarea
                        placeholder="REMARKS"
                          name="remarks"
                          id="remarks"
                          value={formData.remarks}
                          onChange={handleInputChange}
                          className={`form-control ${errors.remarks ? 'is-invalid' : ''}`}
                        />
                        <span className="text-danger">
                          {errors.remarks}
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
                            navigate("/deligation_master");
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

export default DeligationModify;
