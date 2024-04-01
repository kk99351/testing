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
import { CreateDepertment } from "src/API/Master/AccessManagement/Api";
import { ToastContainer, toast } from "react-toastify";

const DepartmentCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      departmentname: "",
      departmentcode: "",
    },

    validationSchema: Yup.object({
      departmentname: Yup.string().required("DEPARTMENT IS REQUIRED"),
      departmentcode: Yup.string().required("DEPARTMENT IS REQUIRED"),
    }),
    onSubmit: values => {
      CreateDepertment([
        {
          iddept: 0,
          nmdept: values.departmentname,
          cddept: values.departmentcode,
        },
      ])
        .then(res => {
          if (res.ok) {
            toast("Department created successfully");
            navigate("/department");
          } else {
            toast("Departments already exists");
          }
        })
        .catch(err => {
          toast(err.message);
        });
    },
  });

  return (
    <React.Fragment>
      <ToastContainer></ToastContainer>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE DEPARTMENT
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
                          <Label>
                            DEPARTMENT NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="departmentname"
                            type="text"
                            placeholder="PLEASE ENTER DEPARTMENT"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.departmentname &&
                              validation.errors.departmentname
                            }
                            style={{ textTransform: 'uppercase' }} 

                          />
                          {validation.touched.departmentname &&
                          validation.errors.departmentname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.departmentname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <hr className="mb-2" />
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            DEPARTMENT CODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="departmentcode"
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="PLEASE ENTER DEPARTMENT CODE"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.departmentcode &&
                              validation.errors.departmentcode
                            }
                            style={{ textTransform: 'uppercase' }} 

                          />
                          {validation.touched.departmentcode &&
                          validation.errors.departmentcode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.departmentcode}
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
                          className="border border-success"
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
                            navigate("/department");
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

export default DepartmentCreate;
