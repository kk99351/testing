// import React, { useState,useEffect } from "react";
// import axios from "axios";
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
// import { GetAllData, GetSignleData } from "src/API/Master/GlobalGet";
// import { GetApprovedAssests } from "src/API/Assest/AllAssests/Api";

// import { useParams } from "react-router";
// import { ToastContainer, toast } from "react-toastify";

// import { useNavigate } from "react-router-dom";

// const AssetMaintenance = () => {
//   const { id } = useParams();
//   const [material, setMaterial] = useState([]);
//   const [submaterial, setSubmaterial] = useState([]);
//   const [assetId, setassetId] = useState([]);
//   const [nmasset, setnmasset] = useState([]);

//   const navigate = useNavigate();
//   const [currentData, setCurrentData] = useState([]);


//    useEffect(() => {
//     GetAllData("MaterialGroup").then(res => {
//       if (Array.isArray(res)) {
//         setMaterial(res);
//       } else {
//         setMaterial([]);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     GetAllData("MaterialSubGroup").then(res => {
//       if (Array.isArray(res)) {
//         setSubmaterial(res);
//       } else {
//         setSubmaterial([]);
//       }
//     });
//   }, []);
  
//   useEffect(() => {
//     GetAllData("allassets").then(res => {
//       if (Array.isArray(res)) {
//         setSubmaterial(res);
//       } else {
//         setSubmaterial([]);
//       }
//     });
//   }, []);
  
  
//   const validation = useFormik({
//     enableReinitialize: true,

//     initialValues: {
//       category: currentData?.idsgrp?.idgrp?.idgrp,
//       sub_category: currentData?.idsgrp?.idgrp?.idgrp,
//       asset: "",
//       assetId: "",
//     },
//     validationSchema: Yup.object({
//       category: Yup.string().required("ASSET MATERIAL GROUP IS REQUIRED"),
//       sub_category: Yup.string().required(
//         "ASSET MATERIAL SUB GROUP IS REQUIRED"
//       ),
//       asset: Yup.string().required("ASSET IS REQUIRED"),
//       assetId: Yup.string().required("ASSET ID IS REQUIRED"),
//     }),

//     onSubmit: async values => {
//       console.log("Form submitted successfully!");
//       navigate("/asset_maintenance_next");
//     },
//   });

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card className="mt-0">
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 ASSET FOR MAINTENANCE
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
//                       <Col md={6}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="category">
//                             ASSET MATERIAL-GROUP <font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="category"
//                             id="category"
//                             value={validation.values.category}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.category &&
//                               validation.errors.category
//                             }
//                             style={{ textTransform: "uppercase" }}
//                           >
//                             <option value="">SELECT MATERIAL GROUP</option>
//                           {material &&
//                             material.map((item, index) => (
//                               <option key={index} value={item.idgrp}>
//                                 {item.nmgrp}
//                               </option>
//                             ))}
//                           </Input>
//                           {validation.touched.category &&
//                           validation.errors.category ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.category}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="sub_category">
//                             ASSET MATERIAL SUB GROUP <font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="sub_category"
//                             id="sub_category"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.sub_category &&
//                               validation.errors.sub_category
//                             }
//                             style={{ textTransform: "uppercase" }}
//                           >
//                             <option value="">
//                               SELECT ASSET MATERIAL SUB GROUP
//                             </option>
//                             {submaterial &&
//                             submaterial.map((item, index) => (
//                               <option key={index} value={item.idsgrp}>
//                                 {item.nmsgrp}
//                               </option>
//                             ))}
//                           </Input>
//                           {validation.touched.sub_category &&
//                           validation.errors.sub_category ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.sub_category}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="asset">
//                             ASSET <font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="asset"
//                             id="asset"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.asset &&
//                               validation.errors.asset
//                             }
//                             style={{ textTransform: "uppercase" }}
//                           >
//                             <option value="">SELECT ASSET</option>
//                             <option value="Laptop">Laptop</option>
//                             <option value="Desktop">Desktop</option>
//                           </Input>
//                           {validation.touched.asset &&
//                           validation.errors.asset ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.asset}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="assetId">
//                             ASSET ID <font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="assetId"
//                             id="assetId"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.assetId &&
//                               validation.errors.assetId
//                             }
//                             style={{ textTransform: "uppercase" }}
//                           >
//                             <option value="">SELECT ASSET ID</option>
//                             <option value="ASSET001">ASSET001</option>
//                             <option value="ASSET002">ASSET002</option>
//                           </Input>
//                           {validation.touched.assetId &&
//                           validation.errors.assetId ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.assetId}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>

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
//                           className="btn btn-success-subtle border border-success"
//                           style={{
//                             paddingTop: "10px",
//                             height: "45px",
//                             width: "80px",
//                             marginRight: "30px",
//                           }}
//                         >
//                           NEXT
//                         </Button>
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

// export default AssetMaintenance;
import React, { useState, useEffect } from "react";
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
import { GetAllData, GetSignleData } from "src/API/Master/GlobalGet";
import { GetApprovedAssests } from "src/API/Assest/AllAssests/Api";

import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const AssetMaintenance = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState([]);
  const [submaterial, setSubmaterial] = useState([]);
  const [assetId, setAssetId] = useState([]);
  const [assetName, setAssetName] = useState([]);
  const navigate = useNavigate();
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    GetAllData("MaterialGroup").then((res) => {
      if (Array.isArray(res)) {
        setMaterial(res);
      } else {
        setMaterial([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("MaterialSubGroup").then((res) => {
      if (Array.isArray(res)) {
        setSubmaterial(res);
      } else {
        setSubmaterial([]);
      }
    });
  }, []);
 
  useEffect(() => {
    GetApprovedAssests().then((res) => {
      if (Array.isArray(res)) {
        const assetIds = res.map((asset) => asset.idwhdyn);
        const assetNames = res.map((asset) => asset.idinv.idmodel.nmmodel);
        setAssetId(assetIds);
        setAssetName(assetNames);
      } else {
        setAssetId([]);
        setAssetName([]);
      }
    });
  }, []);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      category: currentData?.idsgrp?.idgrp?.idgrp,
      sub_category: currentData?.idsgrp?.idgrp?.idgrp,
      asset: "",
      assetId: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("ASSET MATERIAL GROUP IS REQUIRED"),
      sub_category: Yup.string().required(
        "ASSET MATERIAL SUB GROUP IS REQUIRED"
      ),
      asset: Yup.string().required("ASSET IS REQUIRED"),
      assetId: Yup.string().required("ASSET ID IS REQUIRED"),
    }),

    onSubmit: async (values) => {
      console.log("Form submitted successfully!");
      navigate("/asset_maintenance_next");
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ASSET FOR MAINTENANCE
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
                          <Label htmlFor="category">
                            ASSET MATERIAL-GROUP <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="category"
                            id="category"
                            value={validation.values.category}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.category &&
                              validation.errors.category
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT MATERIAL GROUP</option>
                            {material &&
                              material.map((item, index) => (
                                <option key={index} value={item.idgrp}>
                                  {item.nmgrp}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.category &&
                          validation.errors.category ? (
                            <FormFeedback type="invalid">
                              {validation.errors.category}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="sub_category">
                            ASSET MATERIAL SUB GROUP{" "}
                            <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="sub_category"
                            id="sub_category"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.sub_category &&
                              validation.errors.sub_category
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">
                              SELECT ASSET MATERIAL SUB GROUP
                            </option>
                            {submaterial &&
                              submaterial.map((item, index) => (
                                <option key={index} value={item.idsgrp}>
                                  {item.nmsgrp}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.sub_category &&
                          validation.errors.sub_category ? (
                            <FormFeedback type="invalid">
                              {validation.errors.sub_category}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="asset">
                            ASSET <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="asset"
                            id="asset"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.asset &&
                              validation.errors.asset
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT ASSET</option>
                            {assetName.map((asset, index) => (
                              <option key={index} value={asset}>
                                {asset}
                              </option>
                            ))}
                          </Input>
                          {validation.touched.asset &&
                          validation.errors.asset ? (
                            <FormFeedback type="invalid">
                              {validation.errors.asset}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="assetId">
                            ASSET ID <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="assetId"
                            id="assetId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetId &&
                              validation.errors.assetId
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT ASSET ID</option>
                            {assetId.map((id, index) => (
                              <option key={index} value={id}>
                                {id}
                              </option>
                            ))}
                          </Input>
                          {validation.touched.assetId &&
                          validation.errors.assetId ? (
                            <FormFeedback type="invalid">
                              {validation.errors.assetId}
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
                          NEXT
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
    </React.Fragment>
  );
};

export default AssetMaintenance;
