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

const VendorCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      nmven: "",
      vencode: "",
      add1: "",
      add2: "",
      add3: "",
      cou: "",
      state: "",
      city: "",
      poscode: "",
      tele: "",
      mobile: "",
      email: "",
      gst: "",
      tin: "",
      cin: "",
      msme: "",
      pan: "",
      tan: "",
      nature: "",
      year: "",
      payterm: "",
      invoice: "",

      ifse: "",
      city1: "",
      accno: "",
      nameofacc: "",
      state1: "",
      postalcode: "",
      telephone: "",
      nmBank: "",
      bankbranch: "",
      fax1: "",
      micr: "",
      add: "",
      cou1: "",
    },

    validationSchema: Yup.object({
      nmven: Yup.string().required("SUPPLIER NAME IS REQUIRED"),
      vencode: Yup.string().required("SUPPLIER CODE IS REQUIRED"),
      add1: Yup.string().required("ADDRESS1 IS REQUIRED"),
      add2: Yup.string().required("ADDRESS2  IS REQUIRED"),
      cou: Yup.string().required("COUNTRY  IS REQUIRED"),
      state: Yup.string().required("STATE  IS REQUIRED"),
      city: Yup.string().required("CITY  IS REQUIRED"),
      poscode: Yup.string().required("POSTAL CODE  IS REQUIRED"),
      tele: Yup.string().required("TELEPHONE NUMBER  IS REQUIRED"),
      mobile: Yup.string().required("MOBILE NUMBER  IS REQUIRED"),
      email: Yup.string().required("EMAIL ID  IS REQUIRED"),
      gst: Yup.string().required("GST NUMBER  IS REQUIRED"),
      tin: Yup.string().required("TIN NUMBER  IS REQUIRED"),
      cin: Yup.string().required("CIN NUMBER  IS REQUIRED"),
      msme: Yup.string().required("MSME NUMBER  IS REQUIRED"),
      pan: Yup.string().required("PAN  IS REQUIRED"),
      nature: Yup.string().required("NATURE OF BUSINESS  IS REQUIRED"),
      year: Yup.string().required(
        "YEAR OF INC./IN BUSINESS SINCE  IS REQUIRED"
      ),
      invoice: Yup.string().required(
        "INVOICE AND PAYMENT CURRENCY  IS REQUIRED"
      ),
      tan: Yup.string().required("TAN  IS REQUIRED"),
      payterm: Yup.string().required("PAYMENT TERMS  IS REQUIRED"),

      ifse: Yup.string().required("IFSE CODE  IS REQUIRED"),
      city1: Yup.string().required("CITY IS REQUIRED"),
      accno: Yup.string().required("ACCOUNT NUMBER IS REQUIRED"),
      nameofacc: Yup.string().required("NAME OF ACCOUNT  IS REQUIRED"),
      state1: Yup.string().required("STATE IS REQUIRED"),
      postalcode: Yup.string().required("POSTAL CODE  IS REQUIRED"),
      telephone: Yup.string().required("TELEPHONE  IS REQUIRED"),
      nmBank: Yup.string().required("BANK NAME  IS REQUIRED"),
      bankbranch: Yup.string().required("BANK BRANCH  IS REQUIRED"),
      fax1: Yup.string().required("FAX  IS REQUIRED"),
      micr: Yup.string().required("MICR IS REQUIRED"),
      add: Yup.string().required("ADDRESS IS REQUIRED"),
      cou1: Yup.string().required("COUNTRY IS REQUIRED"),
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                SUPPLIER DETAILS
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
                          <Label> TYPE OF SUPPLIER</Label>
                          <div>
                          <div style={{ marginRight: "10px" }}>
                                  <Input
                                    type="checkbox"
                                    id="manufacturer"
                                    name="manufacturer"
                                  />
                                  <Label
                                    for="manufacturer"
                                    style={{ marginLeft: "5px" }}
                                  >
                                    SERVICE
                                  </Label>
                                </div>
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="manufacturer"
                                name="manufacturer"
                              />
                              <Label
                                for="manufacturer"
                                style={{ marginLeft: "5px" }}
                              >
                                PROCURED{" "}
                              </Label>
                            </div>
                          </div>
                          {validation.errors.manufacturer &&
                            validation.touched.manufacturer && (
                              <div className="text-danger">
                                {validation.errors.manufacturer}
                              </div>
                            )}
                          {validation.errors.dealer &&
                            validation.touched.dealer && (
                              <div className="text-danger">
                                {validation.errors.dealer}
                              </div>
                            )}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="nmven">
                            SUPPLIER NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER SUPPLIER NAME"
                            name="nmven"
                            id="nmven"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.nmven &&
                              validation.errors.nmven
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.nmven &&
                          validation.errors.nmven ? (
                            <FormFeedback type="invalid">
                              {validation.errors.nmven}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="vencode">
                            SUPPLIER CODE <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER SUPPLIER CODE"
                            name="vencode"
                            id="vencode"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.vencode &&
                              validation.errors.vencode
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.vencode &&
                          validation.errors.vencode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.vencode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="add1">
                            ADDRESS 1<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ADDRESS 1"
                            name="add1"
                            id="add1"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.add1 && validation.errors.add1
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.add1 && validation.errors.add1 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.add1}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="add2">
                            ADDRESS 2 <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ADDRESS 2"
                            name="add2"
                            id="add2"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.add2 && validation.errors.add2
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.add2 && validation.errors.add2 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.add2}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cou">
                            COUNTRY <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER COUNTRY"
                            name="cou"
                            id="cou"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cou && validation.errors.cou
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.cou && validation.errors.cou ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cou}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="state">
                            STATE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER STATE"
                            name="state"
                            id="state"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.state &&
                              validation.errors.state
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.state &&
                          validation.errors.state ? (
                            <FormFeedback type="invalid">
                              {validation.errors.state}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="city">
                            CITY <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER CITY"
                            name="city"
                            id="city"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.city && validation.errors.city
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">
                              {validation.errors.city}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="poscode">
                            POSTAL CODE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER POSTAL CODE"
                            name="poscode"
                            id="poscode"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.poscode &&
                              validation.errors.poscode
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.poscode &&
                          validation.errors.poscode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.poscode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="tele">
                            TELEPHONE NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  TELEPHONE NUMBER"
                            name="tele"
                            id="tele"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.tele && validation.errors.tele
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.tele && validation.errors.tele ? (
                            <FormFeedback type="invalid">
                              {validation.errors.tele}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="mobile">
                            MOBILE NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  MOBILE NUMBER"
                            name="mobile"
                            id="mobile"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.mobile &&
                              validation.errors.mobile
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.mobile &&
                          validation.errors.mobile ? (
                            <FormFeedback type="invalid">
                              {validation.errors.mobile}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="email">
                            EMAIL ID<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER EMAIL ID"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.email &&
                          validation.errors.email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="gst">
                            GST NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER GST NUMBER"
                            name="gst"
                            id="gst"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.gst && validation.errors.gst
                            }
                          ></Input>
                          {validation.touched.gst && validation.errors.gst ? (
                            <FormFeedback type="invalid">
                              {validation.errors.gst}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="tin">
                            TIN NUMBER <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER TIN NUMBER"
                            name="tin"
                            id="tin"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.tin && validation.errors.tin
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.tin && validation.errors.tin ? (
                            <FormFeedback type="invalid">
                              {validation.errors.tin}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cin">
                            CIN NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER CIN NUMBER"
                            name="cin"
                            id="cin"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cin && validation.errors.cin
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.cin && validation.errors.cin ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cin}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="msme">
                            MSME NUMBER <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  MSME NUMBER "
                            name="msme"
                            id="msme"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.msme && validation.errors.msme
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.msme && validation.errors.msme ? (
                            <FormFeedback type="invalid">
                              {validation.errors.msme}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="pan">
                            PAN NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER PAN NUMBER"
                            name="pan"
                            id="pan"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.pan && validation.errors.pan
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.pan && validation.errors.pan ? (
                            <FormFeedback type="invalid">
                              {validation.errors.pan}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="tan">
                            TAN <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER TAN"
                            name="tan"
                            id="tan"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.tan && validation.errors.tan
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.tan && validation.errors.tan ? (
                            <FormFeedback type="invalid">
                              {validation.errors.tan}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    {/* <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="nature">
                            NATURE OF BUSINESS<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER NATURE OF BUSINESS"
                            name="nature"
                            id="nature"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.nature &&
                              validation.errors.nature
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.nature &&
                          validation.errors.nature ? (
                            <FormFeedback type="invalid">
                              {validation.errors.nature}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="year">
                            YEAR OF INC./IN BUSINESS SINCE{" "}
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  YEAR OF INC./IN BUSINESS SINCE"
                            name="year"
                            id="year"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.year && validation.errors.year
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.year && validation.errors.year ? (
                            <FormFeedback type="invalid">
                              {validation.errors.year}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="payterm">
                            PAYMENT TERMS<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER PAYMENT TERMS"
                            name="payterm"
                            id="payterm"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.payterm &&
                              validation.errors.payterm
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.payterm &&
                          validation.errors.payterm ? (
                            <FormFeedback type="invalid">
                              {validation.errors.payterm}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="invoice">
                            INVOICE AND PAYMENT CURRENCY
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  INVOICE AND PAYMENT CURRENCY"
                            name="invoice"
                            id="invoice"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.invoice &&
                              validation.errors.invoice
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.invoice &&
                          validation.errors.invoice ? (
                            <FormFeedback type="invalid">
                              {validation.errors.invoice}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row> */}

                    {/* <CardHeader className="mb-2">
                      <h1
                        className="card-title"
                        style={{ fontSize: "20px", textAlign: "center" }}
                      >
                        BANK ACCOUNT DETAILS{" "}
                      </h1>
                    </CardHeader>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="ifse">
                            IFSE CODE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  IFSE CODE"
                            name="ifse"
                            id="ifse"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.ifse && validation.errors.ifse
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.ifse && validation.errors.ifse ? (
                            <FormFeedback type="invalid">
                              {validation.errors.ifse}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="accno">
                            ACCOUNT NUMBER
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  ACCOUNT NUMBER"
                            name="accno"
                            id="accno"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.accno &&
                              validation.errors.accno
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.accno &&
                          validation.errors.accno ? (
                            <FormFeedback type="invalid">
                              {validation.errors.accno}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="nameofacc">
                            NAME ON ACCOUNT<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER NAME ON ACCOUNT"
                            name="nameofacc"
                            id="nameofacc"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.nameofacc &&
                              validation.errors.nameofacc
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.nameofacc &&
                          validation.errors.nameofacc ? (
                            <FormFeedback type="invalid">
                              {validation.errors.payterm}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="nmBank">
                            BANK NAME
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  INVOICE AND BANK NAME"
                            name="nmBank"
                            id="nmBank"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.nmBank &&
                              validation.errors.nmBank
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.nmBank &&
                          validation.errors.nmBank ? (
                            <FormFeedback type="invalid">
                              {validation.errors.nmBank}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="bankbranch">
                            BANK BRANCH<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER BANK BRANCH"
                            name="bankbranch"
                            id="bankbranch"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.bankbranch &&
                              validation.errors.bankbranch
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.payterm &&
                          validation.errors.bankbranch ? (
                            <FormFeedback type="invalid">
                              {validation.errors.bankbranch}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="micr">
                            MICR CODE
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  INVOICE AND PAYMENT CURRENCY"
                            name="micr"
                            id="micr"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.micr && validation.errors.micr
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.micr && validation.errors.micr ? (
                            <FormFeedback type="invalid">
                              {validation.errors.micr}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="add">
                            ADDRESS<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ADDRESS"
                            name="add"
                            id="add"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.add && validation.errors.add
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.add && validation.errors.add ? (
                            <FormFeedback type="invalid">
                              {validation.errors.add}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cou1">
                            COUNTRY<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER COUNTRY"
                            name="cou1"
                            id="cou1"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cou1 && validation.errors.cou1
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.cou1 && validation.errors.cou1 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cou1}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="city1">
                            CITY<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER CITY"
                            name="city1"
                            id="city1"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.city1 &&
                              validation.errors.city1
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.city1 &&
                          validation.errors.city1 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.city1}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="state1">
                            STATE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER STATE"
                            name="state1"
                            id="state1"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cou1 &&
                              validation.errors.state1
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.state1 &&
                          validation.errors.state1 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.state1}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="postalcode">
                            POSTAL CODE<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER POSTAL CODE"
                            name="postalcode"
                            id="postalcode"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.postalcode &&
                              validation.errors.postalcode
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.postalcode &&
                          validation.errors.postalcode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.postalcode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="telephone">
                            TELEPHONE NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  TELEPHONE NUMBER"
                            name="telephone"
                            id="telephone"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.telephone &&
                              validation.errors.telephone
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.telephone &&
                          validation.errors.telephone ? (
                            <FormFeedback type="invalid">
                              {validation.errors.telephone}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="fax1">
                            FAX NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER  FAX NUMBER"
                            name="fax1"
                            id="fax1"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.fax1 && validation.errors.fax1
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.fax1 && validation.errors.fax1 ? (
                            <FormFeedback type="invalid">
                              {validation.errors.fax1}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col> */}
                    {/* <hr className="mb-2" />
                    </Row> */}
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
                            navigate("/create_vendor");
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

export default VendorCreate;
