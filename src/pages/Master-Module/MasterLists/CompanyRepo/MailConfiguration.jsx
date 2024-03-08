import React from "react";
import MetaTags from "react-meta-tags";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Col,
  Input,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  Label,
  FormGroup,
  FormFeedback,
  Form,
} from "reactstrap";

const MailConfiguration = props => {
  const { fun } = { ...props };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      mailId: "",
      mailPwd: "",
      conMailPwd: "",
      nmHost: "",
      noPort: "",
      warrantyDay: "",
      supportMail: "",
    },
    validationSchema: Yup.object({
      mailId: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      mailPwd: Yup.string().required("Mail Password is Required"),
      conMailPwd: Yup.string().required("Confirm mail password"),
      nmHost: Yup.string().required("Name of Host is Required"),
      noPort: Yup.string().required("PORT required "),
    }),

    onSubmit: values => {
      alert("Form validated!");
      console.log("values", values);
    },
  });

  const handleChange = event => {
    const fieldName = event.target.name;
    const inputValue = event.target.value;
    const uppercaseValue = inputValue ? inputValue.toUpperCase() : "";

    validation.handleChange(event);
    validation.setFieldValue(fieldName, uppercaseValue);
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>HCS Technology Private Limited</title>
      </MetaTags>

      <Card>
        <CardHeader>
          <h3 className="d-flex justify-content-center">Mail Configuration</h3>
        </CardHeader>
        <CardBody
          className="border"
          style={{ boxShadow: "1px 1px 8px 1px gray" }}
        >
          <Row className="justify-content-center">
            <Col xl={10}>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >
                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">
                        EMAIL ID<font color="red">*</font>
                      </Label>
                      <Input
                        placeholder="Enter Email"
                        type="email"
                        name="mailId"
                        id="validationCustom01"
                        value={validation.values.mailId}
                        onChange={handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.mailId && validation.errors.mailId
                        }
                      />
                      {validation.touched.mailId && validation.errors.mailId ? (
                        <FormFeedback type="invalid">
                          {validation.errors.mailId}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        PASSWORD<font color="red">*</font>
                      </Label>
                      <Input
                        type="password"
                        name="mailPwd"
                        id="validationCustom02"
                        onChange={handleChange}
                        value={validation.values.mailPwd}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.mailPwd &&
                          validation.errors.mailPwd
                        }
                      />
                      {validation.touched.mailPwd &&
                      validation.errors.mailPwd ? (
                        <FormFeedback type="invalid">
                          {validation.errors.mailPwd}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <hr className="mb-2 mt-0" />

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">
                        CONFIRM PASSWORD<font color="red">*</font>
                      </Label>
                      <Input
                        placeholder="Enter Password"
                        type="password"
                        name="conMailPwd"
                        id="validationCustom01"
                        onChange={handleChange}
                        value={validation.values.conMailPwd}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.conMailPwd &&
                          validation.errors.conMailPwd
                        }
                      />
                      {validation.touched.conMailPwd &&
                      validation.errors.conMailPwd ? (
                        <FormFeedback type="invalid">
                          {validation.errors.conMailPwd}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        HOST NAME<font color="red">*</font>
                      </Label>
                      <Input
                        type="text"
                        name="nmHost"
                        placeholder="Enter Host Name"
                        id="validationCustom02"
                        onChange={handleChange}
                        value={validation.values.nmHost}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.nmHost && validation.errors.nmHost
                        }
                      />
                      {validation.touched.nmHost && validation.errors.nmHost ? (
                        <FormFeedback type="invalid">
                          {validation.errors.nmHost}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <hr className="mb-2 mt-0" />

                <Row>
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">
                        PORT NO<font color="red">*</font>
                      </Label>
                      <Input
                        type="text"
                        name="noPort"
                        placeholder="Enter PORT"
                        id="validationCustom01"
                        onChange={handleChange}
                        value={validation.values.noPort}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.noPort && validation.errors.noPort
                        }
                      />
                      {validation.touched.noPort && validation.errors.noPort ? (
                        <FormFeedback type="invalid">
                          {validation.errors.noPort}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <hr className="mb-3 mt-3" />

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
                    {" "}
                    <Button
                      type="submit"
                      color="success-subtle"
                      className="border border-success"
                      style={{
                        paddingTop: "10px",
                        height: "45px",
                        width: "100px",
                        marginRight: "30px",
                      }}
                    >
                      CREATE
                    </Button>
                    <button
                      type="button"
                      className="btn btn-secondary-subtle border border-secondary"
                      style={{
                        paddingTop: "10px",
                        width: "100px",
                        height: "45px",
                      }}
                      onClick={fun}
                    >
                      <Label>NEXT</Label>
                    </button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default MailConfiguration;
