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

const YearlyDep = () => {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const demoData = ["TEACHER", "NON IT", "PRINCIPLE"];

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: "",
      year: "",
      group: [],
    },
    validationSchema: Yup.object({
      type: Yup.string().required("DEPRECIATION TYPE IS REQUIRED"),
      year: Yup.string().required("FINANCIAL YEAR IS REQUIRED"),
      group: Yup.array()
        .min(1, "AT LEAST ONE MATERIAL GROUP SHOULD BE SELECTED")
        .when("$selectAll", {
          is: false,
          then: Yup.array().required("MATERIAL GROUP IS REQUIRED"),
        }),
    }),
    onSubmit: values => {
      alert("form validated !");
      //console.log("values", values);
    },
  });

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedOptions(demoData);
    } else {
      setSelectedOptions([]);
    }
    setSelectAll(!selectAll);
    validation.setFieldError("group", "");
  };

  const handleOptionClick = option => {
    if (selectedOptions.includes(option)) {
      const updatedOptions = selectedOptions.filter(
        selectedOption => selectedOption !== option
      );
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    setSelectAll(false);
    validation.setFieldError("group", "");
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                YEARLY DEPRECIATION FOR COMPANY ACT
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
                          <Label htmlFor="type">
                            DEPRECIATION TYPE <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="type"
                            id="type"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.type && validation.errors.type
                            }
                          >
                            <option value="">SELECT DEPRECIATION TYPE </option>
                            <option value="US">COMPANY ACT</option>
                            {/* <option value="UK">IT ACT</option> */}
                          </Input>
                          {validation.touched.type && validation.errors.type ? (
                            <FormFeedback type="invalid">
                              {validation.errors.type}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <FormGroup className="mb-1">
                          <Label htmlFor="year">
                            FINANCIAL YEAR<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="year"
                            id="year"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.year && validation.errors.year
                            }
                          >
                            <option value="">SELECT FINANCIAL YEAR</option>
                            <option value="United States">
                              01-04-2022 31-03-2023
                            </option>
                            <option value="United Kingdom">
                              01-04-2022 30-09-2022{" "}
                            </option>
                            <option value="Canada">
                              01-10-2022 31-03-2023
                            </option>
                          </Input>
                          {validation.touched.year && validation.errors.year ? (
                            <FormFeedback type="invalid">
                              {validation.errors.year}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <FormGroup>
                          <Label>
                            MATERIAL GROUP<font color="red">*</font>
                          </Label>
                          <div>
                            <FormGroup check inline>
                              <Input
                                type="checkbox"
                                id="selectAll"
                                checked={selectAll}
                                onChange={handleSelectAll}
                              />
                              <Label
                                style={{ marginBottom: "8px" }}
                                check
                                htmlFor="selectAll"
                              >
                                SELECT ALL{" "}
                              </Label>
                            </FormGroup>
                            <Input
                              type="select"
                              name="group"
                              id="group"
                              multiple
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                (validation.touched.group &&
                                  validation.errors.group &&
                                  !selectAll) ||
                                (selectAll && validation.errors.group)
                              }
                              style={{
                                height: "200px",
                              }}
                            >
                              {demoData.map(item => (
                                <option
                                  key={item}
                                  value={item}
                                  onClick={() => handleOptionClick(item)}
                                  style={{
                                    backgroundColor: selectedOptions.includes(
                                      item
                                    )
                                      ? "#c3e6cb"
                                      : "inherit",
                                  }}
                                >
                                  {item}
                                </option>
                              ))}
                            </Input>
                          </div>
                          {(validation.touched.group &&
                            validation.errors.group &&
                            !selectAll) ||
                          (selectAll && validation.errors.group) ? (
                            <div className="invalid-feedback d-block">
                              {validation.errors.group}
                            </div>
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
                        <Button
                          type="submit"
                          color="success-subtle"
                          className="btn btn-success-subtle border border-success"
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "90px",
                            marginRight: "30px",
                          }}
                        >
                          PROCESS{" "}
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
    </React.Fragment>
  );
};

export default YearlyDep;
