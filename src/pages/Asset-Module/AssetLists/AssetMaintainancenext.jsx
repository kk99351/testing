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

const AssetMaintainancenext = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      assetId: "",
      assetName: "",
      AssetDiscription: "",
      Maintainancedate: new Date().toISOString().substr(0, 10), // Set initial value to current date
      ammount: "",
      remarkss: "",
    },
    validationSchema: Yup.object({
      assetId: Yup.string().required("Asset ID is required"),
      Maintainancedate: Yup.string().required("Maintenance Date required"),
      ammount: Yup.string().required("Amount Maintenance is required"),
      remarkss: Yup.string().required("Maintenance Remarks is required"),
    }),

    onSubmit: async (values) => {
      alert("validated !");
      // try {
      //   await axios.post(`http://localhost:3000/companygroup/`, values);
      //   navigate("/companygroup");
      // } catch (error) {
      //   console.log("error in creating companygroup data: " + error);
      // }
    },
  });

  const handleBack = () => {
    navigate("/asset_maintenance");
  };

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
                          <Label htmlFor="assetId">
                            ASSET ID
                          </Label>
                          <Input
                            name="assetId"
                            type="text"
                            className="form-control"
                            id="assetId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="assetName">
                            ASSET NAME
                          </Label>
                          <Input
                            name="assetName"
                            type="text"
                            className="form-control"
                            id="assetName"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetName &&
                              validation.errors.assetName
                            }
                          />
                          {validation.touched.assetName &&
                          validation.errors.assetName ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetName}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="AssetDiscription">
                            ASSET DESCRIPTION
                          </Label>
                          <Input
                            name="AssetDiscription"
                            type="text"
                            className="form-control"
                            id="AssetDiscription"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.AssetDiscription &&
                              validation.errors.AssetDiscription
                            }
                          />
                          {validation.touched.AssetDiscription &&
                          validation.errors.AssetDiscription ? (
                            <FormFeedback type="invalid">
                              {validation.errors.AssetDiscription}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="Maintainancedate">
                            MAINTENANCE DATE<font color="red">*</font>
                          </Label>
                          <Input
                            name="Maintainancedate"
                            type="date"
                            className="form-control"
                            id="Maintainancedate"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Maintainancedate &&
                              validation.errors.Maintainancedate
                            }
                            value={validation.values.Maintainancedate}
                          />
                          {validation.touched.Maintainancedate &&
                          validation.errors.Maintainancedate ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Maintainancedate}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="ammount">
                            AMOUNT MAINTENANCE<font color="red">*</font>
                          </Label>
                          <Input
                            name="ammount"
                            type="text"
                            className="form-control"
                            id="ammount"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.ammount &&
                              validation.errors.ammount
                            }
                          />
                          {validation.touched.ammount &&
                          validation.errors.ammount ? (
                            <FormFeedback type="invalid">
                              {validation.errors.ammount}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="remarkss">
                            MAINTENANCE REMARKS<font color="red">*</font>
                          </Label>
                          <Input
                            name="remarkss"
                            type="text"
                            className="form-control"
                            id="remarkss"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.remarkss &&
                              validation.errors.remarkss
                            }
                          />
                          {validation.touched.remarkss &&
                          validation.errors.remarkss ? (
                            <FormFeedback type="invalid">
                              {validation.errors.remarkss}
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
                          SAVE
                        </Button>
                        <Button
                          type="button"
                          color="secondary-subtle"
                          className="btn btn-secondary-subtle border border-secondary"
                          style={{
                            paddingTop: "10px",
                            width: "80px",
                            height: "45px",
                          }}
                          onClick={handleBack}
                        >
                          BACK
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

export default AssetMaintainancenext;



