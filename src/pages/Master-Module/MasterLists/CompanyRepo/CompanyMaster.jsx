import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  Alert,
  Toast,
} from "reactstrap";
import { useFormik } from "formik";
import { useGet } from "src/API/useGet";
import { CreateCompanyMaster } from "src/API/Master/CompanyRepo/Api";
import { UploadFile } from "src/API/Upload";

const CompanyMaster = props => {
  const { fun } = { ...props };
  const [logoPreview, setLogoPreview] = useState("");
  const [logoError, setLogoError] = useState("");

  const [companyFormData, setCompanyFormData] = useState({
    // companyname: "HCS",
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
      companyname: Yup.string().required("COMPANY NAME IS REQUIRED"),
      address1: Yup.string().required("ADDRESS 1 IS REQUIRED"),
      city: Yup.string().required("CITY IS REQUIRED"),
      address2: Yup.string().required("ADDRESS 2 IS REQUIRED"),
      state: Yup.string().required("STATE IS REQUIRED"),
      email: Yup.string()
        .email(" INVALID EMAIL ADDRESS")
        .required("EMAIL IS REQUIRED"),
      country: Yup.string().required("COUNTRY IS REQUIRED"),
      fax: Yup.string(),
      contactPerson: Yup.string().required("CONTACT PERSON IS REQUIRED"),
      gst: Yup.string().required("GST IS REQUIRED"),
      pan: Yup.string()
        .max(10, "NOT BE MORE THAN 10 CHARACTERS")
        .matches(/[A-Z]{5}[0-9]{4}[A-Z]/, "INVALID PAN format")
        .required("PAN IS REQUIRED"),
      cin: Yup.string().required("CIN IS REQUIRED"),
      pin: Yup.string().required("PIN IS REQUIRED"),
      licenseNumber: Yup.string(),
      // assetPrefix: Yup.string().required("AssetPrefix IS REQUIRED"),
      logo: Yup.string().required("COMPANY LOGO IS REQUIRED"),
    }),

    onSubmit: values => {
      console.log(values);
      //---------Creating Company Master--------------//

      // UploadFile(values.logo).then(res => {
      //   console.log(res);
      // });
      CreateCompanyMaster({
        idCom: 0,
        nmCom: values.companyname,
        add1: values.address1,
        add2: values.address2,
        city: values.city,
        country: values.country,
        pin: values.pin,
        licenseNo: values.licenseNumber,
        licenceDt: "",
        phone: values.phone,
        fax: values.fax,
        mailid: values.email,
        nmState: values.state,
        fileName: "",
        tin: "",
        cst: "",
        pan: values.pan,
        cin: "",
        gst: values.gst,
        dtRegister: new Date(),
        liEnddt: "",
        assetPrefix: "",
        nmContact: "",
      })
        .then(res => {
          console.log(res.status);
          if (res.status === 200) {
            toast("Form submitted successfully");
          } else {
            toast("Failed to submit form");
          }
        })
        .catch(err => {
          toast(err.message);
        });
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
        setLogoError("PLEASE CHOOSE A VALID IMAGE FILE(jpg, jpeg, png).");
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
      <ToastContainer />
      <>
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              COMPANY DETAILS
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
                          placeholder="PLEASE ENTER COMPANY NAME"
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
                          placeholder="PLEASE ENTER ADDRESS1"
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
                          placeholder="PLEASE ENTER CITY"
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
                          placeholder="PLEASE ENTER ADDRESS2 "
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
                          placeholder="PLEASE ENTER STATE"
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
                          placeholder="PLEASE ENTER VALID EMAIL"
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
                        <Label htmlFor="validationCustom07">PIN<font color="red">*</font></Label>
                        <Input
                          name="pin"
                          placeholder="PLEASE ENTER PIN"
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
                          placeholder="PLEASE ENTER COUNTRY"
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
                          placeholder="PLEASE ENTER  FAX"
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
                        <Label>PHONE NUMBER</Label>
                        <PhoneInput
                          inputStyle={{ width: "100%" }}
                          name="phone"
                          placeholder="PLEASE ENTER PHONE NUMBER"
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
                          placeholder="PLEASE ENTER CONTACT PERSON NAME"
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
                          placeholder="PLEASE ENTER GST"
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
                          placeholder="PLEASE ENTER PAN"
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
                          placeholder="PLEASE ENTER CIN"
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
                          placeholder="PLEASE ENTER LICENSE NUMBER"
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
                        <Label htmlFor="validationCustom16">LICENSE DATE</Label>
                        <Input
                          name="lidt"
                          placeholder="PLEASE ENTER LICENSE DATE"
                          type="text"
                          className="form-control"
                          value={validation.values.lidt}
                          onChange={handleChange}
                          onBlur={validation.handleBlur}
                        />
                      </FormGroup>
                    </Col>
                    <hr className="mb-2 mt-0" />
                  </Row>

                  <Row>
                    {/* <Col md="6">
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
                    </Col> */}

                    <Col md="12">
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
                        UPDATE
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
