import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Col,
  Row,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const VendorMasterCreate = () => {
  const navigate = useNavigate();

  const initialValues = {
    dom_ovr: "",
    manufacturer: false,
    dealer: false,
    distributor: false,
    stockiest: false,
    traders: false,
    service_provider: false,
    contractor: false,
    social: false,
    others: false,
    others_reason: "",
    maj_supp: "",
    nm_ven: "",
    cd_ven: "",
    country: "",
    id_subl: "",
    city: "",
    district: "",
    off_add: "",
    pin: "",
    fax: "",
    alt_fax: "",
    mobile: "",
    phone: "",
    mailid: "",
    alt_mailid: "",
  };

  const validationSchema = Yup.object().shape({
    dom_ovr: Yup.string().required("Domestic/Overseas is required"),
    maj_supp: Yup.string().required("Major Supplier is required"),
    nm_ven: Yup.string().required("Vendor Name is required"),
    cd_ven: Yup.string().required("Vendor Code is required"),
    country: Yup.string().required("Country is required"),
    id_subl: Yup.string().required("Region is required"),
    city: Yup.string().required("City is required"),
    district: Yup.string().required("District is required"),
    off_add: Yup.string().required("Office Address is required"),
    pin: Yup.string().required("PIN Code is required"),
    mobile: Yup.string()
      .required("Mobile No. is required")
      .matches(/^[0-9]{10}$/, {
        message: "Mobile No. must be exactly 10 digits",
        excludeEmptyString: true, // Exclude empty string from validation
      }),
    phone: Yup.string()
      .required("Alternate Contact Number is required")
      .matches(/^[0-9]{10}$/, {
        message: "Alternate Contact Number must be exactly 10 digits",
        excludeEmptyString: true, // Exclude empty string from validation
      }),
    mailid: Yup.string()
      .email("Invalid email")
      .required("Email ID is required"),
    alt_mailid: Yup.string().email("Invalid email"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Form submitted successfully:", values);
      // Handle form submission here
    } catch (error) {
      console.log("Error in creating group data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container fluid>
      <div className="page-content">
        <Card className="mt-5">
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              Vendor Details
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="justify-content-center">
              <Col xl={10}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Row className="mb-2">
                        <Col md={12}>
                          <Label for="dom_ovr">
                            Domestic/Overseas<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="dom_ovr"
                            id="dom_ovr"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="dom_ovr"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={12}>
                          <Label>
                            Type of Vendor<font color="red">*</font>
                          </Label>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="manufacturer"
                                name="manufacturer"
                              />
                              <Label
                                for="manufacturer"
                                style={{ marginLeft: "5px" }}
                              >
                                Manufacturer
                              </Label>
                            </div>
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="dealer"
                                name="dealer"
                              />
                              <Label for="dealer" style={{ marginLeft: "5px" }}>
                                Dealer
                              </Label>
                            </div>
                            <div>
                              <Input
                                type="checkbox"
                                id="distributor"
                                name="distributor"
                              />
                              <Label
                                for="distributor"
                                style={{ marginLeft: "5px" }}
                              >
                                Distributor
                              </Label>
                            </div>
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="stockiest"
                                name="stockiest"
                              />
                              <Label
                                for="stockiest"
                                style={{ marginLeft: "5px" }}
                              >
                                Stockiest
                              </Label>
                            </div>
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="traders"
                                name="traders"
                              />
                              <Label
                                for="traders"
                                style={{ marginLeft: "5px" }}
                              >
                                Traders
                              </Label>
                            </div>
                            <div>
                              <Input
                                type="checkbox"
                                id="service_provider"
                                name="service_provider"
                              />
                              <Label
                                for="service_provider"
                                style={{ marginLeft: "5px" }}
                              >
                                Service Provider
                              </Label>
                            </div>
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="contractor"
                                name="contractor"
                              />
                              <Label
                                for="contractor"
                                style={{ marginLeft: "5px" }}
                              >
                                Contractor
                              </Label>
                            </div>
                            <div style={{ marginRight: "10px" }}>
                              <Input
                                type="checkbox"
                                id="social"
                                name="social"
                              />
                              <Label for="social" style={{ marginLeft: "5px" }}>
                                Social/NGO
                              </Label>
                            </div>
                            <div>
                              <Input
                                type="checkbox"
                                id="others"
                                name="others"
                              />
                              <Label for="others" style={{ marginLeft: "5px" }}>
                                Others, please specify
                              </Label>
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div style={{ marginRight: "10px" }}>
                              <Field
                                type="text"
                                name="others_reason"
                                id="others_reason"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <Label for="maj_supp">
                            Major Supplier of (Name of the items or service)
                            Please attach separate sheet, if required
                            <font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="maj_supp"
                            id="maj_supp"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="maj_supp"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <CardHeader>
                        <h1 className="card-title" style={{ fontSize: "20px" }}>
                          GENERAL INFORMATION
                        </h1>
                      </CardHeader>
                      <Row className="mb-2">
                        <Col md={4}>
                          <Label for="nm_ven">
                            Vendor Name(Please do not use &apos;,&apos;)
                            <font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="nm_ven"
                            id="nm_ven"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="nm_ven"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="cd_ven">
                            Vendor Code<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="cd_ven"
                            id="cd_ven"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="cd_ven"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="country">
                            Country<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="country"
                            id="country"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="id_subl">
                            Region<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="id_subl"
                            id="id_subl"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="id_subl"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="city">
                            City<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="city"
                            id="city"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="district">
                            District<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="district"
                            id="district"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="off_add">
                            Office Address<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="off_add"
                            id="off_add"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="off_add"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="pin">
                            PIN Code<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="pin"
                            id="pin"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="pin"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="fax">FAX No.</Label>
                          <Field
                            type="text"
                            name="fax"
                            id="fax"
                            className="form-control"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="alt_fax">ALternate FAX No.</Label>
                          <Field
                            type="text"
                            name="alt_fax"
                            id="alt_fax"
                            className="form-control"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="mobile">
                            Mobile No.<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="mobile"
                            id="mobile"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="phone">
                            Alternate Contact Number.<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="mailid">
                            Email ID<font color="red">*</font>
                          </Label>
                          <Field
                            type="text"
                            name="mailid"
                            id="mailid"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="mailid"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="alt_mailid">Alternate Email ID</Label>
                          <Field
                            type="text"
                            name="alt_mailid"
                            id="alt_mailid"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <Button
                          type="submit"
                          className="btn btn-success-subtle border border-success"
                          disabled={isSubmitting}
                        >
                          CREATE
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => navigate("/create_vendor")}
                          disabled={isSubmitting}
                        >
                          BACK
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default VendorMasterCreate;
