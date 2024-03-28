// // // // // // // import React, { useState } from "react";
// // // // // // // import {
// // // // // // //   Col,
// // // // // // //   Row,
// // // // // // //   CardBody,
// // // // // // //   CardHeader,
// // // // // // //   Card,
// // // // // // //   Label,
// // // // // // //   Input,
// // // // // // //   Button,
// // // // // // //   Container,
// // // // // // // } from "reactstrap";
// // // // // // // import axios from "axios";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const FinancialYearModify = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const requiredFields = {
// // // // // // //     stDate: "Start Date",
// // // // // // //     // endDate: "",
// // // // // // //     // halfstDate: "",
// // // // // // //     // halfendDate: "",
// // // // // // //     // secStDate: "",
// // // // // // //     // secEndDate: "",
// // // // // // //   };
// // // // // // //   const initialFormData = {};
// // // // // // //   const initialErrors = {};
// // // // // // //   Object.keys(requiredFields).forEach(key => {
// // // // // // //     initialFormData[key] = "";
// // // // // // //     initialErrors[key] = "";
// // // // // // //   });

// // // // // // //   const [formData, setFormData] = useState(initialFormData);
// // // // // // //   const [errors, setErrors] = useState(initialErrors);

// // // // // // //   const handleInputChange = e => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData(prevData => ({
// // // // // // //       ...prevData,
// // // // // // //       [name]: value,
// // // // // // //     }));
// // // // // // //     setErrors(prevErrors => ({
// // // // // // //       ...prevErrors,
// // // // // // //       [name]: "",
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleDropdownChange = e => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData(prevData => ({
// // // // // // //       ...prevData,
// // // // // // //       [name]: value,
// // // // // // //     }));
// // // // // // //     setErrors(prevErrors => ({
// // // // // // //       ...prevErrors,
// // // // // // //       [name]: "",
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const UpdateHandle = async e => {
// // // // // // //     e.preventDefault();
// // // // // // //     let isValid = true;

// // // // // // //     Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
// // // // // // //       if (!formData[fieldName].trim()) {
// // // // // // //         setErrors(prevErrors => ({
// // // // // // //           ...prevErrors,
// // // // // // //           [fieldName]: `${fieldLabel} is required`,
// // // // // // //         }));
// // // // // // //         isValid = false;
// // // // // // //       }
// // // // // // //     });

// // // // // // //     if (isValid) {
// // // // // // //       try {
// // // // // // //         // await axios.post(`http://localhost:3000/region/`, formData);
// // // // // // //         // navigate("/company_group");
// // // // // // //         console.log("Form submitted successfully");
// // // // // // //       } catch (error) {
// // // // // // //         console.log("error in creating group data" + error);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <React.Fragment>
// // // // // // //       <Container fluid>
// // // // // // //         <div className="page-content">
// // // // // // //           <Card className="mt-5">
// // // // // // //             <CardHeader>
// // // // // // //               <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // // //                 FINANCIAL YEAR DETAILS
// // // // // // //               </h1>
// // // // // // //             </CardHeader>
// // // // // // //             <CardBody>
// // // // // // //               <Row className="justify-content-center">
// // // // // // //                 <Col xl={10}>
// // // // // // //                   <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // // //                     FINANCIAL YEAR
// // // // // // //                   </h1>
// // // // // // //                   <hr className="mb-0 mt-2" />

// // // // // // //                   <form className="needs-validation" noValidate>
// // // // // // //                     <Row className="mb-2">
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="stDate">
// // // // // // //                           START DATE<font color="red">*</font>
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="stDate"
// // // // // // //                           id="stDate"
// // // // // // //                           value={formData.nmTax1}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.stDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">{errors.stDate}</span>
// // // // // // //                       </Col>
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="endDate">
// // // // // // //                           END DATE
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="endDate"
// // // // // // //                           id="endDate"
// // // // // // //                           value={formData.endDate}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.endDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">{errors.endDate}</span>
// // // // // // //                       </Col>
// // // // // // //                     </Row>
// // // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // // //                       FIRST HALF YEAR
// // // // // // //                     </h1>
// // // // // // //                     <hr className="mb-0 mt-2" />
// // // // // // //                     <Row className="mb-2">
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="halfstDate">
// // // // // // //                           START DATE
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="halfstDate"
// // // // // // //                           id="halfstDate"
// // // // // // //                           value={formData.halfstDate}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.halfstDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">{errors.halfstDate}</span>
// // // // // // //                       </Col>
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="halfendDate">
// // // // // // //                           END DATE
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="halfendDate"
// // // // // // //                           id="halfendDate"
// // // // // // //                           value={formData.halfendDate}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.halfendDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">{errors.halfendDate}</span>
// // // // // // //                       </Col>
// // // // // // //                     </Row>
// // // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // // //                       SECOND HALF YEAR
// // // // // // //                     </h1>{" "}
// // // // // // //                     <hr className="mb-0 mt-2" />
// // // // // // //                     <Row className="mb-2">
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="secStDate">
// // // // // // //                           START DATE
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="secStDate"
// // // // // // //                           id="secStDate"
// // // // // // //                           value={formData.secStDate}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.secStDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">{errors.secStDate}</span>
// // // // // // //                       </Col>
// // // // // // //                       <Col md={6}>
// // // // // // //                         <Label for="secEndDate">
// // // // // // //                           END DATE
// // // // // // //                         </Label>
// // // // // // //                         <Input
// // // // // // //                           type="date"
// // // // // // //                           name="secEndDate"
// // // // // // //                           id="secEndDate"
// // // // // // //                           value={formData.secEndDate}
// // // // // // //                           onChange={handleInputChange}
// // // // // // //                           invalid={!!errors.secEndDate}
// // // // // // //                         />
// // // // // // //                         <span className="text-danger">
// // // // // // //                           {errors.secEndDate}
// // // // // // //                         </span>
// // // // // // //                       </Col>
// // // // // // //                       <hr className="mb-0 mt-3 mb-2" />
// // // // // // //                     </Row>
// // // // // // //                     <div
// // // // // // //                       style={{
// // // // // // //                         display: "flex",
// // // // // // //                         justifyContent: "center",
// // // // // // //                         marginBottom: "20px",
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       <div
// // // // // // //                         style={{
// // // // // // //                           display: "flex",
// // // // // // //                           alignItems: "center",
// // // // // // //                           justifyContent: "space-around",
// // // // // // //                         }}
// // // // // // //                       >
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           className="btn btn-success-subtle border border-success"
// // // // // // //                           onClick={UpdateHandle}
// // // // // // //                           style={{
// // // // // // //                             paddingTop: "10px",
// // // // // // //                             height: "45px",
// // // // // // //                             width: "80px",
// // // // // // //                             marginRight: "30px",
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Label>UPDATE</Label>
// // // // // // //                         </button>
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           className="btn btn-secondary-subtle border border-secondary"
// // // // // // //                           onClick={() => {
// // // // // // //                             navigate("/financial_year");
// // // // // // //                           }}
// // // // // // //                           style={{
// // // // // // //                             paddingTop: "10px",
// // // // // // //                             width: "80px",
// // // // // // //                             height: "45px",
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Label>BACK</Label>
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </form>
// // // // // // //                 </Col>
// // // // // // //               </Row>
// // // // // // //             </CardBody>
// // // // // // //           </Card>
// // // // // // //         </div>
// // // // // // //       </Container>
// // // // // // //     </React.Fragment>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default FinancialYearModify;
// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   Col,
// // // // // //   Row,
// // // // // //   CardBody,
// // // // // //   CardHeader,
// // // // // //   Card,
// // // // // //   Label,
// // // // // //   Input,
// // // // // //   Button,
// // // // // //   Container,
// // // // // // } from "reactstrap";
// // // // // // import axios from "axios";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const FinancialYearCreate = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const requiredFields = {
// // // // // //     stDate: "Start Date",
// // // // // //   };
// // // // // //   const initialFormData = {};
// // // // // //   const initialErrors = {};
// // // // // //   Object.keys(requiredFields).forEach(key => {
// // // // // //     initialFormData[key] = "";
// // // // // //     initialErrors[key] = "";
// // // // // //   });

// // // // // //   const [formData, setFormData] = useState(initialFormData);
// // // // // //   const [errors, setErrors] = useState(initialErrors);

// // // // // //   const handleInputChange = e => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData(prevData => ({
// // // // // //       ...prevData,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //     setErrors(prevErrors => ({
// // // // // //       ...prevErrors,
// // // // // //       [name]: "",
// // // // // //     }));

// // // // // //     if (name === "stDate") {
// // // // // //       const startDate = new Date(value);
// // // // // //       const endDate = new Date(startDate.getFullYear() + 1, 2, 31); // March 31st of the next year
// // // // // //       const firstHalfEndDate = new Date(startDate.getFullYear(), 8, 30); // September 30th of the same year
// // // // // //       const secondHalfStartDate = new Date(startDate.getFullYear(), 9, 1); // October 1st of the same year

// // // // // //       setFormData(prevData => ({
// // // // // //         ...prevData,
// // // // // //         endDate: formatDate(endDate),
// // // // // //         halfstDate: formatDate(startDate),
// // // // // //         halfendDate: formatDate(firstHalfEndDate),
// // // // // //         secStDate: formatDate(secondHalfStartDate),
// // // // // //         secEndDate: formatDate(endDate),
// // // // // //       }));
// // // // // //     } else if (name === "pstDate") {
// // // // // //       const parentStartDate = new Date(value);
// // // // // //       const parentEndDate = new Date(parentStartDate.getFullYear() + 1, 2, 31); // March 31st of the next year
// // // // // //       const parentFirstHalfEndDate = new Date(parentStartDate.getFullYear(), 8, 30); // September 30th of the same year
// // // // // //       const parentSecondHalfStartDate = new Date(parentStartDate.getFullYear(), 9, 1); // October 1st of the same year

// // // // // //       setFormData(prevData => ({
// // // // // //         ...prevData,
// // // // // //         pstDate: formatDate(parentStartDate),
// // // // // //         pendDate: formatDate(parentEndDate),
// // // // // //         phalfstDate: formatDate(parentStartDate),
// // // // // //         phalfendDate: formatDate(parentFirstHalfEndDate),
// // // // // //         psecStDate: formatDate(parentSecondHalfStartDate),
// // // // // //         psecEndDate: formatDate(parentEndDate),
// // // // // //       }));
// // // // // //     }
// // // // // //   };

// // // // // //   const formatDate = date => {
// // // // // //     return date.toISOString().split("T")[0];
// // // // // //   };

// // // // // //   const CreateHandle = async e => {
// // // // // //     e.preventDefault();
// // // // // //     let isValid = true;

// // // // // //     Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
// // // // // //       if (!formData[fieldName].trim()) {
// // // // // //         setErrors(prevErrors => ({
// // // // // //           ...prevErrors,
// // // // // //           [fieldName]: `${fieldLabel} is required`,
// // // // // //         }));
// // // // // //         isValid = false;
// // // // // //       }
// // // // // //     });

// // // // // //     if (isValid) {
// // // // // //       try {
// // // // // //         // await axios.post(`http://localhost:3000/region/`, formData);
// // // // // //         // navigate("/company_group");
// // // // // //         console.log("Form submitted successfully");
// // // // // //       } catch (error) {
// // // // // //         console.log("error in creating group data" + error);
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <React.Fragment>
// // // // // //       <Container fluid>
// // // // // //         <div className="page-content">
// // // // // //           <Card className="mt-5">
// // // // // //             <CardHeader>
// // // // // //               <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                 FINANCIAL YEAR DETAILS
// // // // // //               </h1>
// // // // // //             </CardHeader>
// // // // // //             <CardBody>
// // // // // //               <Row className="justify-content-center">
// // // // // //                 <Col xl={10}>
// // // // // //                   <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                     FINANCIAL YEAR
// // // // // //                   </h1>
// // // // // //                   <hr className="mb-0 mt-2" />

// // // // // //                   <form className="needs-validation" noValidate>
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="stDate">
// // // // // //                           START DATE<font color="red">*</font>
// // // // // //                         </Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="stDate"
// // // // // //                           id="stDate"
// // // // // //                           value={formData.stDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.stDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.stDate}</span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="endDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="endDate"
// // // // // //                           id="endDate"
// // // // // //                           value={formData.endDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.endDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.endDate}</span>
// // // // // //                       </Col>
// // // // // //                     </Row>
// // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                       FIRST HALF YEAR
// // // // // //                     </h1>
// // // // // //                     <hr className="mb-0 mt-2" />
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="halfstDate">START DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="halfstDate"
// // // // // //                           id="halfstDate"
// // // // // //                           value={formData.halfstDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.halfstDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.halfstDate}</span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="halfendDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="halfendDate"
// // // // // //                           id="halfendDate"
// // // // // //                           value={formData.halfendDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.halfendDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">
// // // // // //                           {errors.halfendDate}
// // // // // //                         </span>
// // // // // //                       </Col>
// // // // // //                     </Row>
// // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                       SECOND HALF YEAR
// // // // // //                     </h1>{" "}
// // // // // //                     <hr className="mb-0 mt-2" />
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="secStDate">START DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="secStDate"
// // // // // //                           id="secStDate"
// // // // // //                           value={formData.secStDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.secStDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.secStDate}</span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="secEndDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="secEndDate"
// // // // // //                           id="secEndDate"
// // // // // //                           value={formData.secEndDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.secEndDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.secEndDate}</span>
// // // // // //                       </Col>
// // // // // //                       <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     </Row>
// // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                       PARENT FINANCIAL YEAR
// // // // // //                     </h1>
// // // // // //                     <hr className="mb-0 mt-2" />
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="pstDate">
// // // // // //                           START DATE<font color="red">*</font>
// // // // // //                         </Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="pstDate"
// // // // // //                           id="pstDate"
// // // // // //                           value={formData.pstDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.pstDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.pstDate}</span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="pendDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="pendDate"
// // // // // //                           id="pendDate"
// // // // // //                           value={formData.pendDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.pendDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.pendDate}</span>
// // // // // //                       </Col>
// // // // // //                     </Row>
// // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                       PARENT FIRST HALF YEAR
// // // // // //                     </h1>
// // // // // //                     <hr className="mb-0 mt-2" />
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="phalfstDate">START DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="phalfstDate"
// // // // // //                           id="phalfstDate"
// // // // // //                           value={formData.phalfstDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.phalfstDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">
// // // // // //                           {errors.phalfstDate}
// // // // // //                         </span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="phalfendDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="phalfendDate"
// // // // // //                           id="phalfendDate"
// // // // // //                           value={formData.phalfendDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.phalfendDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">
// // // // // //                           {errors.phalfendDate}
// // // // // //                         </span>
// // // // // //                       </Col>
// // // // // //                     </Row>
// // // // // //                     <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     <h1 className="card-title" style={{ fontSize: "20px" }}>
// // // // // //                       SECOND HALF YEAR
// // // // // //                     </h1>{" "}
// // // // // //                     <hr className="mb-0 mt-2" />
// // // // // //                     <Row className="mb-2">
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="psecStDate">START DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="psecStDate"
// // // // // //                           id="psecStDate"
// // // // // //                           value={formData.psecStDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.psecStDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">{errors.psecStDate}</span>
// // // // // //                       </Col>
// // // // // //                       <Col md={6}>
// // // // // //                         <Label for="psecEndDate">END DATE</Label>
// // // // // //                         <Input
// // // // // //                           type="date"
// // // // // //                           name="psecEndDate"
// // // // // //                           id="psecEndDate"
// // // // // //                           value={formData.psecEndDate}
// // // // // //                           onChange={handleInputChange}
// // // // // //                           invalid={!!errors.psecEndDate}
// // // // // //                         />
// // // // // //                         <span className="text-danger">
// // // // // //                           {errors.psecEndDate}
// // // // // //                         </span>
// // // // // //                       </Col>
// // // // // //                       <hr className="mb-0 mt-3 mb-2" />
// // // // // //                     </Row>
// // // // // //                     <div
// // // // // //                       style={{
// // // // // //                         display: "flex",
// // // // // //                         justifyContent: "center",
// // // // // //                         marginBottom: "20px",
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       <div
// // // // // //                         style={{
// // // // // //                           display: "flex",
// // // // // //                           alignItems: "center",
// // // // // //                           justifyContent: "space-around",
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         <Button
// // // // // //                           type="button"
// // // // // //                           className="btn btn-success-subtle border border-success"
// // // // // //                           onClick={CreateHandle}
// // // // // //                           style={{
// // // // // //                             paddingTop: "10px",
// // // // // //                             height: "45px",
// // // // // //                             width: "80px",
// // // // // //                             marginRight: "30px",
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           CREATE
// // // // // //                         </Button>
// // // // // //                         <Button
// // // // // //                           type="button"
// // // // // //                           className="btn btn-secondary-subtle border border-secondary"
// // // // // //                           onClick={() => {
// // // // // //                             navigate("/financial_year");
// // // // // //                           }}
// // // // // //                           style={{
// // // // // //                             paddingTop: "10px",
// // // // // //                             width: "80px",
// // // // // //                             height: "45px",
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           BACK
// // // // // //                         </Button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </form>
// // // // // //                 </Col>
// // // // // //               </Row>
// // // // // //             </CardBody>
// // // // // //           </Card>
// // // // // //         </div>
// // // // // //       </Container>
// // // // // //     </React.Fragment>
// // // // // //   );
// // // // // // };

// // // // // // export default FinancialYearCreate;
// // // // // import React, { useState } from "react";
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import {
// // // // //   Col,
// // // // //   Row,
// // // // //   FormFeedback,
// // // // //   CardBody,
// // // // //   CardHeader,
// // // // //   Card,
// // // // //   Label,
// // // // //   Input,
// // // // //   Form,
// // // // //   Container,
// // // // //   InputGroup,
// // // // // } from "reactstrap";
// // // // // import "flatpickr/dist/themes/material_blue.css";
// // // // // import Flatpickr from "react-flatpickr";
// // // // // import * as Yup from "yup";
// // // // // import { useFormik } from "formik";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const FinancialYearCreate = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const validation = useFormik({
// // // // //     enableReinitialize: true,
// // // // //     initialValues: {
// // // // //       fs: "",
// // // // //       month: "",
// // // // //     },

// // // // //     validationSchema: Yup.object({
// // // // //       fs: Yup.string().required("Financial year start date is required"),
// // // // //       month: Yup.number().required("Month is required"),
// // // // //     }),

// // // // //     onSubmit: async values => {
// // // // //       alert("Validated");
// // // // //     },
// // // // //   });

// // // // //   const handleChange = (selectedDates, dateString, instance) => {
// // // // //     if (instance.input.name === "fs") {
// // // // //       const startDate = new Date(dateString);
// // // // //       const endDate = new Date(
// // // // //         startDate.getFullYear() + 1,
// // // // //         startDate.getMonth(),
// // // // //         startDate.getDate()
// // // // //       );
// // // // //       const sixMonthsLater = new Date(
// // // // //         startDate.getFullYear(),
// // // // //         startDate.getMonth() + 6,
// // // // //         startDate.getDate()
// // // // //       );

// // // // //       validation.setValues({
// // // // //         ...validation.values,
// // // // //         fs: dateString,
// // // // //         fs1: startDate.toISOString().slice(0, 10),
// // // // //         fs2: sixMonthsLater.toISOString().slice(0, 10),
// // // // //         fe: endDate.toISOString().slice(0, 10),
// // // // //         fe1: new Date(
// // // // //           sixMonthsLater.getFullYear(),
// // // // //           sixMonthsLater.getMonth(),
// // // // //           sixMonthsLater.getDate() + 1
// // // // //         )
// // // // //           .toISOString()
// // // // //           .slice(0, 10),
// // // // //         fe2: endDate.toISOString().slice(0, 10),
// // // // //       });
// // // // //     } else if (instance.input.name === "fe") {
// // // // //       const endDate = new Date(dateString);
// // // // //       const nextDay = new Date(
// // // // //         endDate.getFullYear(),
// // // // //         endDate.getMonth(),
// // // // //         endDate.getDate() + 1
// // // // //       );

// // // // //       validation.setValues({
// // // // //         ...validation.values,
// // // // //         fe: dateString,
// // // // //         fe1: nextDay.toISOString().slice(0, 10),
// // // // //         fe2: endDate.toISOString().slice(0, 10),
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleChangep = (selectedDates, dateString, instance) => {
// // // // //     if (instance.input.name === "pfs") {
// // // // //       const startDate = new Date(dateString);
// // // // //       const endDate = new Date(
// // // // //         startDate.getFullYear() + 1,
// // // // //         startDate.getMonth(),
// // // // //         startDate.getDate()
// // // // //       );
// // // // //       const sixMonthsLater = new Date(
// // // // //         startDate.getFullYear(),
// // // // //         startDate.getMonth() + 6,
// // // // //         startDate.getDate()
// // // // //       );

// // // // //       validation.setValues({
// // // // //         ...validation.values,
// // // // //         pfs: dateString,
// // // // //         pfs1: startDate.toISOString().slice(0, 10),
// // // // //         pfs2: sixMonthsLater.toISOString().slice(0, 10),
// // // // //         pfe: endDate.toISOString().slice(0, 10),
// // // // //         pfe1: new Date(
// // // // //           sixMonthsLater.getFullYear(),
// // // // //           sixMonthsLater.getMonth(),
// // // // //           sixMonthsLater.getDate() + 1
// // // // //         )
// // // // //           .toISOString()
// // // // //           .slice(0, 10),
// // // // //         pfe2: endDate.toISOString().slice(0, 10),
// // // // //       });
// // // // //     } else if (instance.input.name === "pfe") {
// // // // //       const endDate = new Date(dateString);
// // // // //       const nextDay = new Date(
// // // // //         endDate.getFullYear(),
// // // // //         endDate.getMonth(),
// // // // //         endDate.getDate() + 1
// // // // //       );

// // // // //       validation.setValues({
// // // // //         ...validation.values,
// // // // //         pfe: dateString,
// // // // //         pfe1: nextDay.toISOString().slice(0, 10),
// // // // //         pfe2: endDate.toISOString().slice(0, 10),
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const [month, setMonth] = useState();
// // // // //   const handleMonthChange = e => {
// // // // //     setMonth(e.target.value);
// // // // //     validation.setFieldValue("month", e.target.value);
// // // // //     if (!validation.values.fs) {
// // // // //       toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// // // // //       setMonth("")
// // // // //       return;
// // // // //     }

// // // // //     const newMonth = parseInt(e.target.value);
// // // // //     setMonth(newMonth);

// // // // //     if (isNaN(newMonth)) {
// // // // //       toast.warn("INVALID MONTH");
// // // // //       return;
// // // // //     }
// // // // //     if (newMonth < -12 || newMonth > 12) {
// // // // //       toast.warn("MONTH LIMIT EXCEEDS");
// // // // //       return;
// // // // //     }

// // // // //     const startDate = new Date(validation.values.fs);
// // // // //     const newPfsDate = new Date(
// // // // //       startDate.getFullYear(),
// // // // //       startDate.getMonth() + newMonth,
// // // // //       startDate.getDate()
// // // // //     );

// // // // //     validation.setValues({
// // // // //       ...validation.values,
// // // // //       pfs: newPfsDate.toISOString().slice(0, 10),
// // // // //     });
// // // // //     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// // // // //       input: { name: "pfs" },
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <React.Fragment>
// // // // //       <Container fluid>
// // // // //         <div className="page-content">
// // // // //           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
// // // // //             <Card>
// // // // //               <CardBody>
// // // // //                 <CardHeader className="p-1">
// // // // //                   <h3>
// // // // //                     FINANCIAL YEAR CHILD
// // // // //                   </h3>
// // // // //                 </CardHeader>

// // // // //                 <Row>
// // // // //                   <Row>
// // // // //                     <Col md={2}></Col>
// // // // //                     <Col md={6} className="d-flex justify-content-center">
// // // // //                       FINANCIAL YEAR<font color="red">*</font>
// // // // //                     </Col>
// // // // //                     <Col md={2} className="d-flex justify-content-center">
// // // // //                       FIRST HALF
// // // // //                     </Col>
// // // // //                     <Col md={2} className="d-flex justify-content-center">
// // // // //                       SECOND HALF
// // // // //                     </Col>
// // // // //                   </Row>
// // // // //                   <Row className="m-2">
// // // // //                     <Col md={2}>
// // // // //                       <Label for="stDate">
// // // // //                         <h5>START DATE</h5>
// // // // //                       </Label>
// // // // //                     </Col>
// // // // //                     <Col md={6}>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         name="fs"
// // // // //                         onChange={handleChange}
// // // // //                         value={validation.values.fs}
// // // // //                         onBlur={validation.handleBlur}
// // // // //                         invalid={validation.touched.fs && validation.errors.fs}
// // // // //                       />
// // // // //                       {validation.touched.fs && validation.errors.fs ? (
// // // // //                         <div className="text-danger">
// // // // //                           {validation.errors.fs}
// // // // //                         </div>
// // // // //                       ) : null}
// // // // //                     </Col>
// // // // //                     <Col md={2}>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         name="pfs1"
// // // // //                         value={validation.values.fs1}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </Col>
// // // // //                     <Col md={2}>
// // // // //                       <InputGroup>
// // // // //                         <Flatpickr
// // // // //                           placeholder="dd M,yyyy"
// // // // //                           options={{
// // // // //                             altInput: true,
// // // // //                             altFormat: "F j, Y",
// // // // //                             dateFormat: "Y-m-d",
// // // // //                           }}
// // // // //                           name="pfs2"
// // // // //                           value={validation.values.fs2}
// // // // //                           disabled={true}
// // // // //                         />
// // // // //                       </InputGroup>
// // // // //                     </Col>
// // // // //                   </Row>

// // // // //                   <Row className="m-2">
// // // // //                     <Col md={2}>
// // // // //                       <Label>
// // // // //                         <h5>END DATE</h5>
// // // // //                       </Label>
// // // // //                     </Col>
// // // // //                     <Col md={6}>
// // // // //                       <InputGroup>
// // // // //                         <Flatpickr
// // // // //                           placeholder="dd M,yyyy"
// // // // //                           options={{
// // // // //                             altInput: true,
// // // // //                             altFormat: "F j, Y",
// // // // //                             dateFormat: "Y-m-d",
// // // // //                           }}
// // // // //                           onChange={handleChange}
// // // // //                           value={validation.values.fe}
// // // // //                           disabled={true}
// // // // //                         />
// // // // //                       </InputGroup>
// // // // //                     </Col>

// // // // //                     <Col md={2}>
// // // // //                       <InputGroup>
// // // // //                         <Flatpickr
// // // // //                           placeholder="dd M,yyyy"
// // // // //                           options={{
// // // // //                             altInput: true,
// // // // //                             altFormat: "F j, Y",
// // // // //                             dateFormat: "Y-m-d",
// // // // //                           }}
// // // // //                           value={validation.values.fe1}
// // // // //                           disabled={true}
// // // // //                         />
// // // // //                       </InputGroup>
// // // // //                     </Col>
// // // // //                     <Col md={2}>
// // // // //                       <InputGroup>
// // // // //                         <Flatpickr
// // // // //                           placeholder="dd M,yyyy"
// // // // //                           options={{
// // // // //                             altInput: true,
// // // // //                             altFormat: "F j, Y",
// // // // //                             dateFormat: "Y-m-d",
// // // // //                           }}
// // // // //                           name="fe2"
// // // // //                           value={validation.values.fe2}
// // // // //                           disabled={true}
// // // // //                         />
// // // // //                       </InputGroup>
// // // // //                     </Col>
// // // // //                   </Row>
// // // // //                 </Row>
// // // // //               </CardBody>
// // // // //             </Card>

// // // // //             {/* parent */}
// // // // //             <Card>
// // // // //               <Row className="d-flex justify-content-center m-2">
// // // // //                 <Col md={2}>
// // // // //                   <Label className="mt-1">
// // // // //                     <h3>MONTH GAP <font color="red">*</font></h3>
// // // // //                   </Label>
// // // // //                 </Col>
// // // // //                 <Col md={1}>
// // // // //                   <Input
// // // // //                     type="number"
// // // // //                     id="month"
// // // // //                     onChange={handleMonthChange}
// // // // //                     value={month}
// // // // //                     onBlur={validation.handleBlur}
// // // // //                     invalid={
// // // // //                       validation.touched.month && validation.errors.month
// // // // //                     }
// // // // //                   />
// // // // //                   {validation.touched.month && validation.errors.month ? (
// // // // //                     <FormFeedback type="invalid">
// // // // //                       {validation.errors.month}
// // // // //                     </FormFeedback>
// // // // //                   ) : null}
// // // // //                 </Col>
// // // // //               </Row>
// // // // //             </Card>
// // // // //             <Card>
// // // // //               <CardBody>
// // // // //                 <CardHeader className="p-1">
// // // // //                   <h3>
// // // // //                     FINANCIAL YEAR PARENT
// // // // //                   </h3>
// // // // //                 </CardHeader>

// // // // //                 <Row>
// // // // //                   <Col md={2}></Col>
// // // // //                   <Col md={6} className="d-flex justify-content-center">
// // // // //                     FINANCIAL YEAR
// // // // //                   </Col>
// // // // //                   <Col md={2} className="d-flex justify-content-center">
// // // // //                     FIRST HALF
// // // // //                   </Col>
// // // // //                   <Col md={2} className="d-flex justify-content-center">
// // // // //                     SECOND HALF
// // // // //                   </Col>
// // // // //                 </Row>
// // // // //                 <Row className="m-2">
// // // // //                   <Col md={2}>
// // // // //                     <Label for="stDate">
// // // // //                       <h5>START DATE</h5>
// // // // //                     </Label>
// // // // //                   </Col>
// // // // //                   <Col md={6}>
// // // // //                     <InputGroup>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         name="pfs"
// // // // //                         onChange={handleChangep}
// // // // //                         value={validation.values.pfs}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </InputGroup>
// // // // //                   </Col>

// // // // //                   <Col md={2}>
// // // // //                     <Flatpickr
// // // // //                       placeholder="dd M,yyyy"
// // // // //                       options={{
// // // // //                         altInput: true,
// // // // //                         altFormat: "F j, Y",
// // // // //                         dateFormat: "Y-m-d",
// // // // //                       }}
// // // // //                       name="pfs1"
// // // // //                       value={validation.values.pfs1}
// // // // //                       disabled={true}
// // // // //                     />
// // // // //                   </Col>
// // // // //                   <Col md={2}>
// // // // //                     <InputGroup>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         name="pfs2"
// // // // //                         value={validation.values.pfs2}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </InputGroup>
// // // // //                   </Col>
// // // // //                 </Row>

// // // // //                 <Row className="m-2">
// // // // //                   <Col md={2}>
// // // // //                     <Label>
// // // // //                       <h5>
// // // // //                         END DATE<font color="red">*</font>
// // // // //                       </h5>
// // // // //                     </Label>
// // // // //                   </Col>
// // // // //                   <Col md={6}>
// // // // //                     <InputGroup>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         onChange={handleChangep}
// // // // //                         value={validation.values.pfe}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </InputGroup>
// // // // //                   </Col>

// // // // //                   <Col md={2}>
// // // // //                     <InputGroup>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         value={validation.values.pfe1}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </InputGroup>
// // // // //                   </Col>
// // // // //                   <Col md={2}>
// // // // //                     <InputGroup>
// // // // //                       <Flatpickr
// // // // //                         placeholder="dd M,yyyy"
// // // // //                         options={{
// // // // //                           altInput: true,
// // // // //                           altFormat: "F j, Y",
// // // // //                           dateFormat: "Y-m-d",
// // // // //                         }}
// // // // //                         name="fe2"
// // // // //                         value={validation.values.pfe2}
// // // // //                         disabled={true}
// // // // //                       />
// // // // //                     </InputGroup>
// // // // //                   </Col>
// // // // //                 </Row>

// // // // //                 <div
// // // // //                   style={{
// // // // //                     display: "flex",
// // // // //                     justifyContent: "center",
// // // // //                     marginBottom: "10px",
// // // // //                     marginTop: "10px",
// // // // //                   }}
// // // // //                 >
// // // // //                   <div
// // // // //                     style={{
// // // // //                       display: "flex",
// // // // //                       alignItems: "center",
// // // // //                       justifyContent: "space-around",
// // // // //                     }}
// // // // //                   >
// // // // //                     <button
// // // // //                       type="submit"
// // // // //                       className="btn btn-success-subtle border border-success"
// // // // //                       style={{
// // // // //                         paddingTop: "10px",
// // // // //                         height: "45px",
// // // // //                         width: "80px",
// // // // //                         marginRight: "30px",
// // // // //                       }}
// // // // //                     >
// // // // //                       <Label>CREATE</Label>
// // // // //                     </button>
// // // // //                     <button
// // // // //                       type="button"
// // // // //                       className="btn btn-secondary-subtle border border-secondary"
// // // // //                       onClick={() => {
// // // // //                         navigate("/financial_year");
// // // // //                       }}
// // // // //                       style={{
// // // // //                         paddingTop: "10px",
// // // // //                         width: "80px",
// // // // //                         height: "45px",
// // // // //                       }}
// // // // //                     >
// // // // //                       <Label>BACK</Label>
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </CardBody>
// // // // //             </Card>
// // // // //             <ToastContainer position="bottom-right" />
// // // // //           </Form>
// // // // //         </div>
// // // // //       </Container>
// // // // //     </React.Fragment>
// // // // //   );
// // // // // };

// // // // // export default FinancialYearCreate;
// // // // import React, { useState } from "react";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import {
// // // //   Col,
// // // //   Row,
// // // //   FormFeedback,
// // // //   CardBody,
// // // //   CardHeader,
// // // //   Card,
// // // //   Label,
// // // //   Input,
// // // //   Form,
// // // //   Container,
// // // //   InputGroup,
// // // // } from "reactstrap";
// // // // import "flatpickr/dist/themes/material_blue.css";
// // // // import Flatpickr from "react-flatpickr";
// // // // import * as Yup from "yup";
// // // // import { useFormik } from "formik";
// // // // import { useNavigate } from "react-router-dom";

// // // // const FinancialYearCreate = () => {
// // // //   const navigate = useNavigate();

// // // //   const validation = useFormik({
// // // //     enableReinitialize: true,
// // // //     initialValues: {
// // // //       fs: "",
// // // //       month: "",
// // // //     },

// // // //     validationSchema: Yup.object({
// // // //       fs: Yup.string().required("Financial year start date is required"),
// // // //       month: Yup.number().required("Month is required"),
// // // //     }),

// // // //     onSubmit: async values => {
// // // //       alert("Validated");
// // // //     },
// // // //   });

// // // //   const handleChange = (selectedDates, dateString, instance) => {
// // // //     if (instance.input.name === "fs") {
// // // //       const startDate = new Date(dateString);
// // // //       const endDate = new Date(
// // // //         startDate.getFullYear() + 1,
// // // //         startDate.getMonth(),
// // // //         startDate.getDate()
// // // //       );
// // // //       const sixMonthsLater = new Date(
// // // //         startDate.getFullYear(),
// // // //         startDate.getMonth() + 6,
// // // //         startDate.getDate()
// // // //       );

// // // //       validation.setValues({
// // // //         ...validation.values,
// // // //         fs: dateString,
// // // //         fs1: startDate.toISOString().slice(0, 10),
// // // //         fs2: sixMonthsLater.toISOString().slice(0, 10),
// // // //         fe: endDate.toISOString().slice(0, 10),
// // // //         fe1: new Date(
// // // //           sixMonthsLater.getFullYear(),
// // // //           sixMonthsLater.getMonth(),
// // // //           sixMonthsLater.getDate() + 1
// // // //         )
// // // //           .toISOString()
// // // //           .slice(0, 10),
// // // //         fe2: endDate.toISOString().slice(0, 10),
// // // //       });
// // // //     } else if (instance.input.name === "fe") {
// // // //       const endDate = new Date(dateString);
// // // //       const nextDay = new Date(
// // // //         endDate.getFullYear(),
// // // //         endDate.getMonth(),
// // // //         endDate.getDate() + 1
// // // //       );

// // // //       validation.setValues({
// // // //         ...validation.values,
// // // //         fe: dateString,
// // // //         fe1: nextDay.toISOString().slice(0, 10),
// // // //         fe2: endDate.toISOString().slice(0, 10),
// // // //       });
// // // //     }
// // // //   };

// // // //   const handleChangep = (selectedDates, dateString, instance) => {
// // // //     if (instance.input.name === "pfs") {
// // // //       const startDate = new Date(dateString);
// // // //       const endDate = new Date(
// // // //         startDate.getFullYear() + 1,
// // // //         startDate.getMonth(),
// // // //         startDate.getDate()
// // // //       );
// // // //       const sixMonthsLater = new Date(
// // // //         startDate.getFullYear(),
// // // //         startDate.getMonth() + 6,
// // // //         startDate.getDate()
// // // //       );

// // // //       validation.setValues({
// // // //         ...validation.values,
// // // //         pfs: dateString,
// // // //         pfs1: startDate.toISOString().slice(0, 10),
// // // //         pfs2: sixMonthsLater.toISOString().slice(0, 10),
// // // //         pfe: endDate.toISOString().slice(0, 10),
// // // //         pfe1: new Date(
// // // //           sixMonthsLater.getFullYear(),
// // // //           sixMonthsLater.getMonth(),
// // // //           sixMonthsLater.getDate() + 1
// // // //         )
// // // //           .toISOString()
// // // //           .slice(0, 10),
// // // //         pfe2: endDate.toISOString().slice(0, 10),
// // // //       });
// // // //     } else if (instance.input.name === "pfe") {
// // // //       const endDate = new Date(dateString);
// // // //       const nextDay = new Date(
// // // //         endDate.getFullYear(),
// // // //         endDate.getMonth(),
// // // //         endDate.getDate() + 1
// // // //       );

// // // //       validation.setValues({
// // // //         ...validation.values,
// // // //         pfe: dateString,
// // // //         pfe1: nextDay.toISOString().slice(0, 10),
// // // //         pfe2: endDate.toISOString().slice(0, 10),
// // // //       });
// // // //     }
// // // //   };

// // // //   const [month, setMonth] = useState();
// // // //   const handleMonthChange = e => {
// // // //     setMonth(e.target.value);
// // // //     validation.setFieldValue("month", e.target.value);
// // // //     if (!validation.values.fs) {
// // // //       toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// // // //       setMonth("");
// // // //       return;
// // // //     }

// // // //     const newMonth = parseInt(e.target.value);
// // // //     setMonth(newMonth);

// // // //     if (isNaN(newMonth)) {
// // // //       toast.warn("INVALID MONTH");
// // // //       return;
// // // //     }
// // // //     if (newMonth < -12 || newMonth > 12) {
// // // //       toast.warn("MONTH LIMIT EXCEEDS");
// // // //       return;
// // // //     }

// // // //     const startDate = new Date(validation.values.fs);
// // // //     const newPfsDate = new Date(
// // // //       startDate.getFullYear(),
// // // //       startDate.getMonth() + newMonth,
// // // //       startDate.getDate()
// // // //     );

// // // //     validation.setValues({
// // // //       ...validation.values,
// // // //       pfs: newPfsDate.toISOString().slice(0, 10),
// // // //     });
// // // //     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// // // //       input: { name: "pfs" },
// // // //     });
// // // //   };

// // // //   return (
// // // //     <React.Fragment>
// // // //       <Container fluid>
// // // //         <div className="page-content">
// // // //           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
// // // //             <Card>
// // // //               <CardBody>
// // // //                 <CardHeader className="p-1">
// // // //                   <h1
// // // //                     className="card-title"
// // // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // // //                   >
// // // //                     FINANCIAL YEAR
// // // //                   </h1>
// // // //                 </CardHeader>

// // // //                 <Row>
// // // //                   <Row>
// // // //                     <Col md={2}></Col>
// // // //                     <Col md={6} className="d-flex justify-content-center">
// // // //                       FINANCIAL YEAR<font color="red">*</font>
// // // //                     </Col>
// // // //                     <Col md={2} className="d-flex justify-content-center">
// // // //                       FIRST HALF
// // // //                     </Col>
// // // //                     <Col md={2} className="d-flex justify-content-center">
// // // //                       SECOND HALF
// // // //                     </Col>
// // // //                   </Row>
// // // //                   <Row className="m-2">
// // // //                     <Col md={2}>
// // // //                       <Label for="stDate">
// // // //                         <h5>START DATE</h5>
// // // //                       </Label>
// // // //                     </Col>
// // // //                     <Col md={6}>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         name="fs"
// // // //                         onChange={handleChange}
// // // //                         value={validation.values.fs}
// // // //                         onBlur={validation.handleBlur}
// // // //                         invalid={validation.touched.fs && validation.errors.fs}
// // // //                       />
// // // //                       {validation.touched.fs && validation.errors.fs ? (
// // // //                         <div className="text-danger">
// // // //                           {validation.errors.fs}
// // // //                         </div>
// // // //                       ) : null}
// // // //                     </Col>
// // // //                     <Col md={2}>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         name="pfs1"
// // // //                         value={validation.values.fs1}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </Col>
// // // //                     <Col md={2}>
// // // //                       <InputGroup>
// // // //                         <Flatpickr
// // // //                           placeholder="dd M,yyyy"
// // // //                           options={{
// // // //                             altInput: true,
// // // //                             altFormat: "F j, Y",
// // // //                             dateFormat: "Y-m-d",
// // // //                           }}
// // // //                           name="pfs2"
// // // //                           value={validation.values.fs2}
// // // //                           disabled={true}
// // // //                         />
// // // //                       </InputGroup>
// // // //                     </Col>
// // // //                   </Row>

// // // //                   <Row className="m-2">
// // // //                     <Col md={2}>
// // // //                       <Label>
// // // //                         <h5>END DATE</h5>
// // // //                       </Label>
// // // //                     </Col>
// // // //                     <Col md={6}>
// // // //                       <InputGroup>
// // // //                         <Flatpickr
// // // //                           placeholder="dd M,yyyy"
// // // //                           options={{
// // // //                             altInput: true,
// // // //                             altFormat: "F j, Y",
// // // //                             dateFormat: "Y-m-d",
// // // //                           }}
// // // //                           onChange={handleChange}
// // // //                           value={validation.values.fe}
// // // //                           disabled={true}
// // // //                         />
// // // //                       </InputGroup>
// // // //                     </Col>

// // // //                     <Col md={2}>
// // // //                       <InputGroup>
// // // //                         <Flatpickr
// // // //                           placeholder="dd M,yyyy"
// // // //                           options={{
// // // //                             altInput: true,
// // // //                             altFormat: "F j, Y",
// // // //                             dateFormat: "Y-m-d",
// // // //                           }}
// // // //                           value={validation.values.fe1}
// // // //                           disabled={true}
// // // //                         />
// // // //                       </InputGroup>
// // // //                     </Col>
// // // //                     <Col md={2}>
// // // //                       <InputGroup>
// // // //                         <Flatpickr
// // // //                           placeholder="dd M,yyyy"
// // // //                           options={{
// // // //                             altInput: true,
// // // //                             altFormat: "F j, Y",
// // // //                             dateFormat: "Y-m-d",
// // // //                           }}
// // // //                           name="fe2"
// // // //                           value={validation.values.fe2}
// // // //                           disabled={true}
// // // //                         />
// // // //                       </InputGroup>
// // // //                     </Col>
// // // //                   </Row>
// // // //                 </Row>
// // // //               </CardBody>
// // // //             </Card>

// // // //             {/* parent */}
// // // //             <Card>
// // // //               <Row className="d-flex justify-content-center m-2">
// // // //                 <Col md={2}>
// // // //                   <Label className="mt-1">
// // // //                     <h3>
// // // //                       MONTH GAP <font color="red">*</font>
// // // //                     </h3>
// // // //                   </Label>
// // // //                 </Col>
// // // //                 <Col md={1}>
// // // //                   <Input
// // // //                     type="number"
// // // //                     id="month"
// // // //                     onChange={handleMonthChange}
// // // //                     value={month}
// // // //                     onBlur={validation.handleBlur}
// // // //                     invalid={
// // // //                       validation.touched.month && validation.errors.month
// // // //                     }
// // // //                   />
// // // //                   {validation.touched.month && validation.errors.month ? (
// // // //                     <FormFeedback type="invalid">
// // // //                       {validation.errors.month}
// // // //                     </FormFeedback>
// // // //                   ) : null}
// // // //                 </Col>
// // // //               </Row>
// // // //             </Card>
// // // //             <Card>
// // // //               <CardBody>
// // // //                 <CardHeader className="p-1">
// // // //                   <h1
// // // //                     className="card-title"
// // // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // // //                   >
// // // //                     PARENT COMPANY FINANCIAL YEAR
// // // //                   </h1>
// // // //                 </CardHeader>

// // // //                 <Row>
// // // //                   <Col md={2}></Col>
// // // //                   <Col md={6} className="d-flex justify-content-center">
// // // //                     FINANCIAL YEAR
// // // //                   </Col>
// // // //                   <Col md={2} className="d-flex justify-content-center">
// // // //                     FIRST HALF
// // // //                   </Col>
// // // //                   <Col md={2} className="d-flex justify-content-center">
// // // //                     SECOND HALF
// // // //                   </Col>
// // // //                 </Row>
// // // //                 <Row className="m-2">
// // // //                   <Col md={2}>
// // // //                     <Label for="stDate">
// // // //                       <h5>START DATE</h5>
// // // //                     </Label>
// // // //                   </Col>
// // // //                   <Col md={6}>
// // // //                     <InputGroup>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         name="pfs"
// // // //                         onChange={handleChangep}
// // // //                         value={validation.values.pfs}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </InputGroup>
// // // //                   </Col>

// // // //                   <Col md={2}>
// // // //                     <Flatpickr
// // // //                       placeholder="dd M,yyyy"
// // // //                       options={{
// // // //                         altInput: true,
// // // //                         altFormat: "F j, Y",
// // // //                         dateFormat: "Y-m-d",
// // // //                       }}
// // // //                       name="pfs1"
// // // //                       value={validation.values.pfs1}
// // // //                       disabled={true}
// // // //                     />
// // // //                   </Col>
// // // //                   <Col md={2}>
// // // //                     <InputGroup>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         name="pfs2"
// // // //                         value={validation.values.pfs2}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </InputGroup>
// // // //                   </Col>
// // // //                 </Row>

// // // //                 <Row className="m-2">
// // // //                   <Col md={2}>
// // // //                     <Label>
// // // //                       <h5>
// // // //                         END DATE<font color="red">*</font>
// // // //                       </h5>
// // // //                     </Label>
// // // //                   </Col>
// // // //                   <Col md={6}>
// // // //                     <InputGroup>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         onChange={handleChangep}
// // // //                         value={validation.values.pfe}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </InputGroup>
// // // //                   </Col>

// // // //                   <Col md={2}>
// // // //                     <InputGroup>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         value={validation.values.pfe1}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </InputGroup>
// // // //                   </Col>
// // // //                   <Col md={2}>
// // // //                     <InputGroup>
// // // //                       <Flatpickr
// // // //                         placeholder="dd M,yyyy"
// // // //                         options={{
// // // //                           altInput: true,
// // // //                           altFormat: "F j, Y",
// // // //                           dateFormat: "Y-m-d",
// // // //                         }}
// // // //                         name="fe2"
// // // //                         value={validation.values.pfe2}
// // // //                         disabled={true}
// // // //                       />
// // // //                     </InputGroup>
// // // //                   </Col>
// // // //                 </Row>

// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "center",
// // // //                     marginBottom: "10px",
// // // //                     marginTop: "10px",
// // // //                   }}
// // // //                 >
// // // //                   <div
// // // //                     style={{
// // // //                       display: "flex",
// // // //                       alignItems: "center",
// // // //                       justifyContent: "space-around",
// // // //                     }}
// // // //                   >
// // // //                     <button
// // // //                       type="submit"
// // // //                       className="btn btn-success-subtle border border-success"
// // // //                       style={{
// // // //                         paddingTop: "10px",
// // // //                         height: "45px",
// // // //                         width: "80px",
// // // //                         marginRight: "30px",
// // // //                       }}
// // // //                     >
// // // //                       <Label>CREATE</Label>
// // // //                     </button>
// // // //                     <button
// // // //                       type="button"
// // // //                       className="btn btn-secondary-subtle border border-secondary"
// // // //                       onClick={() => {
// // // //                         navigate("/financial_year");
// // // //                       }}
// // // //                       style={{
// // // //                         paddingTop: "10px",
// // // //                         width: "80px",
// // // //                         height: "45px",
// // // //                       }}
// // // //                     >
// // // //                       <Label>BACK</Label>
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </CardBody>
// // // //             </Card>
// // // //             <ToastContainer position="bottom-right" />
// // // //           </Form>
// // // //         </div>
// // // //       </Container>
// // // //     </React.Fragment>
// // // //   );
// // // // };

// // // // export default FinancialYearCreate;
// // // import React, { useState } from "react";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import {
// // //   Col,
// // //   Row,
// // //   FormFeedback,
// // //   CardBody,
// // //   CardHeader,
// // //   Card,
// // //   Label,
// // //   Input,
// // //   Form,
// // //   Container,
// // //   InputGroup,
// // // } from "reactstrap";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import * as Yup from "yup";
// // // import { useFormik } from "formik";
// // // import { useNavigate } from "react-router-dom";

// // // const FinancialYearCreate = () => {
// // //   const navigate = useNavigate();

// // //   const validation = useFormik({
// // //     enableReinitialize: true,
// // //     initialValues: {
// // //       fs: "",
// // //       month: "",
// // //     },

// // //     validationSchema: Yup.object({
// // //       fs: Yup.date().required("Financial year start date is required"),
// // //       month: Yup.number()
// // //         .required("Month gap is required")
// // //         .min(-12, "Month gap should be between -12 and 12")
// // //         .max(12, "MONTH GAP SHOULD BE BETWEEN 12 AND -12"),
// // //     }),

// // //     onSubmit: async (values) => {
// // //       alert("Validated");
// // //     },
// // //   });

// // //   const handleChange = (e) => {
// // //     const startDate = new Date(e.target.value);
// // //     const endDate = new Date(startDate);
// // //     endDate.setFullYear(startDate.getFullYear() + 1); // End date is one year after the start date
// // //     endDate.setMonth(2); // End date is the last day of March

// // //     const firstHalfEndDate = new Date(startDate);
// // //     firstHalfEndDate.setMonth(startDate.getMonth() + 6); // First half end date is six months after the start date

// // //     const secondHalfStartDate = new Date(firstHalfEndDate);
// // //     secondHalfStartDate.setDate(firstHalfEndDate.getDate() + 1); // Second half start date is the day after the first half end date
// // //     const secondHalfEndDate = new Date(endDate); // Second half end date is the same as the financial year end date

// // //     validation.setFieldValue("fs", startDate.toISOString().split("T")[0]);
// // //     validation.setFieldValue("fe", endDate.toISOString().split("T")[0]);
// // //     validation.setFieldValue("fs1", startDate.toISOString().split("T")[0]);
// // //     validation.setFieldValue("fe1", firstHalfEndDate.toISOString().split("T")[0]);
// // //     validation.setFieldValue("fs2", secondHalfStartDate.toISOString().split("T")[0]);
// // //     validation.setFieldValue("fe2", secondHalfEndDate.toISOString().split("T")[0]);
// // //   };

// // //   const handleMonthChange = (e) => {
// // //     validation.setFieldValue("month", e.target.value);
// // //   };

// // //   const handleCreateClick = () => {
// // //     validation.validateForm().then(() => {
// // //       validation.handleSubmit();
// // //     });
// // //   };

// // //   return (
// // //     <React.Fragment>
// // //       <Container fluid>
// // //         <div className="page-content">
// // //           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
// // //             <Card>
// // //               <CardBody>
// // //                 <CardHeader className="p-1">
// // //                   <h1
// // //                     className="card-title"
// // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // //                   >
// // //                     FINANCIAL YEAR
// // //                   </h1>
// // //                 </CardHeader>

// // //                 <Row>
// // //                   <Row>
// // //                     <Col md={3}></Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       FINANCIAL YEAR<font color="red">*</font>
// // //                     </Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       FIRST HALF YEAR
// // //                     </Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       SECOND HALF YEAR
// // //                     </Col>
// // //                   </Row>
// // //                   <Row className="m-2">
// // //                     <Col md={3}>
// // //                       <Label for="stDate">
// // //                         <h5>START DATE</h5>
// // //                       </Label>
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         name="fs"
// // //                         onChange={handleChange}
// // //                         value={validation.values.fs}
// // //                         onBlur={validation.handleBlur}
// // //                         invalid={
// // //                           validation.touched.fs && !!validation.errors.fs
// // //                         }
// // //                       />
// // //                       {validation.touched.fs && validation.errors.fs && (
// // //                         <FormFeedback>{validation.errors.fs}</FormFeedback>
// // //                       )}
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         value={validation.values.fs1}
// // //                         disabled
// // //                       />
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         value={validation.values.fs2}
// // //                         disabled
// // //                       />
// // //                     </Col>
// // //                   </Row>
// // //                   <hr className="mb-2 mt-2" />

// // //                   <Row className="m-2">
// // //                     <Col md={3}>
// // //                       <Label>
// // //                         <h5>END DATE</h5>
// // //                       </Label>
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         name="fe"
// // //                         value={validation.values.fe}
// // //                         onChange={handleChange}
// // //                         disabled
// // //                       />
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         value={validation.values.fe1}
// // //                         disabled
// // //                       />
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Input
// // //                         type="date"
// // //                         value={validation.values.fe2}
// // //                         disabled
// // //                       />
// // //                     </Col>
// // //                   </Row>
// // //                 </Row>
// // //               </CardBody>
// // //             </Card>

// // //             {/* Parent */}
// // //             <Card>
// // //               <Row className="d-flex justify-content-center m-2">
// // //                 <Col md={2}>
// // //                   <Label className="mt-1">
// // //                     <h5>
// // //                       MONTH GAP <font color="red">*</font>
// // //                     </h5>
// // //                   </Label>
// // //                 </Col>
// // //                 <Col md={1}>
// // //                   <Input
// // //                     type="number"
// // //                     name="month"
// // //                     onChange={handleMonthChange}
// // //                     value={validation.values.month}
// // //                     onBlur={validation.handleBlur}
// // //                     invalid={
// // //                       validation.touched.month && !!validation.errors.month
// // //                     }
// // //                   />
// // //                   {validation.touched.month && validation.errors.month && (
// // //                     <FormFeedback>{validation.errors.month}</FormFeedback>
// // //                   )}
// // //                 </Col>
// // //               </Row>
// // //             </Card>

// // //             <Card>
// // //               <CardBody>
// // //                 <CardHeader className="p-1">
// // //                   <h1
// // //                     className="card-title"
// // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // //                   >
// // //                     PARENT COMPANY FINANCIAL YEAR
// // //                   </h1>
// // //                 </CardHeader>

// // //                 <Row>
// // //                   <Col md={3}></Col>
// // //                   <Col md={3} className="d-flex justify-content-center">
// // //                     FINANCIAL YEAR
// // //                   </Col>
// // //                   <Col md={3} className="d-flex justify-content-center">
// // //                     FIRST HALF
// // //                   </Col>
// // //                   <Col md={3} className="d-flex justify-content-center">
// // //                     SECOND HALF
// // //                   </Col>
// // //                 </Row>
// // //                 <Row className="m-2">
// // //                   <Col md={3}>
// // //                     <Label for="stDate">
// // //                       <h5>START DATE</h5>
// // //                     </Label>
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       name="pfs"
// // //                       value={validation.values.pfs}
// // //                       onChange={handleChange}
// // //                       disabled
// // //                     />
// // //                   </Col>

// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       value={validation.values.pfs1}
// // //                       disabled
// // //                     />
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       value={validation.values.pfs2}
// // //                       disabled
// // //                     />
// // //                   </Col>
// // //                 </Row>
// // //                 <hr className="mb-3 mt-3" />
// // //                 <Row className="m-2">
// // //                   <Col md={3}>
// // //                     <Label>
// // //                       <h5>END DATE</h5>
// // //                     </Label>
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       name="pfe"
// // //                       value={validation.values.pfe}
// // //                       onChange={handleChange}
// // //                     />
// // //                   </Col>

// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       value={validation.values.pfe1}
// // //                       disabled
// // //                     />
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <Input
// // //                       type="date"
// // //                       value={validation.values.pfe2}
// // //                       disabled
// // //                     />
// // //                   </Col>
// // //                 </Row>
// // //               </CardBody>
// // //             </Card>
// // //             <div
// // //               style={{
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 marginBottom: "10px",
// // //                 marginTop: "10px",
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   justifyContent: "space-around",
// // //                 }}
// // //               >
// // //                 <button
// // //                   type="button"
// // //                   className="btn btn-success-subtle border border-success"
// // //                   style={{
// // //                     paddingTop: "10px",
// // //                     height: "45px",
// // //                     width: "80px",
// // //                     marginRight: "30px",
// // //                   }}
// // //                   onClick={handleCreateClick}
// // //                 >
// // //                   <Label>CREATE</Label>
// // //                 </button>
// // //                 <button
// // //                   type="button"
// // //                   className="btn btn-secondary-subtle border border-secondary"
// // //                   onClick={() => {
// // //                     navigate("/financial_year");
// // //                   }}
// // //                   style={{
// // //                     paddingTop: "10px",
// // //                     width: "80px",
// // //                     height: "45px",
// // //                   }}
// // //                 >
// // //                   <Label>BACK</Label>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <ToastContainer position="bottom-right" />
// // //           </Form>
// // //         </div>
// // //       </Container>
// // //     </React.Fragment>
// // //   );
// // // };

// // // export default FinancialYearCreate;
// // import React, { useState } from "react";
// // import { ToastContainer, toast } from "react-toastify";
// // import {
// //   Col,
// //   Row,
// //   FormFeedback,
// //   CardBody,
// //   CardHeader,
// //   Card,
// //   Label,
// //   Input,
// //   Form,
// //   Container,
// //   InputGroup,
// // } from "reactstrap";
// // import "flatpickr/dist/themes/material_blue.css";
// // import Flatpickr from "react-flatpickr";
// // import * as Yup from "yup";
// // import { useFormik } from "formik";
// // import { useNavigate } from "react-router-dom";

// // const FinancialYearCreate = () => {
// //   const navigate = useNavigate();

// //   const validation = useFormik({
// //     enableReinitialize: true,
// //     initialValues: {
// //       fs: "",
// //       month: "",
// //     },

// //     validationSchema: Yup.object({
// //       fs: Yup.string().required("Financial year start date is required"),
// //       month: Yup.number().required("Month is required"),
// //     }),

// //     onSubmit: async values => {
// //       alert("Validated");
// //     },
// //   });

// //   const handleChange = (selectedDates, dateString, instance) => {
// //     if (instance.input.name === "fs") {
// //       const startDate = new Date(dateString);
// //       const endDate = new Date(
// //         startDate.getFullYear() + 1,
// //         startDate.getMonth(),
// //         startDate.getDate()
// //       );
// //       const sixMonthsLater = new Date(
// //         startDate.getFullYear(),
// //         startDate.getMonth() + 6,
// //         startDate.getDate()
// //       );

// //       validation.setValues({
// //         ...validation.values,
// //         fs: dateString,
// //         fs1: startDate.toISOString().slice(0, 10),
// //         fs2: sixMonthsLater.toISOString().slice(0, 10),
// //         fe: endDate.toISOString().slice(0, 10),
// //         fe1: new Date(
// //           sixMonthsLater.getFullYear(),
// //           sixMonthsLater.getMonth(),
// //           sixMonthsLater.getDate() + 1
// //         )
// //           .toISOString()
// //           .slice(0, 10),
// //         fe2: endDate.toISOString().slice(0, 10),
// //       });
// //     } else if (instance.input.name === "fe") {
// //       const endDate = new Date(dateString);
// //       const nextDay = new Date(
// //         endDate.getFullYear(),
// //         endDate.getMonth(),
// //         endDate.getDate() + 1
// //       );

// //       validation.setValues({
// //         ...validation.values,
// //         fe: dateString,
// //         fe1: nextDay.toISOString().slice(0, 10),
// //         fe2: endDate.toISOString().slice(0, 10),
// //       });
// //     }
// //   };

// //   const handleChangep = (selectedDates, dateString, instance) => {
// //     if (instance.input.name === "pfs") {
// //       const startDate = new Date(dateString);
// //       const endDate = new Date(
// //         startDate.getFullYear() + 1,
// //         startDate.getMonth(),
// //         startDate.getDate()
// //       );
// //       const sixMonthsLater = new Date(
// //         startDate.getFullYear(),
// //         startDate.getMonth() + 6,
// //         startDate.getDate()
// //       );

// //       validation.setValues({
// //         ...validation.values,
// //         pfs: dateString,
// //         pfs1: startDate.toISOString().slice(0, 10),
// //         pfs2: sixMonthsLater.toISOString().slice(0, 10),
// //         pfe: endDate.toISOString().slice(0, 10),
// //         pfe1: new Date(
// //           sixMonthsLater.getFullYear(),
// //           sixMonthsLater.getMonth(),
// //           sixMonthsLater.getDate() + 1
// //         )
// //           .toISOString()
// //           .slice(0, 10),
// //         pfe2: endDate.toISOString().slice(0, 10),
// //       });
// //     } else if (instance.input.name === "pfe") {
// //       const endDate = new Date(dateString);
// //       const nextDay = new Date(
// //         endDate.getFullYear(),
// //         endDate.getMonth(),
// //         endDate.getDate() + 1
// //       );

// //       validation.setValues({
// //         ...validation.values,
// //         pfe: dateString,
// //         pfe1: nextDay.toISOString().slice(0, 10),
// //         pfe2: endDate.toISOString().slice(0, 10),
// //       });
// //     }
// //   };

// //   const [month, setMonth] = useState();
// //   const handleMonthChange = e => {
// //     setMonth(e.target.value);
// //     validation.setFieldValue("month", e.target.value);
// //     if (!validation.values.fs) {
// //       toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// //       setMonth("")
// //       return;
// //     }

// //     const newMonth = parseInt(e.target.value);
// //     setMonth(newMonth);

// //     if (isNaN(newMonth)) {
// //       toast.warn("INVALID MONTH");
// //       return;
// //     }
// //     if (newMonth < -12 || newMonth > 12) {
// //       toast.warn("MONTH LIMIT EXCEEDS");
// //       return;
// //     }

// //     const startDate = new Date(validation.values.fs);
// //     const newPfsDate = new Date(
// //       startDate.getFullYear(),
// //       startDate.getMonth() + newMonth,
// //       startDate.getDate()
// //     );

// //     validation.setValues({
// //       ...validation.values,
// //       pfs: newPfsDate.toISOString().slice(0, 10),
// //     });
// //     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// //       input: { name: "pfs" },
// //     });
// //   };

// //   return (
// //     <React.Fragment>
// //       <Container fluid>
// //         <div className="page-content">
// //           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
// //             <Card>
// //               <CardBody>
// //                 <CardHeader className="p-1">
// //                   <h3>
// //                     FINANCIAL YEAR CHILD
// //                   </h3>
// //                 </CardHeader>

// //                 <Row>
// //                   <Row>
// //                     <Col md={2}></Col>
// //                     <Col md={6} className="d-flex justify-content-center">
// //                       FINANCIAL YEAR<font color="red">*</font>
// //                     </Col>
// //                     <Col md={2} className="d-flex justify-content-center">
// //                       FIRST HALF
// //                     </Col>
// //                     <Col md={2} className="d-flex justify-content-center">
// //                       SECOND HALF
// //                     </Col>
// //                   </Row>
// //                   <Row className="m-2">
// //                     <Col md={2}>
// //                       <Label for="stDate">
// //                         <h5>START DATE</h5>
// //                       </Label>
// //                     </Col>
// //                     <Col md={6}>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="fs"
// //                         onChange={handleChange}
// //                         value={validation.values.fs}
// //                         onBlur={validation.handleBlur}
// //                         invalid={validation.touched.fs && validation.errors.fs}
// //                       />
// //                       {validation.touched.fs && validation.errors.fs ? (
// //                         <div className="text-danger">
// //                           {validation.errors.fs}
// //                         </div>
// //                       ) : null}
// //                     </Col>
// //                     <Col md={2}>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="pfs1"
// //                         value={validation.values.fs1}
// //                         disabled={true}
// //                       />
// //                     </Col>
// //                     <Col md={2}>
// //                       <InputGroup>
// //                         <Flatpickr
// //                           placeholder="dd M,yyyy"
// //                           options={{
// //                             altInput: true,
// //                             altFormat: "F j, Y",
// //                             dateFormat: "Y-m-d",
// //                           }}
// //                           name="pfs2"
// //                           value={validation.values.fs2}
// //                           disabled={true}
// //                         />
// //                       </InputGroup>
// //                     </Col>
// //                   </Row>

// //                   <Row className="m-2">
// //                     <Col md={2}>
// //                       <Label>
// //                         <h5>END DATE</h5>
// //                       </Label>
// //                     </Col>
// //                     <Col md={6}>
// //                       <InputGroup>
// //                         <Flatpickr
// //                           placeholder="dd M,yyyy"
// //                           options={{
// //                             altInput: true,
// //                             altFormat: "F j, Y",
// //                             dateFormat: "Y-m-d",
// //                           }}
// //                           onChange={handleChange}
// //                           value={validation.values.fe}
// //                           disabled={true}
// //                         />
// //                       </InputGroup>
// //                     </Col>

// //                     <Col md={2}>
// //                       <InputGroup>
// //                         <Flatpickr
// //                           placeholder="dd M,yyyy"
// //                           options={{
// //                             altInput: true,
// //                             altFormat: "F j, Y",
// //                             dateFormat: "Y-m-d",
// //                           }}
// //                           value={validation.values.fe1}
// //                           disabled={true}
// //                         />
// //                       </InputGroup>
// //                     </Col>
// //                     <Col md={2}>
// //                       <InputGroup>
// //                         <Flatpickr
// //                           placeholder="dd M,yyyy"
// //                           options={{
// //                             altInput: true,
// //                             altFormat: "F j, Y",
// //                             dateFormat: "Y-m-d",
// //                           }}
// //                           name="fe2"
// //                           value={validation.values.fe2}
// //                           disabled={true}
// //                         />
// //                       </InputGroup>
// //                     </Col>
// //                   </Row>
// //                 </Row>
// //               </CardBody>
// //             </Card>

// //             {/* parent */}
// //             <Card>
// //               <Row className="d-flex justify-content-center m-2">
// //                 <Col md={2}>
// //                   <Label className="mt-1">
// //                     <h3>MONTH GAP <font color="red">*</font></h3>
// //                   </Label>
// //                 </Col>
// //                 <Col md={1}>
// //                   <Input
// //                     type="number"
// //                     id="month"
// //                     onChange={handleMonthChange}
// //                     value={month}
// //                     onBlur={validation.handleBlur}
// //                     invalid={
// //                       validation.touched.month && validation.errors.month
// //                     }
// //                   />
// //                   {validation.touched.month && validation.errors.month ? (
// //                     <FormFeedback type="invalid">
// //                       {validation.errors.month}
// //                     </FormFeedback>
// //                   ) : null}
// //                 </Col>
// //               </Row>
// //             </Card>
// //             <Card>
// //               <CardBody>
// //                 <CardHeader className="p-1">
// //                   <h3>
// //                     FINANCIAL YEAR PARENT
// //                   </h3>
// //                 </CardHeader>

// //                 <Row>
// //                   <Col md={2}></Col>
// //                   <Col md={6} className="d-flex justify-content-center">
// //                     FINANCIAL YEAR
// //                   </Col>
// //                   <Col md={2} className="d-flex justify-content-center">
// //                     FIRST HALF
// //                   </Col>
// //                   <Col md={2} className="d-flex justify-content-center">
// //                     SECOND HALF
// //                   </Col>
// //                 </Row>
// //                 <Row className="m-2">
// //                   <Col md={2}>
// //                     <Label for="stDate">
// //                       <h5>START DATE</h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={6}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="pfs"
// //                         onChange={handleChangep}
// //                         value={validation.values.pfs}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>

// //                   <Col md={2}>
// //                     <Flatpickr
// //                       placeholder="dd M,yyyy"
// //                       options={{
// //                         altInput: true,
// //                         altFormat: "F j, Y",
// //                         dateFormat: "Y-m-d",
// //                       }}
// //                       name="pfs1"
// //                       value={validation.values.pfs1}
// //                       disabled={true}
// //                     />
// //                   </Col>
// //                   <Col md={2}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="pfs2"
// //                         value={validation.values.pfs2}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                 </Row>

// //                 <Row className="m-2">
// //                   <Col md={2}>
// //                     <Label>
// //                       <h5>
// //                         END DATE<font color="red">*</font>
// //                       </h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={6}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         onChange={handleChangep}
// //                         value={validation.values.pfe}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>

// //                   <Col md={2}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         value={validation.values.pfe1}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                   <Col md={2}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="fe2"
// //                         value={validation.values.pfe2}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                 </Row>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "center",
// //                     marginBottom: "10px",
// //                     marginTop: "10px",
// //                   }}
// //                 >
// //                   <div
// //                     style={{
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "space-around",
// //                     }}
// //                   >
// //                     <button
// //                       type="submit"
// //                       className="btn btn-success-subtle border border-success"
// //                       style={{
// //                         paddingTop: "10px",
// //                         height: "45px",
// //                         width: "80px",
// //                         marginRight: "30px",
// //                       }}
// //                     >
// //                       <Label>CREATE</Label>
// //                     </button>
// //                     <button
// //                       type="button"
// //                       className="btn btn-secondary-subtle border border-secondary"
// //                       onClick={() => {
// //                         navigate("/financial_year");
// //                       }}
// //                       style={{
// //                         paddingTop: "10px",
// //                         width: "80px",
// //                         height: "45px",
// //                       }}
// //                     >
// //                       <Label>BACK</Label>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </CardBody>
// //             </Card>
// //             <ToastContainer position="bottom-right" />
// //           </Form>
// //         </div>
// //       </Container>
// //     </React.Fragment>
// //   );
// // };

// // export default FinancialYearCreate;
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import {
//   Col,
//   Row,
//   FormFeedback,
//   CardBody,
//   CardHeader,
//   Card,
//   Label,
//   Input,
//   Form,
//   Container,
// } from "reactstrap";
// import "react-toastify/dist/ReactToastify.css";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";

// const FinancialYearCreate = () => {
//   const navigate = useNavigate();

//   const validation = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       fs: "",
//       month: "",
//     },

//     validationSchema: Yup.object({
//       fs: Yup.date().required("Financial year start date is required"),
//       month: Yup.number()
//         .required("Month gap is required")
//         .min(-12, "Month gap should be between -12 and 12")
//         .max(12, "MONTH GAP SHOULD BE BETWEEN 12 AND -12"),
//     }),

//     onSubmit: async (values) => {
//       alert("Validated");
//     },
//   });

//   const handleChange = (e) => {
//     const startDate = new Date(e.target.value);
//     const endDate = new Date(startDate);

//     endDate.setFullYear(startDate.getFullYear() + 1);
//     endDate.setDate(startDate.getDate() - 1);

//     const firstHalfEndDate = new Date(startDate);
//     firstHalfEndDate.setMonth(startDate.getMonth() + 6);
//     firstHalfEndDate.setDate(firstHalfEndDate.getDate() - 1);
//     const secondHalfStartDate = new Date(firstHalfEndDate);
//     secondHalfStartDate.setDate(secondHalfStartDate.getDate() + 1);
//     validation.setFieldValue("fs", startDate.toISOString().split("T")[0]);
//     validation.setFieldValue("fe", endDate.toISOString().split("T")[0]);
//     validation.setFieldValue("fs1", startDate.toISOString().split("T")[0]);
//     validation.setFieldValue("fe1", firstHalfEndDate.toISOString().split("T")[0]);
//     validation.setFieldValue("fs2", secondHalfStartDate.toISOString().split("T")[0]);
//     validation.setFieldValue("fe2", endDate.toISOString().split("T")[0]);
//   };

//   const handleMonthChange = (e) => {
//     console.log("handleMonthChange function called");
//     console.log("Input value:", e.target.value);
//     validation.setFieldValue("month", e.target.value);
//   };

//   const handleCreateClick = () => {
//     validation.validateForm().then(() => {
//       validation.handleSubmit();
//     });
//   };

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
//             <Card>
//               <CardBody>
//                 <CardHeader className="p-1">
//                   <h1
//                     className="card-title"
//                     style={{ fontSize: "20px", marginBottom: "6px" }}
//                   >
//                     FINANCIAL YEAR
//                   </h1>
//                 </CardHeader>

//                 <Row>
//                   <Row>
//                     <Col md={3}></Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       FINANCIAL YEAR<font color="red">*</font>
//                     </Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       FIRST HALF YEAR
//                     </Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       SECOND HALF YEAR
//                     </Col>
//                   </Row>
//                   <Row className="m-2">
//                     <Col md={3}>
//                       <Label for="stDate">
//                         <h5>START DATE</h5>
//                       </Label>
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         name="fs"
//                         onChange={handleChange}
//                         value={validation.values.fs}
//                         onBlur={validation.handleBlur}
//                         invalid={
//                           validation.touched.fs && !!validation.errors.fs
//                         }
//                       />
//                       {validation.touched.fs && validation.errors.fs && (
//                         <FormFeedback>{validation.errors.fs}</FormFeedback>
//                       )}
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         value={validation.values.fs1}
//                         disabled
//                       />
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         value={validation.values.fs2}
//                         disabled
//                       />
//                     </Col>
//                   </Row>
//                   <hr className="mb-2 mt-2" />

//                   <Row className="m-2">
//                     <Col md={3}>
//                       <Label>
//                         <h5>END DATE</h5>
//                       </Label>
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         name="fe"
//                         value={validation.values.fe}
//                         onChange={handleChange}
//                         disabled
//                       />
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         value={validation.values.fe1}
//                         disabled
//                       />
//                     </Col>
//                     <Col md={3}>
//                       <Input
//                         type="date"
//                         value={validation.values.fe2}
//                         disabled
//                       />
//                     </Col>
//                   </Row>
//                 </Row>
//               </CardBody>
//             </Card>

//             <Card>
//               <CardBody>
//                 <Row className="d-flex justify-content-center m-2">
//                   <Col md={2}>
//                     <Label className="mt-1">
//                       <h5>
//                         MONTH GAP <font color="red">*</font>
//                       </h5>
//                     </Label>
//                   </Col>
//                   <Col md={1}>
//                     <Input
//                       type="number"
//                       name="month"
//                       onChange={handleMonthChange}
//                       value={validation.values.month}
//                       onBlur={validation.handleBlur}
//                       invalid={
//                         validation.touched.month && !!validation.errors.month
//                       }
//                     />
//                     {validation.touched.month && validation.errors.month && (
//                       <FormFeedback>{validation.errors.month}</FormFeedback>
//                     )}
//                   </Col>
//                 </Row>
//               </CardBody>
//             </Card>

//             <Card>
//               <CardBody>
//                 <CardHeader className="p-1">
//                   <h1
//                     className="card-title"
//                     style={{ fontSize: "20px", marginBottom: "6px" }}
//                   >
//                     PARENT COMPANY FINANCIAL YEAR
//                   </h1>
//                 </CardHeader>

//                 <Row>
//                   <Col md={3}></Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     FINANCIAL YEAR
//                   </Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     FIRST HALF
//                   </Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     SECOND HALF
//                   </Col>
//                 </Row>
//                 <Row className="m-2">
//                   <Col md={3}>
//                     <Label for="stDate">
//                       <h5>START DATE</h5>
//                     </Label>
//                   </Col>
//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       name="pfs"
//                       value={validation.values.pfs}
//                       onChange={handleChange}
//                       disabled
//                     />
//                   </Col>

//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       value={validation.values.pfs1}
//                       disabled
//                     />
//                   </Col>
//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       value={validation.values.pfs2}
//                       disabled
//                     />
//                   </Col>
//                 </Row>
//                 <hr className="mb-3 mt-3" />
//                 <Row className="m-2">
//                   <Col md={3}>
//                     <Label>
//                       <h5>END DATE</h5>
//                     </Label>
//                   </Col>
//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       name="pfe"
//                       value={validation.values.pfe}
//                       onChange={handleChange}
//                       disabled

//                     />
//                   </Col>

//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       value={validation.values.pfe1}
//                       disabled
//                     />
//                   </Col>
//                   <Col md={3}>
//                     <Input
//                       type="date"
//                       value={validation.values.pfe2}
//                       disabled
//                     />
//                   </Col>
//                 </Row>
//               </CardBody>
//             </Card>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: "10px",
//                 marginTop: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-around",
//                 }}
//               >
//                 <button
//                   type="button"
//                   className="btn btn-success-subtle border border-success"
//                   style={{
//                     paddingTop: "10px",
//                     height: "45px",
//                     width: "80px",
//                     marginRight: "30px",
//                   }}
//                   onClick={handleCreateClick}
//                 >
//                   <Label>CREATE</Label>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary-subtle border border-secondary"
//                   onClick={() => {
//                     navigate("/financial_year");
//                   }}
//                   style={{
//                     paddingTop: "10px",
//                     width: "80px",
//                     height: "45px",
//                   }}
//                 >
//                   <Label>BACK</Label>
//                 </button>
//               </div>
//             </div>
//             <ToastContainer position="bottom-right" />
//           </Form>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default FinancialYearCreate;

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
  InputGroup,
} from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const FinancialYearCreate = () => {
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fs: "",
      month: "",
    },

    validationSchema: Yup.object({
      fs: Yup.date().required("START DATE IS REQUIRED"),
      month: Yup.number()
        .required("MONTH GAP IS REQUIRED")
        .min(-12, "MONTH GAP SHOULD BE BETWEEN -12 TO 12")
        .max(12, "MONTH GAP SHOULD BE BETWEEN -12 TO 12"),
    }),

    onSubmit: async values => {
      alert("Validated");
    },
  });
  
  const handleChange = (selectedDates, dateString, instance) => {
    if (instance.input.name === "fs") {
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
        fs: dateString,
        fs1: startDate.toISOString().slice(0, 10),
        fs2: sixMonthsLater.toISOString().slice(0, 10),
        fe: endDate.toISOString().slice(0, 10),
        fe1: new Date(
          sixMonthsLater.getFullYear(),
          sixMonthsLater.getMonth(),
          sixMonthsLater.getDate() + 1
        )
          .toISOString()
          .slice(0, 10),
        fe2: endDate.toISOString().slice(0, 10),
      });
    } else if (instance.input.name === "fe") {
      const endDate = new Date(dateString);
      const nextDay = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate() + 1
      );
 
      validation.setValues({
        ...validation.values,
        fe: dateString,
        fe1: nextDay.toISOString().slice(0, 10),
        fe2: endDate.toISOString().slice(0, 10),
      });
    }
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
        pfe1: new Date(
          sixMonthsLater.getFullYear(),
          sixMonthsLater.getMonth(),
          sixMonthsLater.getDate() + 1
        )
          .toISOString()
          .slice(0, 10),
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
        pfe1: nextDay.toISOString().slice(0, 10),
        pfe2: endDate.toISOString().slice(0, 10),
      });
    }
  };
 
  const [month, setMonth] = useState();
  const handleMonthChange = e => {
    setMonth(e.target.value);
    validation.setFieldValue("month", e.target.value);
    if (!validation.values.fs) {
      // toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
      setMonth("");
      return;
    }
 
    const newMonth = parseInt(e.target.value);
    setMonth(newMonth);
 
    if (isNaN(newMonth)) {
      // toast.warn("INVALID MONTH");
      setMonth("")
      return;
    }
    if (newMonth < -12 || newMonth > 12) {
      // toast.warn("MONTH LIMIT EXCEEDS");
      setMonth("")
      return;
    }
 
    const startDate = new Date(validation.values.fs);
    const newPfsDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + newMonth,
      startDate.getDate() + 1
    );
 
    validation.setValues({
      ...validation.values,
      pfs: newPfsDate.toISOString().slice(0, 10),
    });
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
        <div className="page-content">
          <Form className="needs-validation" onSubmit={validation.handleSubmit}>
            <Card>
              <CardBody>
                <CardHeader className="p-1">
                  <h3>FINANCIAL YEAR</h3>
                </CardHeader>

                <Row>
                  <Col md={3}></Col>
                  <Col md={3} className="d-flex justify-content-center">
                    FINANCIAL YEAR<font color="red">*</font>
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
                    <Flatpickr
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                      name="fs"
                      onChange={handleChange}
                      value={validation.values.fs}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.fs && validation.errors.fs}
                    />
                    {validation.touched.fs && validation.errors.fs && (
                      <div className="text-danger" style={{ fontSize: "12px" }}>
                        {validation.errors.fs}
                      </div>
                    )}
                  </Col>
                  <Col md={3}>
                    <Flatpickr
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                      name="pfs1"
                      value={validation.values.fs1}
                      disabled={true}
                    />
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        name="pfs2"
                        value={validation.values.fs2}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="m-2">
                  <Col md={3}>
                    <Label>
                      <h5>END DATE</h5>
                    </Label>
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        onChange={handleChange}
                        value={validation.values.fe}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        value={validation.values.fe1}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        name="fe2"
                        value={validation.values.fe2}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            {/* parent */}
            <Card>
              <Row className="d-flex justify-content-center m-2">
                <Col md={2}>
                  <Label className="mt-1">
                    <h5>
                      MONTH GAP <font color="red">*</font>
                    </h5>
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
                  <h3>PARENT COMPANY FINANCIAL YEAR</h3>
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
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        name="pfs"
                        onChange={handleChangep}
                        value={validation.values.pfs}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <Flatpickr
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                      name="pfs1"
                      value={validation.values.pfs1}
                      disabled={true}
                    />
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        name="pfs2"
                        value={validation.values.pfs2}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="m-2">
                  <Col md={3}>
                    <Label>
                      <h5>
                        END DATE<font color="red">*</font>
                      </h5>
                    </Label>
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        onChange={handleChangep}
                        value={validation.values.pfe}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        value={validation.values.pfe1}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={3}>
                    <InputGroup>
                      <Flatpickr
                        placeholder="dd M,yyyy"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        name="fe2"
                        value={validation.values.pfe2}
                        disabled={true}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <hr className="mt-4" />
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
                      type="submit"
                      className="btn btn-success-subtle border border-success"
                      onClick={handleCreateClick}
                      style={{
                        paddingTop: "10px",
                        height: "45px",
                        width: "80px",
                        marginRight: "30px",
                      }}
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
              </CardBody>
            </Card>
            {/* <ToastContainer position="bottom-right" /> */}
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FinancialYearCreate;




