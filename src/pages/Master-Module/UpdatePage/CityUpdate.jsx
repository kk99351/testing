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
      companygroup: "",
      region: "",
      cityname: "",
    },

    validationSchema: Yup.object({
      companygroup: Yup.string().required("company group is Required"),
      region: Yup.string().required("company group is Required"),
      cityname: Yup.string().required("company group is Required"),
    }),
    onSubmit: values => {
      alert("form validated !")
      //console.log("values", values);
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CITY DETAILS
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
                      <Label htmlFor="validationCustom01">COMPANY GROUP<font color="red">*</font></Label>
                      <Input
                        name="companygroup"
                        placeholder="Company Group"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.companygroup &&
                          validation.errors.companygroup
                        }
                      />
                      {validation.touched.companygroup &&
                      validation.errors.companygroup ? (
                        <FormFeedback type="invalid">
                          {validation.errors.companygroup}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">REGION<font color="red">*</font></Label>
                      <Input
                        name="region"
                        placeholder="Region"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.region && validation.errors.region
                        }
                      />
                      {validation.touched.region && validation.errors.region ? (
                        <FormFeedback type="invalid">
                          {validation.errors.region}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">CITY NAME<font color="red">*</font></Label>
                      <Input
                        name="cityname"
                        placeholder="City Name"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
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
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CityUpdate;
