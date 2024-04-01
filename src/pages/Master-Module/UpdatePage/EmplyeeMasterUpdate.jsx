import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const EmplyeeMasterUpdate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      employeeName: "",
      employeeCode: "",
      officialMailId: "",
      contactNo: "",
      designation: "",
      reportingManager: "",
      department: "",
      location: "",
      subLocation: "",

      employeeType: "",
      status: "",
      company_group: "",
      region_name: "",
      cityname: "",
      plantname: "",
      building: "",
      floor: "",
    },
    validationSchema: Yup.object({
      employeeName: Yup.string().required("EMPLOYEE NAME IS REQUIRED"),
      employeeCode: Yup.string().required("EMPLOYEE CODE IS REQUIRED"),
      officialMailId: Yup.string()
        .email("Enter a valid email")
        .required("OFFICIAL MAIL ID IS REQUIRED"),
      contactNo: Yup.string().required("CONTACT NO IS REQUIRED"),
      designation: Yup.string().required("DESIGNATION IS REQUIRED"),
      reportingManager: Yup.string().required("REPORTING MANAGER IS REQUIRED"),
      department: Yup.string().required("DEPARTMENT IS REQUIRED"),
      location: Yup.string().required("LOCATION IS REQUIRED"),
      subLocation: Yup.string().required("SUB-LOCATION IS REQUIRED"),
      employeeType: Yup.string().required("EMPLOYEE TYPE IS REQUIRED"),
      status: Yup.string().required("STATUS IS REQUIRED"),

      company_group: Yup.string().required("COUNTRY NAME IS REQUIRED"),
      region_name: Yup.string().required("STATE NAME IS REQUIRED"),
      cityname: Yup.string().required("CITY NAME IS REQUIRED"),
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
      floor: Yup.string().required("FLOOR NUMBER IS REQUIRED"),
    }),
    onSubmit: values => {
      alert("Form validated!");
      // Add your form submission logic here
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                EMPLOYEE DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <Form
                    className="needs-validation"
                    onSubmit={validation.handleSubmit}
                  >
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="employeeName">
                            EMPLOYEE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            id="employeeName"
                            placeholder="PLEASE ENTER EMPLOYEE NAME"
                            name="employeeName"
                            value={validation.values.employeeName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeName &&
                              !!validation.errors.employeeName
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.employeeName &&
                              validation.errors.employeeName}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="employeeCode">
                            EMPLOYEE ID<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            id="employeeCode"
                            name="employeeCode"
                            placeholder="PLEASE ENTER EMPLOYEE ID"
                            value={validation.values.employeeCode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeCode &&
                              !!validation.errors.employeeCode
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.employeeCode &&
                              validation.errors.employeeCode}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="officialMailId">
                            OFFICIAL MAIL ID<font color="red">*</font>
                          </Label>
                          <Input
                            type="email"
                            id="officialMailId"
                            name="officialMailId"
                            placeholder="PLEASE ENTER OFFICIAL MAIL ID"
                            value={validation.values.officialMailId}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.officialMailId &&
                              !!validation.errors.officialMailId
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.officialMailId &&
                              validation.errors.officialMailId}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="contactNo">
                            CONTACT NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            placeholder="PLEASE ENTER CONTACT NUMBER"
                            value={validation.values.contactNo}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.contactNo &&
                              !!validation.errors.contactNo
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.contactNo &&
                              validation.errors.contactNo}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="designation">
                            DESIGNATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="designation"
                            name="designation"
                            value={validation.values.designation}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.designation &&
                              !!validation.errors.designation
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT DESIGNATION</option>
                            <option value="Manager">Manager</option>
                            <option value="Assistant Manager">
                              Assistant Manager
                            </option>
                            <option value="Team Lead">Team Lead</option>
                            <option value="Software Engineer">
                              Software Engineer
                            </option>
                            <option value="HR Coordinator">
                              HR Coordinator
                            </option>
                            <option value="Sales Representative">
                              Sales Representative
                            </option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.designation &&
                              validation.errors.designation}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="reportingManager">
                            REPORTING MANAGER<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="reportingManager"
                            name="reportingManager"
                            value={validation.values.reportingManager}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.reportingManager &&
                              !!validation.errors.reportingManager
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT REPORTING MANAGER</option>
                            <option value="Project Manager ">Manager 1</option>
                            <option value="Manager">Manager 2</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.reportingManager &&
                              validation.errors.reportingManager}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="department">
                            DEPARTMENT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="department"
                            name="department"
                            value={validation.values.department}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.department &&
                              !!validation.errors.department
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT DEPARTMENT</option>
                            <option value="Sales">Sales</option>
                            <option value="Human Resources">
                              Human Resources
                            </option>
                            <option value="Finance">Finance</option>
                            <option value="Engineering">Engineering</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.department &&
                              validation.errors.department}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="employeeType">
                            EMPLOYEE TYPE<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="employeeType"
                            name="employeeType"
                            value={validation.values.employeeType}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeType &&
                              !!validation.errors.employeeType
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="" disabled>
                              SELEECT EMPLOYEE TYPE
                            </option>
                            <option value="full-time">EMPLOYEE</option>
                            <option value="part-time">CONTRACT</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.employeeType}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="company_group">
                            COUNTRY<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="company_group"
                            name="company_group"
                            value={validation.values.company_group}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              !!validation.errors.company_group
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT COUNTRY </option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.company_group &&
                              validation.errors.company_group}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="region_name">
                            STATE<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="region_name"
                            name="region_name"
                            value={validation.values.region_name}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region_name &&
                              !!validation.errors.region_name
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT STATE</option>
                            <option value="CA">California</option>
                            <option value="NY">New York</option>
                            <option value="ENG">England</option>
                            <option value="ON">Ontario</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.region_name &&
                              validation.errors.region_name}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="cityname">
                            CITY<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="cityname"
                            name="cityname"
                            value={validation.values.cityname}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cityname &&
                              !!validation.errors.cityname
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT CITY</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York City">New York City</option>
                            <option value="London">London</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Sydney">Sydney</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.cityname &&
                              validation.errors.cityname}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="plantname">
                            LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="plantname"
                            name="plantname"
                            value={validation.values.plantname}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.plantname &&
                              !!validation.errors.plantname
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="" disabled>
                              SELEECT LOCATION
                            </option>
                            <option value="Downtown Branch">
                              Downtown Branch
                            </option>
                            <option value="Midtown Branch">
                              Midtown Branch
                            </option>
                            <option value="Westminster Branch">
                              Westminster Branch
                            </option>
                            <option value="CBD Branch">CBD Branch</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.plantname}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="building">
                            BUILDING<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="building"
                            name="building"
                            value={validation.values.building}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              !!validation.errors.building
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT BUILDING</option>
                            <option value="Central Tower">Central Tower</option>
                            <option value="Empire State Building">
                              Empire State Building
                            </option>
                            <option value="Westminster Palace">
                              Westminster Palace
                            </option>
                            <option value="CN Tower">CN Tower</option>
                            <option value="Sydney Tower">Sydney Tower</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.building &&
                              validation.errors.building}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="floor">
                            FLOOR<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="floor"
                            name="floor"
                            value={validation.values.floor}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              !!validation.errors.floor
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELEECT FLOOR</option>
                            <option value="1">1st Floor</option>
                            <option value="2">2nd Floor</option>
                            <option value="3">3rd Floor</option>
                            <option value="4">4th Floor</option>
                            <option value="5">5th Floor</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.floor}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
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
                        <Button
                          color="success"
                          className="btn btn-success-subtle border border-success"
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          UPDATE
                        </Button>
                        <Button
                          color="secondary"
                          className="border border-secondary"
                          onClick={() => {
                            navigate("/emplyee_master");
                          }}
                          style={{
                            paddingTop: "10px",
                            width: "80px",
                            height: "45px",
                          }}
                        >
                          BACK
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default EmplyeeMasterUpdate;
