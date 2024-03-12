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

const AssetMaintenance = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      assetMaterial: "",
      assetSubMaterial: "",
      asset: "",
      assetId:"",
    },
    validationSchema: Yup.object({
      assetMaterial: Yup.string().required("Asset Material is required"),
      assetSubMaterial: Yup.string().required("Asset Sub-Material is required"),
      asset: Yup.string().required("Asset is required"),
      assetId: Yup.string().required("Asset  ID is required"),

    }),

    onSubmit: async (values) => {
      console.log("Form submitted successfully!");
      navigate("/asset_maintenance_next");
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ASSET MAINTENANCE DETAILS
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
                          <Label htmlFor="assetMaterial">
                            ASSET MATERIAL <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="assetMaterial"
                            id="assetMaterial"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetMaterial &&
                              validation.errors.assetMaterial
                            }
                          >
                            <option value="">Select Asset Material</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.assetMaterial &&
                          validation.errors.assetMaterial ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetMaterial}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="assetSubMaterial">
                            ASSET SUB-MATERIAL <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="assetSubMaterial"
                            id="assetSubMaterial"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetSubMaterial &&
                              validation.errors.assetSubMaterial
                            }
                          >
                            <option value="">Select Asset sub  Material</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.assetSubMaterial &&
                          validation.errors.assetSubMaterial ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetSubMaterial}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="asset">
                            ASSET <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="asset"
                            id="asset"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.asset &&
                              validation.errors.asset
                            }
                          >
                            <option value="">Select Asset</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.asset &&
                          validation.errors.asset ? (
                            <FormFeedback type="invalid">
                              {validation.errors.asset}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="assetId">
                            Asset ID <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="assetId"
                            id="assetId"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetId &&
                              validation.errors.assetId
                            }
                          >
                            <option value="">Select Asset ID</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.assetId &&
                          validation.errors.assetId ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetId}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
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
                          NEXT
                        </Button>
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

export default AssetMaintenance;


