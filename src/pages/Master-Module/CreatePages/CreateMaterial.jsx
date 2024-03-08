
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

const CreateMaterial = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      categoryname: "",
      categorycode: "",
      categorydescription: "",
    },

    validationSchema: Yup.object({
      categoryname: Yup.string().required("Material name is Required"),
      categorycode: Yup.string().required("Material code is Required"),
      categorydescription: Yup.string().required("Material description is Required"),
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
        <Card className="mt-5">
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              MATERIAL DETAILS
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
                      <Label htmlFor="validationCustom01">
                      MATERIAL NAME<font color="red">*</font>
                      </Label>
                      <Input
                        name="companygroup"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.categoryname &&
                          validation.errors.categoryname
                        }
                      />
                        
                      {validation.touched.categoryname &&
                      validation.errors.categoryname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.categoryname}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                    </Col>
                    <hr className="mb-2" />

                      <Col md={12}>
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                      MATERIAL CODE<font color="red">*</font>
                      </Label>
                      <Input
                        name="region"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.categorycode && validation.errors.categorycode
                        }
                      />
                      {validation.touched.categorycode && validation.errors.categorycode ? (
                        <FormFeedback type="invalid">
                          {validation.errors.categorycode}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                    </Col>
                    <hr className="mb-2" />

                      <Col md={12}>
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">
                      MATERIAL DESCRIPTION
                      </Label>
                      <Input
                        name="cityname"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        invalid={
                          validation.touched.categorydescription && validation.errors.categorydescription
                        }
                      />
                      {validation.touched.categorydescription && validation.errors.categorydescription ? (
                        <FormFeedback type="invalid">
                          {validation.errors.categorydescription}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                     
                  </Col>
                  <hr className="mb-3" />

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
                      navigate("/create_catogries");
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

export default CreateMaterial;
