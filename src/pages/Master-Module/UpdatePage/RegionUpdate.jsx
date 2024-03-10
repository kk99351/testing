// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   Col,
//   Row,
//   CardBody,
//   Card,
//   Label,
//   Input,
//   Button,
//   FormFeedback,
//   Container,
//   Form,
// } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const RegionCreate = () => {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     region_name: Yup.string().required("State name is required"),
//     region_code: Yup.string().required("State code is required"),
//     company_group: Yup.string().required("Company name is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       region_name: "",
//       region_code: "",
//       company_group: "",
//     },
//     validationSchema,
//     onSubmit: async values => {
//       alert("validated !")
//       // try {
//       //   await axios.post(`http://localhost:3000/region/`, values);
//       //   navigate("/region");
//       // } catch (error) {
//       //   console.log("error in creating region data: " + error);
//       // }
//     },
//   });

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card className="mt-5">
//             <CardBody>
//               <div className="card-header">
//                 <h4 className="card-title mb-0">STATE DETAILS</h4>
//               </div>
//               <Form onSubmit={formik.handleSubmit}>
//                 <div className="p-2 d-flex flex-column align-items-center">
//                   <Col xl={8}>
//                     <Row>
//                       <Col xl={4} className="p-2">
//                         <Label for="region_name">
//                         STATE NAME<font color="red">*</font>
//                         </Label>
//                       </Col>
//                       <Col xl={6} className="p-2">
//                         <Input
//                           type="select"
//                           name="region_name"
//                           id="region_name"
//                           placeholder="Enter Region Name"
//                           value={formik.values.region_name}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           invalid={
//                             formik.touched.region_name &&
//                             Boolean(formik.errors.region_name)
//                           }
//                         >
//                         <option value="" disabled>
//                               Select region name
//                             </option>
//                             <option value="dept1">KARNATKA</option>
//                             <option value="dept2">BIHAR</option>
//                           </Input>
//                         {formik.touched.region_name &&
//                         formik.errors.region_name ? (
//                           <FormFeedback type="invalid">
//                             {formik.errors.region_name}
//                           </FormFeedback>
//                         ) : null}
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col xl={4} className="p-2">
//                         <Label for="region_code">
//                           REGION CODE<font color="red">*</font>
//                         </Label>
//                       </Col>
//                       <Col xl={6} className="p-2">
//                         <Input
//                           type="select"
//                           name="region_code"
//                           id="region_code"
//                           placeholder="Enter Region code"
//                           value={formik.values.region_code}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           invalid={
//                             formik.touched.region_code &&
//                             Boolean(formik.errors.region_code)
//                           }
//                         >
//                         <option value="" disabled>
//                               Select region code
//                             </option>
//                             <option value="dept1">4521</option>
//                             <option value="dept2">7572</option>
//                           </Input>
//                         {formik.touched.region_code &&
//                         formik.errors.region_code ? (
//                           <FormFeedback type="invalid">
//                             {formik.errors.region_code}
//                           </FormFeedback>
//                         ) : null}
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col xl={4} className="p-2">
//                         <Label for="company_group">
//                           COMPANY GROUP<font color="red">*</font>
//                         </Label>
//                       </Col>
//                       <Col xl={6} className="p-2">
//                         <Input
//                           type="select"
//                           name="company_group"
//                           id="company_group"
//                           placeholder="Enter company group"
//                           value={formik.values.company_group}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           invalid={
//                             formik.touched.company_group &&
//                             Boolean(formik.errors.company_group)
//                           }
//                         >
//                           <option value="" disabled>
//                               Select company group
//                             </option>
//                             <option value="dept1">AUSTRALIA</option>
//                             <option value="dept2">INDIA</option>
//                           </Input>
//                         {formik.touched.company_group &&
//                         formik.errors.company_group ? (
//                           <FormFeedback type="invalid">
//                             {formik.errors.company_group}
//                           </FormFeedback>
//                         ) : null}
//                       </Col>
//                     </Row>
//                   </Col>
//                 </div>

//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-around",
//                   }}
//                 >
//                   <Button
//                     type="submit"
//                     color="success-subtle"
//                     className="border border-success"
//                   >
//                     CREATE
//                   </Button>

//                   <Button
//                     type="button"
//                     color="secondary-subtle"
//                     className="border border-secondary"
//                     onClick={() => {
//                       navigate("/region");
//                     }}
//                   >
//                     BACK
//                   </Button>
//                 </div>
//               </Form>
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default RegionCreate;
import React, { useState } from "react";
import axios from "axios";
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

const RegionCreate = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      region_name: "",
      region_code: "",
      company_group: "",
    },
    // validationSchema: Yup.object({
    //   companyGroup: Yup.string().required("Company Group is Required"),
    //   companyGroupCode: Yup.string().required("Company Group Code is Required"),
    // }),.
    validationSchema: Yup.object({
      region_name: Yup.string().required("State name is required"),
      region_code: Yup.string().required("State code is required"),
      company_group: Yup.string().required("Company name is required"),
    }),

    onSubmit: async values => {
      // console.log(values)
      alert("validated !");
      // try {
      //   await axios.post(`http://localhost:3000/companygroup/`, values);
      //   navigate("/companygroup");
      // } catch (error) {
      //   console.log("error in creating companygroup data: " + error);
      // }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                STATE DETAILS
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
                          <Label htmlFor="company_group">
                            COMPANY GROUP/COUNTRY <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="company_group"
                            id="company_group"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                          >
                            <option value="">
                              Select Company Group/Country
                            </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.company_group &&
                          validation.errors.company_group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.company_group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="region_name">
                            STATE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="region_name"
                            type="text"
                            className="form-control"
                            id="region_name"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region_name &&
                              validation.errors.region_name
                            }
                          />
                          {validation.touched.region_name &&
                          validation.errors.region_name ? (
                            <FormFeedback type="invalid">
                              {validation.errors.region_name}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />

                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="region_code">
                            STATE CODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="region_code"
                            type="text"
                            className="form-control"
                            id="region_code"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region_code &&
                              validation.errors.region_code
                            }
                          />
                          {validation.touched.region_code &&
                          validation.errors.region_code ? (
                            <FormFeedback type="invalid">
                              {validation.errors.region_code}
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
                          UPDATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/region");
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

export default RegionCreate;
