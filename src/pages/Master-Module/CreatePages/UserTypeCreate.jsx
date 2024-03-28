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

const UserTypeCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      usertypename: "",
    },

    validationSchema: Yup.object({
      usertypename: Yup.string().required("USER TYPE IS REQUIRED"),
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
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE USER TYPE
              </h1>
            </CardHeader>

            <CardBody>
              {" "}
              <Row className="justify-content-center">
                <Col xl={10}>
                  <Form
                    className="needs-validation"
                    onSubmit={validation.handleSubmit}
                  >
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">
                            USER TYPE <font color="red">*</font>
                          </Label>
                          <Input
                            name="usertypename"
                            placeholder="PLEASE ENTER USER TYPE"
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.usertypename &&
                              validation.errors.usertypename
                            }
                          />
                          {validation.touched.usertypename &&
                          validation.errors.usertypename ? (
                            <FormFeedback type="invalid">
                              {validation.errors.usertypename}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-0 mt-3" />
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
                          className="border border-success"
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
                            navigate("/user_type");
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

export default UserTypeCreate;
