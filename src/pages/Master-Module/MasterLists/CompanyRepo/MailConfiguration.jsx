import React from "react";
import MetaTags from "react-meta-tags";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { CreateMailConfigration } from "src/API/Master/CompanyRepo/Api";

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
      mailPwd: Yup.string().required("PASSWORD IS REQUIRED"),
      conMailPwd: Yup.string()
        .oneOf([Yup.ref("mailPwd"), null], "PASSWORD MUST MATCH")
        .required("CONFIRM PASSWORD IS REQUIRED"),

      mailId: Yup.string()
        .email("INVALID EMAIL ADDRESS")
        .required("EMAIL IS REQUIRED"),
      nmHost: Yup.string().required("NAME OF HOST IS REQUIRED"),
      noPort: Yup.string().required("PORT NUMBER IS REQUIRED "),
    }),

    onSubmit: values => {
      console.log("values", values.mailId);
      CreateMailConfigration({
        idmailconfig: 0,
        mailid: values.mailId,
        mailpwd: values.mailPwd,
        nmhost: values.nmHost,
        nmport: values.noPort,
        supportmail: "",
        nodays: 0,
      })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            toast("Form submitted successfully");
          } else {
            toast("Email already used");
          }
        })
        .catch(err => {
          toast(err.message);
        });
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
      <ToastContainer></ToastContainer>
      <Card>
        <CardHeader>
          <h1 className="card-title" style={{ fontSize: "20px" }}>
            MAIL CONFIGURATION
          </h1>
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
                        placeholder="PLEASE ENTER VALID EMAIL"
                        type="email"
                        name="mailId"
                        id="validationCustom01"
                        value={validation.values.mailId}
                        onChange={handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.mailId && validation.errors.mailId
                        }style={{ textTransform: "uppercase" }}
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
                        placeholder="PLEASE ENTER PASSWORD"
                        id="validationCustom02"
                        onChange={handleChange}
                        value={validation.values.mailPwd}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.mailPwd &&
                          validation.errors.mailPwd
                        }style={{ textTransform: "uppercase" }}
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
                        placeholder="PLEASE CONFIRM YOUR PASSWORD"
                        type="password"
                        name="conMailPwd"
                        id="validationCustom01"
                        onChange={handleChange}
                        value={validation.values.conMailPwd}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.conMailPwd &&
                          validation.errors.conMailPwd
                        }style={{ textTransform: "uppercase" }}
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
                        placeholder="PLEASE ENTER HOST NAME"
                        id="validationCustom02"
                        onChange={handleChange}
                        value={validation.values.nmHost}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.nmHost && validation.errors.nmHost
                        }style={{ textTransform: "uppercase" }}
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
                        PORT NUMBER<font color="red">*</font>
                      </Label>
                      <Input
                        type="text"
                        name="noPort"
                        placeholder="PLEASE ENTER PORT NUMBER"
                        id="validationCustom01"
                        onChange={handleChange}
                        value={validation.values.noPort}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.noPort && validation.errors.noPort
                        }style={{ textTransform: "uppercase" }}
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
                      UPDATE
                    </Button>
                    {/* <button
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
                    </button> */}
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
