import React, { useEffect, useState } from "react";
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
import { GetSignleData } from "src/API/Master/GlobalGet";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { CreateEntity } from "src/API/Master/GeoGraphicalArea.js/Api";

const EntityUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [entity, setEntity] = useState([]);

  useEffect(() => {
    GetSignleData("Entity", id).then(res => {
      setEntity(res);
    });
  }, []);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      company_group: entity?.nmentity,
      companyGroupCode: entity?.cdentity,
    },

    validationSchema: Yup.object({
      company_group: Yup.string().required("ENTITY NAME IS REQUIRED"),
      companyGroupCode: Yup.string().required("ENTITY CODE IS REQUIRED"),
    }),
    onSubmit: async values => {
     CreateEntity([
        {
          identity: id,
          nmentity: values.company_group,
          cdentity: values.companyGroupCode,
        },
      ]).then(res => {
        console.log(res);
        if (res.ok) {
         toast("Entity created successfully");
          navigate("/entity");
        } else {
          toast("Failed to create entity");
        }
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
                CREATE ENTITY
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
                          <Label htmlFor="company_group">
                            ENTITY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            name="company_group"
                            id="company_group"
                            placeholder="PLEASE ENTER ENTITY NAME"
                            className="form-control"
                            value={validation.values.company_group}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.company_group &&
                          validation.errors.company_group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.company_group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="companyGroupCode">
                            ENTITY CODE <font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            placeholder="PLEASE ENTER ENTITY CODE"
                            name="companyGroupCode"
                            id="companyGroupCode"
                            className="form-control"
                            value={validation.values.companyGroupCode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companyGroupCode &&
                              validation.errors.companyGroupCode
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
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
                          UPDATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/entity");
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

export default EntityUpdate;
