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

const AdditionDeletionlist = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      aasetId: "",
      assetName: "",
      amount: "",
      Assigned: "",
      Value: "",
      Description: "",
      add: "",
      date: "",
      Installation: "",
      city: "",
      location: "",
      Remarks:""
    },

    validationSchema: Yup.object({
      add: Yup.string().required("ADDITION/DELETION  IS REQUIRED"),
      date: Yup.string().required(
        "ADDITION/DELETION/SOLD/WRITTEN OFF/RECOVERY DATE IS REQUIRED"
      ),
      amount: Yup.string().required(
        "ADDITION/DELETION/SOLD/RECOVERY AMMOUNT IS REQUIRED"
      ),
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
                REGISTER OF FIXED ASSET
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
                          <Label>ASSET ID</Label>
                          <Input
                            name="aasetId"
                            type="text"
                            placeholder="PLEASE ENTER ASSET ID"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.aasetId &&
                              validation.errors.aasetId
                            }
                          />
                          {validation.touched.aasetId &&
                          validation.errors.aasetId ? (
                            <FormFeedback type="invalid">
                              {validation.errors.aasetId}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>ASSET NAME</Label>
                          <Input
                            name="assetName"
                            type="text"
                            placeholder="PLEASE ENTER ASSET NAME"
                            className="form-control"
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
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>ASSET DESCRIPTION</Label>
                          <Input
                            name="Description"
                            type="text"
                            placeholder="PLEASE ENTER ASSET DESCRIPTION"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Description &&
                              validation.errors.Description
                            }
                          />
                          {validation.touched.Description &&
                          validation.errors.Description ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Description}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>INSTALLATION DATE</Label>
                          <Input
                            name="Installation"
                            type="date"
                            placeholder="PLEASE ENTER  INSTALLATION DATE "
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Installation &&
                              validation.errors.Installation
                            }
                          />
                          {validation.touched.Installation &&
                          validation.errors.Installation ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Installation}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>CITY</Label>
                          <Input
                            name="city"
                            type="text"
                            placeholder="PLEASE ENTER CITY"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.city && validation.errors.city
                            }
                          />
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">
                              {validation.errors.city}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>LOCATION</Label>
                          <Input
                            name="Installation"
                            type="text"
                            placeholder="PLEASE ENTER LOCATION"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Installation &&
                              validation.errors.Installation
                            }
                          />
                          {validation.touched.Installation &&
                          validation.errors.Installation ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Installation}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>ASSIGNED TO</Label>
                          <Input
                            name="Assigned"
                            type="text"
                            placeholder="PLEASE ENTER CITY"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Assigned &&
                              validation.errors.Assigned
                            }
                          />
                          {validation.touched.Assigned &&
                          validation.errors.Assigned ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Assigned}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>ASSET VALUE</Label>
                          <Input
                            name="Value"
                            type="text"
                            placeholder="PLEASE ENTER LOCATION"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Value &&
                              validation.errors.Value
                            }
                          />
                          {validation.touched.Value &&
                          validation.errors.Value ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Value}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
<hr className="mb-2"/>
                    <CardHeader className="mb-3">
                      <h1
                        className="card-title"
                        style={{ fontSize: "20px", textAlign: "center" }}
                      >
                        ADDITION/DELETION FOR THE FINANCIAL YEAR : 2023-04-01 /
                        2024-03-31
                        {/*HERE I WANT THE FINANCIAL YEAR WHEN WE ARE SELECTING FROM THE DREOPDOWN */}
                      </h1>
                    </CardHeader>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            ADDITION/DELETION<font color="red">*</font>
                          </Label>
                          <Input
                            name="add"
                            type="select"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.add && validation.errors.add
                            }
                          >
                            <option value="">SELECT ADDITION/DELETION</option>
                            <option value="option1">ADDITION</option>
                            <option value="option2">DELETION</option>
                            <option value="option2">SOLD</option>
                            <option value="option2">GIFT</option>
                          </Input>
                          {validation.touched.add && validation.errors.add ? (
                            <FormFeedback type="invalid">
                              {validation.errors.add}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            ADDITION/DELETION/SOLD/WRITTEN OFF/RECOVERY DATE
                          </Label>
                          <Input
                            name="date"
                            type="text"
                            placeholder="PLEASE ENTER ADDITION/DELETION/SOLD"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.date && validation.errors.date
                            }
                          />
                          {validation.touched.date && validation.errors.date ? (
                            <FormFeedback type="invalid">
                              {validation.errors.date}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label>
                            ADDITION/DELETION/SOLD/RECOVERY AMMOUNT{" "}
                          </Label>
                          <Input
                            name="amount"
                            type="text"
                            placeholder="PLEASE ENTER ADDITION/DELETION/SOLD/RECOVERY AMMOUNT"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.amount && validation.errors.amount
                            }
                          />
                          {validation.touched.amount && validation.errors.amount ? (
                            <FormFeedback type="invalid">
                              {validation.errors.amount}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label>
                            ADDITION/DELETION REMARKS
                          </Label>
                          <Input
                            name="Remarks"
                            type="textarea"
                            placeholder="500 CHARACTERS ONLY......"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.Remarks && validation.errors.Remarks
                            }
                          />
                          {validation.touched.Remarks && validation.errors.Remarks ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Remarks}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <div
                      style={{
                        marginTop: "3px",
                        marginBottom: "3px",
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
                          SAVE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/addition_Deletion");
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

export default AdditionDeletionlist;
