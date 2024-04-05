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
  CardBody,
  CardHeader,
  Container,
  Card,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GetSignleData } from "src/API/Master/GlobalGet";
import { useParams } from "react-router";
import { CreateTax } from "src/API/Master/ConfigrationMaster/Api";
import { ToastContainer, toast } from "react-toastify";

const TaxConfigurationModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tax, setTax] = useState([]);

  useEffect(() => {
    GetSignleData("Tax", id).then(res => {
      setTax(res);
    });
  }, []);

  const handleChange = event => {
    const fieldName = event.target.name;
    const inputValue = event.target.value;
    const uppercaseValue = inputValue ? inputValue.toUpperCase() : "";

    validation.handleChange(event);
    validation.setFieldValue(fieldName, uppercaseValue);
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      taxname: tax?.nmtax,
      rate: tax?.pertax,
      taxtype: tax?.typtax,
    },

    validationSchema: Yup.object({
      taxname: Yup.string().required("TAX NAME IS REQUIRED"),
      rate: Yup.string().required("TAX RATE IS REQUIRED"),
      taxtype: Yup.string().required("TAX TYPE IS REQUIRED"),
    }),
    onSubmit: async values => {
      CreateTax([
        {
          idtax: id,
          nmtax: values.taxname,
          pertax: values.rate,
          typtax: values.taxtype,
        },
      ])
        .then(res => {
          if (res.ok) {
            toast("Tax Updated successfully");
            navigate("/tax_details");
          } else if (res.status === 400) {
            toast("Failed to Update Tax");
          } else {
            toast("already created Tax");
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
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                TAX CONFIGURATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={validation.handleSubmit}
              >
                <Row className="justify-content-center">
                  <Col md={10}>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label>
                          TAX NAME<font color="red">*</font>
                        </Label>
                        <Input
                          placeholder=" PLEASE ENTER TAX NAME"
                          type="text"
                          name="taxname"
                          value={validation.values.taxname}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.taxname &&
                            validation.errors.taxname
                          }
                          style={{ textTransform: "uppercase" }}
                        />
                        {validation.touched.taxname &&
                        validation.errors.taxname ? (
                          <FormFeedback type="invalid">
                            {validation.errors.taxname}
                          </FormFeedback>
                        ) : null}
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        {" "}
                        <Label>
                          RATE (%)<font color="red">*</font>
                        </Label>
                        <Input
                          placeholder="PLEASE ENTER TAX NAME"
                          type="text"
                          name="rate"
                          value={validation.values.rate}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.rate && validation.errors.rate
                          }
                          style={{ textTransform: "uppercase" }}
                        />
                        {validation.touched.rate && validation.errors.rate ? (
                          <FormFeedback type="invalid">
                            {validation.errors.rate}
                          </FormFeedback>
                        ) : null}
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        {" "}
                        <Label>
                          TAX TYPE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="taxtype"
                          value={validation.values.taxtype}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.taxtype &&
                            validation.errors.taxtype
                          }
                        >
                          <option value="">SELECT TAX TYPE</option>
                          <option value="CGST">CGST</option>
                          <option value="SGST">SGST</option>
                          <option value="IGST">IGST</option>
                          <option value="UTGST">UTGST</option>
                          <option value="CESS">CESS</option>
                        </Input>
                        {validation.touched.taxtype &&
                        validation.errors.taxtype ? (
                          <FormFeedback type="invalid">
                            {validation.errors.taxtype}
                          </FormFeedback>
                        ) : null}
                      </Col>
                      <hr className="mb-2" />
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
                            navigate("/tax_details");
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
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default TaxConfigurationModify;
