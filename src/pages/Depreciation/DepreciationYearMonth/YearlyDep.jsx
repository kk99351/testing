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

// const YearlyDep = () => {
//   const navigate = useNavigate();
//   const [selectAll, setSelectAll] = useState(false);
//   const demoData = [
//     "Demo Item 1",
//     "Demo Item 2",
//     "Demo Item 3",
//     "Demo Item 4",
//     "Demo Item 5",
//   ];

//   const validation = useFormik({
//     enableReinitialize: true,

//     initialValues: {
//       type: "",
//       year: "",
//       group: demoData, // Set initial value of group to demoData
//     },

//     validationSchema: Yup.object({
//       type: Yup.string().required("DEPRECIATION TYPE IS REQUIRED"),
//       year: Yup.string().required("FINANCIAL YEAR IS REQUIRED"),
//       group: Yup.array().min(1, "At least one item must be selected"),
//     }),
//     onSubmit: values => {
//       alert("form validated !");
//       //console.log("values", values);
//     },
//   });

//   const handleCheckboxChange = value => {
//     const index = validation.values.group.indexOf(value);
//     const newGroup = [...validation.values.group];

//     if (index === -1) {
//       newGroup.push(value);
//     } else {
//       newGroup.splice(index, 1);
//     }

//     validation.setFieldValue("group", newGroup);
//   };

//   const handleSelectAll = () => {
//     if (selectAll) {
//       validation.setFieldValue("group", []);
//     } else {
//       validation.setFieldValue("group", demoData);
//     }
//     setSelectAll(!selectAll);
//   };

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card>
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 YEARLY DEPRECIATION FOR COMPANY ACT
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
//                       <Col md={12}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="type">
//                             DEPRECIATION TYPE <font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="type"
//                             id="type"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.type && validation.errors.type
//                             }
//                           >
//                             <option value="">SELECT DEPRECIATION TYPE </option>
//                             <option value="US">COMPANY ACT</option>
//                             {/* <option value="UK">IT ACT</option> */}
//                           </Input>
//                           {validation.touched.type && validation.errors.type ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.type}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={12}>
//                         <FormGroup className="mb-1">
//                           <Label htmlFor="year">
//                             FINANCIAL YEAR<font color="red">*</font>
//                           </Label>
//                           <Input
//                             type="select"
//                             name="year"
//                             id="year"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.year && validation.errors.year
//                             }
//                           >
//                             <option value="">SELECT FINANCIAL YEAR</option>
//                             <option value="United States">
//                               01-04-2022 31-03-2023
//                             </option>
//                             <option value="United Kingdom">
//                               01-04-2022 30-09-2022{" "}
//                             </option>
//                             <option value="Canada">
//                               01-10-2022 31-03-2023
//                             </option>
//                           </Input>
//                           {validation.touched.year && validation.errors.year ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.year}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row className="mb-2">
//                       <Col md={12}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="group">
//                             MATERIAL-GROUP <font color="red">*</font>
//                           </Label>
//                           <FormGroup check className="mb-3">
//                             <Input
//                               type="checkbox"
//                               id="selectAll"
//                               checked={selectAll}
//                               onChange={handleSelectAll}
//                             />
//                             <Label check htmlFor="selectAll">
//                               Select All
//                             </Label>
//                           </FormGroup>
//                           <textarea
//                             className="form-control"
//                             rows="5"
//                             value={validation.values.group.join("\n")}
//                             onChange={() => {}}
//                           ></textarea>
//                           {validation.touched.group &&
//                           validation.errors.group ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.group}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <hr className="mb-2" />
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
//                           color="
// success-subtle"
//                           className="btn btn-success-subtle border border-success"
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
//                             navigate("/city");
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

// export default YearlyDep;
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

const YearlyDep = () => {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const demoData = [
    "Demo Item 1",
    "Demo Item 2",
    "Demo Item 3",
    "Demo Item 4",
    "Demo Item 5",
  ];

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: "",
      year: "",
      group: demoData, // Set initial value of group to demoData
    },
    validationSchema: Yup.object({
      type: Yup.string().required("DEPRECIATION TYPE IS REQUIRED"),
      year: Yup.string().required("FINANCIAL YEAR IS REQUIRED"),
      group: Yup.array().min(1, "At least one item must be selected"),
    }),
    onSubmit: (values) => {
      alert("form validated !");
      //console.log("values", values);
    },
  });

  const handleCheckboxChange = (value) => {
    const index = validation.values.group.indexOf(value);
    const newGroup = [...validation.values.group];

    if (index === -1) {
      newGroup.push(value);
    } else {
      newGroup.splice(index, 1);
    }

    validation.setFieldValue("group", newGroup);
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      validation.setFieldValue("group", demoData);
    } else {
      validation.setFieldValue("group", []);
    }
    setSelectAll(!selectAll);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                YEARLY DEPRECIATION FOR COMPANY ACT
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
                          <Label htmlFor="type">
                            DEPRECIATION TYPE <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="type"
                            id="type"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.type && validation.errors.type
                            }
                          >
                            <option value="">SELECT DEPRECIATION TYPE </option>
                            <option value="US">COMPANY ACT</option>
                            {/* <option value="UK">IT ACT</option> */}
                          </Input>
                          {validation.touched.type && validation.errors.type ? (
                            <FormFeedback type="invalid">
                              {validation.errors.type}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <FormGroup className="mb-1">
                          <Label htmlFor="year">
                            FINANCIAL YEAR<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="year"
                            id="year"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.year && validation.errors.year
                            }
                          >
                            <option value="">SELECT FINANCIAL YEAR</option>
                            <option value="United States">
                              01-04-2022 31-03-2023
                            </option>
                            <option value="United Kingdom">
                              01-04-2022 30-09-2022{" "}
                            </option>
                            <option value="Canada">
                              01-10-2022 31-03-2023
                            </option>
                          </Input>
                          {validation.touched.year && validation.errors.year ? (
                            <FormFeedback type="invalid">
                              {validation.errors.year}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="group">
                            MATERIAL-GROUP <font color="red">*</font>
                          </Label>
                          <FormGroup check className="mb-3">
                            <Input
                              type="checkbox"
                              id="selectAll"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                            <Label check htmlFor="selectAll">
                              Select All
                            </Label>
                          </FormGroup>
                          <textarea
                            className="form-control"
                            rows="5"
                            value={validation.values.group.join("\n")}
                            onChange={() => {}}
                            onClick={(e) => {
                              const clickedItem = e.target.value
                                .split("\n")
                                .findIndex((item) => item === e.target.value);
                              handleCheckboxChange(clickedItem);
                            }}
                          ></textarea>
                          {validation.touched.group &&
                          validation.errors.group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <hr className="mb-2" />
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

export default YearlyDep;
