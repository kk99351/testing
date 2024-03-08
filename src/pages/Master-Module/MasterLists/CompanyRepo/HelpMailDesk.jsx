import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Col,
  Input,
  Label,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  FormFeedback,
  Form,
} from "reactstrap";
 
const HelpMailDesk = () => {
  const validation = useFormik({
    enableReinitialize: true,
 
    initialValues: {
      helpMail: "",
      helpPass: "",
      helpHostNm: "",
      helpPort: "",
    },
    validationSchema: Yup.object({
      helpMail: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
      helpPass: Yup.string().required("Password is Required"),
      helpHostNm: Yup.string().required("help Host Name is Required"),
      helpPort: Yup.string().required("help Port is Required"),
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
    <div>
      <Card>
        <CardHeader>
          <h3 className="d-flex justify-content-center">
            Helpdesk Mail Configuration Details
          </h3>
        </CardHeader>
        <CardBody>
        <Row className="justify-content-center">
                <Col xl={10}>
          <Form className="needs-validation" onSubmit={validation.handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor="validationCustom01">
                    HELP EMAIL <font color="red">*</font>
                  </Label>
                  <Input
                    placeholder="Enter Help Email"
                    type="mail"
                    name="helpMail"
                    id="validationCustom01"
                    onChange={handleChange}
                    value={validation.values.helpMail}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.helpMail && validation.errors.helpMail
                    }
                  />
                  {validation.touched.helpMail && validation.errors.helpMail ? (
                    <FormFeedback type="invalid">
                      {validation.errors.helpMail}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor="validationCustom01">
                    HELP PASSSWORD <font color="red">*</font>
                  </Label>
                  <Input
                    placeholder="Enter Help Email"
                    type="password"
                    name="helpPass"
                    id="validationCustom01"
                    onChange={handleChange}
                    value={validation.values.helpPass}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.helpPass && validation.errors.helpPass
                    }
                  />
                  {validation.touched.helpPass && validation.errors.helpPass ? (
                    <FormFeedback type="invalid">
                      {validation.errors.helpPass}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <hr className="mb-2 mt-0" />

            <Row>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor="validationCustom01">
                    HELP HOST NAME <font color="red">*</font>
                  </Label>
                  <Input
                    placeholder="Enter Help Host name"
                    type="text"
                    name="helpHostNm"
                    id="validationCustom01"
                    onChange={handleChange}
                    value={validation.values.helpHostNm}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.helpHostNm &&
                      validation.errors.helpHostNm
                    }
                  />
                  {validation.touched.helpHostNm &&
                  validation.errors.helpHostNm ? (
                    <FormFeedback type="invalid">
                      {validation.errors.helpHostNm}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor="validationCustom01">
                    HELP PORT <font color="red">*</font>
                  </Label>
                  <Input
                    placeholder="Enter Help Email"
                    type="text"
                    name="helpPort"
                    id="validationCustom01"
                    onChange={handleChange}
                    value={validation.values.helpPort}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.helpPort && validation.errors.helpPort
                    }
                  />
                  {validation.touched.helpPort && validation.errors.helpPort ? (
                    <FormFeedback type="invalid">
                      {validation.errors.helpPort}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
 
            <div className="justify-content-center d-flex align-items-center">
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
            </div>
          </Form>
          </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};
 
export default HelpMailDesk;