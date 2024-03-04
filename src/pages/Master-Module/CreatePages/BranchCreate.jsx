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

const BranchCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      companygroup: "",
      region: "",
      city: "",
      branchname: "",
    },

    validationSchema: Yup.object({
      companygroup: Yup.string().required("Company group is Required"),
      region: Yup.string().required("Region is Required"),
      city: Yup.string().required("City is Required"),
      branchname: Yup.string().required("Branch name is Required"),
    }),
    onSubmit: values => {
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
                BRANCH DETAILS
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
                      <Label htmlFor="validationCustom01">
                        COMPANY GROUP<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="companygroup"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.companygroup &&
                          validation.errors.companygroup
                        }
                      >
                        <option value="" disabled>
                          Select Company Group
                        </option>
                        <option value="group1">AUSTRALIA</option>
                        <option value="group2">ENGLAND</option>
                        <option value="group3">INDIA</option>
                      </Input>
                      {validation.touched.companygroup &&
                      validation.errors.companygroup ? (
                        <FormFeedback type="invalid">
                          {validation.errors.companygroup}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">
                        REGION<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="region"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.region && validation.errors.region
                        }
                      >
                        <option value="" disabled>
                          Select Region
                        </option>
                        <option value="north">Karnatka</option>
                        <option value="south">Bihar</option>
                        <option value="east">jharkhand</option>
                        <option value="west">Delhi</option>
                      </Input>

                      {validation.touched.region && validation.errors.region ? (
                        <FormFeedback type="invalid">
                          {validation.errors.region}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom03">
                        CITY<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="city"
                        id="validationCustom03"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.city && validation.errors.city
                        }
                      >
                        <option value="" disabled>
                          Select City
                        </option>
                        <option value="city1">Benglore</option>
                        <option value="city2">Patna</option>
                        <option value="city3">Delhi</option>
                      </Input>
                      {validation.touched.city && validation.errors.city ? (
                        <FormFeedback type="invalid">
                          {validation.errors.city}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom04">
                        BRANCH NAME<font color="red">*</font>
                      </Label>
                      <Input
                        name="branchname"
                        placeholder="Branch Name"
                        type="text"
                        className="form-control"
                        id="validationCustom04"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.branchname &&
                          validation.errors.branchname
                        }
                      />
                      {validation.touched.branchname &&
                      validation.errors.branchname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.branchname}
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
                      navigate("/branch");
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

export default BranchCreate;
