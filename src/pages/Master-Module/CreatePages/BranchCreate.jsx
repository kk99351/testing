import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";
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
import { CreateLocation } from "src/API/Master/GeoGraphicalArea.js/Api";
import { GetAllData } from "src/API/Master/GlobalGet";
import { ToastContainer, toast } from "react-toastify";
const BranchCreate = () => {
  const navigate = useNavigate();

  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [entityAl, setEntityAl] = useState([]);

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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      entity: "",
      country: "",
      state: "",
      city: "",
      location: "",
      // building: "",
      // floor: "",
    },

    validationSchema: Yup.object({
      entity: Yup.string().required("ENTITY IS REQUIRED"),
      country: Yup.string().required("COUNTRY IS REQUIRED"),
      state: Yup.string().required("STATE IS REQUIRED"),
      city: Yup.string().required("CITY IS REQUIRED"),
      location: Yup.string().required("LOCATION IS REQUIRED"),
      // building: Yup.string().required("BUILDING IS REQUIRED"),
      // floor: Yup.string().required("FLOOR IS REQUIRED"),
    }),

    onSubmit: values => {
      CreateLocation([
        {
          idloc: 0,
          nmLoc: values.location,
          nmcountry: values.country,
          nmstate: values.state,
          nmcity: values.city,
          identity: {
            identity: Number(values.entity),
            nmentity: "string",
            cdentity: "string",
          },
        },
      ]).then(res => {
        console.log(res);
        if (res.ok) {
          toast("Location created successfully");
          navigate("/branch");
        } else if (res.status === 400) {
          toast("Location Already Exists");
        } else {
          toast("Failed to create location");
        }
      });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const countries = await Country.getAllCountries();
      console.log(countries);
      setCountryData(countries);
      setCountry(countries[0]);
      console.log(countries);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country.isoCode);
      setStateData(states);
      setState(states[0]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(country.isoCode, state.isoCode);
      setCityData(cities);
      setCity(cities[0]);
    }
  }, [state, country]);

  const handleChange = event => {
    const fieldName = event.target.name;
    const inputValue = event.target.value;
    const uppercaseValue = inputValue ? inputValue.toUpperCase() : "";

    validation.handleChange(event);
    validation.setFieldValue(fieldName, uppercaseValue);
  };

  return (
    <div className="page-content">
      <Container fluid>
        <ToastContainer></ToastContainer>
        <Card>
          <CardHeader>
            <h1 className="card-title" style={{ fontSize: "20px" }}>
              CREATE LOCATION
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
                            entityAl.map((entity, index) => (
                              <option key={index} value={entity.identity}>
                                {entity.nmentity}
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
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom01">
                          COUNTRY NAME<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="country"
                          value={validation.values.country}
                          onChange={e => {
                            setCountry(
                              countryData.find(
                                c => c.isoCode === e.target.value
                              )
                            );
                            handleChange(e);
                          }}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.country &&
                            validation.errors.country
                          }
                          style={{ textTransform: "uppercase" }}
                        >
                          <option>SELECT COUNTRY</option>
                          {countryData.map(c => (
                            <option key={c.isoCode} value={c.isoCode}>
                              {c.name}
                            </option>
                          ))}
                        </Input>
                        {validation.touched.country &&
                        validation.errors.country ? (
                          <FormFeedback type="invalid">
                            {validation.errors.country}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom01">
                          STATE NAME<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          id="state"
                          name="state"
                          value={validation.values.state}
                          onChange={e => {
                            setState(
                              stateData.find(s => s.isoCode === e.target.value)
                            );
                            handleChange(e);
                          }}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.state && validation.errors.state
                          }
                          style={{ textTransform: "uppercase" }}
                        >
                          <option>SELECT STATE</option>
                          {stateData.map(s => (
                            <option key={s.isoCode} value={s.isoCode}>
                              {s.name}
                            </option>
                          ))}
                        </Input>
                        {validation.touched.state && validation.errors.state ? (
                          <FormFeedback type="invalid">
                            {validation.errors.state}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom01">
                          CITY NAME<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          id="city"
                          name="city"
                          value={validation.values.city}
                          onChange={e => {
                            setCity(
                              cityData.find(
                                city => city.id === parseInt(e.target.value)
                              )
                            );
                            handleChange(e);
                          }}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.city && validation.errors.city
                          }
                          style={{ textTransform: "uppercase" }}
                        >
                          <option>SELECT CITY</option>
                          {cityData.map(city => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                        </Input>
                        {validation.touched.city && validation.errors.city ? (
                          <FormFeedback type="invalid">
                            {validation.errors.city}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={12}>
                      <FormGroup>
                        <Label>
                          LOCATION<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          name="location"
                          onChange={handleChange}
                          placeholder="PLEASE ENTER LOCATION "
                          value={validation.values.location}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.location &&
                            validation.errors.location
                          }
                          style={{ textTransform: "uppercase" }}
                        />
                        {validation.touched.location &&
                        validation.errors.location ? (
                          <FormFeedback type="invalid">
                            {validation.errors.location}
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
                        className="border border-success"
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
                          navigate("/branch");
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
      </Container>
    </div>
  );
};

export default BranchCreate;
