import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Col,
  FormFeedback,
  Input,
  Label,
  Row,
  Form,
  FormGroup,
  CardBody,
  CardHeader,
  Container,
  Card,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const UserLoginCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      EmployeeInitials: "",
      Email: "",
      LoginName: "",
      Password: "",
      ConfirmPassword: "",
      UserType: "",
      Status: "Active", // Default to Active
    },

    validationSchema: Yup.object({
      EmployeeInitials: Yup.string().required("EmployeeInitials is Required"),
      Email: Yup.string()
        .email("Enter a valid email")
        .required("Email is Required"),
      LoginName: Yup.string().required("LoginName is Required"),
      Password: Yup.string().required("Password is Required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is Required"),
      Status: Yup.string().required("Status is Required"),
    }),
    onSubmit: (values) => {
      alert("form validated!");
      // console.log("values", values);
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
              USER DETAILS
              </h1>
            </CardHeader>

            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >
                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">
                        EmployeeInitials<font color="red">*</font>
                      </Label>
                      <Input
                        name="EmployeeInitials"
                        placeholder="Employee Initials"
                        type="select"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.EmployeeInitials &&
                          validation.errors.EmployeeInitials
                        }
                      >
                       <option value="" disabled>
                              Select emplyee initials
                            </option>
                            <option value="dept1">ADMIN</option>
                            <option value="dept2">AMIT</option>
                            <option value="dept2">ASIT</option>
                            <option value="dept2">AMIT</option>
                            </Input>
                      {validation.touched.EmployeeInitials &&
                      validation.errors.EmployeeInitials ? (
                        <FormFeedback type="invalid">
                          {validation.errors.EmployeeInitials}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        Email<font color="red">*</font>
                      </Label>
                      <Input
                        name="Email"
                        placeholder="Email"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.Email && validation.errors.Email
                        }
                      />
                      {validation.touched.Email && validation.errors.Email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.Email}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">
                        Login Name<font color="red">*</font>
                      </Label>
                      <Input
                        name="LoginName"
                        placeholder="Login Name"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.LoginName &&
                          validation.errors.LoginName
                        }
                      />
                      {validation.touched.LoginName &&
                      validation.errors.LoginName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.LoginName}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom04">
                        Password<font color="red">*</font>
                      </Label>
                      <Input
                        name="Password"
                        placeholder="Password"
                        type="password"
                        className="form-control"
                        id="validationCustom04"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.Password &&
                          validation.errors.Password
                        }
                      />
                      {validation.touched.Password &&
                      validation.errors.Password ? (
                        <FormFeedback type="invalid">
                          {validation.errors.Password}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom05">
                        Confirm Password<font color="red">*</font>
                      </Label>
                      <Input
                        name="ConfirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        className="form-control"
                        id="validationCustom05"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.ConfirmPassword &&
                          validation.errors.ConfirmPassword
                        }
                      />
                      {validation.touched.ConfirmPassword &&
                      validation.errors.ConfirmPassword ? (
                        <FormFeedback type="invalid">
                          {validation.errors.ConfirmPassword}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom06">
                        User Type
                      </Label>
                      <Input
                        name="UserType"
                        placeholder="User Type"
                        type="select"
                        className="form-control"
                        id="validationCustom06"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.UserType &&
                          validation.errors.UserType
                        }
                      >
                      <option value="" disabled>
                              Select user type
                            </option>
                            <option value="dept1">ADMIN</option>
                            <option value="dept2">HOD</option>
                            <option value="dept2">PROFESSOR</option>
                            </Input>
                    
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label>Status<font color="red">*</font></Label>
                      <div>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="Status"
                            value="Active"
                            onChange={validation.handleChange}
                            checked={validation.values.Status === "Active"}
                          />
                          <Label check>Active</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input
                            type="radio"
                            name="Status"
                            value="Inactive"
                            onChange={validation.handleChange}
                            checked={validation.values.Status === "Inactive"}
                          />
                          <Label check>Inactive</Label>
                        </FormGroup>
                      </div>
                      {validation.touched.Status &&
                      validation.errors.Status ? (
                        <div className="text-danger">
                          {validation.errors.Status}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    type="submit"
                    color="success-subtle"
                    className="border border-success"
                  >
                    CREATE
                  </Button>
                  <button
                    type="button"
                    className="btn btn-secondary-subtle border border-secondary"
                    onClick={() => {
                      navigate("/user_login");
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
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default UserLoginCreate;
