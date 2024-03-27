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

const SubCategoryCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      categoryname: "",
      subcategoryname: "",
      subcategorycode: "",
      assetprefix: "",
    },

    validationSchema: Yup.object({
      categoryname: Yup.string().required("MATERIAL NAME IS REQUIRED"),
      subcategoryname: Yup.string().required("SUB MATERIAL NAME IS REQUIRED"),
      subcategorycode: Yup.string().required("SUB MATERIAL CODE IS REQUIRED"),
      // assetprefix: Yup.string().required("Aset Prefix is Required"),
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE MATERIAL SUB-GROUP{" "}
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
                            MATERIAL GROUP NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="companygroup"
                            type="select"
                            className="form-control"
                            id="validationCustom01"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.categoryname &&
                              validation.errors.categoryname
                            }
                          >
                            <option value="">SELECT MATERIAL NAME</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                            <option value="Furniture">Furniture</option>
                          </Input>
                          {validation.touched.categoryname &&
                            validation.errors.categoryname && (
                              <div className="invalid-feedback">
                                {validation.errors.categoryname}
                              </div>
                            )}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            MATERIAL SUB-GROUP NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="subcategoryname"
                            placeholder="PLEASE ENTER MATERIAL SUB-GROUP NAME"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subcategoryname &&
                              validation.errors.subcategoryname
                            }
                          />
                          {validation.touched.subcategoryname &&
                          validation.errors.subcategoryname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.subcategoryname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label>
                            MATERIAL SUB-GROUP CODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="subcategorycode"
                            type="text"
                            placeholder="PLEASE ENTER MATERIAL SUB-GROUP CODE"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subcategorycode &&
                              validation.errors.subcategorycode
                            }
                          />
                          {validation.touched.subcategorycode &&
                          validation.errors.subcategorycode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.subcategorycode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      {/* <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            ASSET PREFIX<font color="red">*</font>
                          </Label>
                          <Input
                            name="assetprefix"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetprefix &&
                              validation.errors.assetprefix
                            }
                          />
                          {validation.touched.assetprefix &&
                          validation.errors.assetprefix ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetprefix}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col> */}
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
                            navigate("/create_subcatogries");
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

export default SubCategoryCreate;
