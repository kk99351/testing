import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GetAllData } from "src/API/Master/GlobalGet";
import { CreateEmploye } from "src/API/Master/AccessManagement/Api";
import { UploadFile } from "src/API/Upload";

const EmplyeeMasterCreate = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});

  const [degination, setDegination] = useState([]);
  const [deptarment, setDepartment] = useState([]);
  const [entity, setEntity] = useState([]);
  const [location, setLOcation] = useState([]);
  const [building, setBuilding] = useState([]);
  const [floor, setFloor] = useState([]);
  const [cost, setCost] = useState([]);
  const [manager, setManager] = useState([]);

  useEffect(() => {
    GetAllData("Dept").then(res => {
      if (Array.isArray(res)) {
        setDepartment(res);
      } else {
        setDepartment([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Designation").then(res => {
      if (Array.isArray(res)) {
        setDegination(res);
      } else {
        setDegination([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Entity").then(res => {
      if (Array.isArray(res)) {
        setEntity(res);
      } else {
        setEntity([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Location").then(res => {
      if (Array.isArray(res)) {
        setLOcation(res);
      } else {
        setLOcation([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Building").then(res => {
      if (Array.isArray(res)) {
        setBuilding(res);
      } else {
        setBuilding([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Floor").then(res => {
      if (Array.isArray(res)) {
        setFloor(res);
      } else {
        setFloor([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("CC").then(res => {
      if (Array.isArray(res)) {
        setCost(res);
      } else {
        setCost([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Empuser").then(res => {
      console.log("user", res);
      if (Array.isArray(res)) {
        setManager(res);
      } else {
        setManager([]);
      }
    });
  }, []);

  const handleLogoChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      employeeName: "",
      employeeCode: "",
      officialMailId: "",
      contactNo: "",
      designation: "",
      reportingManager: "",
      department: "",
      location: "",
      statusempl: "",
      costCenter: "",
      subLocation: "",
      employeeType: "",
      // status: "",
      costCenter: "",
      entity: "",
      plantname: "",
      building: "",
      floor: "",
    },
    validationSchema: Yup.object({
      employeeName: Yup.string().required("EMPLOYEE NAME IS REQUIRED"),
      // employeeCode: Yup.string().required("EMPLOYEE CODE IS REQUIRED"),
      officialMailId: Yup.string()
        .email("Enter a valid email")
        .required("OFFICIAL MAIL ID IS REQUIRED"),
      contactNo: Yup.string().required("CONTACT NO IS REQUIRED"),
      designation: Yup.string().required("DESIGNATION IS REQUIRED"),
      reportingManager: Yup.string().required("REPORTING MANAGER IS REQUIRED"),
      department: Yup.string().required("DEPARTMENT IS REQUIRED"),
      // location: Yup.string().required("LOCATION IS REQUIRED"),
      // subLocation: Yup.string().required("SUB-LOCATION IS REQUIRED"),
      employeeType: Yup.string().required("EMPLOYEE TYPE IS REQUIRED"),
      statusempl: Yup.string().required("STATUS IS REQUIRED"),
      costCenter: Yup.string().required("COST CENTER IS REQUIRED"),
      entity: Yup.string().required("ENTITY IS REQUIRED"),
      plantname: Yup.string().required("LOCATION NAME IS REQUIRED"),
      building: Yup.string().required("BUILDING NAME IS REQUIRED"),
      floor: Yup.string().required("FLOOR NUMBER IS REQUIRED"),
    }),
    onSubmit: values => {
      console.log(values);
      UploadFile(selectedFile).then(res => {
        if (res.message === "File uploaded successfully.") {
          CreateEmploye([
            {
              idempuser: 0,
              nmemp: values.employeeName,
              cdemp: values.officialMailId,
              idemp: values.employeeCode,
              contno: values.contactNo,
              iddesign: {
                iddesign: Number(values.designation),
                nmdesign: "",
                cddesign: "",
              },
              repomngr: 0,
              iddept: {
                iddept: Number(values.deptarment),
                nmdept: "",
                cddept: "",
              },
              idflr: {
                idflr: Number(values.floor),
                nmflr: "",
                idbuilding: {
                  idbuilding: Number(values.building),
                  nmbuilding: "",
                  idloc: {
                    idloc: Number(values.plantname),
                    nmLoc: "",
                    nmcountry: "",
                    nmstate: "",
                    nmcity: "",
                    identity: {
                      identity: Number(values.entity),
                      nmentity: "",
                      cdentity: "",
                    },
                  },
                },
              },
              emptype: values.employeeType,
              status_emp: values.statusempl,
              idcc: {
                idcc: Number(values.costCenter),
                nmcc: "",
              },
              empimage: res.fileNames[0],
              manager: {
                idempuser: 0,
              },
            },
          ]).then(response => {
            console.log(response);
          });
        } else {
          toast("Failed to Upload image");
        }
      });
    },
  });

  const handleEntityChnage = e => {
    GetAllData("Location").then(res => {
      let result = res.filter(item => item?.identity?.identity === Number(e));
      setLOcation(result);
    });
  };

  const handleLocationChnage = e => {
    console.log(e);
    GetAllData("Building").then(res => {
      let result = res.filter(item => item?.idloc?.idloc === Number(e));
      setBuilding(result);
    });
  };

  const handleBuildingChnage = e => {
    console.log(e);
    GetAllData("Floor").then(res => {
      let result = res.filter(
        item => item?.idbuilding?.idbuilding === Number(e)
      );
      setFloor(result);
    });
  };

  const handleChange = event => {
    switch (event.target.name) {
      case "entity": {
        handleEntityChnage(event.target.value);
        break;
      }
      case "plantname": {
        handleLocationChnage(event.target.value);
        break;
      }
      case "building": {
        handleBuildingChnage(event.target.value);
        break;
      }
    }
    const fieldName = event.target.name;
    const inputValue = event.target.value;
    const uppercaseValue = inputValue ? inputValue.toUpperCase() : "";
    validation.handleChange(event);
    validation.setFieldValue(fieldName, uppercaseValue);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE EMPLOYEE
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
                        <FormGroup className="mb-2">
                          <Label for="employeeName">
                            EMPLOYEE NAME<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            id="employeeName"
                            placeholder="PLEASE ENTER EMPLOYEE NAME"
                            name="employeeName"
                            value={validation.values.employeeName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeName &&
                              !!validation.errors.employeeName
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.employeeName &&
                              validation.errors.employeeName}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="employeeCode">
                            EMPLOYEE ID<font color="red">*</font>
                          </Label>
                          <Input
                            type="text"
                            id="employeeCode"
                            name="employeeCode"
                            placeholder="PLEASE ENTER EMPLOYEE ID"
                            value={validation.values.employeeCode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeCode &&
                              !!validation.errors.employeeCode
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.employeeCode &&
                              validation.errors.employeeCode}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="officialMailId">
                            OFFICIAL MAIL ID<font color="red">*</font>
                          </Label>
                          <Input
                            type="email"
                            id="officialMailId"
                            name="officialMailId"
                            placeholder="PLEASE ENTER OFFICIAL MAIL ID"
                            value={validation.values.officialMailId}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.officialMailId &&
                              !!validation.errors.officialMailId
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.officialMailId &&
                              validation.errors.officialMailId}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="contactNo">
                            CONTACT NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            placeholder="PLEASE ENTER CONTACT NUMBER"
                            value={validation.values.contactNo}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.contactNo &&
                              !!validation.errors.contactNo
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          <div className="invalid-feedback">
                            {validation.touched.contactNo &&
                              validation.errors.contactNo}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="designation">
                            DESIGNATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="designation"
                            name="designation"
                            value={validation.values.designation}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.designation &&
                              !!validation.errors.designation
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT DESIGNATION</option>

                            {degination &&
                              degination.map((item, index) => (
                                <option key={index} value={item.iddesign}>
                                  {item.nmdesign}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.designation &&
                              validation.errors.designation}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="reportingManager">
                            REPORTING MANAGER<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="reportingManager"
                            name="reportingManager"
                            value={validation.values.reportingManager}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.reportingManager &&
                              !!validation.errors.reportingManager
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT REPORTING MANAGER</option>
                            <option value="Project Manager ">Manager 1</option>
                            <option value="Manager">Manager 2</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.reportingManager &&
                              validation.errors.reportingManager}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="department">
                            DEPARTMENT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="department"
                            name="department"
                            value={validation.values.department}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.department &&
                              !!validation.errors.department
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT DEPARTMENT</option>
                            {deptarment &&
                              deptarment.map((item, index) => (
                                <option key={index} value={item.iddept}>
                                  {item.nmdept}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.department &&
                              validation.errors.department}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="employeeType">
                            EMPLOYEE TYPE<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="employeeType"
                            name="employeeType"
                            value={validation.values.employeeType}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.employeeType &&
                              !!validation.errors.employeeType
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="" disabled>
                              SELEECT EMPLOYEE TYPE
                            </option>
                            <option value="full-time">EMPLOYEE</option>
                            <option value="part-time">CONTRACT</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.employeeType}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="entity">
                            ENTITY<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="entity"
                            name="entity"
                            value={validation.values.entity}
                            onChange={handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.entity &&
                              !!validation.errors.entity
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT ENTITY </option>
                            {entity &&
                              entity.map((item, index) => (
                                <option key={index} value={item.identity}>
                                  {item.nmentity}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.entity &&
                              validation.errors.entity}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="plantname">
                            LOCATION<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="plantname"
                            name="plantname"
                            value={validation.values.plantname}
                            onChange={handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.plantname &&
                              !!validation.errors.plantname
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="" disabled>
                              SELEECT LOCATION
                            </option>
                            {location &&
                              location.map((item, index) => (
                                <option key={index} value={item.idloc}>
                                  {item.nmLoc}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.plantname}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="building">
                            BUILDING<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="building"
                            name="building"
                            value={validation.values.building}
                            onChange={handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              !!validation.errors.building
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT BUILDING</option>
                            {building &&
                              building.map((item, index) => (
                                <option key={index} value={item.idbuilding}>
                                  {item.nmbuilding}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.touched.building &&
                              validation.errors.building}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="floor">
                            FLOOR<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="floor"
                            name="floor"
                            value={validation.values.floor}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              !!validation.errors.floor
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELEECT FLOOR</option>
                            {floor &&
                              floor.map((item, index) => (
                                <option key={index} value={item.idflr}>
                                  {item.nmflr}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.floor}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="statusempl">
                            STATUS<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="statusempl"
                            name="statusempl"
                            value={validation.values.statusempl}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.statusempl &&
                              !!validation.errors.statusempl
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT STATUS</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.statusempl}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-2">
                          <Label for="costCenter">
                            COST CENTER/PROJECT<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            id="costCenter"
                            name="costCenter"
                            value={validation.values.costCenter}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.costCenter &&
                              !!validation.errors.costCenter
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT COST CENTER/PROJECT</option>
                            {cost &&
                              cost.map((item, index) => (
                                <option key={index} value={item.idcc}>
                                  {item.nmcc}
                                </option>
                              ))}
                          </Input>
                          <div className="invalid-feedback">
                            {validation.errors.costCenter}
                          </div>
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="attachImage">UPLOAD FILE</Label>
                        <Input
                          type="file"
                          name="attachImage"
                          id="attachImage"
                          onChange={handleLogoChange}
                          accept="image/*"
                          invalid={!!errors.attachImage}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.attachImage}
                        </span>
                      </Col>
                      <Col md={6}>
                        {selectedFile && (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100px",
                            }}
                          />
                        )}
                      </Col>
                    </Row>
                    <hr className="mb-3" />

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
                          color="success"
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
                        <Button
                          color="secondary"
                          className="border border-secondary"
                          onClick={() => {
                            navigate("/emplyee_master");
                          }}
                          style={{
                            paddingTop: "10px",
                            width: "80px",
                            height: "45px",
                          }}
                        >
                          BACK
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

export default EmplyeeMasterCreate;
