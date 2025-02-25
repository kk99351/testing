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
import { CreateBuilding } from "src/API/Master/GeoGraphicalArea.js/Api";
import { ToastContainer, toast } from "react-toastify";

const PlantCreate = () => {
  const navigate = useNavigate();
  const [entityAl, setEntityAl] = useState([]);
  const [locationAl, setLocationAl] = useState([]);

  useEffect(() => {
    GetAllData("Entity").then(res => {
      console.log("entity", res);
      if (Array.isArray(res)) {
        setEntityAl(res);
      } else {
        setEntityAl([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Location").then(res => {
      console.log("entity", res);
      if (Array.isArray(res)) {
        setLocationAl(res);
      } else {
        setLocationAl([]);
      }
    });
  }, []);
  

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      plantname: "",
      building: "",
      entity: "",
    },
    validationSchema: Yup.object({
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
      entity: Yup.string().required("ENTITY NAME IS REQUIRED"),
    }),

    onSubmit: async values => {
      CreateBuilding([
        {
          idbuilding: 0,
          nmbuilding: values.building,
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
      ]).then(res => {
        if (res.ok) {
          toast("Building created successfully");
          navigate("/plant");
        } else if (res.status === 400) {
          toast("Failed to create Building");
        } else {
          toast("already created Building");
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
                CREATE BUILDING
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
                    </Row>

                    {/* <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="company_group">
                            COUNTRY NAME<font color="red">*</font>
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

                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="region_name">
                            STATE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="region_name"
                            id="region_name"
                            className="form-control"
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
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="cityname">
                            CITY NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cityname"
                            id="cityname"
                            className="form-control"
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
                      </Col>
                      <hr className="mb-2" />
                    </Row> */}

                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="plantname">
                            LOCATION NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="plantname"
                            id="plantname"
                            className="form-control"
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
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="building">
                            BUILDING NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="building"
                            type="text"
                            placeholder="PLEASE ENTER BUILDING NAME"
                            className="form-control"
                            id="building"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.building &&
                          validation.errors.building ? (
                            <FormFeedback type="invalid">
                              {validation.errors.building}
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
                          CREATE
                        </Button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/plant");
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

export default PlantCreate;
