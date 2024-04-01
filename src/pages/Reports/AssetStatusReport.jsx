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

const AssetStatusReport = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
        designation: "",
    },

    validationSchema: Yup.object({
        designation: Yup.string().required("STATUS IS REQUIRED"),
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
                ASSET STATUS REPORT 
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
                            STATUS<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="designation"
                            name="designation"
                            value={validation.values.designation}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.designation &&
                              !!validation.errors.designation
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
                          </Input>
                          {validation.touched.designation &&
                          validation.errors.designation ? (
                            <FormFeedback type="invalid">
                              {validation.errors.designation}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <hr className="mb-2" />

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
                        <div className="text-sm-end">
                          <Button
                       //   onClick={handleGenerateReport} // Call function to generate report

                            onClick={() => navigate("/asset_status_report_view")}
                            className="btn btn-success-subtle border border-success"
                            style={{
                              paddingTop: "5px",
                              width: "150px",
                              height: "45px",
                              marginLeft: "10px",
                            }}
                          >
                            GENERATE REPORT{" "}
                          </Button>
                          </div>
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

export default AssetStatusReport;
