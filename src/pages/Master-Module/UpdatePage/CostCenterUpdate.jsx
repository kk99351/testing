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
import {
  CreateCost,
  CreateUserType,
} from "src/API/Master/AccessManagement/Api";
import { ToastContainer, toast } from "react-toastify";
import { GetSignleData } from "src/API/Master/GlobalGet";
import { useParams } from "react-router";

const CostCenterUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cost, setCost] = useState([]);

  useEffect(() => {
    GetSignleData("CC", id).then(res => {
      setCost(res);
    });
  }, []);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      usertypename: cost?.nmcc,
    },

    validationSchema: Yup.object({
      usertypename: Yup.string().required("COST CENTER/PROJECT IS REQUIRED"),
    }),
    onSubmit: values => {
      CreateCost([
        {
          idcc: id,
          nmcc: values?.usertypename,
        },
      ])
        .then(res => {
          console.log(res);
          if (res.ok) {
            toast("User Updated successfully");
            navigate("/cost_center");
          } else {
            toast("Failed to Update Cost Center");
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
                CREATE COST CENTER/PROJECT
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
                            COST CENTER/PROJECT <font color="red">*</font>
                          </Label>
                          <Input
                            name="usertypename"
                            placeholder="PLEASE ENTER COST CENTER/PROJECT"
                            type="text"
                            className="form-control"
                            value={validation.values.usertypename}
                            id="validationCustom03"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.usertypename &&
                              validation.errors.usertypename
                            }
                            style={{ textTransform: "uppercase" }}
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
                          UPDATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/cost_center");
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

export default CostCenterUpdate;
