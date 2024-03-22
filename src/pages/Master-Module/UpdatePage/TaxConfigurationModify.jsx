// import React, { useState } from "react";
// import {
//   Col,
//   Row,
//   CardBody,
//   CardHeader,
//   Card,
//   Label,
//   Input,
//   Button,
//   Container,
// } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TaxConfigurationCreate = () => {
//   const navigate = useNavigate();
//     const requiredFields = {
//         nmTax1: "Tax 1 Name",
//         perTax1: "Tax 1 Percentage",
//         nmTax2: "Tax 2 Name",
//         perTax2: "Tax 2 Percentage",
//         // taxCode: "",
//         totalTaxPer: "Tax Total Percentage",
//     };
//     const initialFormData = {};
// const initialErrors = {};
// Object.keys(requiredFields).forEach(key => {
//     initialFormData[key] = "";
//     initialErrors[key] = "";
// });

// const [formData, setFormData] = useState(initialFormData);
// const [errors, setErrors] = useState(initialErrors);

//     const handleInputChange = e => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             [name]: "",
//         }));
//     };

//     const handleDropdownChange = e => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             [name]: "",
//         }));
//     };

//     const CreateHandle = async e => {
//         e.preventDefault();
//         let isValid = true;

//         Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
//             if (!formData[fieldName].trim()) {
//                 setErrors(prevErrors => ({
//                     ...prevErrors,
//                     [fieldName]: `${fieldLabel} is required`,
//                 }));
//                 isValid = false;
//             }
//         });

//         if (isValid) {
//             try {
//                 // await axios.post(`http://localhost:3000/region/`, formData);
//                 // navigate("/company_group");
//                 console.log("Form submitted successfully");
//             } catch (error) {
//                 console.log("error in creating group data" + error);
//             }
//         }
//     };

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card className="mt-5">
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 TAX CONFIGURATION DETAILS
//               </h1>
//             </CardHeader>
//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <form className="needs-validation" noValidate>
//                   <Row className="mb-2">
//                       <Col md={6}>
//                         <Label for="nmTax1">
//                           TAX 1 NAME<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="text"
//                           name="nmTax1"
//                           id="nmTax1"
//                           value={formData.nmTax1}
//                           onChange={handleInputChange}
//                           invalid={!!errors.nmTax1}
//                         />
//                         <span className="text-danger">{errors.nmTax1}</span>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="nmTax2">
//                           TAX 2 NAME<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="text"
//                           name="nmTax2"
//                           id="nmTax2"
//                           value={formData.nmTax2}
//                           onChange={handleInputChange}
//                           invalid={!!errors.nmTax2}
//                         />
//                         <span className="text-danger">{errors.nmTax2}</span>
//                       </Col>
//                       <hr className="mb-0 mt-3" />
//                     </Row>
//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <Label for="perTax1">
//                           TAX 1 PERCENTAGE<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="text"
//                           name="perTax1"
//                           id="perTax1"
//                           value={formData.perTax1}
//                           onChange={handleInputChange}
//                           invalid={!!errors.perTax1}
//                         />
//                         <span className="text-danger">{errors.perTax1}</span>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="perTax2">
//                           TAX 2 PERCENTAGE<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="text"
//                           name="perTax2"
//                           id="perTax2"
//                           value={formData.perTax2}
//                           onChange={handleInputChange}
//                           invalid={!!errors.perTax2}
//                         />
//                         <span className="text-danger">{errors.perTax2}</span>
//                       </Col>
//                       <hr className="mb-0 mt-3" />
//                     </Row>
//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <Label for="taxCode">
//                           TAX CODE
//                         </Label>
//                         <Input
//                           type="text"
//                           name="taxCode"
//                           id="taxCode"
//                           value={formData.taxCode}
//                           onChange={handleInputChange}
//                           invalid={!!errors.taxCode}
//                         />
//                         <span className="text-danger">{errors.taxCode}</span>
//                       </Col>
//                       <Col md={6}>
//                         <Label for="totalTaxPer">
//                           TOTAL TAX PERCENTAGE<font color="red">*</font>
//                         </Label>
//                         <Input
//                           type="text"
//                           name="totalTaxPer"
//                           id="totalTaxPer"
//                           value={formData.totalTaxPer}
//                           onChange={handleInputChange}
//                           invalid={!!errors.totalTaxPer}
//                         />
//                         <span className="text-danger">{errors.totalTaxPer}</span>
//                       </Col>
//                       <hr className="mb-0 mt-3" />
//                     </Row>
// <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   }}
// >
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-around",
//     }}
//   >
//     <button
//       type="button"
//       className="btn btn-success-subtle border border-success"
//       onClick={CreateHandle}
//       style={{
//         paddingTop: "10px",
//         height: "45px",
//         width: "80px",
//         marginRight: "30px",
//       }}
//     >
//       <Label>CREATE</Label>
//     </button>
//     <button
//       type="button"
//       className="btn btn-secondary-subtle border border-secondary"
//       onClick={() => {
//         navigate("/tax_details");
//       }}
// style={{
//   paddingTop: "10px",
//   width: "80px",
//   height: "45px",
// }}
//     >
//       <Label>BACK</Label>
//     </button>
//   </div>
// </div>
//                   </form>
//                 </Col>
//               </Row>
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default TaxConfigurationCreate;
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
  CardBody,
  CardHeader,
  Container,
  Card,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const TaxConfigurationModify = () => {
  const navigate = useNavigate();

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
      taxname: "",
      rate: "",
      taxtype: "",
    },

    validationSchema: Yup.object({
      taxname: Yup.string().required("TAX NAME IS REQUIRED"),
      rate: Yup.string().required("TAX RATE IS REQUIRED"),
      taxtype: Yup.string().required("TAX TYPE IS REQUIRED"),

    }),
    onSubmit: async values => {
      alert("form validated !");
      console.log("values", values);
    },
  });

  return (
    <React.Fragment>
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
                            validation.touched.taxtype && validation.errors.taxtype
                          }                        >
                          <option value="">SELECT TAX TYPE</option>
                          <option value="CGST">CGST</option>
                          <option value="SGST">SGST</option>
                          <option value="IGST">IGST</option>
                          <option value="UTGST">UTGST</option>
                          <option value="CESS">CESS</option>
                        </Input>
                        {validation.touched.taxtype && validation.errors.taxtype ? (
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
