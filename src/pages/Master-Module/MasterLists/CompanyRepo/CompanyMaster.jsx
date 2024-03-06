import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import * as Yup from "yup";
import {
  Button,
  Col,
  Input,
  Label,
  Row,
  FormGroup,
  FormFeedback,
  Form,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useFormik } from "formik";
import { useGet } from "src/API/useGet";

const CompanyMaster = props => {
  const { fun } = { ...props };
  const [logoPreview, setLogoPreview] = useState("");
  const [logoError, setLogoError] = useState("");

  const [companyFormData, setCompanyFormData] = useState({
    companyname: "HCS",
  });
  // const { getData, data, isLoading, isError } = useGet();

  // useEffect(() => {
  //   async function fetch() {
  //     await getData("http://localhost:3000/companyform");
  //   }
  //   fetch();
  // }, [getData]);

  // useEffect(() => {
  //   setCompanyFormData(data[0]);
  // }, [data]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      companyname: companyFormData?.companyname || "",
      address1: companyFormData?.address1 || "",
      city: companyFormData?.city || "",
      address2: companyFormData?.address2 || "",
      state: companyFormData?.state || "",
      email: companyFormData?.email || "",
      pin: companyFormData?.pin || "",
      country: companyFormData?.country || "",
      fax: companyFormData?.fax || "",
      phone: companyFormData?.phone || "",
      contactPerson: companyFormData?.contactPerson || "",
      gst: companyFormData?.gst || "",
      pan: companyFormData?.pan || "",
      cin: companyFormData?.cin || "",
      assetPrefix: companyFormData?.assetPrefix || "",
      logo: companyFormData?.logo || null,
    },

    validationSchema: Yup.object({
      companyname: Yup.string().required("Company Name is Required"),
      address1: Yup.string().required("Address 1 is Required"),
      city: Yup.string().required("City is Required"),
      address2: Yup.string().required("Address 2 is Required"),
      state: Yup.string().required("State is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      country: Yup.string().required("Country is Required"),
      fax: Yup.string(),
      contactPerson: Yup.string().required("Contact Person is Required"),
      gst: Yup.string().required("GST is Required"),
      pan: Yup.string()
        .max(10, "not be more than 10 characters")
        .matches(/[A-Z]{5}[0-9]{4}[A-Z]/, "Invalid PAN format")
        .required("PAN is Required"),
      cin: Yup.string().required("CIN is Required"),
      pin: Yup.string().required("PIN is Required"),
      licenseNumber: Yup.string(),
      assetPrefix: Yup.string().required("AssetPrefix is required"),
      logo: Yup.string().required("Company Logo is Required"),
    }),

    onSubmit: values => {
      alert("Form validated!");
      console.log("values", values);
    },
  });

  const handleChange = event => {
    const fieldName = event.target.name;
    const inputValue = event.target.value;
    const uppercaseValue = inputValue ? inputValue.toUpperCase() : "";

    validation.handleChange(event);
    validation.setFieldValue(fieldName, uppercaseValue);
  };

  const handleLogoChange = e => {
    const file = e.target.files[0];

    if (file) {
      if (
        !file.type.startsWith("image/") ||
        !/\.(jpg|jpeg|png)$/i.test(file.name)
      ) {
        setLogoPreview(null);
        validation.setFieldValue("logo", null);
        setLogoError("Please choose a valid image file (jpg, jpeg, png).");
      } else {
        setLogoPreview(URL.createObjectURL(file));
        validation.setFieldValue("logo", file);
        setLogoError("");
      }

      validation.setFieldTouched("logo", true, false);
    }
  };

  // if (isLoading) {
  //   return (
  //     <Container fluid className="page-content">
  //       <h1>Loading...</h1>
  //     </Container>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <Container fluid className="page-content">
  //       <h1>ERROR in API</h1>
  //     </Container>
  //   );
  // }

  return (
    <React.Fragment>
      <>
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              FILL YOUR COMPANY DETAILS
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="justify-content-center">
              <Col xl={10}>
                <Form
                  className="needs-validation"
                  onSubmit={validation.handleSubmit}
                >
                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom01">
                          COMPANY NAME<font color="red">*</font>
                        </Label>
                        <Input
                          name="companyname"
                          placeholder="Company Name"
                          type="text"
                          className="form-control"
                          value={validation.values.companyname}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.companyname &&
                            validation.errors.companyname
                          }
                        />
                        {validation.touched.companyname &&
                        validation.errors.companyname ? (
                          <FormFeedback type="invalid">
                            {validation.errors.companyname}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom02">
                          ADDRESS1<font color="red">*</font>
                        </Label>
                        <Input
                          name="address1"
                          placeholder="address1"
                          type="text"
                          className="form-control"
                          value={validation.values.address1}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.address1 &&
                            validation.errors.address1
                          }
                        />
                        {validation.touched.address1 &&
                        validation.errors.address1 ? (
                          <FormFeedback type="invalid">
                            {validation.errors.address1}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom03">
                          CITY<font color="red">*</font>
                        </Label>
                        <Input
                          name="city"
                          placeholder="City"
                          type="text"
                          className="form-control"
                          value={validation.values.city}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.city && validation.errors.city
                          }
                        />
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
                          ADDRESS2<font color="red">*</font>
                        </Label>
                        <Input
                          name="address2"
                          placeholder="Address2"
                          type="text"
                          className="form-control"
                          value={validation.values.address2}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.address2 &&
                            validation.errors.address2
                          }
                        />
                        {validation.touched.address2 &&
                        validation.errors.address2 ? (
                          <FormFeedback type="invalid">
                            {validation.errors.address2}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom05">
                          STATE<font color="red">*</font>
                        </Label>
                        <Input
                          name="state"
                          placeholder="State"
                          type="text"
                          className="form-control"
                          value={validation.values.state}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.state && validation.errors.state
                          }
                        />
                        {validation.touched.state && validation.errors.state ? (
                          <FormFeedback type="invalid">
                            {validation.errors.state}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom06">
                          EMAIL<font color="red">*</font>
                        </Label>
                        <Input
                          name="email"
                          placeholder="Email"
                          type="email"
                          className="form-control"
                          value={validation.values.email}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.email && validation.errors.email
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom07">PIN</Label>
                        <Input
                          name="pin"
                          placeholder="PIN"
                          type="text"
                          className="form-control"
                          value={validation.values.pin}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.pin && validation.errors.pin
                          }
                        />
                        {validation.touched.pin && validation.errors.pin ? (
                          <FormFeedback type="invalid">
                            {validation.errors.pin}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom08">
                          COUNTRY<font color="red">*</font>
                        </Label>
                        <Input
                          name="country"
                          placeholder="Country"
                          type="text"
                          className="form-control"
                          value={validation.values.country}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.country &&
                            validation.errors.country
                          }
                        />
                        {validation.touched.country &&
                        validation.errors.country ? (
                          <FormFeedback type="invalid">
                            {validation.errors.country}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom09">FAX</Label>
                        <Input
                          name="fax"
                          placeholder="Fax"
                          type="text"
                          className="form-control"
                          value={validation.values.fax}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label>PHONE</Label>
                        <PhoneInput
                          inputStyle={{ width: "100%" }}
                          name="phone"
                          placeholder="Enter Phone"
                          country="in"
                          value={String(validation.values.phone)}
                          onChange={value => {
                            validation.setFieldValue("phone", value);
                          }}
                          isValid={(value, country) => {
                            if (value.match(/12345/)) {
                              return (
                                "Invalid value: " + value + ", " + country.name
                              );
                            } else if (value.match(/1234/)) {
                              return false;
                            } else {
                              return true;
                            }
                          }}
                        />
                        {/* <Input
                          name="phone"
                          placeholder="Phone"
                          type="text"
                          value={validation.values.phone}
                          className="form-control"
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                        /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom11">
                          CONTACT PERSON<font color="red">*</font>
                        </Label>
                        <Input
                          name="contactPerson"
                          placeholder="Contact Person"
                          type="text"
                          className="form-control"
                          value={validation.values.contactPerson}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.contactPerson &&
                            validation.errors.contactPerson
                          }
                        />
                        {validation.touched.contactPerson &&
                        validation.errors.contactPerson ? (
                          <FormFeedback type="invalid">
                            {validation.errors.contactPerson}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom12">
                          GST<font color="red">*</font>
                        </Label>
                        <Input
                          name="gst"
                          placeholder="GST"
                          type="text"
                          className="form-control"
                          value={validation.values.gst}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.gst && validation.errors.gst
                          }
                        />
                        {validation.touched.gst && validation.errors.gst ? (
                          <FormFeedback type="invalid">
                            {validation.errors.gst}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom13">
                          PAN<font color="red">*</font>
                        </Label>
                        <Input
                          name="pan"
                          placeholder="PAN"
                          type="text"
                          className="form-control"
                          value={validation.values.pan}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.pan && validation.errors.pan
                          }
                        />
                        {validation.touched.pan && validation.errors.pan ? (
                          <FormFeedback type="invalid">
                            {validation.errors.pan}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom14">
                          CIN<font color="red">*</font>
                        </Label>
                        <Input
                          name="cin"
                          placeholder="CIN"
                          type="text"
                          className="form-control"
                          value={validation.values.cin}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.cin && validation.errors.cin
                          }
                        />
                        {validation.touched.cin && validation.errors.cin ? (
                          <FormFeedback type="invalid">
                            {validation.errors.cin}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-2 mt-0" />

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom15">
                          LICENSE NUMBER
                        </Label>
                        <Input
                          name="licenseNumber"
                          placeholder="License Number"
                          type="text"
                          className="form-control"
                          value={validation.values.licenseNumber}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom16">
                          LICENSE NUMBER
                        </Label>
                        <Input
                          name="licenseNumberNoValidation"
                          placeholder="License Number (No Validation)"
                          type="text"
                          className="form-control"
                          value={validation.values.companyname}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                        />
                      </FormGroup>
                    </Col>
                    <hr className="mb-2 mt-0" />
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom17">
                          ASSET PREFIX<font color="red">*</font>
                        </Label>
                        <Input
                          name="assetPrefix"
                          placeholder="Asset Prefix"
                          type="text"
                          className="form-control"
                          value={validation.values.assetPrefix}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.assetPrefix &&
                            validation.errors.assetPrefix
                          }
                        />
                        {validation.touched.assetPrefix &&
                        validation.errors.assetPrefix ? (
                          <FormFeedback type="invalid">
                            {validation.errors.assetPrefix}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom18">
                          COMPANY LOGO<font color="red">*</font>
                        </Label>
                        <Input
                          name="logo"
                          type="file"
                          accept="image/png"
                          className="form-control"
                          onChange={handleLogoChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.logo && validation.errors.logo
                          }
                        />

                        {validation.touched.logo && validation.errors.logo && (
                          <FormFeedback type="invalid">
                            {validation.errors.logo && logoError}
                          </FormFeedback>
                        )}

                        {logoPreview && (
                          <div className="mt-2">
                            <img
                              src={logoPreview}
                              alt="Company Logo Preview"
                              className="img-fluid"
                              style={{ maxHeight: "100px" }}
                            />
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="mb-3 mt-3" />

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
                      {/* <div className="d-flex align-items-center justify-content-around"> */}
                      <Button
                        type="submit"
                        color="success-subtle"
                        className="border border-success"
                        style={{
                          paddingTop: "10px",
                          height: "45px",
                          width: "100px",
                          marginRight: "30px",
                        }}
                      >
                        CREATE
                      </Button>
                      <button
                        type="button"
                        className="btn btn-secondary-subtle border border-secondary"
                        style={{
                          paddingTop: "10px",
                          width: "100px",
                          height: "45px",
                        }}
                        onClick={fun}
                      >
                        <Label>NEXT</Label>
                      </button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>{" "}
          </CardBody>
        </Card>
      </>
    </React.Fragment>
  );
};

export default CompanyMaster;
