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

const DesignationUpdate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      designationname: "",
      designationcode: "",
    },

    validationSchema: Yup.object({
        designationname: Yup.string().required("Designation name is Required"),
        designationcode: Yup.string().required("Designation code is Required"),

    }),
    onSubmit: values => {
      alert("form validated !")
      //console.log("values", values);
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                DESIGNATION DETAILS
              </h1>
            </CardHeader>

            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >


                <Row style={{display:"flex", justifyContent:"center"}}>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">DESIGNATION NAME<font color="red">*</font></Label>
                      <Input
                        name="designationname"
                        placeholder="Enter designation name"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.designationname &&
                          validation.errors.designationname
                        }
                      />
                      {validation.touched.designationname &&
                      validation.errors.designationname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.designationname}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">DESIGNATION CODE<font color="red">*</font></Label>
                      <Input
                        name="designationcode"
                        placeholder="Enter designation code"
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.designationcode &&
                          validation.errors.designationcode
                        }
                      />
                      {validation.touched.designationcode &&
                      validation.errors.designationcode ? (
                        <FormFeedback type="invalid">
                          {validation.errors.designationcode}
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
                    UPDATE
                  </Button>
                  <button
                    type="button"
                    className="btn btn-secondary-subtle border border-secondary"
                    onClick={() => {
                      navigate("/designation");
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

export default DesignationUpdate;
