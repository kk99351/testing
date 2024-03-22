import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanyGroupUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyGroup: "",
    companyGroupCode: "",
  });

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/companygroup/${id}`
        );
        setFormData(response || {});
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error(`Error in API fetching user with ID ${id}:`, error);
        setLoading(false);
      }
    };

    fetchDataById();
  }, [id]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    validation.handleChange(e);
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      company_group: formData.companyGroup || "",
      companyGroupCode: formData.companyGroupCode || "",
    },

    validationSchema: Yup.object({
      company_group: Yup.string().required("COUNTRY NAME IS REQUIRED"),
      companyGroupCode: Yup.string().required("COUNTRY CODE IS REQUIRED"),
    }),
    onSubmit: async values => {
      console.log(values);
      try {
        const response = await axios.put(
          `http://localhost:3000/companygroup/${id}`,
          values
        );
        // alert("Data Updated !");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                COUNTRY DETAILS
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
                            COUNTRY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="company_group"
                            id="company_group"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                          >
                            <option value="">SELECT COUNTRY</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                          </Input>
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
                            COUNTRY CODE <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="companyGroupCode"
                            id="companyGroupCode"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companyGroupCode &&
                              validation.errors.companyGroupCode
                            }
                          >
                            <option value="">SELECT COUNTRY CODE</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="CA">CA</option>
                            <option value="AU">AU</option>
                          </Input>
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

export default CompanyGroupUpdate;
