import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
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
import {
  ApproveAssests,
  GetSingleAssests,
} from "src/API/Assest/AddTostore/Api";
import { useParams } from "react-router";

const ApproveNewAssetCreate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    GetSingleAssests(id).then(res => {
      console.log(res);
      console.log(res?.idinvm.idflr?.idbuilding?.nmbuilding);
      setResData(res);
    });
  }, []);

  const requiredFields = {
    assetId: "ASSET ID",
    typeOfProc: "TYPE OF PROCUREMENT",
    leaseStatus: "LEASE STATUS",
    amcStartDate: "AMC/WARRENTY START DATE ",
    amcEndDate: "AMC/WARRENTY END DATE",
    leaseStartDate: "LEASE START DATE",
    leaseStatus: "LEASE STATUS",
    leaseEndDate: "LEASE START DATE",
    license: "LICENSE ",
  };

  const initialFormData = {
    typeOfProc: "",
    amc: "",
    amcStartDate: "",
    amcEndDate: "",
    leaseStatus: "",
    leaseStartDate: "",
    leaseEndDate: "",
  };

  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });
  const handlelogoChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setErrors(prevErrors => ({
      ...prevErrors,
      attachImage: "",
    }));
    setFormData(prevData => ({
      ...prevData,
      attachImage: file,
    }));
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [showAmcDates, setShowAmcDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);
  const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
  const [status, setStatus] = useState("");

  const handleAssetTypeChange = event => {
    const { value } = event.target;
    setShowAdditionalInputs(value);
  };

  const renderAssetTypeContent = () => {
    switch (showAdditionalInputs) {
      case "ACCESSORIES":
        return (
          <div>
            <Card>
              <CardHeader>
                <h1 className="card-title" style={{ fontSize: "20px" }}>
                  CONFIGURATION{" "}
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
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="gb">DISK SPACE(GB)</Label>
                            <Input
                              type="text"
                              name="gb"
                              id="gb"
                              placeholder="PLEASE ENTER DISK SPACE"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.gb && validation.errors.gb
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.gb && validation.errors.gb ? (
                              <FormFeedback type="invalid">
                                {validation.errors.gb}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="mb">RAM(MB)</Label>
                            <Input
                              placeholder="PLEASE ENTER  RAM(MB)"
                              type="text"
                              name="mb"
                              id="mb"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.mb && validation.errors.mb
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.mb && validation.errors.mb ? (
                              <FormFeedback type="invalid">
                                {validation.errors.mb}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="os">OPERATING SYSTEM(OS)</Label>
                            <Input
                              type="text"
                              name="os"
                              id="os"
                              placeholder="PLEASE ENTER OPERATING SYSTEM"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.os && validation.errors.os
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.os && validation.errors.os ? (
                              <FormFeedback type="invalid">
                                {validation.errors.os}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="service">OS SERVICE TYPE </Label>
                            <Input
                              placeholder="PLEASE ENTER OS SERVICE TYPE   "
                              type="text"
                              name="service"
                              id="service"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.service &&
                                validation.errors.service
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.service &&
                            validation.errors.service ? (
                              <FormFeedback type="invalid">
                                {validation.errors.service}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        );
      case "IT":
        return (
          <div>
            <Card>
              <CardHeader>
                <h1 className="card-title" style={{ fontSize: "20px" }}>
                  CONFIGURATION{" "}
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
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="gb">DISK SPACE(GB)</Label>
                            <Input
                              type="text"
                              name="gb"
                              id="gb"
                              placeholder="PLEASE ENTER DISK SPACE"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.gb && validation.errors.gb
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.gb && validation.errors.gb ? (
                              <FormFeedback type="invalid">
                                {validation.errors.gb}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="mb">RAM(MB)</Label>
                            <Input
                              placeholder="PLEASE ENTER  RAM(MB)"
                              type="text"
                              name="mb"
                              id="mb"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.mb && validation.errors.mb
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.mb && validation.errors.mb ? (
                              <FormFeedback type="invalid">
                                {validation.errors.mb}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="os">OPERATING SYSTEM(OS)</Label>
                            <Input
                              type="text"
                              name="os"
                              id="os"
                              placeholder="PLEASE ENTER OPERATING SYSTEM"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.os && validation.errors.os
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.os && validation.errors.os ? (
                              <FormFeedback type="invalid">
                                {validation.errors.os}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="service">OS SERVICE TYPE </Label>
                            <Input
                              placeholder="PLEASE ENTER OS SERVICE TYPE   "
                              type="text"
                              name="service"
                              id="service"
                              className="form-control"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.service &&
                                validation.errors.service
                              }
                              style={{ textTransform: "uppercase" }}
                            ></Input>
                            {validation.touched.service &&
                            validation.errors.service ? (
                              <FormFeedback type="invalid">
                                {validation.errors.service}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={6}>
                          <Label for="attachImage">ATTACH IMAGE</Label>
                          <Input
                            type="file"
                            name="attachImage"
                            id="attachImage"
                            onChange={handlelogoChange}
                            accept="image/*"
                            invalid={!!errors.attachImage}
                            style={{ textTransform: "uppercase" }}
                          />
                          <span className="invalid-feedback">
                            {errors.attachImage}
                          </span>
                        </Col>
                        <Col md={6}>
                          {selectedFile && (
                            <img
                              src={URL.createObjectURL(selectedFile)}
                              alt="Selected"
                              style={{ maxWidth: "100%", maxHeight: "100px" }}
                            />
                          )}
                        </Col>
                        <hr className="mb-0 mt-3" />
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      model: resData?.idmodel?.nmmodel,
      matsubgroup: "",
      matgroup: "",
      assttype: "",
      quantity: resData?.qty,
      unit: resData?.unprc,
      tag: "",
      proc: "",
      loc: resData?.idinvm?.idflr?.idbuilding?.nmbuilding,
      dept: resData?.idinvm?.iddept?.nmdept,
      cost: resData?.idinvm?.idcc?.nmcc,
      remark: "",
      item: resData?.idmodel?.itemdesc,

      ponNumber: resData?.idinvm?.nopo,
      invoiceNumber: resData?.idinvm?.noinv,
      grnNumber: resData?.idinvm?.nogrn,
      dcNumber: resData?.idinvm?.nodc,
      vendor: resData?.idinvm?.idven?.nmven,
      poDate: resData?.idinvm?.dtpo,
      invoiceDate: resData?.idinvm?.dtinv,
      grnDate: resData?.idinvm?.dt_grn,
      dcDate: resData?.idinvm?.dtdc,
      upload: "",

      gb: "",
      mb: "",
      os: "",
      service: "",
    },

    validationSchema: Yup.object({
      // ponNumber: Yup.string().required("PO NUMBER IS REQUIRED"),
      // invoiceNumber: Yup.string().required("INVOICE NUMBER IS REQUIRED"),
      // invoiceDate: Yup.string().required(" INVOICE DATE IS REQUIRED"),
      // poDate: Yup.string().required("PO DATE IS REQUIRED"),
      // vendor: Yup.string().required("SUPPLIER IS REQUIRED"),

      // model: Yup.string().required("MATERIAL/MODEL  NAME IS REQUIRED"),
      // matsubgroup: Yup.string().required("MATERIAL SUB GROUP IS REQUIRED"),
      // matgroup: Yup.string().required("MATERIAL GROUP IS REQUIRED"),
      // assttype: Yup.string().required("ASSET TYPE IS REQUIRED"),
      // quantity: Yup.string().required("QUANTITY  IS REQUIRED"),
      // unit: Yup.string().required("UNIT PRICE  IS REQUIRED"),
      // tag: Yup.string().required("TAG IS REQUIRED"),
      // tag: Yup.string().required("TAG IS REQUIRED"),
      // proc: Yup.string().required("TYPE OF PROCRUMENT IS REQUIRED"),
      // loc: Yup.string().required("LOCATION IS REQUIRED"),
      // dept: Yup.string().required("DEPARTMENT IS REQUIRED"),
      // cost: Yup.string().required("COST CENTER REQUIRED"),
      remark: Yup.string().required("REMARKS IS REQUIRED"),
    }),
    onSubmit: values => {
      console.log("status,", resData?.idinv);
      ApproveAssests(resData?.idinv, status, values.remark)
        .then(res => {
          if (res.ok) {
            toast("Successfully Updated Assests");
            navigate("/approve_new_asset");
          } else {
            toast("Failed to Approve Assests");
          }
        })
        .catch(err => {
          toast(err);
        });
    },
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === "model" && value.trim() !== "") {
      setShowAdditionalInputs(true);
    } else {
      setShowAdditionalInputs(false);
    }

    validation.handleChange(event);
  };

  const handleCityNameKeyPress = event => {
    if (event.key === "Enter" && validation.values.cityname.trim() !== "") {
      setShowAdditionalInputs(true);
    }
  };
  const handleCreateClick = data => {
    setStatus(data);
    validation.validateForm().then(() => {
      validation.handleSubmit();
    });
  };

  const handleQuantityChange = event => {
    const { value } = event.target;
    validation.setFieldValue("quantity", value);
  };

  const handleFillFields = () => {
    const quantity = parseInt(validation.values.quantity, 10);
    const serialNos = [];
    const assetRefNos = [];

    for (let i = 0; i < quantity; i++) {
      serialNos.push(`serialNo${i}`);
      assetRefNos.push(`assetRefNo${i}`);
    }

    // Update formik state with populated values
    serialNos.forEach((serialNo, index) => {
      validation.setFieldValue(serialNo, `SA${index + 1}`);
    });

    assetRefNos.forEach((assetRefNo, index) => {
      validation.setFieldValue(assetRefNo, `NA${index + 1}`);
    });
  };

  const renderInputFields = () => {
    const quantity = parseInt(validation.values.quantity, 10);
    const inputs = [];

    inputs.push(
      <Row key="button">
        <Col md={12} className="d-flex justify-content-end">
          <Button onClick={handleFillFields} className="mb-1">
            DO NOT HAVE SERIAL NUMBER
          </Button>
        </Col>
      </Row>
    );

    for (let i = 0; i < quantity; i++) {
      inputs.push(
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row key={i} className="mb-2">
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor={`serialNo${i}`}>SERIAL NUMBER {i + 1}</Label>
                  <Input
                    name={`serialNo${i}`}
                    type="text"
                    placeholder={`ENTER SERIAL NUMBER ${i + 1}`}
                    className="form-control"
                    value={validation.values[`serialNo${i}`] || `SN`}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched[`serialNo${i}`] &&
                      validation.errors[`serialNo${i}`]
                    }
                  />
                  {validation.touched[`serialNo${i}`] &&
                    validation.errors[`serialNo${i}`] && (
                      <FormFeedback type="invalid">
                        {validation.errors[`serialNo${i}`]}
                      </FormFeedback>
                    )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Label htmlFor={`assetRefNo${i}`}>
                    ASSET REF NUMBER {i + 1}
                  </Label>
                  <Input
                    name={`assetRefNo${i}`}
                    type="text"
                    placeholder={`ENTER ASSET REF NUMBER ${i + 1}`}
                    className="form-control"
                    value={validation.values[`assetRefNo${i}`] || `NA`}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched[`assetRefNo${i}`] &&
                      validation.errors[`assetRefNo${i}`]
                    }
                  />
                  {validation.touched[`assetRefNo${i}`] &&
                    validation.errors[`assetRefNo${i}`] && (
                      <FormFeedback type="invalid">
                        {validation.errors[`assetRefNo${i}`]}
                      </FormFeedback>
                    )}
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }

    return inputs;
  };

  const handleDropdownChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "",
    }));
    if (name === "amc") {
      setShowAmcDates(value === "amc" || value === "warrenty");
    }
    if (name === "leaseStatus") {
      setShowLeaseDates(value === "underlease");
    }
    if (name === "license") {
      setShowLicenseDropdown(value === "Yes");
    }
    if (name === "assttype" && (value === "IT" || value === "SOFTWARE")) {
      setShowAdditionalInputs(true);
    } else {
      setShowAdditionalInputs(false);
    }
  };
  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                APPROVE NEW ASSET DETAILS{" "}
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
                          <Label htmlFor="model">
                            MATERIAL/MODEL NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="model"
                            type="text"
                            placeholder="PLEASE ENTER  MATERIAL/MODEL NAME"
                            className="form-control"
                            id="model"
                            value={validation.values.model}
                            onChange={handleInputChange}
                            onBlur={validation.handleBlur}
                            onKeyPress={handleCityNameKeyPress}
                            invalid={
                              validation.touched.model &&
                              validation.errors.model
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.model &&
                          validation.errors.model ? (
                            <FormFeedback type="invalid">
                              {validation.errors.model}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    {showAdditionalInputs && (
                      <React.Fragment>
                        <Row className="mb-1 mt-0">
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="matgroup">
                                MATERIAL GROUP<font color="red">*</font>
                              </Label>
                              <Input
                                type="select"
                                name="matgroup"
                                id="matgroup"
                                className="form-control"
                                value={validation.values.model}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.matgroup &&
                                  validation.errors.matgroup
                                }
                                style={{ textTransform: "uppercase" }}
                              >
                                <option value="">SELECT MATERIAL GROUP</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="automobile">Automobile</option>
                                <option value="cosmetics">Cosmetics</option>
                              </Input>
                              {validation.touched.matgroup &&
                              validation.errors.matgroup ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.matgroup}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>

                          <Col md={4}>
                            <FormGroup className="mb-0">
                              <Label htmlFor="matsubgroup">
                                MATERIAL SUB GROUP<font color="red">*</font>
                              </Label>
                              <Input
                                type="select"
                                name="matsubgroup"
                                id="matsubgroup"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.matsubgroup &&
                                  validation.errors.matsubgroup
                                }
                                style={{ textTransform: "uppercase" }}
                              >
                                <option value="">
                                  SELECT MATERIAL SUB GROUP
                                </option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="automobile">Automobile</option>
                                <option value="cosmetics">Cosmetics</option>
                              </Input>
                              {validation.touched.matsubgroup &&
                              validation.errors.matsubgroup ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.matsubgroup}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>

                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="assttype">
                                ASSET TYPE<font color="red">*</font>
                              </Label>
                              <Input
                                type="select"
                                name="assttype"
                                id="assttype"
                                className="form-control"
                                onChange={handleAssetTypeChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.assttype &&
                                  validation.errors.assttype
                                }
                                style={{ textTransform: "uppercase" }}
                              >
                                <option value="">SELECT ASSET TYPE</option>
                                <option value="IT">IT </option>
                                <option value="NON-IT">NON-IT</option>
                                <option value="SOFTWARE">SOFTWARE</option>
                                <option value="ACCESSORIES">ACCESSORIES</option>
                              </Input>
                              {validation.touched.assttype &&
                              validation.errors.assttype ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.assttype}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                        </Row>
                      </React.Fragment>
                    )}
                    <Row className="mb-1">
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="quantity">
                            QUANTITY<font color="red">*</font>
                          </Label>
                          <Input
                            type="number"
                            name="quantity"
                            placeholder="PLEASE ENTER QUANTITY"
                            id="quantity"
                            value={validation.values.quantity}
                            onChange={handleQuantityChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.quantity &&
                              !!validation.errors.quantity
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.quantity &&
                            validation.errors.quantity && (
                              <FormFeedback>
                                {validation.errors.quantity}
                              </FormFeedback>
                            )}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="unit">
                            UNIT PRICE<font color="red">*</font>
                          </Label>
                          <Input
                            name="unit"
                            type="text"
                            placeholder="PLEASE ENTER UNIT PRICE"
                            className="form-control"
                            id="unit"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.unit}
                            invalid={
                              validation.touched.unit && validation.errors.unit
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.unit && validation.errors.unit ? (
                            <FormFeedback type="invalid">
                              {validation.errors.unit}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* <Row className="mt-0">
                      <Col md={6}>
                        <Label for="amc">
                          AMC/WARRENTY<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="amc"
                          id="amc"
                          value={formData.amc}
                          onChange={handleDropdownChange}
                          invalid={!!errors.amc}
                        >
                          <option value="">SELECT AMC / WARRENTY</option>
                          <option value="no">NO</option>
                          <option value="amc">AMC</option>
                          <option value="warrenty">WARRENTY</option>
                        </Input>
                        <span className="invalid-feedback">{errors.amc}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="leaseStatus">
                          LEASE STATUS<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="leaseStatus"
                          id="leaseStatus"
                          value={formData.leaseStatus}
                          onChange={handleDropdownChange}
                          invalid={!!errors.leaseStatus}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT LEASE STATUS</option>
                          <option value="Notunderlease">NOT UNDER LEASE</option>
                          <option value="underlease">UNDER LEASE</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.leaseStatus}
                        </span>
                      </Col>

                      <Col md={6} className="mb-3 mt-2">
                        {showAmcDates && (
                          <>
                            <Label for="amcStartDate">
                              AMC/WARRENTY START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcStartDate"
                              id="amcStartDate"
                              placeholder="PLEASE ENTER AMC/WARRENTY START DATE"
                              value={formData.amcStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcStartDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.amcStartDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <Col md={6} className=" mt-2">
                        {showAmcDates && (
                          <>
                            <Label for="amcEndDate">
                              AMC/WARRENTY END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcEndDate"
                              id="amcEndDate"
                              placeholder="PLEASE ENTER AMC/WARRENTY END DATE"
                              value={formData.amcEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcEndDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.amcEndDate}
                            </span>
                          </>
                        )}
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      {showLeaseDates && (
                        <>
                          <Col md={6}>
                            <Label for="leaseStartDate">LEASE START DATE</Label>
                            <Input
                              type="date"
                              name="leaseStartDate"
                              id="leaseStartDate"
                              placeholder="PLEASE ENTER LEASE START DATE"
                              value={formData.leaseStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseStartDate}
                              style={{ textTransform: "uppercase" }}
                            />

                            <span className="invalid-feedback">
                              {errors.leaseStartDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <Label for="leaseEndDate">
                              LEASE END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseEndDate"
                              id="leaseEndDate"
                              placeholder="PLEASE ENTER LEASE END DATE"
                              value={formData.leaseEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseEndDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.leaseEndDate}
                            </span>
                          </Col>
                        </>
                      )}
                    </Row> */}
                    {/* <Row className="mb-1 mt-0">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="proc">
                            TYPE OF PROCUREMENT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="proc"
                            id="proc"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.proc && validation.errors.proc
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT TYPE OF PROCUREMENT</option>
                            <option value="group1">OUTRIGHT PURCHASE</option>
                            <option value="group2">LOAN BASIC</option>
                            <option value="group3">ADD-ON</option>
                          </Input>
                          {validation.touched.proc && validation.errors.proc ? (
                            <FormFeedback type="invalid">
                              {validation.errors.proc}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="tag">
                            TAGGABLE<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="tag"
                            id="tag"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.tag && validation.errors.tag
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT TAGGABLE OR NOT</option>
                            <option value="electronics">YES</option>
                            <option value="clothing">NO</option>
                          </Input>
                          {validation.touched.tag && validation.errors.tag ? (
                            <FormFeedback type="invalid">
                              {validation.errors.tag}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="loc">
                            LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            name="loc"
                            id="loc"
                            className="form-control"
                            value={validation.values.loc}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            placeholder="PLEASE ENTER LOCATION"
                            invalid={
                              validation.touched.loc && validation.errors.loc
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.loc && validation.errors.loc ? (
                            <FormFeedback type="invalid">
                              {validation.errors.loc}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="dept">
                            DEPARTMENT<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            name="dept"
                            id="dept"
                            className="form-control"
                            onChange={validation.handleChange}
                            value={validation.values.dept}
                            onBlur={validation.handleBlur}
                            placeholder="PLEASE ENTER DEPERTMENT"
                            invalid={
                              validation.touched.dept && validation.errors.dept
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.dept && validation.errors.dept ? (
                            <FormFeedback type="invalid">
                              {validation.errors.dept}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-1">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cost">
                            COST CENTER/PROJECT<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            name="cost"
                            id="cost"
                            className="form-control"
                            value={validation.values.cost}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            placeholder="PLEASE ENTER COST"
                            invalid={
                              validation.touched.cost && validation.errors.cost
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            {" "}
                          </Input>
                          {validation.touched.cost && validation.errors.cost ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cost}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="item">ITEM DESCRIPTION</Label>
                          <Input
                            type="text"
                            name="item"
                            id="item"
                            placeholder="PLEASE ENTER DESCRIPTION"
                            className="form-control"
                            onChange={validation.handleChange}
                            value={validation.values.item}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.item && validation.errors.item
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.item && validation.errors.item ? (
                            <FormFeedback type="invalid">
                              {validation.errors.item}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-1">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="remark">
                            REMARKS<font color="red">*</font>
                          </Label>
                          <Input
                            type="textarea"
                            name="remark"
                            id="remark"
                            placeholder="PLEASE ENTER DESCRIPTION"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.remark &&
                              validation.errors.remark
                            }
                            style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.remark &&
                          validation.errors.remark ? (
                            <FormFeedback type="invalid">
                              {validation.errors.remark}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardHeader className="mb-3">
                <h1 className="card-title" style={{ fontSize: "20px" }}>
                  INVOICE DETAILS{" "}
                </h1>
              </CardHeader>

              <Row className="justify-content-center">
                <Col xl={10}>
                  <Form
                    className="needs-validation"
                    onSubmit={validation.handleSubmit}
                  >
                    <Row className="mb-2">
                      <Col md={12}>
                        <Row className="mb-3">
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="ponNumber">
                                PO NUMBER<font color="red">*</font>
                              </Label>
                              <Input
                                type="text"
                                name="ponNumber"
                                placeholder="PLEASE ENTER PO NUMBER"
                                id="ponNumber"
                                className="form-control"
                                value={validation.values.ponNumber}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.ponNumber &&
                                  validation.errors.ponNumber
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.ponNumber &&
                              validation.errors.ponNumber ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.ponNumber}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>

                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="poDate">PO DATE</Label>
                              <Input
                                type="text"
                                name="poDate"
                                id="poDate"
                                value={validation.values.poDate}
                                placeholder="PLEASE ENTER PO DATE"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.poDate &&
                                  validation.errors.poDate
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.poDate &&
                              validation.errors.poDate ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.poDate}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="invoiceNumber">
                                INVOICE NUMBER<font color="red">*</font>
                              </Label>
                              <Input
                                placeholder="PLEASE ENTER INVOICE NUMBER"
                                type="text"
                                name="invoiceNumber"
                                value={validation.values.invoiceNumber}
                                id="invoiceNumber"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.invoiceNumber &&
                                  validation.errors.invoiceNumber
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.invoiceNumber &&
                              validation.errors.invoiceNumber ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.invoiceNumber}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row className="mb-3">
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="ponNumber">
                                INVOICE DATE<font color="red">*</font>
                              </Label>
                              <Input
                                type="text"
                                name="invoiceDate"
                                id="invoiceDate"
                                className="form-control"
                                value={validation.values.invoiceDate}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.invoiceDate &&
                                  validation.errors.invoiceDate
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.invoiceDate &&
                              validation.errors.invoiceDate ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.invoiceDate}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>

                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="grnNumber">GRN NUMBER</Label>
                              <Input
                                type="text"
                                name="grnNumber"
                                id="grnNumber"
                                placeholder="PLEASE ENTER GRN NUMBER"
                                className="form-control"
                                onChange={validation.handleChange}
                                value={validation.values.grnNumber}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.grnNumber &&
                                  validation.errors.grnNumber
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.grnNumber &&
                              validation.errors.grnNumber ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.grnNumber}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="grnDate">
                                GRN DATE<font color="red">*</font>
                              </Label>
                              <Input
                                type="text"
                                name="grnDate"
                                id="grnDate"
                                value={validation.values.grnDate}
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.grnDate &&
                                  validation.errors.grnDate
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.grnDate &&
                              validation.errors.grnDate ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.grnDate}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row className="mb-3">
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="dcNumber">
                                DC NUMBER<font color="red">*</font>
                              </Label>
                              <Input
                                type="text"
                                placeholder="PLEASE ENTER DC NUMBER"
                                name="dcNumber"
                                id="dcNumber"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.dcNumber}
                                invalid={
                                  validation.touched.dcNumber &&
                                  validation.errors.dcNumber
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.dcNumber &&
                              validation.errors.dcNumber ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.dcNumber}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>

                          <Col md={4}>
                            <FormGroup className="mb-1">
                              <Label htmlFor="dcDate">DC DATE</Label>
                              <Input
                                type="text"
                                name="dcDate"
                                id="dcDate"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.dcDate}
                                invalid={
                                  validation.touched.dcDate &&
                                  validation.errors.dcDate
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.dcDate &&
                              validation.errors.dcDate ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.dcDate}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup className="mb-3">
                              <Label htmlFor="vendor">
                                SUPPLIER<font color="red">*</font>
                              </Label>
                              <Input
                                type="text"
                                name="vendor"
                                id="vendor"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.vendor}
                                invalid={
                                  validation.touched.vendor &&
                                  validation.errors.vendor
                                }
                                style={{ textTransform: "uppercase" }}
                              ></Input>
                              {validation.touched.vendor &&
                              validation.errors.vendor ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.vendor}
                                </FormFeedback>
                              ) : null}
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={6}>
                            <Label for="attachImage">UPLOAD FILE</Label>
                            <Input
                              type="file"
                              name="attachImage"
                              id="attachImage"
                              onChange={handlelogoChange}
                              accept="image/*"
                              invalid={!!errors.attachImage}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.attachImage}
                            </span>
                          </Col>
                          <Col md={6}>
                            {selectedFile && (
                              <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected"
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "100px",
                                }}
                              />
                            )}
                          </Col>
                          <hr className="mb-0 mt-3" />
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
          {renderAssetTypeContent()}

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
                onClick={() => handleCreateClick("Approve")}
                className="btn btn-success-subtle border border-success"
                style={{
                  paddingTop: "10px",
                  height: "45px",
                  width: "80px",
                  marginRight: "30px",
                }}
              >
                APPROVE{" "}
              </Button>

              <Button
                type="submit"
                color="success-subtle"
                onClick={() => handleCreateClick("Reject")}
                className="btn btn-success-subtle border border-success"
                style={{
                  paddingTop: "10px",
                  height: "45px",
                  width: "80px",
                  marginRight: "30px",
                }}
              >
                REJECT{" "}
              </Button>
              <button
                type="button"
                className="btn btn-secondary-subtle border border-secondary"
                onClick={() => {
                  navigate("/approve_new_asset");
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
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ApproveNewAssetCreate;

// upload:"",
