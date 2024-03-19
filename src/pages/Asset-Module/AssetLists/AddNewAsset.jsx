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
import Autosuggest from 'react-autosuggest';

const AddNewAsset = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [itemOptions, setItemOptions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showAMCDates, setShowAMCDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);
  const [locations, setLocations] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [Depts, setDepts] = useState([]);
  const [CostCenters, setCostCenters] = useState([]);

// Function to handle suggestion selection

  // useEffect(() => {
  //   // Fetch item data and set loading state
  //   const fetchItems = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/items");
  //       setItemOptions(response);
  //       setLoading(false)
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   };
  //   const fetchLocations = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/location");
  //       debugger;
  //       console.log("Location Data:", response);
  //       setLocations(response || []);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };

  //   const fetchVendor = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/vendor");
  //       debugger;
  //       console.log("Location Data:", response);
  //       setVendors(response || []);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };

  //   const fetchDept = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/dept");
  //       debugger;
  //       console.log("Location Data:", response);
  //       setDepts(response || []);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };

  //   const fetchCostCenter = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/costcenter");
  //       debugger;
  //       console.log("costcenter Data:", response);
  //       setCostCenters(response || []);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };

  //   fetchItems();
  //   fetchLocations();
  //   fetchVendor();
  //   fetchDept();
  //   fetchCostCenter();

    
  // }, []);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (!itemOptions || itemOptions.length === 0) {
      return [];
    }

    return inputLength === 0 ? [] : itemOptions.filter(item =>
      item.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const renderSuggestion = (suggestion) => (
    <div
      style={{
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#f8f9fa',
      }}
    >
      {suggestion.name}
    </div>
  );
  

  const handleInputChange = (event, { newValue }) => {
    setInputValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion, method }) => {
    // Set the flag to true indicating that a suggestion was selected
    setIsSuggestionSelected(true);
  };
  const handleInputFocus = () => {
    // When the input field is focused, assume the input is new
    setIsSuggestionSelected(false);
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
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <Card>
              <CardHeader>
                <h1 className="card-title" style={{ fontSize: "20px" }}>
                  Vendor Details
                </h1>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-center">
                  <Col xl={10}>
                    <Formik>
                      {({ isSubmitting }) => (
                        <Form className="needs-validation" noValidate>
                          <Row className="mb-2">
                            <Col md={6}>
                              <Label for="id_prod">
                                Item<font color="red">*</font>
                              </Label>
                              <div>
                              <Autosuggest
  suggestions={suggestions}
  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
  onSuggestionsClearRequested={onSuggestionsClearRequested}
  getSuggestionValue={suggestion => suggestion.name}
  renderSuggestion={renderSuggestion}
  inputProps={{
    type: 'text',
    placeholder: 'Search or type to add new item...',
    value: inputValue,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    className: 'form-control',
    name: 'nm_model',
    id: 'nm_model'
  }}
  onSuggestionSelected={onSuggestionSelected}
/>
                              </div>
                            </Col>
                            <Col md={6}>
                        <Label for="assignTo">
                          Category<font color="red">*</font>
                        </Label>
                        <Field
                          as="select"
                          name="id_grp"
                          id="id_grp"
                          className="form-control"
                        >
                          <option value="">SELECT CATEGORY</option>
                          <option value="1">LAPTOP</option>
                          <option value="2">DESKTOP</option>
                        </Field>
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          Sub-Category<font color="red">*</font>
                        </Label>
                        <Field
                          as="select"
                          name="id_sgrp"
                          id="id_sgrp"
                          className="form-control"
                        >
                          <option value="">SELECT SUB-CATEGORY</option>
                          <option value="1">DELL</option>
                          <option value="2">HP</option>
                        </Field>
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          Asset Type<font color="red">*</font>
                        </Label>
                        <Field
                          as="select"
                          name="id_grp"
                          id="id_grp"
                          className="form-control"
                        >
                          <option value="">SELECT CATEGORY</option>
                          <option value="1">IT</option>
                          <option value="2">NON-IT</option>
                          <option value="3">SOFTWARE</option>
                          <option value="4">ACCESSORIES</option>
                        </Field>
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          Quantity<font color="red">*</font>
                        </Label>
                        <Field
                          type="text"
                          name="qty"
                          id="qty"
                          className="form-control"
                        />
                      </Col>
                      <Col md={6}>
                        <Label for="assignTo">
                          Unit Price<font color="red">*</font>
                        </Label>
                        <Field
                          type="text"
                          name="val_asst"
                          id="val_asst"
                          className="form-control"
                        />
                      </Col>
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
                            {showLeaseDates && ( // Render Lease dates only if showLeaseDates is true
  <>
    <Col md={6}>
                                  <Label for="std_lease">
                                  Lease Start Date <font color="red">*</font>
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
  </>
)}
<Col md={6}>
                              <Label for="id_floor">
                                Floor<font color="red">*</font>
                              </Label>
                              <Field
                                as="select"
                                name="id_loc"
                                id="id_loc"
                                className="form-control"
                              >
                                <option value="">Select Location</option>
                                {locations.map(locations => (
                                  <option key={locations.id} value={locations.id}>
                                    {locations.nm_loc}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="id_loc"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="id_ven">
                                Vendor<font color="red">*</font>
                              </Label>
                              <Field
                                as="select"
                                name="id_ven"
                                id="id_ven"
                                className="form-control"
                                >
                                <option value="">Select Vendor</option>
                                {vendors.map(vendors => (
                                  <option key={vendors.id} value={vendors.id}>
                                    {vendors.nm_ven}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="id_ven"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="id_dept">
                                Department<font color="red">*</font>
                              </Label>
                              <Field
                                as="select"
                                name="id_dept"
                                id="id_dept"
                                className="form-control"
                                >
                                <option value="">Select Department</option>
                                {Depts.map(Depts => (
                                  <option key={Depts.id} value={Depts.id}>
                                    {Depts.nm_dept}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="id_dept"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            
                            <Col md={6}>
                              <Label for="id_cc">
                                Cost Center/Project<font color="red">*</font>
                              </Label>
                              <Field
                                as="select"
                                name="id_cc"
                                id="id_cc"
                                className="form-control"
                                >
                                <option value="">Select Cost Center</option>
                                {CostCenters.map(CostCenters => (
                                  <option key={CostCenters.id} value={CostCenters.id}>
                                    {CostCenters.nm_cc}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="id_cc"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                          </Row>
                          {/* Your remaining form fields and buttons... */}
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          {/* )} */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNewAsset;
