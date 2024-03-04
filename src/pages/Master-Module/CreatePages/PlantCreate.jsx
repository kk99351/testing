import React from "react";
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

const PlantCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      plantName: "",
      plantCode: "",
    },

    validationSchema: Yup.object({
      plantName: Yup.string().required("Plant name is Required"),
      plantCode: Yup.string().required("Plant code is Required"),
    }),
    onSubmit: (values) => {
      if (validation.isValid) {
        alert("Form validated!");
        // Additional actions can be performed here
      }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                PLANT DETAILS
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
                      <Label htmlFor="validationCustom01">PLANT NAME<font color="red">*</font></Label>
                      <Input
                        name="plantName"
                        placeholder="Plant Name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.plantName &&
                          validation.errors.plantName
                        }
                      />
                      {validation.touched.plantName &&
                      validation.errors.plantName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.plantName}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">PLANT CODE<font color="red">*</font></Label>
                      <Input
                        name="plantCode"
                        placeholder="Plant Code"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.plantCode &&
                          validation.errors.plantCode
                        }
                      />
                      {validation.touched.plantCode &&
                      validation.errors.plantCode ? (
                        <FormFeedback type="invalid">
                          {validation.errors.plantCode}
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
                      navigate("/plant");
                    }}
                    style={{
                      paddingTop: "10px",
                      width: "80px",
                      height: "45px",
                    }}
                  >
                    BACK
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

export default PlantCreate;
