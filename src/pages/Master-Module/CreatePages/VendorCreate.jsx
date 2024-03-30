import React, { useState } from "react";
import axios from "axios";
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

const VendorCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      nmven: "",
      vencode: "",
      add1: "",
      add2: "",
      add3: "",
      cou: "",
      state: "",
      city: "",
      poscode: "",
      tele: "",
      mobile: "",
      email: "",
      gst: "",
      tin: "",
      cin: "",
      msme: "",
      pan: "",
      tan: "",
      nature: "",
      year: "",
      payterm: "",
      invoice: "",

      ifse: "",
      city1: "",
      accno: "",
      nameofacc: "",
      state1: "",
      postalcode: "",
      telephone: "",
      nmBank: "",
      bankbranch: "",
      fax1: "",
      micr: "",
      add: "",
      cou1: "",
    },

    validationSchema: Yup.object({
      nmven: Yup.string().required("SUPPLIER NAME IS REQUIRED"),
      vencode: Yup.string().required("SUPPLIER CODE IS REQUIRED"),
      add1: Yup.string().required("ADDRESS1 IS REQUIRED"),
      add2: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      cou: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      state: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      city: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      poscode: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      tele: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      mobile: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      email: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      gst: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      tin: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      cin: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      msme: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      pan: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      nature: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      year: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      invoice: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
      tan: Yup.string().required("ADDRESS2 CODE IS REQUIRED"),
    }),
    onSubmit: async values => {
      // console.log(values)
      alert("validated !");
      // try {
      //   await axios.post(`http://localhost:3000/companygroup/`, values);
      //   navigate("/companygroup");
      // } catch (error) {
      //   console.log("error in creating companygroup data: " + error);
      // }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE ENTITY
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
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="company_group">
                            ENTITY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ENTITY NAME"
                            name="company_group"
                            id="company_group"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                          ></Input>
                          {validation.touched.company_group &&
                          validation.errors.company_group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.company_group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="companyGroupCode">
                            ENTITY CODE <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ENTITY CODE"
                            name="companyGroupCode"
                            id="companyGroupCode"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companyGroupCode &&
                              validation.errors.companyGroupCode
                            }
                          ></Input>
                          {validation.touched.companyGroupCode &&
                          validation.errors.companyGroupCode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.companyGroupCode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
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
                          type="submit"
                          color="success-subtle"
                          className="btn btn-success-subtle border border-success"
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
                            navigate("/entity");
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

export default VendorCreate;
