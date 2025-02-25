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
      assetId: Yup.string().required("ASSET ID IS REQUIRED"),
      assetName: Yup.string().required(" ASSET NAME IS REQUIRED"),
      ammount: Yup.string().required("AMMOUNT MAINTAINANCE IS REQUIRED"),
      remarkss: Yup.string().required("MAINTAINANCE REMARKS IS REQUIRED"),
    }),

    onSubmit: async values => {
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
              ASSET FOR MAINTENANCE 
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
                          <Label htmlFor="assetId">ASSET ID<font color="red">*</font></Label>
                          <Input
                            name="assetId"
                            placeholder="PLEASE ENTER ASSET ID"
                            type="text"
                            className="form-control"
                            id="assetId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetId &&
                              validation.errors.assetId
                            }style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.assetId &&
                          validation.errors.assetId ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetId}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                   
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="assetName">ASSET NAME<font color="red">*</font></Label>
                          <Input
                            name="assetName"
                            type="text"
                            placeholder=" PLEASE ENTER ASSET NAME"
                            className="form-control"
                            id="assetName"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetName &&
                              validation.errors.assetName
                            }style={{ textTransform: "uppercase" }}
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
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="AssetDiscription">
                            ASSET DESCRIPTION
                          </Label>
                          <Input
                            name="AssetDiscription"
                            type="text"
                            placeholder="PLEASE ENTER ASSET DESCRIPTION"
                            className="form-control"
                            id="AssetDiscription"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.AssetDiscription &&
                              validation.errors.AssetDiscription
                            }style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.AssetDiscription &&
                          validation.errors.AssetDiscription ? (
                            <FormFeedback type="invalid">
                              {validation.errors.AssetDiscription}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="Maintainancedate">
                          MAINTENANCE DATE
                          </Label>
                          <Input
                            name="Maintainancedate"
                            type="date"
                            placeholder="PLEASE ENTER MAINTENANCE DATE"
                            className="form-control"
                            id="Maintainancedate"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Maintainancedate &&
                              validation.errors.Maintainancedate
                            }style={{ textTransform: "uppercase" }}
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
                    
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="ammount">
                            AMOUNT MAINTENANCE<font color="red">*</font>
                          </Label>
                          <Input
                            name="ammount"
                            placeholder="PLEASE ENTER AMOUNT MAINTENANCE"
                            type="text"
                            className="form-control"
                            id="ammount"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.ammount &&
                              validation.errors.ammount
                            }style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.ammount &&
                          validation.errors.ammount ? (
                            <FormFeedback type="invalid">
                              {validation.errors.ammount}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                   
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="remarkss">
                          MAINTENANCE REMARKS<font color="red">*</font>
                          </Label>
                          <Input
                            name="remarkss"
                            type="text"
                            placeholder="PLEASE ENTER  MAINTENANCE REMARKS"
                            className="form-control"
                            id="remarkss"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.remarkss &&
                              validation.errors.remarkss
                            }style={{ textTransform: "uppercase" }}
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
