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

const EmplyeeMasterCreate = () => {
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
      building: "",
      floor: "",
      employeeType: "",
      status: "",
    },
    validationSchema: Yup.object({
      employeeName: Yup.string().required("Employee name is Required"),
      employeeCode: Yup.string().required("Employee code is Required"),
      officialMailId: Yup.string()
        .email("Enter a valid email")
        .required("Official Mail ID is Required"),
      contactNo: Yup.string().required("Contact No is Required"),
      designation: Yup.string().required("Designation is Required"),
      reportingManager: Yup.string().required("Reporting Manager is Required"),
      department: Yup.string().required("Department is Required"),
      location: Yup.string().required("Location is Required"),
      subLocation: Yup.string().required("Sub-Location is Required"),
      building: Yup.string().required("Building is Required"),
      floor: Yup.string().required("Floor is Required"),
      employeeType: Yup.string().required("Employee Type is Required"),
      status: Yup.string().required("Status is Required"),
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
          <Card className="mt-5">
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
                            name="employeeName"
                            value={validation.values.employeeName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeName &&
                              !!validation.errors.employeeName
                            }
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
                            EMPLOYEE CODE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            id="employeeCode"
                            name="employeeCode"
                            value={validation.values.employeeCode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeCode &&
                              !!validation.errors.employeeCode
                            }
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
                            value={validation.values.officialMailId}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.officialMailId &&
                              !!validation.errors.officialMailId
                            }
                          />
                          <div className="invalid-feedback">
                            {validation.touched.officialMailId &&
                              validation.errors.officialMailId}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="contactNo">CONTACT NUMBER</Label>
                          <Input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            value={validation.values.contactNo}
                            onChange={validation.handleChange}
                          />
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
                          >
                            <option value="">SELECT DESIGNATION</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
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
                            }
                          >
                            <option value="">SELECT REPORTING MANAGER</option>
                            <option value="admin">Admin</option>
                            <option value="manager1">Manager 1</option>
                            <option value="manager2">Manager 2</option>
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
                            }
                          >
                            <option value="">SELECT DEPARTMENT</option>
                            <option value="dept1">Department 1</option>
                            <option value="dept2">Department 2</option>
                            <option value="dept3">Department 3</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.department &&
                              validation.errors.department}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="location">
                          LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="location"
                            name="location"
                            value={validation.values.location}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.location &&
                              !!validation.errors.location
                            }
                          >
                            <option value="">SELECT LOCATION</option>
                            <option value="loc1">Location 1</option>
                            <option value="loc2">Location 2</option>
                            <option value="loc3">Location 3</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.location &&
                              validation.errors.location}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup>
                          <Label for="subLocation">
                          SUB-LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="subLocation"
                            name="subLocation"
                            value={validation.values.subLocation}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subLocation &&
                              !!validation.errors.subLocation
                            }
                          >
                            <option value="" disabled>
                              SELECT SUB-LOCATION
                            </option>
                            {/* Add sub-location options based on your requirements */}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.subLocation}
                          </div>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
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
                            }
                          >
                            <option value="" disabled>
                              SELECT BUILDING
                            </option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.building}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
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
                            }
                          >
                            <option value="" disabled>
                              SELECT FLOOR
                            </option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.floor}
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
                            }
                          >
                            <option value="" disabled>
                              SELEECT EMPLOYEE TYPE
                            </option>
                            <option value="full-time">EMPLOYEE</option>
                            <option value="part-time">CONTACT</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.employeeType}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-3" />
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
                      <Button color="success" className="btn btn-success-subtle border border-success"
                       style={{
                        paddingTop: "10px",
                        height: "45px",
                        width: "80px",
                        marginRight: "30px",
                      }}>
                        CREATE
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

export default EmplyeeMasterCreate;
