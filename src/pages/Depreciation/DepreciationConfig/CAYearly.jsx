// import React, { useState } from "react";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import {
//   Button,
//   Col,
//   FormFeedback,
//   Input,
//   Label,
//   Row,
//   Form,
//   FormGroup,
//   CardBody,
//   CardHeader,
//   Container,
//   Card,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const CAYearly = () => {
//   const navigate = useNavigate();
//   const validation = useFormik({
//     enableReinitialize: true,

//     initialValues: {
//       slm: "SLM - Straight Line Method",
//       rate: "",
//       date: "",
//       actual: "",
//       input: "",
//       month: "",

//     },

//     validationSchema: Yup.object({
//       // departmentname: Yup.string().required("DEPARTMENT IS REQUIRED"),
//       // departmentcode: Yup.string().required("department code is Required"),
//     }),
//     onSubmit: values => {
//       alert("form validated !");
//       //console.log("values", values);
//     },
//   });

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card>
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 CREATE DEPARTMENT
//               </h1>
//             </CardHeader>

//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <Form
//                     className="needs-validation"
//                     onSubmit={validation.handleSubmit}
//                   >
//                     <Row className="mb-2">
//                       <Col md={4}>
//                         <Label>METHOD OF DEPRECIATION</Label>
//                       </Col>
//                       <Col md={8}>
//                         <FormGroup className="mb-3">
//                           <Input
//                             name="slm"
//                             disabled
//                             type="text"
//                             placeholder="PLEASE ENTER DEPARTMENT"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                           />
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <hr className="mb-2" />
//                     {/* <Row className="mb-2">
//                       <Col md={12}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="validationCustom02">
//                             DEPARTMENT CODE<font color="red">*</font>
//                           </Label>
//                           <Input
//                             name="departmentcode"
//                             type="text"
//                             className="form-control"
//                             id="validationCustom02"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.departmentcode &&
//                               validation.errors.departmentcode
//                             }
//                           />
//                           {validation.touched.departmentcode &&
//                           validation.errors.departmentcode ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.departmentcode}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row> */}

//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         marginBottom: "20px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "space-around",
//                         }}
//                       >
//                         <Button
//                           type="submit"
//                           color="success-subtle"
//                           className="border border-success"
//                           style={{
//                             paddingTop: "10px",
//                             height: "45px",
//                             width: "80px",
//                             marginRight: "30px",
//                           }}
//                         >
//                           CREATE
//                         </Button>
//                         <button
//                           type="button"
//                           className="btn btn-secondary-subtle border border-secondary"
//                           onClick={() => {
//                             navigate("/department");
//                           }}
//                           style={{
//                             paddingTop: "10px",
//                             width: "80px",
//                             height: "45px",
//                           }}
//                         >
//                           <Label>BACK</Label>
//                         </button>
//                       </div>
//                     </div>
//                   </Form>
//                 </Col>
//               </Row>
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default CAYearly;
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Col,
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

const CAYearly = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      slm: "SLM-STRAIGHT LINE METHOD", //CONST NO CHANGE
      rate: "RATE", //CONST NO CHANGE
      date: "INSTALLATION DATE", //CONST NO CHANGE
      actual: "ASSET VALUE", //CONST NO CHANGE
      startdate: "",
      set: "78.0",
      month: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert("Form submitted!");
    },
  });

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              DEPRECIATION ACT NAME: COMPANY ACT (MONTHLY & YEARLY){" "}
            </h1>
          </CardHeader>
          <CardBody>
            <Row className="justify-content-center">
              <Col xl={10}>
                <Form onSubmit={formik.handleSubmit}>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label>METHOD OF DEPRECIATION</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="slm"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.slm}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label> DEPRECIATION BASED ON</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="rate"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.rate}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label> CAPITALIZATION DATE</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="date"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label>
                        COMPONENTS TO BE CONSIDERED FOR CAPITALIZATION VALUE
                      </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="actual"
                          disabled
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.actual}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={12}>
                      <Label>
                        START DATE OF DEPRECIATION: THE DATE TO BE CONSIDERED AS
                        THE START DATE OF DEPRECIATION
                      </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="startdate"
                          type="select"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.startdate}
                        >
                          <option value="Electronics">ACTUAL DATE</option>
                          <option value="Clothing">
                            FIRST DAY OF THE MONTH
                          </option>
                          <option value="Books">
                            FIRST DAY OF THE NEXT MONTH
                          </option>
                          <option value="Furniture">
                            FIRST HALF FIRST DAY OF THE MONTH ELSE FIRST DAY OF
                            NEXT MONTH
                          </option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label>WRITE OFF VALUE </Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="set"
                          type="text"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.set}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <Label>NUMBER OF DAYS TO BE CONSIDERED</Label>

                      <FormGroup className="mb-3">
                        <Input
                          name="month"
                          type="select"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.month}
                        >
                          <option value="">SELECT</option>
                          <option value="Clothing">
                            ACTUAL NUMBER OF DAYS{" "}
                          </option>
                          <option value="Electronics">
                            EQUAL FOR ALL MONTHS
                          </option>
                        </Input>
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
                        className="border border-success"
                        style={{
                          paddingTop: "10px",
                          height: "45px",
                          width: "80px",
                          marginRight: "30px",
                        }}
                      >
                        SAVE{" "}
                      </Button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default CAYearly;
