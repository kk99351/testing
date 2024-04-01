import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import { GetSignleData } from "src/API/Master/GlobalGet";
import { CreateMaterialGroup } from "src/API/Master/MaterialMaster/Api";
import { ToastContainer, toast } from "react-toastify";

const CategoriesUpdte = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    GetSignleData("MaterialGroup", id).then(res => {
      setMaterial(res);
    });
  }, []);
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      categoryname: material?.nmgrp,
      categorycode: material?.cdgrp,
      categorydescription: "",
    },

    validationSchema: Yup.object({
      categoryname: Yup.string().required("MATERIAL-GROUP NAME IS REQUIRED"),
      categorycode: Yup.string().required("MATERIAL-GROUP CODE IS REQUIRED"),
      // categorydescription: Yup.string().required(
      //   "MATERIAL-GROUP DESCRIPTION IS REQUIRED"
      // ),
    }),
    onSubmit: values => {
      CreateMaterialGroup([
        {
          idgrp: id,
          nmgrp: values.categoryname,
          cdgrp: values.categorycode,
        },
      ]).then(res => {
        console.log(res);
        if (res.ok) {
          toast("Material Group Updated successfully");
          navigate("/create_catogries");
        } else {
          toast("Material Group already exists");
        }
      });
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                MATERIAL-GROUP DETAILS
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
                            MATERIAL-GROUP NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="categoryname"
                            type="text"
                            placeholder="PLEASE ENTER MATERIAL-GROUP NAME "
                            className="form-control"
                            id="validationCustom01"
                            value={validation.values.categoryname}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.categoryname &&
                              validation.errors.categoryname
                            }style={{ textTransform: "uppercase" }}
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
                            MATERIAL-GROUP CODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="categorycode"
                            type="text"
                            placeholder="PLEASE ENTER MATERIAL-GROUP CODE "
                            className="form-control"
                            id="validationCustom02"
                            value={validation.values.categorycode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.categorycode &&
                              validation.errors.categorycode
                            }style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.categorycode &&
                          validation.errors.categorycode ? (
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
                            MATERIAL-GROUP DESCRIPTION
                          </Label>
                          <Input
                            name="categorydescription"
                            type="text"
                            placeholder="PLEASE ENTER MATERIAL-GROUP DESCRIPTION "
                            className="form-control"
                            id="validationCustom03"
                            onChange={validation.handleChange}
                            invalid={
                              validation.touched.categorydescription &&
                              validation.errors.categorydescription
                            }style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.categorydescription &&
                          validation.errors.categorydescription ? (
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
                          UPDATE
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

export default CategoriesUpdte;
