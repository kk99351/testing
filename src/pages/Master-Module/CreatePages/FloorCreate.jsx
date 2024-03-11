
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

const FloorCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      statename: "",
      cityname: "",
      companygroup: "",
      plantname: "",
      building:"",
      floor:"",
      pincode:"",
      doornumber:""
    },
    // validationSchema: Yup.object({
    //   companyGroup: Yup.string().required("Company Group is Required"),
    //   companyGroupCode: Yup.string().required("Company Group Code is Required"),
    // }),.
    validationSchema: Yup.object({
      statename: Yup.string().required("State name is required"),
      cityname: Yup.string().required("City Name is required"),
      companygroup: Yup.string().required("Company name is required"),
      plantname: Yup.string().required("Location Name is required"),
      building: Yup.string().required("Building Name is required"),
      floor: Yup.string().required("Floor Name is required"),
      pincode: Yup.string().required("PINCODE is required"),
      doornumber: Yup.string().required("Door Number is required"),

    }),

    onSubmit: async values => {
      // console.log(values)
      alert("validated !");
      // try {
      //   await axios.post(`http://localhost:3000/companygroup/`, values);
      //   navigate("/companygroup");
      // } catch (error) {
      //   console.log("error in creating companygroup data: " + error);
      // }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                FLOOR DETAILS
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
                          <Label htmlFor="companygroup">
                            COMPANY GROUP/COUNTRY <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="companygroup"
                            id="companygroup"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companygroup &&
                              validation.errors.companygroup
                            }
                          >
                            <option value="">
                              Select Company Group/Country
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.companygroup &&
                          validation.errors.companygroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.companygroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="statename">
                            STATE NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="statename"
                            id="statename"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.statename &&
                              validation.errors.statename
                            }
                          >
                            <option value="">Select State Name</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.statename &&
                          validation.errors.statename ? (
                            <FormFeedback type="invalid">
                              {validation.errors.statename}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                    <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cityname">
                            CITY NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cityname"
                            id="cityname"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cityname &&
                              validation.errors.cityname
                            }
                          >
                            <option value="">Select City Name</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.cityname &&
                          validation.errors.cityname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cityname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="plantname">
                            LOCATION NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="plantname"
                            id="plantname"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.plantname &&
                              validation.errors.plantname
                            }
                          >
                            <option value="">
                              Select Loaction Name
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.plantname &&
                          validation.errors.plantname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.plantname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                    <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="building">
                            BUILDING NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="building"
                            id="building"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }
                          >
                            <option value="">
                              Select Building Name
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.building &&
                          validation.errors.building ? (
                            <FormFeedback type="invalid">
                              {validation.errors.building}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="floor">
                           FLOOR NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            name="floor"
                            type="text"
                            className="form-control"
                            id="floor"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              validation.errors.floor
                            }
                          />
                          {validation.touched.floor &&
                          validation.errors.floor ? (
                            <FormFeedback type="invalid">
                              {validation.errors.floor}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                    <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="doornumber">
                           DOOR NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            name="doornumber"
                            type="text"
                            className="form-control"
                            id="doornumber"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.doornumber &&
                              validation.errors.doornumber
                            }
                          />
                          {validation.touched.doornumber &&
                          validation.errors.doornumber ? (
                            <FormFeedback type="invalid">
                              {validation.errors.doornumber}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="pincode">
                           PINCODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="pincode"
                            type="text"
                            className="form-control"
                            id="pincode"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.pincode &&
                              validation.errors.pincode
                            }
                          />
                          {validation.touched.pincode &&
                          validation.errors.pincode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.pincode}
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
                          CREATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/floor");
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

export default FloorCreate;
