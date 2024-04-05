import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Col,
  Row,
  FormFeedback,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Form,
  Container,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { CreateFinanicialYear } from "src/API/Master/ConfigrationMaster/Api";

const FinancialYearCreate = () => {
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fs: "",
      pfs: "",
      month: "",
    },

    validationSchema: Yup.object({
      fs: Yup.date().required("START DATE IS REQUIRED"),
      pfs: Yup.date().required("SELECT MONTH GAP TO FILL START DATE"),

      month: Yup.number()
        .min(-12, "MONTH GAP SHOULD BE BETWEEN -12 AND 12 ")
        .max(12, "MONTH GAP SHOULD BE BETWEEN 12 AND -12"),
    }),

    onSubmit: async values => {
      if (!month) {
        toast("Plaese Give Month Gap");
        return false;
      }
      CreateFinanicialYear([
        {
          idfinance: 0,
          stdfinance: values?.fs,
          endfinance: values?.fe,
          stdtfirst: values?.fs1,
          endtfirst: values?.fs2,
          stdtsecond: values?.fe1,
          endtsecond: values?.fe2,
          currentyear: "",
          activeyear: 0,
          mnthgap: month,
          parstdfin: values?.pfs,
          parendfin: values?.pfe,
          parstdfirst: values?.pfs1,
          parendfirst: values?.pfs2,
          parstdsecond: values?.pfe1,
          parendsecond: values?.pfe2,
        },
      ]).then(res => {
        if (res.ok) {
          toast("Floor created successfully");
          navigate("/financial_year");
        } else if (res.status === 400) {
          toast("Failed to create Floor");
        } else {
          toast("already created Floor");
        }
      });
    },
  });

  const handleChange = e => {
    const startDate = new Date(e.target.value);
    const endDate = new Date(startDate);

    endDate.setFullYear(startDate.getFullYear() + 1);
    endDate.setDate(startDate.getDate() - 1);

    const firstHalfEndDate = new Date(startDate);
    firstHalfEndDate.setMonth(startDate.getMonth() + 6);
    firstHalfEndDate.setDate(firstHalfEndDate.getDate() - 1);
    const secondHalfStartDate = new Date(firstHalfEndDate);
    secondHalfStartDate.setDate(secondHalfStartDate.getDate() + 1);
    validation.setFieldValue("fs", startDate.toISOString().split("T")[0]);
    validation.setFieldValue("fe", endDate.toISOString().split("T")[0]);
    validation.setFieldValue("fs1", startDate.toISOString().split("T")[0]);
    validation.setFieldValue(
      "fe1",
      firstHalfEndDate.toISOString().split("T")[0]
    );
    validation.setFieldValue(
      "fs2",
      secondHalfStartDate.toISOString().split("T")[0]
    );
    validation.setFieldValue("fe2", endDate.toISOString().split("T")[0]);
  };

  const handleChangep = (selectedDates, dateString, instance) => {
    if (instance.input.name === "pfs") {
      const startDate = new Date(dateString);
      const endDate = new Date(
        startDate.getFullYear() + 1,
        startDate.getMonth(),
        startDate.getDate()
      );
      const sixMonthsLater = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 6,
        startDate.getDate()
      );

      validation.setValues({
        ...validation.values,
        pfs: dateString,
        pfs1: startDate.toISOString().slice(0, 10),
        pfs2: sixMonthsLater.toISOString().slice(0, 10),
        pfe: endDate.toISOString().slice(0, 10),
        pfe1: sixMonthsLater.toISOString().slice(0, 10), // Start of second half
        pfe2: endDate.toISOString().slice(0, 10),
      });
    } else if (instance.input.name === "pfe") {
      const endDate = new Date(dateString);
      const nextDay = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate() + 1
      );

      validation.setValues({
        ...validation.values,
        pfe: dateString,
        pfe1: nextDay.toISOString().slice(0, 10), // Start of second half
        pfe2: endDate.toISOString().slice(0, 10),
      });
    }
  };

  const [month, setMonth] = useState("");

  const handleMonthChange = e => {
    setMonth(e.target.value);
    if (!validation.values.fs) {
      // Financial year start date not selected
      return;
    }

    const newMonth = parseInt(e.target.value);
    if (isNaN(newMonth) || newMonth < -12 || newMonth > 12) {
      // Invalid month or exceeds limits
      validation.setFieldError(
        "month",
        "MONTH GAP SHOULD BE BETWEEN -12 TO +12"
      );
      return;
    }

    // Clear validation error if no issues found
    validation.setFieldError("month", "");

    // Calculate new PFS date based on the entered month gap
    const startDate = new Date(validation.values.fs);
    const newPfsDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + newMonth,
      startDate.getDate() + 1
    );

    // Update pfs value in formik
    validation.setValues({
      ...validation.values,
      pfs: newPfsDate.toISOString().slice(0, 10),
    });

    // Recalculate other fields related to PFS if necessary
    handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
      input: { name: "pfs" },
    });
  };

  const handleCreateClick = () => {
    validation.validateForm().then(() => {
      validation.handleSubmit();
    });
  };

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Form className="needs-validation" onSubmit={validation.handleSubmit}>
            <Card>
              <CardBody>
                <CardHeader className="p-1">
                  <h1
                    className="card-title"
                    style={{ fontSize: "20px", marginBottom: "6px" }}
                  >
                    FINANCIAL YEAR
                  </h1>
                </CardHeader>

                <Row>
                  <Row>
                    <Col md={3}></Col>
                    <Col md={3} className="d-flex justify-content-center">
                      FINANCIAL YEAR<font color="red">*</font>
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                      FIRST HALF YEAR
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                      SECOND HALF YEAR
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col md={3}>
                      <Label for="stDate">
                        <h5>START DATE</h5>
                      </Label>
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        name="fs"
                        onChange={handleChange}
                        value={validation.values.fs}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.fs && !!validation.errors.fs
                        }
                        style={{ textTransform: "uppercase" }}
                      />
                      {validation.touched.fs && validation.errors.fs && (
                        <FormFeedback>{validation.errors.fs}</FormFeedback>
                      )}
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        value={validation.values.fs1}
                        disabled
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        value={validation.values.fs2}
                        disabled
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-2" />

                  <Row className="m-2">
                    <Col md={3}>
                      <Label>
                        <h5>END DATE</h5>
                      </Label>
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        name="fe"
                        value={validation.values.fe}
                        onChange={handleChange}
                        disabled
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        value={validation.values.fe1}
                        disabled
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                    <Col md={3}>
                      <Input
                        type="date"
                        value={validation.values.fe2}
                        disabled
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                  </Row>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <Row className="d-flex justify-content-center m-2">
                <Col md={2}>
                  <Label className="mt-1">
                    <h5>MONTH GAP</h5>
                  </Label>
                </Col>
                <Col md={3}>
                  <Input
                    type="number"
                    id="month"
                    onChange={handleMonthChange}
                    value={month}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.month && validation.errors.month
                    }
                  />
                  {validation.touched.month && validation.errors.month && (
                    <FormFeedback type="invalid">
                      {validation.errors.month}
                    </FormFeedback>
                  )}
                </Col>
              </Row>
            </Card>
            <Card>
              <CardBody>
                <CardHeader className="p-1">
                  <h1
                    className="card-title"
                    style={{ fontSize: "20px", marginBottom: "6px" }}
                  >
                    PARENT COMPANY FINANCIAL YEAR
                  </h1>
                </CardHeader>

                <Row>
                  <Col md={3}></Col>
                  <Col md={3} className="d-flex justify-content-center">
                    FINANCIAL YEAR
                  </Col>
                  <Col md={3} className="d-flex justify-content-center">
                    FIRST HALF
                  </Col>
                  <Col md={3} className="d-flex justify-content-center">
                    SECOND HALF
                  </Col>
                </Row>
                <Row className="m-2">
                  <Col md={3}>
                    <Label for="stDate">
                      <h5>START DATE</h5>
                    </Label>
                  </Col>
                  <Col md={3}>
                    <Input
                      type="date"
                      name="pfs"
                      disabled
                      onChange={handleChangep}
                      value={validation.values.pfs}
                      onBlur={validation.handleBlur}
                      invalid={
                        validation.touched.pfs && !!validation.errors.pfs
                      }
                      style={{ textTransform: "uppercase" }}
                    />
                    {validation.touched.pfs && validation.errors.pfs && (
                      <FormFeedback>{validation.errors.pfs}</FormFeedback>
                    )}
                  </Col>

                  <Col md={3}>
                    <Input
                      type="date"
                      value={validation.values.pfs1}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </Col>
                  <Col md={3}>
                    <Input
                      type="date"
                      value={validation.values.pfs2}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </Col>
                </Row>
                <hr className="mb-3 mt-3" />
                <Row className="m-2">
                  <Col md={3}>
                    <Label>
                      <h5>END DATE</h5>
                    </Label>
                  </Col>
                  <Col md={3}>
                    <Input
                      type="date"
                      name="pfe"
                      value={validation.values.pfe}
                      onChange={handleChangep}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </Col>

                  <Col md={3}>
                    <Input
                      type="date"
                      value={validation.values.pfe1}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </Col>
                  <Col md={3}>
                    <Input
                      type="date"
                      value={validation.values.pfe2}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <button
                  type="button"
                  className="btn btn-success-subtle border border-success"
                  style={{
                    paddingTop: "10px",
                    height: "45px",
                    width: "80px",
                    marginRight: "30px",
                  }}
                  onClick={handleCreateClick}
                >
                  <Label>CREATE</Label>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary-subtle border border-secondary"
                  onClick={() => {
                    navigate("/financial_year");
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
            <ToastContainer position="bottom-right" />
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FinancialYearCreate;
