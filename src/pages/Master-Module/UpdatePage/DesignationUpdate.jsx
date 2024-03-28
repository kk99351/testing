import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import { GetSignleData } from "src/API/Master/GlobalGet";
import { CreateDesignation } from "src/API/Master/AccessManagement/Api";
import { ToastContainer, toast } from "react-toastify";

const DesignationUpdate = () => {
  const navigate = useNavigate();
  const [Designation, setDesignation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetSignleData("Designation", id).then(res => {
      console.log(res);
      setDesignation(res);
    });
  }, []);
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      designationname: Designation?.nmdesign,
      designationcode: Designation?.cddesign,
    },

    validationSchema: Yup.object({
      designationname: Yup.string().required("DESIGNATION NAME IS REQUIRED "),
      designationcode: Yup.string().required("Designation code is Required"),
    }),
    onSubmit: values => {
      CreateDesignation([
        {
          iddesign: id,
          nmdesign: values.designationname,
          cddesign: values.designationcode,
        },
      ])
        .then(res => {
          console.log(res.ok);
          if (res.ok) {
            toast("Designation Updated successfully");
            navigate("/designation");
          } else {
            toast("Designation already exists");
          }
        })
        .catch(err => {
          toast(err.message);
        });
    },
  });

  return (
    <React.Fragment>
      <ToastContainer></ToastContainer>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                DESIGNATION DETAILS
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
                          <Label htmlFor="validationCustom03">
                            DESIGNATION NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="designationname"
                            type="text"
                            placeholder="PLEASE ENTER DESIGNATION NAME"
                            className="form-control"
                            id="validationCustom03"
                            value={validation.values.designationname}
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
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">
                            DESIGNATION CODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="designationcode"
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="PLEASE ENTER DESIGNATION CODE"
                            value={validation.values.designationcode}
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

export default DesignationUpdate;
