import React, { useEffect, useState } from "react";
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
import { GetAllData } from "src/API/Master/GlobalGet";
import { CreateFloor } from "src/API/Master/GeoGraphicalArea.js/Api";
import { ToastContainer, toast } from "react-toastify";

const FloorCreate = () => {
  const navigate = useNavigate();

  const [entityAl, setEntityAl] = useState([]);
  const [locationAl, setLocationAl] = useState([]);
  const [buildingAl, setBuildingAl] = useState([]);

  useEffect(() => {
    GetAllData("Entity").then(res => {
      if (Array.isArray(res)) {
        setEntityAl(res);
      } else {
        setEntityAl([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Location").then(res => {
      if (Array.isArray(res)) {
        setLocationAl(res);
      } else {
        setLocationAl([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Building").then(res => {
      if (Array.isArray(res)) {
        setBuildingAl(res);
      } else {
        setBuildingAl([]);
      }
    });
  }, []);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      plantname: "",
      building: "",
      floor: "",
      entity: "",
    },
    validationSchema: Yup.object({
      entity: Yup.string().required("ENTITY NAME IS REQUIRED"),
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
      floor: Yup.string().required("FLOOR NUMBER IS REQUIRED"),
    }),

    onSubmit: async values => {
      console.log("Values", values);
      CreateFloor([
        {
          idflr: 0,
          nmflr: values.floor,
          idbuilding: {
            idbuilding: Number(values.building),
            nmbuilding: "string",
            idloc: {
              idloc: Number(values.plantname),
              nmLoc: "string",
              nmcountry: "string",
              nmstate: "string",
              nmcity: "string",
              identity: {
                identity: Number(values.entity),
                nmentity: "string",
                cdentity: "string",
              },
            },
          },
        },
      ]).then(values => {
        if (res.ok) {
          toast("Floor created successfully");
          navigate("/floor");
        } else if (res.status === 400) {
          toast("Failed to create Floor");
        } else {
          toast("already created Floor");
        }
      });
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE FLOOR
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
                          <Label htmlFor="entity">
                            ENTITY NAME <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="entity"
                            id="entity"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.entity &&
                              validation.errors.entity
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT ENTITY NAME</option>
                            {entityAl &&
                              entityAl.map((item, index) => (
                                <option key={index} value={item.identity}>
                                  {item.nmentity}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.entity &&
                          validation.errors.entity ? (
                            <FormFeedback type="invalid">
                              {validation.errors.entity}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      {/* <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="company_group">
                            COUNTRY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="company_group"
                            id="company_group"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.company_group &&
                              validation.errors.company_group
                            }
                            style={{ textTransform: "uppercase" }}

                          >
                            <option value="">SELECT COUNTRY</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                          </Input>
                          {validation.touched.company_group &&
                          validation.errors.company_group ? (
                            <FormFeedback type="invalid">
                              {validation.errors.company_group}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="region_name">
                            STATE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="region_name"
                            id="region_name"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.region_name &&
                              validation.errors.region_name
                            }
                            style={{ textTransform: "uppercase" }}

                          >
                            <option value="">SELECT STATE</option>
                            <option value="CA">California</option>
                            <option value="NY">New York</option>
                            <option value="ENG">England</option>
                            <option value="ON">Ontario</option>
                            <option value="NSW">New South Wales</option>
                          </Input>
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
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cityname">
                            CITY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cityname"
                            id="cityname"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cityname &&
                              validation.errors.cityname
                            }
                            style={{ textTransform: "uppercase" }}

                          >
                            <option value="">SELECT CITY</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York City">New York City</option>
                            <option value="London">London</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Sydney">Sydney</option>
                          </Input>
                          {validation.touched.cityname &&
                          validation.errors.cityname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cityname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col> */}
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="plantname">
                            LOCATION NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="plantname"
                            id="plantname"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.plantname &&
                              validation.errors.plantname
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT LOCATION </option>
                            {locationAl &&
                              locationAl.map((item, index) => (
                                <option key={index} value={item.idloc}>
                                  {item.nmLoc}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.plantname &&
                          validation.errors.plantname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.plantname}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="building">
                            BUILDING NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="building"
                            id="building"
                            // className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT BUILDING </option>
                            {buildingAl &&
                              buildingAl.map((item, index) => (
                                <option key={index} value={item.idbuilding}>
                                  {item.nmbuilding}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.building &&
                          validation.errors.building ? (
                            <FormFeedback type="invalid">
                              {validation.errors.building}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="floor">
                            FLOOR NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            name="floor"
                            type="text"
                            placeholder="PLEASE ENTER FLOOR NUMBER"
                            // className="form-control"
                            id="floor"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              validation.errors.floor
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.floor &&
                          validation.errors.floor ? (
                            <FormFeedback type="invalid">
                              {validation.errors.floor}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    {/* <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="doornumber">
                            DOOR NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            name="doornumber"
                            type="text"
                            placeholder="PLEASE ENTER DOOR NUMBER"
                            // className="form-control"
                            id="doornumber"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.doornumber &&
                              validation.errors.doornumber
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.doornumber &&
                          validation.errors.doornumber ? (
                            <FormFeedback type="invalid">
                              {validation.errors.doornumber}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="pincode">
                            PINCODE<font color="red">*</font>
                          </Label>
                          <Input
                            name="pincode"
                            type="text"
                            placeholder="PLEASE ENTER PINCODE"
                            // className="form-control"
                            id="pincode"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.pincode &&
                              validation.errors.pincode
                            }
                            style={{ textTransform: "uppercase" }}

                          />
                          {validation.touched.pincode &&
                          validation.errors.pincode ? (
                            <FormFeedback type="invalid">
                              {validation.errors.pincode}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
                    </Row> */}

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
                            navigate("/floor");
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

export default FloorCreate;
