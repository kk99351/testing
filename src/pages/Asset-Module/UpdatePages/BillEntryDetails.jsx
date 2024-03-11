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

const DisplayBillEntryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [Depts, setDepts] = useState([]);
  const [CostCenters, setCostCenters] = useState([]);

  const validationSchema = Yup.object().shape({
    no_order: Yup.string().required("Order Number is required"),
    dt_po: Yup.string().required("Order Date is required"),
    no_bill: Yup.string().required("Bill Number is required"),
    dtBill: Yup.string().required("Bill Date is required"),
    id_loc: Yup.string().required("Location is required"),
    id_subl: Yup.string().required("Sub-Location is required"),
    id_building: Yup.string().required("Building is required"),
    id_floor: Yup.string().required("Floor is required"),
    id_ven: Yup.string().required("Vendor is required"),
    id_dept: Yup.string().required("Department is required"),
    id_cc: Yup.string().required("Cost Center/Project is required"),

    lineItems: Yup.array().of(
      Yup.object().shape({
        id_prod: Yup.string().required("Model/Item is required"),
        typ_asst: Yup.string().required("Assets/Model Type is required"),
        id_grp: Yup.string().required("Category is required"),
        id_sgrp: Yup.string().required("Sub Category is required"),
        qty: Yup.number()
          .required("Quantity is required")
          .positive("Quantity must be positive")
          .integer("Quantity must be an integer"),
        un_prc: Yup.number()
          .required("Unit Price is required")
          .positive("Unit Price must be positive"),
        gr_tot: Yup.number()
          .required("Grand Total is required")
          .positive("Grand Total must be positive"),
      })
    ),
  });

  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/billEntryItems/${id}`
        );
        setFormData(response || {});
        setLoading(false);
      } catch (error) {
        console.error(`Error in API fetching user with ID ${id}:`, error);
        setLoading(false);
      }
    };

    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:3000/location");
        debugger;
        console.log("Location Data:", response);
        setLocations(response || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    const fetchVendor = async () => {
      try {
        const response = await axios.get("http://localhost:3000/vendor");
        debugger;
        console.log("Location Data:", response);
        setVendors(response || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    const fetchDept = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dept");
        debugger;
        console.log("Location Data:", response);
        setDepts(response || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    const fetchCostCenter = async () => {
      try {
        const response = await axios.get("http://localhost:3000/costcenter");
        debugger;
        console.log("costcenter Data:", response);
        setCostCenters(response || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchDataById();
    fetchLocations();
    fetchVendor();
    fetchDept();
    fetchCostCenter();
  }, [id]);

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

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [lineItems, setLineItems] = useState([
    {
      id_prod: "",
      typ_asst: "",
      id_grp: "",
      id_sgrp: "",
      qty: "",
      un_prc: "",
      gr_tot: "",
    },
    {
      id_prod: "",
      typ_asst: "",
      id_grp: "",
      id_sgrp: "",
      qty: "",
      un_prc: "",
      gr_tot: "",
    },
    {
      id_prod: "",
      typ_asst: "",
      id_grp: "",
      id_sgrp: "",
      qty: "",
      un_prc: "",
      gr_tot: "",
    },
  ]);
  const handleLineItemChange = (index, field, value) => {
    const updatedLineItems = [...lineItems];
    updatedLineItems[index][field] = value;
    setLineItems(updatedLineItems);
  };
  const renderLineItemFields = () => {
    return (
      <div>
        <h4 style={{ backgroundColor: "#f2f2f2" }}>
          <center>Line Item Details</center>
        </h4>
        <table
          className="table table-bordered"
          style={{ width: "-webkit-fill-available" }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "#f2f2f2" }}>Model/Item</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Assets/Model Type</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Category</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Sub Category</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Quantity</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Unit Price</th>
              <th style={{ backgroundColor: "#f2f2f2" }}>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    type="text"
                    id={`id_prod${index}`}
                    name={`id_prod${index}`}
                    value={item.id_prod}
                    onChange={e =>
                      handleLineItemChange(index, "id_prod", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`id_prod${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    id={`typ_asst${index}`}
                    name={`typ_asst${index}`}
                    value={item.typ_asst}
                    onChange={e =>
                      handleLineItemChange(index, "typ_asst", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`typ_asst${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    id={`id_grp${index}`}
                    name={`id_grp${index}`}
                    value={item.id_grp}
                    onChange={e =>
                      handleLineItemChange(index, "id_grp", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`id_grp${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    id={`id_sgrp${index}`}
                    name={`id_sgrp${index}`}
                    value={item.id_sgrp}
                    onChange={e =>
                      handleLineItemChange(index, "id_sgrp", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`id_sgrp${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    id={`qty${index}`}
                    name={`qty${index}`}
                    value={item.qty}
                    onChange={e =>
                      handleLineItemChange(index, "qty", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`qty${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    id={`un_prc${index}`}
                    name={`un_prc${index}`}
                    value={item.un_prc}
                    onChange={e =>
                      handleLineItemChange(index, "un_prc", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name={`un_prc${index}`}
                    component="div"
                    className="text-danger"
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    id={`gr_tot${index}`}
                    name={`gr_tot${index}`}
                    value={item.gr_tot}
                    onChange={e =>
                      handleLineItemChange(index, "gr_tot", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>Total Basic Price</td>
              <td>Tax 1</td>
              <td>Tax 2</td>
              <td>Tax 1 Value</td>
              <td>Tax 2 Value</td>
              <td>Total Price</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Input
                  type="number"
                  name="basic_price"
                  id="basic_price"
                  readOnly
                />
              </td>
              <td>
                <Input
                  type="select"
                  name="id_tax1"
                  id="id_tax1"
                  onChange={e => setTax1Value(e.target.value)}
                >
                  <option value="">Select Tax 1</option>
                  <option value="GST">GST</option>
                  <option value="VAT">VAT</option>
                  <option value="Service Tax">Service Tax</option>
                  {/* Add more tax options as needed */}
                </Input>
              </td>
              <td>
                <Input
                  type="select"
                  name="id_tax2"
                  id="id_tax2"
                  onChange={e => setTax2Value(e.target.value)}
                >
                  <option value="">Select Tax 2</option>
                  <option value="GST">GST</option>
                  <option value="VAT">VAT</option>
                  <option value="Service Tax">Service Tax</option>
                  {/* Add more tax options as needed */}
                </Input>
              </td>
              <td>
                <Input type="number" name="tax_val1" id="tax_val1" readOnly />
              </td>
              <td>
                <Input type="number" name="tax_val2" id="tax_val2" readOnly />
              </td>
              <td>
                <Input
                  type="number"
                  name="basic_price_tax"
                  id="basic_price_tax"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Input type="text" name="oter_text" id="oter_text" readOnly />
              </td>
              <td>
                <Input type="number" name="frt_text" id="frt_text" readOnly />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Discount</td>
              <td>
                <Input type="number" name="discount" id="discount" readOnly />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Grand Total</td>
              <td>
                <Input type="number" name="tot" id="tot" readOnly />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Card>
              <CardHeader>
                <h1 className="card-title" style={{ fontSize: "20px" }}>
                  Vendor Details
                </h1>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-center">
                  <Col xl={10}>
                    <Formik
                      initialValues={formData}
                      validationSchema={validationSchema}
                      onSubmit={handleUpdate}
                    >
                      {({ isSubmitting }) => (
                        <Form className="needs-validation" noValidate>
                          <Row className="mb-2">
                            <Col md={6}>
                              <Label for="no_order">
                                Order Number <font color="red">*</font>
                              </Label>
                              <Field
                                type="text"
                                name="no_order"
                                id="no_order"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="no_order"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="dt_po">
                                Order Date
                                <font color="red">*</font>
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
                            <Col md={6}>
                              <Label for="no_bill">
                                Bill Number
                                <font color="red">*</font>
                              </Label>
                              <Field
                                type="text"
                                name="no_bill"
                                id="no_bill"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="no_bill"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="dtBill">
                                Bill Date<font color="red">*</font>
                              </Label>
                              <Field
                                type="text"
                                name="dtBill"
                                id="dtBill"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="dtBill"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="id_loc">
                                Location<font color="red">*</font>
                              </Label>
                              <Field
                                as="select"
                                name="id_loc"
                                id="id_loc"
                                className="form-control"
                              >
                                <option value="">Select Location</option>
                                {locations.map(locations => (
                                  <option
                                    key={locations.id}
                                    value={locations.id}
                                  >
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
                              <Label for="id_subl">
                                Sub-Location<font color="red">*</font>
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
                            <Col md={6}>
                              <Label for="id_building">
                                Building<font color="red">*</font>
                              </Label>
                              <Field
                                type="text"
                                name="id_building"
                                id="id_building"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="id_building"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <Label for="id_floor">
                                Floor<font color="red">*</font>
                              </Label>
                              <Field
                                type="text"
                                name="id_floor"
                                id="id_floor"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="id_floor"
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
                                  <option
                                    key={CostCenters.id}
                                    value={CostCenters.id}
                                  >
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
                          <Row className="mb-2">
                            <Col md={12}>{renderLineItemFields()}</Col>
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
                                onClick={() => navigate("/bills_entry")}
                                disabled={isSubmitting}
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
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DisplayBillEntryDetails;
