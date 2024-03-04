import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  Row,
  CardBody,
  Card,
  Label,
  Input,
  Button,
  FormFeedback,
  Container,
  Form,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegionUpdate = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    region_name: Yup.string().required("REGION NAME IS REQUIRED"),
    region_code: Yup.string().required("REGION CODE IS REQUIRED"),
    company_group: Yup.string().required("COMPANY GROUP IS REQUIRED"),
  });

  const formik = useFormik({
    initialValues: {
      region_name: "",
      region_code: "",
      company_group: "",
    },
    validationSchema,
    onSubmit: async values => {
      alert("validated !")
      // try {
      //   await axios.post(`http://localhost:3000/region/`, values);
      //   navigate("/region");
      // } catch (error) {
      //   console.log("error in creating region data: " + error);
      // }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardBody>
              <div className="card-header">
                <h4 className="card-title mb-0">REGION DETAILS</h4>
              </div>
              <Form onSubmit={formik.handleSubmit}>
                <div className="p-2 d-flex flex-column align-items-center">
                  <Col xl={8}>
                    <Row>
                      <Col xl={4} className="p-2">
                        <Label for="region_name">
                          REGION NAME<font color="red">*</font>
                        </Label>
                      </Col>
                      <Col xl={6} className="p-2">
                        <Input
                          type="select"
                          name="region_name"
                          id="region_name"
                          placeholder="Enter Region Name"
                          value={formik.values.region_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.region_name &&
                            Boolean(formik.errors.region_name)
                          }
                        >
                        <option value="" disabled>
                              Select region name
                            </option>
                            <option value="dept1">KARNATKA</option>
                            <option value="dept2">BIHAR</option>
                          </Input>
                        {formik.touched.region_name &&
                        formik.errors.region_name ? (
                          <FormFeedback type="invalid">
                            {formik.errors.region_name}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={4} className="p-2">
                        <Label for="region_code">
                          REGION CODE<font color="red">*</font>
                        </Label>
                      </Col>
                      <Col xl={6} className="p-2">
                        <Input
                          type="select"
                          name="region_code"
                          id="region_code"
                          placeholder="Enter Region code"
                          value={formik.values.region_code}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.region_code &&
                            Boolean(formik.errors.region_code)
                          }
                        >
                        <option value="" disabled>
                              Select region code
                            </option>
                            <option value="dept1">4521</option>
                            <option value="dept2">7572</option>
                          </Input>
                        {formik.touched.region_code &&
                        formik.errors.region_code ? (
                          <FormFeedback type="invalid">
                            {formik.errors.region_code}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={4} className="p-2">
                        <Label for="company_group">
                          COMPANY GROUP<font color="red">*</font>
                        </Label>
                      </Col>
                      <Col xl={6} className="p-2">
                        <Input
                          type="select"
                          name="company_group"
                          id="company_group"
                          placeholder="Enter company group"
                          value={formik.values.company_group}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          invalid={
                            formik.touched.company_group &&
                            Boolean(formik.errors.company_group)
                          }
                        >
                          <option value="" disabled>
                              Select company group
                            </option>
                            <option value="dept1">AUSTRALIA</option>
                            <option value="dept2">INDIA</option>
                          </Input>
                        {formik.touched.company_group &&
                        formik.errors.company_group ? (
                          <FormFeedback type="invalid">
                            {formik.errors.company_group}
                          </FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                  </Col>
                </div>

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

                  <Button
                    type="button"
                    color="secondary-subtle"
                    className="border border-secondary"
                    onClick={() => {
                      navigate("/region");
                    }}
                  >
                    BACK
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default RegionUpdate;
