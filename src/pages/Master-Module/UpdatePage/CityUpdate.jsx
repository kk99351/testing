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

const CityUpdate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      company_group: "",
      region_name: "",
      cityname: "",
      entity:"",
    },

    validationSchema: Yup.object({
      company_group: Yup.string().required("COUNTRY NAME IS REQUIRED"),
      region_name: Yup.string().required("STATE NAME IS REQUIRED"),
      entity: Yup.string().required("ENTITY NAME IS REQUIRED"),

      cityname: Yup.string().required("CITY NAME IS REQUIRED"),
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
              >  <Row className="mb-2">
              <Col md={12}>
                <FormGroup className="mb-3">
                  <Label htmlFor="entity">
                    ENTITY NAME <font color="red">*</font>
                  </Label>
                  <Input
                    type="select"
                    name="entity"
                    id="entity"
                    className="form-control"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.entity &&
                      validation.errors.entity
                    }
                  >
                    <option value="">SELECT ENTITY NAME</option>
                    <option value="US">RA Lmt</option>
                    <option value="UK">PR Enterprises</option>
                    <option value="CA">CA  Corporation</option>
                  </Input>
                  {validation.touched.entity &&
                  validation.errors.entity ? (
                    <FormFeedback type="invalid">
                      {validation.errors.entity}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>

                <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="company_group">
                            COUNTRY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="company_group"
                            id="company_group"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                          >
                            <option value="">SELECT COUNTRY</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                          </Input>
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
                          <Label htmlFor="region_name">
                            STATE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="region_name"
                            id="region_name"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region_name &&
                              validation.errors.region_name
                            }
                          >
                            <option value="">SELECT STATE</option>
                            <option value="CA">California</option>
                            <option value="NY">New York</option>
                            <option value="ENG">England</option>
                            <option value="ON">Ontario</option>
                            <option value="NSW">New South Wales</option>
                          </Input>
                          {validation.touched.region_name &&
                          validation.errors.region_name ? (
                            <FormFeedback type="invalid">
                              {validation.errors.region_name}
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
                            placeholder="PLEASE ENTER CITY NAME"
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
                    <hr className="mb-2" />

            

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
                    UPDATE
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

export default CityUpdate;
