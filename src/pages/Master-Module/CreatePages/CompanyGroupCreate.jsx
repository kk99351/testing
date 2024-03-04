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

const CompanyGroupCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      companyGroup: "",
      companyGroupCode: "",
    },

    validationSchema: Yup.object({
      companyGroup: Yup.string().required("Company Group is Required"),
      companyGroupCode: Yup.string().required("Company Group Code is Required"),
    }),
    onSubmit: async values => {
      // console.log(values)
      alert("validated !")
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
                COMPANY GROUP DETAILS
              </h1>
            </CardHeader>

            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >
                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">COMPANY GROUP<font color="red">*</font></Label>
                      <Input
                        name="companyGroup"
                        placeholder="Company Group"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.companyGroup &&
                          validation.errors.companyGroup
                        }
                      />
                      {validation.touched.companyGroup &&
                      validation.errors.companyGroup ? (
                        <FormFeedback type="invalid">
                          {validation.errors.companyGroup}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">COMPANY GROUP CODE<font color="red">*</font></Label>
                      <Input
                        name="companyGroupCode"
                        placeholder="Company Group Code"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.companyGroupCode &&
                          validation.errors.companyGroupCode
                        }
                      />
                      {validation.touched.companyGroupCode &&
                      validation.errors.companyGroupCode ? (
                        <FormFeedback type="invalid">
                          {validation.errors.companyGroupCode}
                        </FormFeedback>
                      ) : null}
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
                      navigate("/company_group");
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

export default CompanyGroupCreate;
