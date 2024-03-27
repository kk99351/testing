// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Card,
//   CardBody,
//   CardHeader,
//   Label,
//   Input,
//   Button,
//   Row,
//   Col,
// } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Autosuggest from "react-autosuggest";

// const AddNewAsset = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [itemOptions, setItemOptions] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [showAMCDates, setShowAMCDates] = useState(false);
//   const [showLeaseDates, setShowLeaseDates] = useState(false);
//   const [locations, setLocations] = useState([]);
//   const [vendors, setVendors] = useState([]);
//   const [Depts, setDepts] = useState([]);
//   const [CostCenters, setCostCenters] = useState([]);

//   // Function to handle suggestion selection

//   // useEffect(() => {
//   //   // Fetch item data and set loading state
//   //   const fetchItems = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/items");
//   //       setItemOptions(response);
//   //       setLoading(false)
//   //     } catch (error) {
//   //       console.error("Error fetching items:", error);
//   //     }
//   //   };
//   //   const fetchLocations = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/location");
//   //       debugger;
//   //       console.log("Location Data:", response);
//   //       setLocations(response || []);
//   //     } catch (error) {
//   //       console.error("Error fetching locations:", error);
//   //     }
//   //   };

//   //   const fetchVendor = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/vendor");
//   //       debugger;
//   //       console.log("Location Data:", response);
//   //       setVendors(response || []);
//   //     } catch (error) {
//   //       console.error("Error fetching locations:", error);
//   //     }
//   //   };

//   //   const fetchDept = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/dept");
//   //       debugger;
//   //       console.log("Location Data:", response);
//   //       setDepts(response || []);
//   //     } catch (error) {
//   //       console.error("Error fetching locations:", error);
//   //     }
//   //   };

//   //   const fetchCostCenter = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/costcenter");
//   //       debugger;
//   //       console.log("costcenter Data:", response);
//   //       setCostCenters(response || []);
//   //     } catch (error) {
//   //       console.error("Error fetching locations:", error);
//   //     }
//   //   };

//   //   fetchItems();
//   //   fetchLocations();
//   //   fetchVendor();
//   //   fetchDept();
//   //   fetchCostCenter();

//   // }, []);

//   const getSuggestions = value => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;

//     if (!itemOptions || itemOptions.length === 0) {
//       return [];
//     }

//     return inputLength === 0
//       ? []
//       : itemOptions.filter(
//           item => item.name.toLowerCase().slice(0, inputLength) === inputValue
//         );
//   };

//   const renderSuggestion = suggestion => (
//     <div
//       style={{
//         padding: "8px 12px",
//         cursor: "pointer",
//         backgroundColor: "#f8f9fa",
//       }}
//     >
//       {suggestion.name}
//     </div>
//   );

//   const handleInputChange = (event, { newValue }) => {
//     setInputValue(newValue);
//   };

//   const onSuggestionsFetchRequested = ({ value }) => {
//     setSuggestions(getSuggestions(value));
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onSuggestionSelected = (event, { suggestion, method }) => {
//     // Set the flag to true indicating that a suggestion was selected
//     setIsSuggestionSelected(true);
//   };
//   const handleInputFocus = () => {
//     // When the input field is focused, assume the input is new
//     setIsSuggestionSelected(false);
//   };
//   const handleAMCChange = e => {
//     const { value } = e.target;
//     if (value !== "No") {
//       setShowAMCDates(true); // Show AMC dates if the value is not "No"
//     } else {
//       setShowAMCDates(false); // Hide AMC dates if the value is "No"
//     }
//   };
//   const handleLeaseChange = e => {
//     const { value } = e.target;
//     if (value === "UL") {
//       setShowLeaseDates(true); // Show Lease dates if the value is "UL"
//     } else {
//       setShowLeaseDates(false); // Hide Lease dates if the value is not "UL"
//     }
//   };
//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid>
//           {/* {loading ? (
//             <div>Loading...</div>
//           ) : ( */}
//           <Card>
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 Vendor Details
//               </h1>
//             </CardHeader>
//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <Formik>
//                     {({ isSubmitting }) => (
//                       <Form className="needs-validation" noValidate>
//                         <Row className="mb-2">
//                           <Col md={6}>
//                             <Label for="id_prod">
//                               Item<font color="red">*</font>
//                             </Label>
//                             <div>
//                               <Autosuggest
//                                 suggestions={suggestions}
//                                 onSuggestionsFetchRequested={
//                                   onSuggestionsFetchRequested
//                                 }
//                                 onSuggestionsClearRequested={
//                                   onSuggestionsClearRequested
//                                 }
//                                 getSuggestionValue={suggestion =>
//                                   suggestion.name
//                                 }
//                                 renderSuggestion={renderSuggestion}
//                                 inputProps={{
//                                   type: "text",
//                                   placeholder:
//                                     "Search or type to add new item...",
//                                   value: inputValue,
//                                   onChange: handleInputChange,
//                                   onFocus: handleInputFocus,
//                                   className: "form-control",
//                                   name: "nm_model",
//                                   id: "nm_model",
//                                 }}
//                                 onSuggestionSelected={onSuggestionSelected}
//                               />
//                             </div>
//                           </Col>
//                           <Col md={6}>
//                             <Label for="assignTo">
//                               Category<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_grp"
//                               id="id_grp"
//                               className="form-control"
//                             >
//                               <option value="">SELECT CATEGORY</option>
//                               <option value="1">LAPTOP</option>
//                               <option value="2">DESKTOP</option>
//                             </Field>
//                           </Col>
//                           <Col md={6}>
//                             <Label for="assignTo">
//                               Sub-Category<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_sgrp"
//                               id="id_sgrp"
//                               className="form-control"
//                             >
//                               <option value="">SELECT SUB-CATEGORY</option>
//                               <option value="1">DELL</option>
//                               <option value="2">HP</option>
//                             </Field>
//                           </Col>
//                           <Col md={6}>
//                             <Label for="assignTo">
//                               Asset Type<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_grp"
//                               id="id_grp"
//                               className="form-control"
//                             >
//                               <option value="">SELECT CATEGORY</option>
//                               <option value="1">IT</option>
//                               <option value="2">NON-IT</option>
//                               <option value="3">SOFTWARE</option>
//                               <option value="4">ACCESSORIES</option>
//                             </Field>
//                           </Col>
//                           <Col md={6}>
//                             <Label for="assignTo">
//                               Quantity<font color="red">*</font>
//                             </Label>
//                             <Field
//                               type="text"
//                               name="qty"
//                               id="qty"
//                               className="form-control"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="assignTo">
//                               Unit Price<font color="red">*</font>
//                             </Label>
//                             <Field
//                               type="text"
//                               name="val_asst"
//                               id="val_asst"
//                               className="form-control"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="tag">
//                               Taggable <font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="tag"
//                               id="tag"
//                               className="form-control"
//                             >
//                               <option value="">Select</option>
//                               <option value="Yes">Yes</option>
//                               <option value="No">No</option>
//                             </Field>
//                             <ErrorMessage
//                               name="tag"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="warr_amc">
//                               AMC / Warranty <font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="warr_amc"
//                               id="warr_amc"
//                               className="form-control"
//                               onChange={handleAMCChange}
//                             >
//                               <option value="No">No</option>
//                               <option value="Yes">Yes</option>
//                             </Field>
//                             <ErrorMessage
//                               name="warr_amc"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           {showAMCDates && ( // Render AMC dates only if showAMCDates is true
//                             <>
//                               <Col md={6}>
//                                 <Label for="dt_amc_start">
//                                   Start Date <font color="red">*</font>
//                                 </Label>
//                                 <Field
//                                   type="text"
//                                   name="dt_amc_start"
//                                   id="dt_amc_start"
//                                   className="form-control"
//                                 />
//                                 <ErrorMessage
//                                   name="dt_amc_start"
//                                   component="div"
//                                   className="text-danger"
//                                 />
//                               </Col>
//                               <Col md={6}>
//                                 <Label for="dt_amc_exp">
//                                   End Date <font color="red">*</font>
//                                 </Label>
//                                 <Field
//                                   type="text"
//                                   name="dt_amc_exp"
//                                   id="dt_amc_exp"
//                                   className="form-control"
//                                 />
//                                 <ErrorMessage
//                                   name="dt_amc_exp"
//                                   component="div"
//                                   className="text-danger"
//                                 />
//                               </Col>
//                             </>
//                           )}
//                           <Col md={6}>
//                             <Label for="st_lease">
//                               Lease Status <font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="st_lease"
//                               id="st_lease"
//                               className="form-control"
//                               onChange={handleLeaseChange}
//                             >
//                               <option value="NUL">Not Under Lease</option>
//                               <option value="UL">Under Lease</option>
//                             </Field>
//                             <ErrorMessage
//                               name="st_lease"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="typ_proc">
//                               Lease Status <font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="typ_proc"
//                               id="typ_proc"
//                               className="form-control"
//                               readOnly
//                             >
//                               <option value="">Select</option>
//                               <option value="OP">Outright Purchase</option>
//                               <option value="LB">Loan Basis</option>
//                               <option value="FOC">Add-On</option>
//                             </Field>
//                             <ErrorMessage
//                               name="typ_proc"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           {showLeaseDates && ( // Render Lease dates only if showLeaseDates is true
//                             <>
//                               <Col md={6}>
//                                 <Label for="std_lease">
//                                   Lease Start Date <font color="red">*</font>
//                                 </Label>
//                                 <Field
//                                   type="text"
//                                   name="std_lease"
//                                   id="std_lease"
//                                   className="form-control"
//                                 />
//                                 <ErrorMessage
//                                   name="std_lease"
//                                   component="div"
//                                   className="text-danger"
//                                 />
//                               </Col>
//                               <Col md={6}>
//                                 <Label for="endt_lease">
//                                   Lease End Date <font color="red">*</font>
//                                 </Label>
//                                 <Field
//                                   type="text"
//                                   name="endt_lease"
//                                   id="endt_lease"
//                                   className="form-control"
//                                 />
//                                 <ErrorMessage
//                                   name="endt_lease"
//                                   component="div"
//                                   className="text-danger"
//                                 />
//                               </Col>
//                             </>
//                           )}
//                           <Col md={6}>
//                             <Label for="id_floor">
//                               Floor<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_loc"
//                               id="id_loc"
//                               className="form-control"
//                             >
//                               <option value="">Select Location</option>
//                               {locations.map(locations => (
//                                 <option key={locations.id} value={locations.id}>
//                                   {locations.nm_loc}
//                                 </option>
//                               ))}
//                             </Field>
//                             <ErrorMessage
//                               name="id_loc"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="id_ven">
//                               Vendor<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_ven"
//                               id="id_ven"
//                               className="form-control"
//                             >
//                               <option value="">Select Vendor</option>
//                               {vendors.map(vendors => (
//                                 <option key={vendors.id} value={vendors.id}>
//                                   {vendors.nm_ven}
//                                 </option>
//                               ))}
//                             </Field>
//                             <ErrorMessage
//                               name="id_ven"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Label for="id_dept">
//                               Department<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_dept"
//                               id="id_dept"
//                               className="form-control"
//                             >
//                               <option value="">Select Department</option>
//                               {Depts.map(Depts => (
//                                 <option key={Depts.id} value={Depts.id}>
//                                   {Depts.nm_dept}
//                                 </option>
//                               ))}
//                             </Field>
//                             <ErrorMessage
//                               name="id_dept"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>

//                           <Col md={6}>
//                             <Label for="id_cc">
//                               Cost Center/Project<font color="red">*</font>
//                             </Label>
//                             <Field
//                               as="select"
//                               name="id_cc"
//                               id="id_cc"
//                               className="form-control"
//                             >
//                               <option value="">Select Cost Center</option>
//                               {CostCenters.map(CostCenters => (
//                                 <option
//                                   key={CostCenters.id}
//                                   value={CostCenters.id}
//                                 >
//                                   {CostCenters.nm_cc}
//                                 </option>
//                               ))}
//                             </Field>
//                             <ErrorMessage
//                               name="id_cc"
//                               component="div"
//                               className="text-danger"
//                             />
//                           </Col>
//                         </Row>
//                         {/* Your remaining form fields and buttons... */}
//                       </Form>
//                     )}
//                   </Formik>
//                 </Col>
//               </Row>
//             </CardBody>
//           </Card>
//           {/* )} */}
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default AddNewAsset;
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

const CityCreate = () => {
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [showAmcDates, setShowAmcDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);
  const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);

  // State to manage visibility of additional input fields
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      model: "",
      matsubgroup: "",
      matgroup: "",
      assttype: "",
      qyt: "",
      unit: "",
      tag: "",
      proc: "",
      loc: "",
      dept: "",
      cost: "",
      remark: "",
      item: "",
    },

    validationSchema: Yup.object({
      model: Yup.string().required("MATERIAL/MODEL NAME NAME IS REQUIRED"),
      matsubgroup: Yup.string().required("MATERIAL SUB GROUP IS REQUIRED"),
      matgroup: Yup.string().required("MATERIAL GROUP IS REQUIRED"),
      assttype: Yup.string().required("ASSET TYPE IS REQUIRED"),
      qyt: Yup.string().required("QUANTITY  IS REQUIRED"),
      unit: Yup.string().required("UNIT PRICE  IS REQUIRED"),
      tag: Yup.string().required("TAG IS REQUIRED"),
      tag: Yup.string().required("TAG IS REQUIRED"),
      proc: Yup.string().required("TYPE OF PROCRUMENT IS REQUIRED"),
      loc: Yup.string().required("LOCATION IS REQUIRED"),
      dept: Yup.string().required("DEPARTMENT IS REQUIRED"),
      cost: Yup.string().required("COST CENTER REQUIRED"),
      remark: Yup.string().required("REMARKS IS REQUIRED"),
    }),
    onSubmit: values => {
      alert("form validated !");
      //console.log("values", values);
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
    // Check if AMC or Warranty is selected
    if (name === "amc") {
      setShowAmcDates(value === "amc" || value === "warrenty");
    }
    // Check if Lease Status is selected
    if (name === "leaseStatus") {
      setShowLeaseDates(value === "underlease");
    }
    if (name === "license") {
      setShowLicenseDropdown(value === "Yes");
    }
  };
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ADD NEW ASSET{" "}
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
                            onChange={handleInputChange}
                            onBlur={validation.handleBlur}
                            onKeyPress={handleCityNameKeyPress}
                            invalid={
                              validation.touched.model &&
                              validation.errors.model
                            }
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
                        <Row className="mb-2">
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
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.matgroup &&
                                  validation.errors.matgroup
                                }
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
                            <FormGroup className="mb-3">
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
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.assttype &&
                                  validation.errors.assttype
                                }
                              >
                                <option value="">SELECT ASSET TYPE</option>
                                <option value="United States">IT </option>
                                <option value="United Kingdom">NON-IT</option>
                                <option value="United Kingdom">SOFTWARE</option>
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
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="qyt">
                            QUANTITY<font color="red">*</font>
                          </Label>
                          <Input
                            name="qyt"
                            type="number"
                            placeholder="PLEASE ENTER QUANTITY"
                            className="form-control"
                            id="qyt"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.qyt && validation.errors.qyt
                            }
                          />
                          {validation.touched.qyt && validation.errors.qyt ? (
                            <FormFeedback type="invalid">
                              {validation.errors.qyt}
                            </FormFeedback>
                          ) : null}
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
                            invalid={
                              validation.touched.unit && validation.errors.unit
                            }
                          />
                          {validation.touched.unit && validation.errors.unit ? (
                            <FormFeedback type="invalid">
                              {validation.errors.unit}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
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
                      <Col md={6}>
                        <Label for="amc">AMC/WARRENTY</Label>
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
                            />
                            <span className="invalid-feedback">
                              {errors.amcStartDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <Col md={6}>
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
                            />
                            <span className="invalid-feedback">
                              {errors.amcEndDate}
                            </span>
                          </>
                        )}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
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
                        >
                          <option value="">SELECT LEASE STATUS</option>
                          <option value="Notunderlease">NOT UNDER LEASE</option>
                          <option value="underlease">UNDER LEASE</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.leaseStatus}
                        </span>
                      </Col>
                      {showLeaseDates && (
                        <>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="leaseStartDate">
                              LEASE START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseStartDate"
                              id="leaseStartDate"
                              placeholder="PLEASE ENTER LEASE START DATE"
                              value={formData.leaseStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseStartDate}
                            />
                            <span className="invalid-feedback">
                              {errors.leaseStartDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
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
                            />
                            <span className="invalid-feedback">
                              {errors.leaseEndDate}
                            </span>
                          </Col>
                        </>
                      )}
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
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
                          <Label htmlFor="loc">
                            LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="loc"
                            id="loc"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.loc && validation.errors.loc
                            }
                          >
                            <option value="">SELECT LOCATION</option>
                            <option value="group1">OUTRIGHT PURCHASE</option>
                            <option value="group2">LOAN BASIC</option>
                            <option value="group3">ADD-ON</option>
                          </Input>
                          {validation.touched.loc && validation.errors.loc ? (
                            <FormFeedback type="invalid">
                              {validation.errors.loc}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="dept">
                            DEPARTMENT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="dept"
                            id="dept"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.dept && validation.errors.dept
                            }
                          >
                            <option value="">SELECT DEPARTMENT</option>
                            <option value="group1">OUTRIGHT PURCHASE</option>
                            <option value="group2">LOAN BASIC</option>
                            <option value="group3">ADD-ON</option>
                          </Input>
                          {validation.touched.dept && validation.errors.dept ? (
                            <FormFeedback type="invalid">
                              {validation.errors.dept}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cost">
                            COST CENTER/PROJECT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cost"
                            id="cost"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cost && validation.errors.cost
                            }
                          >  <option value="">SELECT  COST CENTER/PROJECT</option>
                          <option value="group1">OUTRIGHT PURCHASE</option>
                          <option value="group2">LOAN BASIC</option>
                          <option value="group3">ADD-ON</option>
                       </Input>
                          {validation.touched.cost && validation.errors.cost ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cost}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                    <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="item">
                            ITEM DESCRIPTION
                          </Label>
                          <Input
                            type="text"
                            name="item"
                            id="item"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.item && validation.errors.item
                            }
                          ></Input>
                          {validation.touched.item && validation.errors.item ? (
                            <FormFeedback type="invalid">
                              {validation.errors.item}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="remark">
                            REMARKS<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            name="remark"
                            id="remark"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.remark && validation.errors.remark
                            }
                          ></Input>
                          {validation.touched.remark && validation.errors.remark ? (
                            <FormFeedback type="invalid">
                              {validation.errors.remark}
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
                          CREATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/city");
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

export default CityCreate;
