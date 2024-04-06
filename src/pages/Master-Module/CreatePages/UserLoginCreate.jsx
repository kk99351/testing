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
import { CreateUserLogin } from "src/API/Master/AccessManagement/Api";

const UserLoginCreate = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return `${year}-${month}-${day}`;
  };
  const validateDisabledDate = (value, values) => {
    if (values.Status === "Inactive" && !value) {
      return "Disabled Date is Required";
    }
    return true; 
  };
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
      Status: "",
      DisabledDate: "",
    },

    validationSchema: Yup.object({
      EmployeeInitials: Yup.string().required("EMPLOYEE INITIALS IS REQUIRED"),
      Email: Yup.string()
        .email("Enter a valid email")
        .required("EMAIL IS REQUIRED"),
      LoginName: Yup.string().required("LOGINNAME IS REQUIRED"),
      Password: Yup.string().required("PASSWORD IS REQUIRED"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "PASSWORD MUST MATCH")
        .required("CONFIRM PASSWORD IS REQUIRED"),
      Status: Yup.string().required("STATUS IS REQUIRED"),
      UserType: Yup.string().required("USER TYPE IS REQUIRED"),

      
      DisabledDate: Yup.string().test(
        "disabledDate",
        "INVALID DISABLED DATE",
        validateDisabledDate
      ),
    }),
    onSubmit: values => {
      alert("form validated!");
     CreateUserLogin()
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE USER LOGIN 
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
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">
                            EMPLOYEE INITIALS<font color="red">*</font>
                          </Label>
                          <Input
                            name="EmployeeInitials"
                            type="select"
                            placeholder="PLEASE ENTER EMPLOYEE INITIALS"
                            className="form-control"
                            id="validationCustom01"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.EmployeeInitials &&
                              validation.errors.EmployeeInitials
                            }
                            style={{ textTransform: "uppercase" }}

                          >
                            <option value="">SELECT EMPLOYEE INITIALS</option>
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
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            EMAIL<font color="red">*</font>
                          </Label>
                          <Input
                            name="Email"
                            type="text"
                            placeholder="PLEASE ENTER VALID EMAIL"
                            className="form-control"
                            id="validationCustom02"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Email &&
                              validation.errors.Email
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.Email &&
                          validation.errors.Email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Email}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">
                            LOGIN NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="LoginName"
                            type="text"
                            placeholder="PLEASE ENTER LOGIN NAME"
                            className="form-control"
                            id="validationCustom03"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.LoginName &&
                              validation.errors.LoginName
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.LoginName &&
                          validation.errors.LoginName ? (
                            <FormFeedback type="invalid">
                              {validation.errors.LoginName}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">
                            PASSWORD<font color="red">*</font>
                          </Label>
                          <Input
                            name="Password"
                            placeholder="PLEASE ENTER PASSWORD"
                            type="password"
                            className="form-control"
                            id="validationCustom04"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Password &&
                              validation.errors.Password
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.Password &&
                          validation.errors.Password ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Password}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">
                            CONFIRM PASSWORD<font color="red">*</font>
                          </Label>
                          <Input
                            name="ConfirmPassword"
                            placeholder="PLEASE CONFIRM YOUR PASSWORD"
                            type="password"
                            className="form-control"
                            id="validationCustom05"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.ConfirmPassword &&
                              validation.errors.ConfirmPassword
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.ConfirmPassword &&
                          validation.errors.ConfirmPassword ? (
                            <FormFeedback type="invalid">
                              {validation.errors.ConfirmPassword}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom06">USER TYPE<font color="red">*</font></Label>
                          <Input
                            name="UserType"
                            type="select"
                            placeholder="PLEASE ENTER USER TYPE"
                            className="form-control"
                            id="validationCustom06"

                            
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.UserType &&
                              validation.errors.UserType
                            }
                            style={{ textTransform: "uppercase" }}

                          >
                            <option value="">SELECT USER TYPE</option>
                            <option value="dept1">ADMIN</option>
                            <option value="dept2">HOD</option>
                            <option value="dept2">PROFESSOR</option>
                          </Input>
                          {validation.touched.UserType &&
                          validation.errors.UserType ? (
                            <FormFeedback type="invalid">
                              {validation.errors.UserType}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            STATUS<font color="red">*</font>
                          </Label>
                          <div>
                            <FormGroup check inline>
                              <Input
                                type="radio"
                                name="Status"
                                value="Active"
                                onChange={validation.handleChange}
                                checked={validation.values.Status === "Active"}
                              />
                              <Label check>ENABLED</Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Input
                                type="radio"
                                name="Status"
                                value="Inactive"
                                onChange={validation.handleChange}
                                checked={
                                  validation.values.Status === "Inactive"
                                }
                                style={{ textTransform: "uppercase" }}

                              />
                              <Label check>DISABLED</Label>
                            </FormGroup>
                          </div>
                          {validation.touched.Status &&
                          validation.errors.Status ? (
                            <div
                              className="text-danger"
                              style={{ fontSize: "12px" }}
                            >
                              {validation.errors.Status}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    {validation.values.Status === "Inactive" && (
                      <Row className="mb-2">
                        <Col md={12}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom07">
                              DISABLED DATE
                            </Label>
                            <Input
                              name="DisabledDate"
                              type="date"
                              className="form-control"
                              id="validationCustom07"
                              value={
                                validation.values.DisabledDate ||
                                getCurrentDate()
                              }
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.DisabledDate &&
                                validation.errors.DisabledDate
                              }
                              style={{ textTransform: "uppercase" }}

                            />
                            {validation.touched.DisabledDate &&
                            validation.errors.DisabledDate ? (
                              <FormFeedback type="invalid">
                                {validation.errors.DisabledDate}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                    )}

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
                          type="submit"
                          color="success-subtle"
                          className="border border-success"
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
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

export default UserLoginCreate;
