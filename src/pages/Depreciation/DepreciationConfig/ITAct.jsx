import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Col,
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

const ITAct = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      slm: "WDV - WRITTEN DOWN VALUE", //CONST NO CHANGE
      rate: "RATE", //CONST NO CHANGE
      date: "INSTALLATION DATE", //CONST NO CHANGE
      actual: "ASSET VALUE", //CONST NO CHANGE
      startdate: "",
      set: "43.00",
      month: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert("Form submitted!");
    },
  });

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              DEPRECIATION IT ACT CONFIG{" "}
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="justify-content-center">
              <Col xl={10}>
                <Form onSubmit={formik.handleSubmit}>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label>METHOD OF DEPRECIATION</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="slm"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.slm}
                          style={{ textTransform: 'uppercase' }} 
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label> DEPRECIATION BASED ON</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="rate"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.rate}
                          style={{ textTransform: 'uppercase' }} 
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label> CAPITALIZATION DATE</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="date"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                          style={{ textTransform: 'uppercase' }} 
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label>
                        COMPONENTS TO BE CONSIDERED FOR CAPITALIZATION VALUE
                      </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="actual"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.actual}
                          style={{ textTransform: 'uppercase' }} 
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={12}>
                      <Label>
                        START DATE OF DEPRECIATION: THE DATE TO BE CONSIDERED AS
                        THE START DATE OF DEPRECIATION
                      </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="startdate"
                          type="select"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.startdate}
                          style={{ textTransform: 'uppercase' }} 
                        >
                          <option value="Electronics">ACTUAL DATE</option>
                          <option value="Clothing">
                            FIRST DAY OF THE MONTH
                          </option>
                          <option value="Books">
                            FIRST DAY OF THE NEXT MONTH
                          </option>
                          <option value="Furniture">
                            FIRST HALF FIRST DAY OF THE MONTH ELSE FIRST DAY OF
                            NEXT MONTH
                          </option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label>WRITE OFF VALUE </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="set"
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.set}
                          style={{ textTransform: 'uppercase' }} 
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label>NUMBER OF DAYS TO BE CONSIDERED</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="month"
                          type="select"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.month}
                          style={{ textTransform: 'uppercase' }} 
                        >
                          <option value="">SELECT</option>
                          <option value="Clothing">
                            ACTUAL NUMBER OF DAYS{" "}
                          </option>
                          <option value="Electronics">
                            EQUAL FOR ALL MONTHS
                          </option>
                        </Input>
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
                        SAVE
                      </Button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default ITAct;
