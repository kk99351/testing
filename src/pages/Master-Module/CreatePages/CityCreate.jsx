import React, { useState } from "react";
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

const CityCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      companygroup: "",
      region: "",
      cityname: "",
    },

    validationSchema: Yup.object({
      companygroup: Yup.string().required("company group is Required"),
      region: Yup.string().required("State Name is Required"),
      cityname: Yup.string().required("City Name is Required"),
    }),
    onSubmit: values => {
      alert("form validated !");
      //console.log("values", values);
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CITY DETAILS
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
                          <Label htmlFor="companygroup">
                            COMPANY GROUP/COUNTRY <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="companygroup"
                            id="companygroup"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companygroup &&
                              validation.errors.companygroup
                            }
                          >
                            <option value="">
                              Select Company Group/Country
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.companygroup &&
                          validation.errors.companygroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.companygroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                        </Col>
                      <hr className="mb-2" />
                    </Row>     
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="region">
                            STATE NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="region"
                            id="region"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region &&
                              validation.errors.region
                            }
                          >
                            <option value="">
                              Select Region
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.region &&
                          validation.errors.region ? (
                            <FormFeedback type="invalid">
                              {validation.errors.region}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                        </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cityname">
                           CITY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="cityname"
                            type="text"
                            className="form-control"
                            id="cityname"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cityname &&
                              validation.errors.cityname
                            }
                          />
                          {validation.touched.cityname &&
                          validation.errors.cityname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cityname}
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
                      navigate("/city");
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

export default CityCreate;
