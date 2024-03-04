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

const CategoriesUpdate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      categoryname: "",
      categorycode: "",
      categorydescription: "",
    },

    validationSchema: Yup.object({
      categoryname: Yup.string().required("Category name is Required"),
      categorycode: Yup.string().required("Category code is Required"),
      categorydescription: Yup.string().required("category description is Required"),
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
              CATEGORY DETAILS
              </h1>
            </CardHeader>

            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >
                <Row style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">
                        CATEGORY NAME<font color="red">*</font>
                      </Label>
                      <Input
                        name="companygroup"
                        placeholder="Category group"
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
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        CATEGORY CODE<font color="red">*</font>
                      </Label>
                      <Input
                        name="region"
                        placeholder="Enter Category Code"
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
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">
                        CATEGORY DESCRIPTION
                      </Label>
                      <Input
                        name="cityname"
                        placeholder="Enter Description"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        
                      />
                      
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
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CategoriesUpdate;
