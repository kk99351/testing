import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DisplayViaBillEntryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [showAddSerial, setShowAddSerial] = useState(true);
  const [showAddItem, setShowAddItem] = useState(false);
  const [serialNumbers, setSerialNumbers] = useState([]);
  const [showAMCDates, setShowAMCDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);
  const validationSchema = Yup.object().shape({
    no_inv: Yup.string().required("Zoho Bill Id is required"),
    dt_inv: Yup.string().required("Invoice Date is required"),
    no_po: Yup.string().required("Bill/PO Number is required"),
    dt_po: Yup.string().required("Bill/PO Date is required"),
    id_model: Yup.string().required("Asset Name is required"),
    tag: Yup.string().required("Taggable is required"),
    warr_amc: Yup.string().required("AMC/Warranty is required"),
    st_lease: Yup.string().required("Lease Status is required"),
    typ_proc: Yup.string().required("Lease Type is required"),
    cst_asst: Yup.string().required("Total Unit Price is required"),
    val_asst: Yup.string().required("Net Value is required"),
  });

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/viabillEntryItems/${id}`
        );
        setFormData(response || {});
        setLoading(false);
        generateSerialNumbers(response.qty);
      } catch (error) {
        console.error(`Error in API fetching user with ID ${id}:`, error);
        setLoading(false);
      }
    };

    fetchDataById();
  }, [id]);
  const generateSerialNumbers = qty => {
    const newSerialNumbers = [];
    for (let i = 0; i < qty; i++) {
      newSerialNumbers.push({ serial: "", assetRef: "" });
    }
    setSerialNumbers(newSerialNumbers);
  };
  const handleNext = () => {
    setShowAddSerial(false);
    setShowAddItem(true);
  };

  const handleBackToAddSerial = () => {
    setShowAddSerial(true);
    setShowAddItem(false);
  };
  const handleAMCChange = e => {
    const { value } = e.target;
    if (value !== "No") {
      setShowAMCDates(true); // Show AMC dates if the value is not "No"
    } else {
      setShowAMCDates(false); // Hide AMC dates if the value is "No"
    }
  };
  const handleLeaseChange = e => {
    const { value } = e.target;
    if (value === "UL") {
      setShowLeaseDates(true); // Show Lease dates if the value is "UL"
    } else {
      setShowLeaseDates(false); // Hide Lease dates if the value is not "UL"
    }
  };
  const handleDoNotHaveSerialClick = () => {
    const newSerialNumbers = [...serialNumbers];
    newSerialNumbers.forEach((serial, index) => {
      if (!serial.serial) {
        serial.serial = `NA${index + 1}`;
      }
      if (!serial.assetRef) {
        serial.assetRef = `NA${index + 1}`;
      }
    });

    setSerialNumbers(newSerialNumbers);
  };
  const handleUpdate = async (values, { setSubmitting }) => {
    debugger;
    try {
      console.log("Form values:", values); // Log form values for debugging
      console.log("Form submitted successfully:", values);
      // Handle form submission here
    } catch (error) {
      console.log("Error in updating data:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Card className="mt-5">
            <Formik
              initialValues={formData}
              validationSchema={validationSchema} // Add this line to integrate validation schema
              onSubmit={handleUpdate}
            >
              {({ isSubmitting }) => (
                <Form className="needs-validation" noValidate>
                  <Row className="justify-content-center">
                    <Col xl={10}>
                      {showAddSerial && (
                        <Card>
                          <CardHeader>
                            <h1
                              className="card-title"
                              style={{ fontSize: "20px" }}
                            >
                              Add Serial No
                            </h1>
                          </CardHeader>
                          <CardBody>
                            <Button
                              type="button"
                              color="primary"
                              onClick={handleDoNotHaveSerialClick}
                              style={{ marginBottom: "10px", float: "right" }}
                            >
                              Do Not Have Serial No
                            </Button>
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Serial No</th>
                                  <th>Asset Ref No</th>
                                </tr>
                              </thead>
                              <tbody>
                                {serialNumbers.map((serial, index) => (
                                  <tr key={index}>
                                    <td>
                                      <Input
                                        type="text"
                                        name={`serialNumbers[${index}].serial`}
                                        value={serial.serial}
                                        onChange={e => {
                                          const { value } = e.target;
                                          const newSerialNumbers = [
                                            ...serialNumbers,
                                          ];
                                          if (!value.startsWith("NA")) {
                                            newSerialNumbers[index].serial =
                                              value;
                                          }
                                          setSerialNumbers(newSerialNumbers);
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="text"
                                        name={`serialNumbers[${index}].assetRef`}
                                        value={serial.assetRef}
                                        onChange={e => {
                                          const { value } = e.target;
                                          const newSerialNumbers = [
                                            ...serialNumbers,
                                          ];
                                          if (!value.startsWith("NA")) {
                                            newSerialNumbers[index].assetRef =
                                              value;
                                          }
                                          setSerialNumbers(newSerialNumbers);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </CardBody>
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
                                type="button"
                                className="btn btn-success-subtle border border-success"
                                onClick={handleNext}
                                style={{
                                  paddingTop: "10px",
                                  height: "45px",
                                  width: "80px",
                                  marginRight: "30px",
                                }}
                              >
                                Next
                              </Button>
                              <Button
                                type="button"
                                color="secondary"
                                onClick={() => navigate("/via_bills")}
                                style={{
                                  paddingTop: "10px",
                                  width: "80px",
                                  height: "45px",
                                }}
                              >
                                Back
                              </Button>
                            </div>
                          </div>
                        </Card>
                      )}

                      {showAddItem && (
                        <div>
                          <div>
                            <h1
                              className="card-title"
                              style={{paddingTop:"10px", fontSize: "20px" }}
                            >
                              ADD ITEM TO STORE{" "}
                            </h1>
                            <hr className="mb-3 mt-3" />

                          </div>
                          <div>
                            <Row>
                              <Col md={6}>
                                <Label for="no_inv">
                                  Zoho Bill Id <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="no_inv"
                                  id="no_inv"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="no_inv"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="dt_inv">
                                  Invoice Date <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="dt_inv"
                                  id="dt_inv"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="dt_inv"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              <Col md={6}>
                                <Label for="no_po">
                                  Bill/PO Number <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="no_po"
                                  id="no_po"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="no_po"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="dt_po">
                                  Bill/PO Date <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="dt_po"
                                  id="dt_po"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="dt_po"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              <Col md={6}>
                                <Label for="id_service_ven">
                                  Service Vendor
                                </Label>
                                <Field
                                  type="text"
                                  name="id_service_ven"
                                  id="id_service_ven"
                                  className="form-control"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="cst_asst_add">
                                  Additional Cost per unit
                                </Label>
                                <Field
                                  type="text"
                                  name="cst_asst_add"
                                  id="cst_asst_add"
                                  className="form-control"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              <Col md={6}>
                                <Label for="mfr">Manufacturer</Label>
                                <Field
                                  type="text"
                                  name="mfr"
                                  id="mfr"
                                  className="form-control"
                                />
                              </Col>

                              <Col md={6}>
                                <Label for="id_model">
                                  Asset Name <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="id_model"
                                  id="id_model"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="id_model"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              <Col md={6}>
                                <Label for="ds_asst">
                                  Asset Description <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="ds_asst"
                                  id="ds_asst"
                                  className="form-control"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="rmk_asst">Asset Remarks</Label>
                                <Field
                                  type="text"
                                  name="rmk_asst"
                                  id="rmk_asst"
                                  className="form-control"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              <Col md={6}>
                                <Label for="tag">
                                  Taggable <font color="red">*</font>
                                </Label>
                                <Field
                                  as="select"
                                  name="tag"
                                  id="tag"
                                  className="form-control"
                                >
                                  <option value="">Select</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </Field>
                                <ErrorMessage
                                  name="tag"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="warr_amc">
                                  AMC / Warranty <font color="red">*</font>
                                </Label>
                                <Field
                                  as="select"
                                  name="warr_amc"
                                  id="warr_amc"
                                  className="form-control"
                                  onChange={handleAMCChange}
                                >
                                  <option value="No">No</option>
                                  <option value="Yes">Yes</option>
                                </Field>
                                <ErrorMessage
                                  name="warr_amc"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              {showAMCDates && ( // Render AMC dates only if showAMCDates is true
                                <>
                                  <Col md={6}>
                                    <Label for="dt_amc_start">
                                      Start Date <font color="red">*</font>
                                    </Label>
                                    <Field
                                      type="text"
                                      name="dt_amc_start"
                                      id="dt_amc_start"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="dt_amc_start"
                                      component="div"
                                      className="text-danger"
                                    />
                                  </Col>
                                  <Col md={6}>
                                    <Label for="dt_amc_exp">
                                      End Date <font color="red">*</font>
                                    </Label>
                                    <Field
                                      type="text"
                                      name="dt_amc_exp"
                                      id="dt_amc_exp"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="dt_amc_exp"
                                      component="div"
                                      className="text-danger"
                                    />
                                  </Col>
                                  <hr className="mb-0 mt-3" />
                                </>
                              )}
                              <Col md={6}>
                                <Label for="st_lease">
                                  Lease Status <font color="red">*</font>
                                </Label>
                                <Field
                                  as="select"
                                  name="st_lease"
                                  id="st_lease"
                                  className="form-control"
                                  onChange={handleLeaseChange}
                                >
                                  <option value="NUL">Not Under Lease</option>
                                  <option value="UL">Under Lease</option>
                                </Field>
                                <ErrorMessage
                                  name="st_lease"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="typ_proc">
                                  Lease Status <font color="red">*</font>
                                </Label>
                                <Field
                                  as="select"
                                  name="typ_proc"
                                  id="typ_proc"
                                  className="form-control"
                                  readOnly
                                >
                                  <option value="">Select</option>
                                  <option value="OP">Outright Purchase</option>
                                  <option value="LB">Loan Basis</option>
                                  <option value="FOC">Add-On</option>
                                </Field>
                                <ErrorMessage
                                  name="typ_proc"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-0 mt-3" />

                              {showLeaseDates && ( // Render Lease dates only if showLeaseDates is true
                                <>
                                  <Col md={6}>
                                    <Label for="std_lease">
                                      Lease Start Date{" "}
                                      <font color="red">*</font>
                                    </Label>
                                    <Field
                                      type="text"
                                      name="std_lease"
                                      id="std_lease"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="std_lease"
                                      component="div"
                                      className="text-danger"
                                    />
                                  </Col>
                                  <Col md={6}>
                                    <Label for="endt_lease">
                                      Lease End Date <font color="red">*</font>
                                    </Label>
                                    <Field
                                      type="text"
                                      name="endt_lease"
                                      id="endt_lease"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="endt_lease"
                                      component="div"
                                      className="text-danger"
                                    />
                                  </Col>
                                  <hr className="mb-0 mt-3" />
                                </>
                              )}
                              <Col md={6}>
                                <Label for="cst_asst">
                                  Total Unit Price <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="cst_asst"
                                  id="cst_asst"
                                  className="form-control"
                                  readOnly
                                />
                                <ErrorMessage
                                  name="cst_asst"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <Col md={6}>
                                <Label for="val_asst">
                                  Net Value <font color="red">*</font>
                                </Label>
                                <Field
                                  type="text"
                                  name="val_asst"
                                  id="val_asst"
                                  className="form-control"
                                  readOnly
                                />
                                <ErrorMessage
                                  name="val_asst"
                                  component="div"
                                  className="text-danger"
                                />
                              </Col>
                              <hr className="mb-3 mt-3" />
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
                                  className="btn btn-success-subtle border border-success"
                                  disabled={isSubmitting}
                                  style={{
                                    paddingTop: "10px",
                                    height: "45px",
                                    width: "80px",
                                    marginRight: "30px",
                                  }}
                                >
                                  {isSubmitting ? "Updating..." : "Update"}
                                </Button>
                                <Button
                                  type="button"
                                  color="secondary"
                                  onClick={handleBackToAddSerial}
                                  style={{
                                    paddingTop: "10px",
                                    width: "80px",
                                    height: "45px",
                                  }}
                                >
                                  Back
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DisplayViaBillEntryDetails;
