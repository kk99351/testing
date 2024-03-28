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
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // import * as Yup from "yup";
// // // // // import { useFormik } from "formik";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const FinancialYearModify = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const validation = useFormik({
// // // // //     enableReinitialize: true,
// // // // //     initialValues: {
// // // // //       fs: "",
// // // // //       month: "",
// // // // //     },

// // // //     // validationSchema: Yup.object({
// // // //     //   fs: Yup.date().required("Financial year start date is required"),
// // // //     //   month: Yup.number()
// // // //     //     .required("Month gap is required")
// // // //     //     .min(-12, "Month gap should be between -12 and 12")
// // // //     //     .max(12, "MONTH GAP SHOULD BE BETWEEN 12 AND -12"),
// // // //     // }),

// // // // //     onSubmit: async (values) => {
// // // // //       alert("Validated");
// // // // //     },
// // // // //   });
// // // // //   const handleChange = (e) => {
// // // // //     const startDate = new Date(e.target.value);
// // // // //     const endDate = new Date(startDate);

// // // // //     endDate.setFullYear(startDate.getFullYear() + 1);
// // // // //     endDate.setDate(startDate.getDate() - 1);

// // // // //     const firstHalfEndDate = new Date(startDate);
// // // // //     firstHalfEndDate.setMonth(startDate.getMonth() + 6);
// // // // //     firstHalfEndDate.setDate(firstHalfEndDate.getDate() - 1);
// // // // //     const secondHalfStartDate = new Date(firstHalfEndDate);
// // // // //     secondHalfStartDate.setDate(secondHalfStartDate.getDate() + 1);
// // // // //     validation.setFieldValue("fs", startDate.toISOString().split("T")[0]);
// // // // //     validation.setFieldValue("fe", endDate.toISOString().split("T")[0]);
// // // // //     validation.setFieldValue("fs1", startDate.toISOString().split("T")[0]);
// // // // //     validation.setFieldValue("fe1", firstHalfEndDate.toISOString().split("T")[0]);
// // // // //     validation.setFieldValue("fs2", secondHalfStartDate.toISOString().split("T")[0]);
// // // // //     validation.setFieldValue("fe2", endDate.toISOString().split("T")[0]);
// // // // //   };

// // // // //   const handleMonthChange = (e) => {
// // // // //     const monthGap = parseInt(e.target.value);

// // // // //     if (!validation.values.fs) {
// // // // //       // Notify the user to enter the financial start date first
// // // // //       toast.error("Please enter the financial start date first!");
// // // // //       return;
// // // // //     }

// // // // //     // Calculate the new end date by adding the month gap
// // // // //     const startDate = new Date(validation.values.fs);
// // // // //     const endDate = new Date(startDate);
// // // // //     endDate.setMonth(endDate.getMonth() + monthGap);
// // // // //     endDate.setDate(endDate.getDate() - 1);

// // // // //     // Update the financial year end date
// // // // //     validation.setFieldValue("fe", endDate);

// // // // //     // Calculate the new parent financial year start and end dates
// // // // //     const pfs = new Date(validation.values.pfs);
// // // // //     const pfe = new Date(validation.values.pfe);
// // // // //     pfs.setMonth(pfs.getMonth() + monthGap);
// // // // //     pfe.setMonth(pfe.getMonth() + monthGap);

// // // // //     // Update the parent financial year start and end dates
// // // // //     validation.setFieldValue("pfs", pfs);
// // // // //     validation.setFieldValue("pfe", pfe);
// // // // //   };

// // // // //   const handleCreateClick = () => {
// // // // //     validation.validateForm().then(() => {
// // // // //       validation.handleSubmit();
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
// // // // //                   <h1
// // // // //                     className="card-title"
// // // // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // // // //                   >
// // // // //                     FINANCIAL YEAR
// // // // //                   </h1>
// // // // //                 </CardHeader>

// // // // //                 <Row>
// // // // //                   <Row>
// // // // //                     <Col md={3}></Col>
// // // // //                     <Col md={3} className="d-flex justify-content-center">
// // // // //                       FINANCIAL YEAR<font color="red">*</font>
// // // // //                     </Col>
// // // // //                     <Col md={3} className="d-flex justify-content-center">
// // // // //                       FIRST HALF YEAR
// // // // //                     </Col>
// // // // //                     <Col md={3} className="d-flex justify-content-center">
// // // // //                       SECOND HALF YEAR
// // // // //                     </Col>
// // // // //                   </Row>
// // // // //                   <Row className="m-2">
// // // // //                     <Col md={3}>
// // // // //                       <Label for="stDate">
// // // // //                         <h5>START DATE</h5>
// // // // //                       </Label>
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         name="fs"
// // // // //                         onChange={handleChange}
// // // // //                         value={validation.values.fs}
// // // // //                         onBlur={validation.handleBlur}
// // // // //                         invalid={
// // // // //                           validation.touched.fs && !!validation.errors.fs
// // // // //                         }
// // // // //                       />
// // // // //                       {validation.touched.fs && validation.errors.fs && (
// // // // //                         <FormFeedback>{validation.errors.fs}</FormFeedback>
// // // // //                       )}
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         value={validation.values.fs1}
// // // // //                         disabled
// // // // //                       />
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         value={validation.values.fs2}
// // // // //                         disabled
// // // // //                       />
// // // // //                     </Col>
// // // // //                   </Row>
// // // // //                   <hr className="mb-2 mt-2" />

// // // // //                   <Row className="m-2">
// // // // //                     <Col md={3}>
// // // // //                       <Label>
// // // // //                         <h5>END DATE</h5>
// // // // //                       </Label>
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         name="fe"
// // // // //                         value={validation.values.fe}
// // // // //                         onChange={handleChange}
// // // // //                         disabled
// // // // //                       />
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         value={validation.values.fe1}
// // // // //                         disabled
// // // // //                       />
// // // // //                     </Col>
// // // // //                     <Col md={3}>
// // // // //                       <Input
// // // // //                         type="date"
// // // // //                         value={validation.values.fe2}
// // // // //                         disabled
// // // // //                       />
// // // // //                     </Col>
// // // // //                   </Row>
// // // // //                 </Row>
// // // // //               </CardBody>
// // // // //             </Card>

// // // // //             {/* Parent */}
// // // // //             <Card>
// // // // //               <Row className="d-flex justify-content-center m-2">
// // // // //                 <Col md={2}>
// // // // //                   <Label className="mt-1">
// // // // //                     <h5>
// // // // //                       MONTH GAP <font color="red">*</font>
// // // // //                     </h5>
// // // // //                   </Label>
// // // // //                 </Col>
// // // // //                 <Col md={1}>
// // // // //                   <Input
// // // // //                     type="number"
// // // // //                     name="month"
// // // // //                     onChange={handleMonthChange}
// // // // //                     value={validation.values.month}
// // // // //                     onBlur={validation.handleBlur}
// // // // //                     invalid={
// // // // //                       validation.touched.month && !!validation.errors.month
// // // // //                     }
// // // // //                   />
// // // // //                   {validation.touched.month && validation.errors.month && (
// // // // //                     <FormFeedback>{validation.errors.month}</FormFeedback>
// // // // //                   )}
// // // // //                 </Col>
// // // // //               </Row>
// // // // //             </Card>

// // // // //             <Card>
// // // // //               <CardBody>
// // // // //                 <CardHeader className="p-1">
// // // // //                   <h1
// // // // //                     className="card-title"
// // // // //                     style={{ fontSize: "20px", marginBottom: "6px" }}
// // // // //                   >
// // // // //                     PARENT COMPANY FINANCIAL YEAR
// // // // //                   </h1>
// // // // //                 </CardHeader>

// // // // //                 <Row>
// // // // //                   <Col md={3}></Col>
// // // // //                   <Col md={3} className="d-flex justify-content-center">
// // // // //                     FINANCIAL YEAR
// // // // //                   </Col>
// // // // //                   <Col md={3} className="d-flex justify-content-center">
// // // // //                     FIRST HALF
// // // // //                   </Col>
// // // // //                   <Col md={3} className="d-flex justify-content-center">
// // // // //                     SECOND HALF
// // // // //                   </Col>
// // // // //                 </Row>
// // // // //                 <Row className="m-2">
// // // // //                   <Col md={3}>
// // // // //                     <Label for="stDate">
// // // // //                       <h5>START DATE</h5>
// // // // //                     </Label>
// // // // //                   </Col>
// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       name="pfs"
// // // // //                       value={validation.values.pfs}
// // // // //                       onChange={handleChange}
// // // // //                       disabled
// // // // //                     />
// // // // //                   </Col>

// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       value={validation.values.pfs1}
// // // // //                       disabled
// // // // //                     />
// // // // //                   </Col>
// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       value={validation.values.pfs2}
// // // // //                       disabled
// // // // //                     />
// // // // //                   </Col>
// // // // //                 </Row>
// // // // //                 <hr className="mb-3 mt-3" />
// // // // //                 <Row className="m-2">
// // // // //                   <Col md={3}>
// // // // //                     <Label>
// // // // //                       <h5>END DATE</h5>
// // // // //                     </Label>
// // // // //                   </Col>
// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       name="pfe"
// // // // //                       value={validation.values.pfe}
// // // // //                       onChange={handleChange}
// // // // //                       disabled

// // // // //                     />
// // // // //                   </Col>

// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       value={validation.values.pfe1}
// // // // //                       disabled
// // // // //                     />
// // // // //                   </Col>
// // // // //                   <Col md={3}>
// // // // //                     <Input
// // // // //                       type="date"
// // // // //                       value={validation.values.pfe2}
// // // // //                       disabled
// // // // //                     />
// // // // //                   </Col>
// // // // //                 </Row>
// // // // //               </CardBody>
// // // // //             </Card>
// // // // //             <div
// // // // //               style={{
// // // // //                 display: "flex",
// // // // //                 justifyContent: "center",
// // // // //                 marginBottom: "10px",
// // // // //                 marginTop: "10px",
// // // // //               }}
// // // // //             >
// // // // //               <div
// // // // //                 style={{
// // // // //                   display: "flex",
// // // // //                   alignItems: "center",
// // // // //                   justifyContent: "space-around",
// // // // //                 }}
// // // // //               >
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="btn btn-success-subtle border border-success"
// // // // //                   style={{
// // // // //                     paddingTop: "10px",
// // // // //                     height: "45px",
// // // // //                     width: "80px",
// // // // //                     marginRight: "30px",
// // // // //                   }}
// // // // //                   onClick={handleCreateClick}
// // // // //                 >
// // // // //                   <Label>CREATE</Label>
// // // // //                 </button>
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="btn btn-secondary-subtle border border-secondary"
// // // // //                   onClick={() => {
// // // // //                     navigate("/financial_year");
// // // // //                   }}
// // // // //                   style={{
// // // // //                     paddingTop: "10px",
// // // // //                     width: "80px",
// // // // //                     height: "45px",
// // // // //                   }}
// // // // //                 >
// // // // //                   <Label>BACK</Label>
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //             <ToastContainer position="bottom-right" />
// // // // //           </Form>
// // // // //         </div>
// // // // //       </Container>
// // // // //     </React.Fragment>
// // // // //   );
// // // // // };

// // // // // export default FinancialYearModify;
// // // // import React from "react";
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
// // // // } from "reactstrap";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import * as Yup from "yup";
// // // // import { useFormik } from "formik";
// // // // import { useNavigate } from "react-router-dom";

// // // // const FinancialYearModify = () => {
// // // //   const navigate = useNavigate();

// // // // const validation = useFormik({
// // // //   enableReinitialize: true,
// // // //   initialValues: {
// // // //     fs: "",
// // // //     month: "",
// // // //   },

// // // //   validationSchema: Yup.object({
// // // //     fs: Yup.date().required("Financial year start date is required"),
// // // //     month: Yup.number()
// // // //       .required("Month gap is required")
// // // //       .min(-12, "Month gap should be between -12 and 12")
// // // //       .max(12, "MONTH GAP SHOULD BE BETWEEN 12 AND -12"),
// // // //   }),

// // // //   onSubmit: async (values) => {
// // // //     alert("Validated");
// // // //   },
// // // // });

// // // //   const handleChange = (e) => {
// // // //     const startDate = new Date(e.target.value);
// // // //     const endDate = new Date(startDate);

// // // //     endDate.setFullYear(startDate.getFullYear() + 1);
// // // //     endDate.setDate(startDate.getDate() - 1);

// // // //     const firstHalfEndDate = new Date(startDate);
// // // //     firstHalfEndDate.setMonth(startDate.getMonth() + 6);
// // // //     firstHalfEndDate.setDate(firstHalfEndDate.getDate() - 1);
// // // //     const secondHalfStartDate = new Date(firstHalfEndDate);
// // // //     secondHalfStartDate.setDate(secondHalfStartDate.getDate() + 1);
// // // //     validation.setFieldValue("fs", startDate.toISOString().split("T")[0]);
// // // //     validation.setFieldValue("fe", endDate.toISOString().split("T")[0]);
// // // //     validation.setFieldValue("fs1", startDate.toISOString().split("T")[0]);
// // // //     validation.setFieldValue("fe1", firstHalfEndDate.toISOString().split("T")[0]);
// // // //     validation.setFieldValue("fs2", secondHalfStartDate.toISOString().split("T")[0]);
// // // //     validation.setFieldValue("fe2", endDate.toISOString().split("T")[0]);
// // // //   };

// // // //   const handleMonthChange = (e) => {
// // // //     console.log("handleMonthChange function called");
// // // //     console.log("Input value:", e.target.value);
// // // //     validation.setFieldValue("month", e.target.value);
// // // //   };

// // // // const handleCreateClick = () => {
// // // //   validation.validateForm().then(() => {
// // // //     validation.handleSubmit();
// // // //   });
// // // // };

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
// // // //                     <Col md={3}></Col>
// // // //                     <Col md={3} className="d-flex justify-content-center">
// // // //                       FINANCIAL YEAR<font color="red">*</font>
// // // //                     </Col>
// // // //                     <Col md={3} className="d-flex justify-content-center">
// // // //                       FIRST HALF YEAR
// // // //                     </Col>
// // // //                     <Col md={3} className="d-flex justify-content-center">
// // // //                       SECOND HALF YEAR
// // // //                     </Col>
// // // //                   </Row>
// // // //                   <Row className="m-2">
// // // //                     <Col md={3}>
// // // //                       <Label for="stDate">
// // // //                         <h5>START DATE</h5>
// // // //                       </Label>
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         name="fs"
// // // //                         onChange={handleChange}
// // // //                         value={validation.values.fs}
// // // //                         onBlur={validation.handleBlur}
// // // //                         invalid={
// // // //                           validation.touched.fs && !!validation.errors.fs
// // // //                         }
// // // //                       />
// // // //                       {validation.touched.fs && validation.errors.fs && (
// // // //                         <FormFeedback>{validation.errors.fs}</FormFeedback>
// // // //                       )}
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         value={validation.values.fs1}
// // // //                         disabled
// // // //                       />
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         value={validation.values.fs2}
// // // //                         disabled
// // // //                       />
// // // //                     </Col>
// // // //                   </Row>
// // // //                   <hr className="mb-2 mt-2" />

// // // //                   <Row className="m-2">
// // // //                     <Col md={3}>
// // // //                       <Label>
// // // //                         <h5>END DATE</h5>
// // // //                       </Label>
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         name="fe"
// // // //                         value={validation.values.fe}
// // // //                         onChange={handleChange}
// // // //                         disabled
// // // //                       />
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         value={validation.values.fe1}
// // // //                         disabled
// // // //                       />
// // // //                     </Col>
// // // //                     <Col md={3}>
// // // //                       <Input
// // // //                         type="date"
// // // //                         value={validation.values.fe2}
// // // //                         disabled
// // // //                       />
// // // //                     </Col>
// // // //                   </Row>
// // // //                 </Row>
// // // //               </CardBody>
// // // //             </Card>

// // // //             <Card>
// // // //               <CardBody>
// // // //                 <Row className="d-flex justify-content-center m-2">
// // // //                   <Col md={2}>
// // // //                     <Label className="mt-1">
// // // //                       <h5>
// // // //                         MONTH GAP <font color="red">*</font>
// // // //                       </h5>
// // // //                     </Label>
// // // //                   </Col>
// // // //                   <Col md={1}>
// // // //                     <Input
// // // //                       type="number"
// // // //                       name="month"
// // // //                       onChange={handleMonthChange}
// // // //                       value={validation.values.month}
// // // //                       onBlur={validation.handleBlur}
// // // //                       invalid={
// // // //                         validation.touched.month && !!validation.errors.month
// // // //                       }
// // // //                     />
// // // //                     {validation.touched.month && validation.errors.month && (
// // // //                       <FormFeedback>{validation.errors.month}</FormFeedback>
// // // //                     )}
// // // //                   </Col>
// // // //                 </Row>
// // // //               </CardBody>
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
// // // //                   <Col md={3}></Col>
// // // //                   <Col md={3} className="d-flex justify-content-center">
// // // //                     FINANCIAL YEAR
// // // //                   </Col>
// // // //                   <Col md={3} className="d-flex justify-content-center">
// // // //                     FIRST HALF
// // // //                   </Col>
// // // //                   <Col md={3} className="d-flex justify-content-center">
// // // //                     SECOND HALF
// // // //                   </Col>
// // // //                 </Row>
// // // //                 <Row className="m-2">
// // // //                   <Col md={3}>
// // // //                     <Label for="stDate">
// // // //                       <h5>START DATE</h5>
// // // //                     </Label>
// // // //                   </Col>
// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       name="pfs"
// // // //                       value={validation.values.pfs}
// // // //                       onChange={handleChange}
// // // //                       disabled
// // // //                     />
// // // //                   </Col>

// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       value={validation.values.pfs1}
// // // //                       disabled
// // // //                     />
// // // //                   </Col>
// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       value={validation.values.pfs2}
// // // //                       disabled
// // // //                     />
// // // //                   </Col>
// // // //                 </Row>
// // // //                 <hr className="mb-3 mt-3" />
// // // //                 <Row className="m-2">
// // // //                   <Col md={3}>
// // // //                     <Label>
// // // //                       <h5>END DATE</h5>
// // // //                     </Label>
// // // //                   </Col>
// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       name="pfe"
// // // //                       value={validation.values.pfe}
// // // //                       onChange={handleChange}
// // // //                       disabled

// // // //                     />
// // // //                   </Col>

// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       value={validation.values.pfe1}
// // // //                       disabled
// // // //                     />
// // // //                   </Col>
// // // //                   <Col md={3}>
// // // //                     <Input
// // // //                       type="date"
// // // //                       value={validation.values.pfe2}
// // // //                       disabled
// // // //                     />
// // // //                   </Col>
// // // //                 </Row>
// // // //               </CardBody>
// // // //             </Card>
// // // //             <div
// // // //               style={{
// // // //                 display: "flex",
// // // //                 justifyContent: "center",
// // // //                 marginBottom: "10px",
// // // //                 marginTop: "10px",
// // // //               }}
// // // //             >
// // // //               <div
// // // //                 style={{
// // // //                   display: "flex",
// // // //                   alignItems: "center",
// // // //                   justifyContent: "space-around",
// // // //                 }}
// // // //               >
// // // //                 <button
// // // //                   type="button"
// // // //                   className="btn btn-success-subtle border border-success"
// // // //                   style={{
// // // //                     paddingTop: "10px",
// // // //                     height: "45px",
// // // //                     width: "80px",
// // // //                     marginRight: "30px",
// // // //                   }}
// // // //                   onClick={handleCreateClick}
// // // //                 >
// // // //                   <Label>UPDATE</Label>
// // // //                 </button>
// // // //                 <button
// // // //                   type="button"
// // // //                   className="btn btn-secondary-subtle border border-secondary"
// // // //                   onClick={() => {
// // // //                     navigate("/financial_year");
// // // //                   }}
// // // //                   style={{
// // // //                     paddingTop: "10px",
// // // //                     width: "80px",
// // // //                     height: "45px",
// // // //                   }}
// // // //                 >
// // // //                   <Label>BACK</Label>
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //             <ToastContainer position="bottom-right" />
// // // //           </Form>
// // // //         </div>
// // // //       </Container>
// // // //     </React.Fragment>
// // // //   );
// // // // };

// // // // export default FinancialYearModify;

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
// // // import "flatpickr/dist/themes/material_blue.css";
// // // import Flatpickr from "react-flatpickr";
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

// // //     onSubmit: async values => {
// // //       alert("Validated");
// // //     },
// // //   });

// // //   const handleChange = (selectedDates, dateString, instance) => {
// // //     if (instance.input.name === "fs") {
// // //       const startDate = new Date(dateString);
// // //       const endDate = new Date(
// // //         startDate.getFullYear() + 1,
// // //         startDate.getMonth(),
// // //         startDate.getDate()
// // //       );
// // //       const sixMonthsLater = new Date(
// // //         startDate.getFullYear(),
// // //         startDate.getMonth() + 6,
// // //         startDate.getDate()
// // //       );

// // //       validation.setValues({
// // //         ...validation.values,
// // //         fs: dateString,
// // //         fs1: startDate.toISOString().slice(0, 10),
// // //         fs2: sixMonthsLater.toISOString().slice(0, 10),
// // //         fe: endDate.toISOString().slice(0, 10),
// // //         fe1: new Date(
// // //           sixMonthsLater.getFullYear(),
// // //           sixMonthsLater.getMonth(),
// // //           sixMonthsLater.getDate() + 1
// // //         )
// // //           .toISOString()
// // //           .slice(0, 10),
// // //         fe2: endDate.toISOString().slice(0, 10),
// // //       });
// // //     } else if (instance.input.name === "fe") {
// // //       const endDate = new Date(dateString);
// // //       const nextDay = new Date(
// // //         endDate.getFullYear(),
// // //         endDate.getMonth(),
// // //         endDate.getDate() + 1
// // //       );

// // //       validation.setValues({
// // //         ...validation.values,
// // //         fe: dateString,
// // //         fe1: nextDay.toISOString().slice(0, 10),
// // //         fe2: endDate.toISOString().slice(0, 10),
// // //       });
// // //     }
// // //   };

// // //   const handleChangep = (selectedDates, dateString, instance) => {
// // //     if (instance.input.name === "pfs") {
// // //       const startDate = new Date(dateString);
// // //       const endDate = new Date(
// // //         startDate.getFullYear() + 1,
// // //         startDate.getMonth(),
// // //         startDate.getDate()
// // //       );
// // //       const sixMonthsLater = new Date(
// // //         startDate.getFullYear(),
// // //         startDate.getMonth() + 6,
// // //         startDate.getDate()
// // //       );

// // //       validation.setValues({
// // //         ...validation.values,
// // //         pfs: dateString,
// // //         pfs1: startDate.toISOString().slice(0, 10),
// // //         pfs2: sixMonthsLater.toISOString().slice(0, 10),
// // //         pfe: endDate.toISOString().slice(0, 10),
// // //         pfe1: new Date(
// // //           sixMonthsLater.getFullYear(),
// // //           sixMonthsLater.getMonth(),
// // //           sixMonthsLater.getDate() + 1
// // //         )
// // //           .toISOString()
// // //           .slice(0, 10),
// // //         pfe2: endDate.toISOString().slice(0, 10),
// // //       });
// // //     } else if (instance.input.name === "pfe") {
// // //       const endDate = new Date(dateString);
// // //       const nextDay = new Date(
// // //         endDate.getFullYear(),
// // //         endDate.getMonth(),
// // //         endDate.getDate() + 1
// // //       );

// // //       validation.setValues({
// // //         ...validation.values,
// // //         pfe: dateString,
// // //         pfe1: nextDay.toISOString().slice(0, 10),
// // //         pfe2: endDate.toISOString().slice(0, 10),
// // //       });
// // //     }
// // //   };

// // //   const [month, setMonth] = useState();
// // //   const handleMonthChange = e => {
// // //     setMonth(e.target.value);
// // //     validation.setFieldValue("month", e.target.value);
// // //     if (!validation.values.fs) {
// // //       toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// // //       setMonth("");
// // //       return;
// // //     }

// // //     const newMonth = parseInt(e.target.value);
// // //     setMonth(newMonth);

// // //     if (isNaN(newMonth)) {
// // //       toast.warn("INVALID MONTH");
// // //       return;
// // //     }
// // //     if (newMonth < -12 || newMonth > 12) {
// // //       toast.warn("MONTH LIMIT EXCEEDS");
// // //       return;
// // //     }

// // //     const startDate = new Date(validation.values.fs);
// // //     const newPfsDate = new Date(
// // //       startDate.getFullYear(),
// // //       startDate.getMonth() + newMonth,
// // //       startDate.getDate()
// // //     );

// // //     validation.setValues({
// // //       ...validation.values,
// // //       pfs: newPfsDate.toISOString().slice(0, 10),
// // //     });
// // //     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// // //       input: { name: "pfs" },
// // //     });
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
// // //                   <h3>FINANCIAL YEAR</h3>
// // //                 </CardHeader>

// // //                 <Row>
// // //                   <Row>
// // //                     <Col md={3}></Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       FINANCIAL YEAR<font color="red">*</font>
// // //                     </Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       FIRST HALF
// // //                     </Col>
// // //                     <Col md={3} className="d-flex justify-content-center">
// // //                       SECOND HALF
// // //                     </Col>
// // //                   </Row>
// // //                   <Row className="m-2">
// // //                     <Col md={3}>
// // //                       <Label for="stDate">
// // //                         <h5>START DATE</h5>
// // //                       </Label>
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         name="fs"
// // //                         onChange={handleChange}
// // //                         value={validation.values.fs}
// // //                         onBlur={validation.handleBlur}
// // //                         invalid={validation.touched.fs && validation.errors.fs}
// // //                       />
// // //                       {validation.touched.fs && validation.errors.fs ? (
// // //                         <div className="text-danger">
// // //                           {validation.errors.fs}
// // //                         </div>
// // //                       ) : null}
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         name="pfs1"
// // //                         value={validation.values.fs1}
// // //                         disabled={true}
// // //                       />
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <InputGroup>
// // //                         <Flatpickr
// // //                           placeholder="dd M,yyyy"
// // //                           options={{
// // //                             altInput: true,
// // //                             altFormat: "F j, Y",
// // //                             dateFormat: "Y-m-d",
// // //                           }}
// // //                           name="pfs2"
// // //                           value={validation.values.fs2}
// // //                           disabled={true}
// // //                         />
// // //                       </InputGroup>
// // //                     </Col>
// // //                   </Row>

// // //                   <Row className="m-2">
// // //                     <Col md={3}>
// // //                       <Label>
// // //                         <h5>END DATE</h5>
// // //                       </Label>
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <InputGroup>
// // //                         <Flatpickr
// // //                           placeholder="dd M,yyyy"
// // //                           options={{
// // //                             altInput: true,
// // //                             altFormat: "F j, Y",
// // //                             dateFormat: "Y-m-d",
// // //                           }}
// // //                           onChange={handleChange}
// // //                           value={validation.values.fe}
// // //                           disabled={true}
// // //                         />
// // //                       </InputGroup>
// // //                     </Col>

// // //                     <Col md={3}>
// // //                       <InputGroup>
// // //                         <Flatpickr
// // //                           placeholder="dd M,yyyy"
// // //                           options={{
// // //                             altInput: true,
// // //                             altFormat: "F j, Y",
// // //                             dateFormat: "Y-m-d",
// // //                           }}
// // //                           value={validation.values.fe1}
// // //                           disabled={true}
// // //                         />
// // //                       </InputGroup>
// // //                     </Col>
// // //                     <Col md={3}>
// // //                       <InputGroup>
// // //                         <Flatpickr
// // //                           placeholder="dd M,yyyy"
// // //                           options={{
// // //                             altInput: true,
// // //                             altFormat: "F j, Y",
// // //                             dateFormat: "Y-m-d",
// // //                           }}
// // //                           name="fe2"
// // //                           value={validation.values.fe2}
// // //                           disabled={true}
// // //                         />
// // //                       </InputGroup>
// // //                     </Col>
// // //                   </Row>
// // //                 </Row>
// // //               </CardBody>
// // //             </Card>

// // //             {/* parent */}
// // //             <Card>
// // //               <Row className="d-flex justify-content-center m-2">
// // //                 <Col md={2}>
// // //                   <Label className="mt-1">
// // //                     <h5>
// // //                       MONTH GAP <font color="red">*</font>
// // //                     </h5>
// // //                   </Label>
// // //                 </Col>
// // //                 <Col md={3}>
// // //                   <Input
// // //                     type="number"
// // //                     id="month"
// // //                     onChange={handleMonthChange}
// // //                     value={month}
// // //                     onBlur={validation.handleBlur}
// // //                     invalid={
// // //                       validation.touched.month && validation.errors.month
// // //                     }
// // //                   />
// // //                   {validation.touched.month && validation.errors.month ? (
// // //                     <FormFeedback type="invalid">
// // //                       {validation.errors.month}
// // //                     </FormFeedback>
// // //                   ) : null}
// // //                 </Col>
// // //               </Row>
// // //             </Card>
// // //             <Card>
// // //               <CardBody>
// // //                 <CardHeader className="p-1">
// // //                   <h3>PARENT COMPANY FINANCIAL YEAR</h3>
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
// // //                     <InputGroup>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         name="pfs"
// // //                         onChange={handleChangep}
// // //                         value={validation.values.pfs}
// // //                         disabled={true}
// // //                       />
// // //                     </InputGroup>
// // //                   </Col>

// // //                   <Col md={3}>
// // //                     <Flatpickr
// // //                       placeholder="dd M,yyyy"
// // //                       options={{
// // //                         altInput: true,
// // //                         altFormat: "F j, Y",
// // //                         dateFormat: "Y-m-d",
// // //                       }}
// // //                       name="pfs1"
// // //                       value={validation.values.pfs1}
// // //                       disabled={true}
// // //                     />
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <InputGroup>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         name="pfs2"
// // //                         value={validation.values.pfs2}
// // //                         disabled={true}
// // //                       />
// // //                     </InputGroup>
// // //                   </Col>
// // //                 </Row>

// // //                 <Row className="m-2">
// // //                   <Col md={3}>
// // //                     <Label>
// // //                       <h5>
// // //                         END DATE<font color="red">*</font>
// // //                       </h5>
// // //                     </Label>
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <InputGroup>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         onChange={handleChangep}
// // //                         value={validation.values.pfe}
// // //                         disabled={true}
// // //                       />
// // //                     </InputGroup>
// // //                   </Col>

// // //                   <Col md={3}>
// // //                     <InputGroup>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         value={validation.values.pfe1}
// // //                         disabled={true}
// // //                       />
// // //                     </InputGroup>
// // //                   </Col>
// // //                   <Col md={3}>
// // //                     <InputGroup>
// // //                       <Flatpickr
// // //                         placeholder="dd M,yyyy"
// // //                         options={{
// // //                           altInput: true,
// // //                           altFormat: "F j, Y",
// // //                           dateFormat: "Y-m-d",
// // //                         }}
// // //                         name="fe2"
// // //                         value={validation.values.pfe2}
// // //                         disabled={true}
// // //                       />
// // //                     </InputGroup>
// // //                   </Col>
// // //                 </Row>
// // // <hr className="mt-4" />
// // //                 <div
// // //                   style={{
// // //                     display: "flex",
// // //                     justifyContent: "center",
// // //                     marginBottom: "10px",
// // //                     marginTop: "10px",
// // //                   }}
// // //                 >
// // //                   <div
// // //                     style={{
// // //                       display: "flex",
// // //                       alignItems: "center",
// // //                       justifyContent: "space-around",
// // //                     }}
// // //                   >
// // //                     <button
// // //                       type="submit"
// // //                       className="btn btn-success-subtle border border-success"
// // //                       onClick={handleCreateClick}
// // //                       style={{
// // //                         paddingTop: "10px",
// // //                         height: "45px",
// // //                         width: "80px",
// // //                         marginRight: "30px",
// // //                       }}
// // //                     >
// // //                       <Label>CREATE</Label>
// // //                     </button>
// // //                     <button
// // //                       type="button"
// // //                       className="btn btn-secondary-subtle border border-secondary"
// // //                       onClick={() => {
// // //                         navigate("/financial_year");
// // //                       }}
// // //                       style={{
// // //                         paddingTop: "10px",
// // //                         width: "80px",
// // //                         height: "45px",
// // //                       }}
// // //                     >
// // //                       <Label>BACK</Label>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </CardBody>
// // //             </Card>
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

// // const FinancialYearModify = () => {
// //   const navigate = useNavigate();

// //   const validation = useFormik({
// //     enableReinitialize: true,
// //     initialValues: {
// //       fs: "",
// //       month: "",
// //     },

// //     validationSchema: Yup.object({
// //       fs: Yup.date().required("START DATE IS REQUIRED"),
// //       month: Yup.number()
// //         .required("MONTH GAP IS REQUIRED")
// //         .min(-12, "MONTH GAP SHOULD BE BETWEEN -12 TO 12")
// //         .max(12, "MONTH GAP SHOULD BE BETWEEN -12 TO 12"),
// //     }),

// //     onSubmit: async values => {
// //       alert("Validated");
// //     },
// //   });
// //   // const handleChange = (selectedDates, dateString, instance) => {
// //   //   const startDate = new Date(dateString);
// //   //   const endDate = new Date(startDate);

// //   //   endDate.setFullYear(startDate.getFullYear() + 1);
// //   //   endDate.setDate(startDate.getDate() - 1);

// //   //   const firstHalfEndDate = new Date(startDate);
// //   //   firstHalfEndDate.setMonth(startDate.getMonth() + 6);
// //   //   firstHalfEndDate.setDate(firstHalfEndDate.getDate() - 1);
// //   //   const secondHalfStartDate = new Date(firstHalfEndDate);
// //   //   secondHalfStartDate.setDate(secondHalfStartDate.getDate() + 1);

// //   //   validation.setValues({
// //   //     ...validation.values,
// //   //     fs: dateString,
// //   //     fe: endDate.toISOString().slice(0, 10),
// //   //     fs1: startDate.toISOString().slice(0, 10),
// //   //     fe1: firstHalfEndDate.toISOString().slice(0, 10),
// //   //     fs2: secondHalfStartDate.toISOString().slice(0, 10),
// //   //     fe2: endDate.toISOString().slice(0, 10),
// //   //   });
// //   // };

// //   // const handleChangep = (selectedDates, dateString, instance) => {
// //   //   if (instance.input.name === "pfs") {
// //   //     const startDate = new Date(dateString);
// //   //     const endDate = new Date(
// //   //       startDate.getFullYear() + 1,
// //   //       startDate.getMonth(),
// //   //       startDate.getDate()
// //   //     );
// //   //     const sixMonthsLater = new Date(
// //   //       startDate.getFullYear(),
// //   //       startDate.getMonth() + 6,
// //   //       startDate.getDate()
// //   //     );

// //   //     validation.setValues({
// //   //       ...validation.values,
// //   //       pfs: dateString,
// //   //       pfs1: startDate.toISOString().slice(0, 10),
// //   //       pfs2: sixMonthsLater.toISOString().slice(0, 10),
// //   //       pfe: endDate.toISOString().slice(0, 10),
// //   //       pfe1: new Date(
// //   //         sixMonthsLater.getFullYear(),
// //   //         sixMonthsLater.getMonth(),
// //   //         sixMonthsLater.getDate() + 1
// //   //       )
// //   //         .toISOString()
// //   //         .slice(0, 10),
// //   //       pfe2: endDate.toISOString().slice(0, 10),
// //   //     });
// //   //   } else if (instance.input.name === "pfe") {
// //   //     const endDate = new Date(dateString);
// //   //     const nextDay = new Date(
// //   //       endDate.getFullYear(),
// //   //       endDate.getMonth(),
// //   //       endDate.getDate() + 1
// //   //     );

// //   //     validation.setValues({
// //   //       ...validation.values,
// //   //       pfe: dateString,
// //   //       pfe1: nextDay.toISOString().slice(0, 10),
// //   //       pfe2: endDate.toISOString().slice(0, 10),
// //   //     });
// //   //   }
// //   // };

// //   // const [month, setMonth] = useState("");
// //   // const handleMonthChange = e => {
// //   //   const newMonth = parseInt(e.target.value);
// //   //   setMonth(newMonth);
// //   //   validation.setFieldValue("month", newMonth);

// //   //   if (!validation.values.fs) {
// //   //     toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// //   //     setMonth("");
// //   //     return;
// //   //   }

// //   //   if (isNaN(newMonth)) {
// //   //     toast.warn("INVALID MONTH");
// //   //     return;
// //   //   }
// //   //   if (newMonth < -12 || newMonth > 12) {
// //   //     toast.warn("MONTH LIMIT EXCEEDS");
// //   //     return;
// //   //   }

// //   //   const startDate = new Date(validation.values.fs);
// //   //   const newPfsDate = new Date(
// //   //     startDate.getFullYear(),
// //   //     startDate.getMonth() + newMonth,
// //   //     startDate.getDate()
// //   //   );

// //   //   validation.setValues({
// //   //     ...validation.values,
// //   //     pfs: newPfsDate.toISOString().slice(0, 10),
// //   //   });
// //   //   handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// //   //     input: { name: "pfs" },
// //   //   });
// //   // };
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
// //       // toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
// //       setMonth("");
// //       return;
// //     }
 
// //     const newMonth = parseInt(e.target.value);
// //     setMonth(newMonth);
 
// //     if (isNaN(newMonth)) {
// //       // toast.warn("INVALID MONTH");
// //       setMonth("")
// //       return;
// //     }
// //     if (newMonth < -12 || newMonth > 12) {
// //       // toast.warn("MONTH LIMIT EXCEEDS");
// //       setMonth("")
// //       return;
// //     }
 
// //     const startDate = new Date(validation.values.fs);
// //     const newPfsDate = new Date(
// //       startDate.getFullYear(),
// //       startDate.getMonth() + newMonth,
// //       startDate.getDate() + 1
// //     );
 
// //     validation.setValues({
// //       ...validation.values,
// //       pfs: newPfsDate.toISOString().slice(0, 10),
// //     });
// //     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
// //       input: { name: "pfs" },
// //     });
// //   };
 
// //   const handleCreateClick = () => {
// //     validation.validateForm().then(() => {
// //       validation.handleSubmit();
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
// //                   <h4>FINANCIAL YEAR</h4>
// //                 </CardHeader>

// //                 <Row>
// //                   <Col md={3}></Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     FINANCIAL YEAR<font color="red">*</font>
// //                   </Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     FIRST HALF
// //                   </Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     SECOND HALF
// //                   </Col>
// //                 </Row>
// //                 <Row className="m-2">
// //                   <Col md={3}>
// //                     <Label for="stDate">
// //                       <h5>START DATE</h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={3}>
// //                     <Flatpickr
// //                       placeholder="dd M,yyyy"
// //                       options={{
// //                         altInput: true,
// //                         altFormat: "F j, Y",
// //                         dateFormat: "Y-m-d",
// //                       }}
// //                       name="fs"
// //                       onChange={handleChange}
// //                       value={validation.values.fs}
// //                       onBlur={validation.handleBlur}
// //                       invalid={validation.touched.fs && validation.errors.fs}
// //                     />
// //                     {validation.touched.fs && validation.errors.fs && (
// //                       <div className="text-danger" style={{ fontSize: "12px" }}>
// //                         {validation.errors.fs}
// //                       </div>
// //                     )}
// //                   </Col>
// //                   <Col md={3}>
// //                     <Flatpickr
// //                       placeholder="dd M,yyyy"
// //                       options={{
// //                         altInput: true,
// //                         altFormat: "F j, Y",
// //                         dateFormat: "Y-m-d",
// //                       }}
// //                       name="pfs1"
// //                       value={validation.values.fs1}
// //                       disabled={true}
// //                     />
// //                   </Col>
// //                   <Col md={3}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="pfs2"
// //                         value={validation.values.fs2}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                 </Row>

// //                 <Row className="m-2">
// //                   <Col md={3}>
// //                     <Label>
// //                       <h5>END DATE</h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={3}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         onChange={handleChange}
// //                         value={validation.values.fe}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>

// //                   <Col md={3}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         value={validation.values.fe1}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                   <Col md={3}>
// //                     <InputGroup>
// //                       <Flatpickr
// //                         placeholder="dd M,yyyy"
// //                         options={{
// //                           altInput: true,
// //                           altFormat: "F j, Y",
// //                           dateFormat: "Y-m-d",
// //                         }}
// //                         name="fe2"
// //                         value={validation.values.fe2}
// //                         disabled={true}
// //                       />
// //                     </InputGroup>
// //                   </Col>
// //                 </Row>
// //               </CardBody>
// //             </Card>

// //             {/* parent */}
// //             <Card>
// //               <Row className="d-flex justify-content-center m-2">
// //                 <Col md={2}>
// //                   <Label className="mt-1">
// //                     <h5>
// //                       MONTH GAP <font color="red">*</font>
// //                     </h5>
// //                   </Label>
// //                 </Col>
// //                 <Col md={3}>
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
// //                   {validation.touched.month && validation.errors.month && (
// //                     <FormFeedback type="invalid">
// //                       {validation.errors.month}
// //                     </FormFeedback>
// //                   )}
// //                 </Col>
// //               </Row>
// //             </Card>
// //             <Card>
// //               <CardBody>
// //                 <CardHeader className="p-1">
// //                   <h3>PARENT COMPANY FINANCIAL YEAR</h3>
// //                 </CardHeader>

// //                 <Row>
// //                   <Col md={3}></Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     FINANCIAL YEAR
// //                   </Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     FIRST HALF
// //                   </Col>
// //                   <Col md={3} className="d-flex justify-content-center">
// //                     SECOND HALF
// //                   </Col>
// //                 </Row>
// //                 <Row className="m-2">
// //                   <Col md={3}>
// //                     <Label for="stDate">
// //                       <h5>START DATE</h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={3}>
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

// //                   <Col md={3}>
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
// //                   <Col md={3}>
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
// //                   <Col md={3}>
// //                     <Label>
// //                       <h5>
// //                         END DATE<font color="red">*</font>
// //                       </h5>
// //                     </Label>
// //                   </Col>
// //                   <Col md={3}>
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

// //                   <Col md={3}>
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
// //                   <Col md={3}>
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
// //                 <hr className="mt-4" />
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
// //                       onClick={handleCreateClick}
// //                       style={{
// //                         paddingTop: "10px",
// //                         height: "45px",
// //                         width: "80px",
// //                         marginRight: "30px",
// //                       }}
// //                     >
// //                       <Label>UPDATE</Label>
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
// //             {/* <ToastContainer position="bottom-right" /> */}
// //           </Form>
// //         </div>
// //       </Container>
// //     </React.Fragment>
// //   );
// // };

// // export default FinancialYearModify;
// import React, { useState } from "react";
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
//   InputGroup,
// } from "reactstrap";
// import "flatpickr/dist/themes/material_blue.css";
// import Flatpickr from "react-flatpickr";
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
//       fs: Yup.string().required("Financial year start date is required"),
//       month: Yup.number().required("required"),
//     }),
 
//     onSubmit: async values => {
//       alert("Validated");
//     },
//   });
 
//   const handleChange = (selectedDates, dateString, instance) => {
//     if (instance.input.name === "fs") {
//       const startDate = new Date(dateString);
//       const endDate = new Date(
//         startDate.getFullYear() + 1,
//         startDate.getMonth(),
//         startDate.getDate()
//       );
//       const sixMonthsLater = new Date(
//         startDate.getFullYear(),
//         startDate.getMonth() + 6,
//         startDate.getDate()
//       );
 
//       validation.setValues({
//         ...validation.values,
//         fs: dateString,
//         fs1: startDate.toISOString().slice(0, 10),
//         fs2: sixMonthsLater.toISOString().slice(0, 10),
//         fe: endDate.toISOString().slice(0, 10),
//         fe1: new Date(
//           sixMonthsLater.getFullYear(),
//           sixMonthsLater.getMonth(),
//           sixMonthsLater.getDate() + 1
//         )
//           .toISOString()
//           .slice(0, 10),
//         fe2: endDate.toISOString().slice(0, 10),
//       });
//     } else if (instance.input.name === "fe") {
//       const endDate = new Date(dateString);
//       const nextDay = new Date(
//         endDate.getFullYear(),
//         endDate.getMonth(),
//         endDate.getDate() + 1
//       );
 
//       validation.setValues({
//         ...validation.values,
//         fe: dateString,
//         fe1: nextDay.toISOString().slice(0, 10),
//         fe2: endDate.toISOString().slice(0, 10),
//       });
//     }
//   };
 
//   const handleChangep = (selectedDates, dateString, instance) => {
//     if (instance.input.name === "pfs") {
//       const startDate = new Date(dateString);
//       const endDate = new Date(
//         startDate.getFullYear() + 1,
//         startDate.getMonth(),
//         startDate.getDate()
//       );
//       const sixMonthsLater = new Date(
//         startDate.getFullYear(),
//         startDate.getMonth() + 6,
//         startDate.getDate()
//       );
 
//       validation.setValues({
//         ...validation.values,
//         pfs: dateString,
//         pfs1: startDate.toISOString().slice(0, 10),
//         pfs2: sixMonthsLater.toISOString().slice(0, 10),
//         pfe: endDate.toISOString().slice(0, 10),
//         pfe1: new Date(
//           sixMonthsLater.getFullYear(),
//           sixMonthsLater.getMonth(),
//           sixMonthsLater.getDate() + 1
//         )
//           .toISOString()
//           .slice(0, 10),
//         pfe2: endDate.toISOString().slice(0, 10),
//       });
//     } else if (instance.input.name === "pfe") {
//       const endDate = new Date(dateString);
//       const nextDay = new Date(
//         endDate.getFullYear(),
//         endDate.getMonth(),
//         endDate.getDate() + 1
//       );
 
//       validation.setValues({
//         ...validation.values,
//         pfe: dateString,
//         pfe1: nextDay.toISOString().slice(0, 10),
//         pfe2: endDate.toISOString().slice(0, 10),
//       });
//     }
//   };
 
//   const [month, setMonth] = useState();
//   const handleMonthChange = e => {
//     setMonth(e.target.value);
//     validation.setFieldValue("month", e.target.value);
//     if (!validation.values.fs) {
//       toast.warn("PLEASE SELECT CHILD FINANCIAL YEAR FIRST");
//       setMonth("");
//       return;
//     }
 
//     const newMonth = parseInt(e.target.value);
//     setMonth(newMonth);
 
//     if (isNaN(newMonth)) {
//       toast.warn("INVALID MONTH");
//       setMonth("")
//       return;
//     }
//     if (newMonth < -12 || newMonth > 12) {
//       toast.warn("MONTH LIMIT EXCEEDS");
//       setMonth("")
//       return;
//     }
 
//     const startDate = new Date(validation.values.fs);
//     const newPfsDate = new Date(
//       startDate.getFullYear(),
//       startDate.getMonth() + newMonth,
//       startDate.getDate() + 1
//     );
 
//     validation.setValues({
//       ...validation.values,
//       pfs: newPfsDate.toISOString().slice(0, 10),
//     });
//     handleChangep(null, newPfsDate.toISOString().slice(0, 10), {
//       input: { name: "pfs" },
//     });
//   };
 
//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Form className="needs-validation" onSubmit={validation.handleSubmit}>
//             <Card>
//               <CardBody>
//                 <CardHeader className="p-1"></CardHeader>
 
//                 <Row className="mt-2">
//                   <Row>
//                     <Col md={2}></Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       FINANCIAL YEAR PARENT<font color="red">*</font>
//                     </Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       FIRST HALF
//                     </Col>
//                     <Col md={3} className="d-flex justify-content-center">
//                       SECOND HALF
//                     </Col>
//                   </Row>
//                   <Row className="m-2">
//                     <Col md={2}>
//                       <Label for="stDate">
//                         <h5>START DATE</h5>
//                       </Label>
//                     </Col>
//                     <Col md={3}>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         name="fs"
//                         onChange={handleChange}
//                         value={validation.values.fs}
//                         onBlur={validation.handleBlur}
//                         invalid={validation.touched.fs && validation.errors.fs}
//                       />
//                       {validation.touched.fs && validation.errors.fs ? (
//                         <div className="text-danger">
//                           {validation.errors.fs}
//                         </div>
//                       ) : null}
//                     </Col>
//                     <Col md={3}>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         name="pfs1"
//                         value={validation.values.fs1}
//                         disabled={true}
//                       />
//                     </Col>
//                     <Col md={3}>
//                       <InputGroup>
//                         <Flatpickr
//                           placeholder="dd M,yyyy"
//                           options={{
//                             altInput: true,
//                             altFormat: "F j, Y",
//                             dateFormat: "Y-m-d",
//                           }}
//                           name="pfs2"
//                           value={validation.values.fs2}
//                           disabled={true}
//                         />
//                       </InputGroup>
//                     </Col>
//                   </Row>
 
//                   <Row className="m-2">
//                     <Col md={2}>
//                       <Label>
//                         <h5>END DATE</h5>
//                       </Label>
//                     </Col>
//                     <Col md={3}>
//                       <InputGroup>
//                         <Flatpickr
//                           placeholder="dd M,yyyy"
//                           options={{
//                             altInput: true,
//                             altFormat: "F j, Y",
//                             dateFormat: "Y-m-d",
//                           }}
//                           onChange={handleChange}
//                           value={validation.values.fe}
//                           disabled={true}
//                         />
//                       </InputGroup>
//                     </Col>
 
//                     <Col md={3}>
//                       <InputGroup>
//                         <Flatpickr
//                           placeholder="dd M,yyyy"
//                           options={{
//                             altInput: true,
//                             altFormat: "F j, Y",
//                             dateFormat: "Y-m-d",
//                           }}
//                           value={validation.values.fe1}
//                           disabled={true}
//                         />
//                       </InputGroup>
//                     </Col>
//                     <Col md={3}>
//                       <InputGroup>
//                         <Flatpickr
//                           placeholder="dd M,yyyy"
//                           options={{
//                             altInput: true,
//                             altFormat: "F j, Y",
//                             dateFormat: "Y-m-d",
//                           }}
//                           name="fe2"
//                           value={validation.values.fe2}
//                           disabled={true}
//                         />
//                       </InputGroup>
//                     </Col>
//                   </Row>
//                 </Row>
//               </CardBody>
//             </Card>
 
//             {/* parent */}
 
//             <Card>
//               <CardBody>
//                 <Row className="justify-content-center">
//                   <Col md={2}>
//                     MONTH GAP <font color="red">*</font>
//                   </Col>
//                   <Col md={1}>
//                     <Input
//                       type="number"
//                       id="month"
//                       onChange={handleMonthChange}
//                       value={month}
//                       onBlur={validation.handleBlur}
//                       invalid={
//                         validation.touched.month && validation.errors.month
//                       }
//                     />
//                     {validation.touched.month && validation.errors.month ? (
//                       <FormFeedback type="invalid">
//                         {validation.errors.month}
//                       </FormFeedback>
//                     ) : null}
//                   </Col>
//                 </Row>
//                 <CardHeader className="pt-0"></CardHeader>
//                 <Row className="mt-2">
//                   <Col md={2}></Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     FINANCIAL YEAR PARENT
//                   </Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     FIRST HALF
//                   </Col>
//                   <Col md={3} className="d-flex justify-content-center">
//                     SECOND HALF
//                   </Col>
//                 </Row>
//                 <Row className="m-2">
//                   <Col md={2}>
//                     <Label for="stDate">
//                       <h5>START DATE</h5>
//                     </Label>
//                   </Col>
//                   <Col md={3}>
//                     <InputGroup>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         name="pfs"
//                         onChange={handleChangep}
//                         value={validation.values.pfs}
//                         disabled={true}
//                       />
//                     </InputGroup>
//                   </Col>
 
//                   <Col md={3}>
//                     <Flatpickr
//                       placeholder="dd M,yyyy"
//                       options={{
//                         altInput: true,
//                         altFormat: "F j, Y",
//                         dateFormat: "Y-m-d",
//                       }}
//                       name="pfs1"
//                       value={validation.values.pfs1}
//                       disabled={true}
//                     />
//                   </Col>
//                   <Col md={3}>
//                     <InputGroup>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         name="pfs2"
//                         value={validation.values.pfs2}
//                         disabled={true}
//                       />
//                     </InputGroup>
//                   </Col>
//                 </Row>
 
//                 <Row className="m-2">
//                   <Col md={2}>
//                     <Label>
//                       <h5>END DATE</h5>
//                     </Label>
//                   </Col>
//                   <Col md={3}>
//                     <InputGroup>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         onChange={handleChangep}
//                         value={validation.values.pfe}
//                         disabled={true}
//                       />
//                     </InputGroup>
//                   </Col>
 
//                   <Col md={3}>
//                     <InputGroup>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         value={validation.values.pfe1}
//                         disabled={true}
//                       />
//                     </InputGroup>
//                   </Col>
//                   <Col md={3}>
//                     <InputGroup>
//                       <Flatpickr
//                         placeholder="dd M,yyyy"
//                         options={{
//                           altInput: true,
//                           altFormat: "F j, Y",
//                           dateFormat: "Y-m-d",
//                         }}
//                         name="fe2"
//                         value={validation.values.pfe2}
//                         disabled={true}
//                       />
//                     </InputGroup>
//                   </Col>
//                 </Row>
 
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginBottom: "10px",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-around",
//                     }}
//                   >
//                     <button
//                       type="submit"
//                       className="btn btn-success-subtle border border-success"
//                       style={{
//                         paddingTop: "10px",
//                         height: "45px",
//                         width: "80px",
//                         marginRight: "30px",
//                       }}
//                     >
//                       <Label>CREATE</Label>
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-secondary-subtle border border-secondary"
//                       onClick={() => {
//                         navigate("/financial_year");
//                       }}
//                       style={{
//                         paddingTop: "10px",
//                         width: "80px",
//                         height: "45px",
//                       }}
//                     >
//                       <Label>BACK</Label>
//                     </button>
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
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

const FinancialYearModify = () => {
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
                  <h4>FINANCIAL YEAR</h4>
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
                  <h4>PARENT COMPANY FINANCIAL YEAR</h4>
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

export default FinancialYearModify;




