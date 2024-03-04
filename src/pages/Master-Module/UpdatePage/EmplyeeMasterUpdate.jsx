import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
} from "reactstrap";
import { useNavigate } from "react-router-dom";

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
      <div className="page-content">
        <div className="container-fluid">
          <Card>
            <CardBody>
              <div className="card-header">
                <h4 className="card-title mb-0">Employee Details</h4>
              </div>
              <div className="card-header">
                <Form
                  className="needs-validation"
                  onSubmit={validation.handleSubmit}
                >
                  <Row>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Employee Name<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="text"
                            name="employeeName"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.employeeName}
                            invalid={
                              validation.touched.employeeName &&
                              validation.errors.employeeName
                            }
                          />
                          {validation.touched.employeeName &&
                            validation.errors.employeeName && (
                              <div className="text-danger">
                                {validation.errors.employeeName}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Employee Code<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="text"
                            name="employeeCode"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.employeeCode}
                            invalid={
                              validation.touched.employeeCode &&
                              validation.errors.employeeCode
                            }
                          />
                          {validation.touched.employeeCode &&
                            validation.errors.employeeCode && (
                              <div className="text-danger">
                                {validation.errors.employeeCode}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Official Mail ID<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="text"
                            name="officialMailId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.officialMailId}
                            invalid={
                              validation.touched.officialMailId &&
                              validation.errors.officialMailId
                            }
                          />
                          {validation.touched.officialMailId &&
                            validation.errors.officialMailId && (
                              <div className="text-danger">
                                {validation.errors.officialMailId}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>Contact No</Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="number"
                            name="contactNo"
                            onChange={validation.handleChange}
                            value={validation.values.contactNo}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Designation<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="designation"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.designation}
                            invalid={
                              validation.touched.designation &&
                              validation.errors.designation
                            }
                          >
                            <option value="" disabled>
                              Select designation
                            </option>
                            <option value="admin">ADMIN</option>
                            <option value="super">SUPER</option>
                          </Input>
                          {validation.touched.designation &&
                            validation.errors.designation && (
                              <div className="text-danger">
                                {validation.errors.designation}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Reporting Manager<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="reportingManager"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.reportingManager}
                            invalid={
                              validation.touched.reportingManager &&
                              validation.errors.reportingManager
                            }
                          >
                            <option value="" disabled>
                              Select Reporting manager
                            </option>
                            <option value="admin">ADMIN</option>
                            <option value="amit">AMIT</option>
                            <option value="asit">ASIT</option>
                          </Input>
                          {validation.touched.reportingManager &&
                            validation.errors.reportingManager && (
                              <div className="text-danger">
                                {validation.errors.reportingManager}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Department<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="department"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.department}
                            invalid={
                              validation.touched.department &&
                              validation.errors.department
                            }
                          >
                            <option value="" disabled>
                              Select department
                            </option>
                            <option value="dept1">Department 1</option>
                            <option value="dept2">Department 2</option>
                          </Input>
                          {validation.touched.department &&
                            validation.errors.department && (
                              <div className="text-danger">
                                {validation.errors.department}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Location<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="location"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.location}
                            invalid={
                              validation.touched.location &&
                              validation.errors.location
                            }
                          >
                            <option value="" disabled>
                              Select location
                            </option>
                          </Input>
                          {validation.touched.location &&
                            validation.errors.location && (
                              <div className="text-danger">
                                {validation.errors.location}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Sub-Location<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="subLocation"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.subLocation}
                            invalid={
                              validation.touched.subLocation &&
                              validation.errors.subLocation
                            }
                          >
                            <option value="" disabled>
                              Select sub-location
                            </option>
                            {/* Add sub-location options based on your requirements */}
                          </Input>
                          {validation.touched.subLocation &&
                            validation.errors.subLocation && (
                              <div className="text-danger">
                                {validation.errors.subLocation}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>

                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Building<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="building"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.building}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }
                          >
                            <option value="" disabled>
                              Select building
                            </option>
                            {/* Add building options based on your requirements */}
                          </Input>
                          {validation.touched.building &&
                            validation.errors.building && (
                              <div className="text-danger">
                                {validation.errors.building}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>

                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Floor<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="floor"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.floor}
                            invalid={
                              validation.touched.floor &&
                              validation.errors.floor
                            }
                          >
                            <option value="" disabled>
                              Select floor
                            </option>
                          </Input>
                          {validation.touched.floor &&
                            validation.errors.floor && (
                              <div className="text-danger">
                                {validation.errors.floor}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>

                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Employee Type<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="employeeType"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.employeeType}
                            invalid={
                              validation.touched.employeeType &&
                              validation.errors.employeeType
                            }
                          >
                            <option value="" disabled>
                              Select employee type
                            </option>
                            <option value="full-time">EMPLOYEE</option>
                            <option value="part-time">CONTACT</option>
                          </Input>
                          {validation.touched.employeeType &&
                            validation.errors.employeeType && (
                              <div className="text-danger">
                                {validation.errors.employeeType}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>

                    <Col xl={6}>
                      <Row>
                        <Col>
                          <Label>
                            Status<font color="red">*</font>
                          </Label>
                        </Col>
                        <Col className="pb-2" xl={8}>
                          <Input
                            type="select"
                            name="status"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.status}
                            invalid={
                              validation.touched.status &&
                              validation.errors.status
                            }
                          >
                            <option value="" disabled>
                              Select status
                            </option>
                            <option value="active">WORKING</option>
                            <option value="inactive">NOT-WORKING</option>
                          </Input>
                          {validation.touched.status &&
                            validation.errors.status && (
                              <div className="text-danger">
                                {validation.errors.status}
                              </div>
                            )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div
                className="pt-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <button
                  type="button"
                  className="btn btn-success-subtle border border-success"
                >
                  <Label>UPDATE</Label>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary-subtle border border-secondary"
                  onClick={() => {
                    navigate("/emplyee_master");
                  }}
                >
                  <Label>BACK</Label>
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmplyeeMasterCreate;
