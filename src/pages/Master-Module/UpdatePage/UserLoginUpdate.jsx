import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetAllData, GetSignleData } from "src/API/Master/GlobalGet";
import { CreateUserLogin } from "src/API/Master/AccessManagement/Api";
import { useParams } from "react-router";

const UserLoginUpdate = () => {
  const { id } = useParams();
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return `${year}-${month}-${day}`;
  };
  const validateDisabledDate = (value, values) => {
    if (values.Status === "Inactive" && !value) {
      return "Disabled Date is Required";
    }
    return true;
  };
  const navigate = useNavigate();
  const [userType, setUserType] = useState([]);
  const [empy, setEmpy] = useState([]);
  const [location, setLocation] = useState([]);
  const [leftItems, setLeftItems] = useState([]);
  const [allEmploye, setAllemploye] = useState([]);
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState([]);

  useEffect(() => {
    GetSignleData("Userlogin", id).then(res => {
      console.log(res?.aprvloc[0].usertype.nmusertype);
      setLogin(res);
      setEmail(login?.mailid);
    });
  }, []);

  useEffect(() => {
    GetAllData("UPermission").then(res => {
      if (Array.isArray(res)) {
        setUserType(res);
      } else {
        setUserType([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Employee").then(res => {
      if (Array.isArray(res)) {
        setAllemploye(res);
        setEmpy(res);
      } else {
        setEmpy([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Location").then(res => {
      if (Array.isArray(res)) {
        setLeftItems(res);
      } else {
        setLeftItems([]);
      }
    });
  }, []);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      EmployeeInitials: "",
      Email: email ? email : login.mailid,
      LoginName: login?.nmlogin,
      Password: login?.pwd,
      ConfirmPassword: login?.pwd,
      UserType: "alk",
      Status: login?.statususer,
      DisabledDate: login?.dt_disable,
    },

    validationSchema: Yup.object({
      EmployeeInitials: Yup.string().required("EMPLOYEE INITIALS IS REQUIRED"),
      // Email: Yup.string()
      //   .email("Enter a valid email")
      //   .required("EMAIL IS REQUIRED"),
      LoginName: Yup.string().required("LOGINNAME IS REQUIRED"),
      Password: Yup.string().required("PASSWORD IS REQUIRED"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "PASSWORD MUST MATCH")
        .required("CONFIRM PASSWORD IS REQUIRED"),
      Status: Yup.string().required("STATUS IS REQUIRED"),
      UserType: Yup.string().required("USER TYPE IS REQUIRED"),
      DisabledDate: Yup.string().test(
        "disabledDate",
        "INVALID DISABLED DATE",
        validateDisabledDate
      ),
    }),
    onSubmit: values => {
      const loc = rightItems.map(item => {
        return {
          idloc: item.idloc,
          nmLoc: "",
          nmcountry: "",
          nmstate: "",
          nmcity: "",
          identity: {
            identity: 0,
            nmentity: "",
            cdentity: "",
          },
        };
      });

      CreateUserLogin([
        {
          idlog: id,
          nmlogin: values?.LoginName,
          idemail: values?.Email,
          pwd: values?.Password,
          statususer: values?.Status,
          mailid: email,
          dt_disable: values?.DisabledDate,
          idlocs: loc,
          getuPermission: {
            idpermission: Number(values.UserType),
            typasst: "string",
            idccs: "string",
            usertype: {
              idusertype: 0,
              nmusertype: "string",
            },
            submodules: [
              {
                idSubmodule: 0,
                nmSubmodule: "string",
                idmodule: {
                  idmodule: 0,
                  nmModule: "string",
                },
              },
            ],
            iddept: [
              {
                iddept: 0,
                nmdept: "string",
                cddept: "string",
              },
            ],
            entities: [
              {
                identity: 0,
                nmentity: "string",
                cdentity: "string",
              },
            ],
            idlocs: [
              {
                idloc: 0,
                nmLoc: "string",
                nmcountry: "string",
                nmstate: "string",
                nmcity: "string",
                identity: {
                  identity: 0,
                  nmentity: "string",
                  cdentity: "string",
                },
              },
            ],
          },
          aprvloc: [
            {
              idpermission: Number(values.UserType),
              typasst: "string",
              idccs: "string",
              usertype: {
                idusertype: 0,
                nmusertype: "string",
              },
              submodules: [
                {
                  idSubmodule: 0,
                  nmSubmodule: "string",
                  idmodule: {
                    idmodule: 0,
                    nmModule: "string",
                  },
                },
              ],
              iddept: [
                {
                  iddept: 0,
                  nmdept: "string",
                  cddept: "string",
                },
              ],
              entities: [
                {
                  identity: 0,
                  nmentity: "string",
                  cdentity: "string",
                },
              ],
              idlocs: [
                {
                  idloc: 0,
                  nmLoc: "string",
                  nmcountry: "string",
                  nmstate: "string",
                  nmcity: "string",
                  identity: {
                    identity: 0,
                    nmentity: "string",
                    cdentity: "string",
                  },
                },
              ],
            },
          ],
        },
      ]).then(res => {
        if (res.ok) {
          toast("UserLogin Updated successfully");
          navigate("/user_login");
        } else if (res.status === 400) {
          toast("already Updated UserLogin");
        } else {
          toast("Failed to Updated UserLogin");
        }
      });
    },
  });

  const [rightItems, setRightItems] = useState([]);

  const handleMoveRight = () => {
    const selectedItems = leftItems.filter((_, index) => {
      const option = document.getElementById(`leftItem${index}`);
      return option.selected;
    });

    setRightItems(prevRightItems => [...prevRightItems, ...selectedItems]);
    setLeftItems(leftItems.filter(item => !selectedItems.includes(item)));
    setRightItems(prevRightItems => {
      return prevRightItems;
    });
  };

  const handleMoveLeft = () => {
    const selectedItems = rightItems.filter((_, index) => {
      const option = document.getElementById(`rightItem${index}`);
      return option.selected;
    });
    setLeftItems([...leftItems, ...selectedItems]);
    setRightItems(rightItems.filter(item => !selectedItems.includes(item)));
  };

  const HandleChange = event => {
    console.log(event.target.value);
    switch (event.target.name) {
      case "EmployeeInitials": {
        let res = allEmploye.find(
          item => item.idempuser === Number(event.target.value)
        );
        setEmail(res.idemp);
      }
      case "UserType": {
        // let res = allEmploye.find(
        //   item => item.idempuser === Number(event.target.value)
        // );
        // setEmail(res.idemp);
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
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE USER LOGIN
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
                          <Label htmlFor="validationCustom01">
                            EMPLOYEE INITIALS<font color="red">*</font>
                          </Label>
                          <Input
                            name="EmployeeInitials"
                            type="select"
                            placeholder="PLEASE ENTER EMPLOYEE INITIALS"
                            className="form-control"
                            id="validationCustom01"
                            onChange={HandleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.EmployeeInitials &&
                              validation.errors.EmployeeInitials
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value="">SELECT EMPLOYEE INITIALS</option>
                            {empy &&
                              empy.map((item, index) => (
                                <option key={index} value={item.idempuser}>
                                  {item.nmemp}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.EmployeeInitials &&
                          validation.errors.EmployeeInitials ? (
                            <FormFeedback type="invalid">
                              {validation.errors.EmployeeInitials}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            EMAIL<font color="red">*</font>
                          </Label>
                          <Input
                            name="Email"
                            type="text"
                            placeholder="PLEASE ENTER VALID EMAIL"
                            className="form-control"
                            id="validationCustom02"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.Email}
                            invalid={
                              validation.touched.Email &&
                              validation.errors.Email
                            }
                            style={{ textTransform: "uppercase" }}
                            disabled
                          />
                          {validation.touched.Email &&
                          validation.errors.Email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Email}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">
                            LOGIN NAME<font color="red">*</font>
                          </Label>
                          <Input
                            name="LoginName"
                            type="text"
                            placeholder="PLEASE ENTER LOGIN NAME"
                            className="form-control"
                            id="validationCustom03"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.LoginName}
                            invalid={
                              validation.touched.LoginName &&
                              validation.errors.LoginName
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.LoginName &&
                          validation.errors.LoginName ? (
                            <FormFeedback type="invalid">
                              {validation.errors.LoginName}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">
                            PASSWORD<font color="red">*</font>
                          </Label>
                          <Input
                            name="Password"
                            placeholder="PLEASE ENTER PASSWORD"
                            type="password"
                            className="form-control"
                            id="validationCustom04"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.Password}
                            invalid={
                              validation.touched.Password &&
                              validation.errors.Password
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.Password &&
                          validation.errors.Password ? (
                            <FormFeedback type="invalid">
                              {validation.errors.Password}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">
                            CONFIRM PASSWORD<font color="red">*</font>
                          </Label>
                          <Input
                            name="ConfirmPassword"
                            placeholder="PLEASE CONFIRM YOUR PASSWORD"
                            type="password"
                            className="form-control"
                            id="validationCustom05"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.ConfirmPassword}
                            invalid={
                              validation.touched.ConfirmPassword &&
                              validation.errors.ConfirmPassword
                            }
                            style={{ textTransform: "uppercase" }}
                          />
                          {validation.touched.ConfirmPassword &&
                          validation.errors.ConfirmPassword ? (
                            <FormFeedback type="invalid">
                              {validation.errors.ConfirmPassword}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom06">
                            USER TYPE<font color="red">*</font>
                          </Label>
                          <Input
                            name="UserType"
                            type="select"
                            placeholder="PLEASE ENTER USER TYPE"
                            className="form-control"
                            id="validationCustom06"
                            onChange={HandleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.UserType}
                            invalid={
                              validation.touched.UserType &&
                              validation.errors.UserType
                            }
                            style={{ textTransform: "uppercase" }}
                          >
                            <option value=""></option>
                            {userType &&
                              userType.map((item, index) => (
                                <option key={index} value={item.idpermission}>
                                  {item.typasst}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.UserType &&
                          validation.errors.UserType ? (
                            <FormFeedback type="invalid">
                              {validation.errors.UserType}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mb-2" />

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label>
                            STATUS<font color="red">*</font>
                          </Label>
                          <div>
                            <FormGroup check inline>
                              <Input
                                type="radio"
                                name="Status"
                                value="Active"
                                onChange={validation.handleChange}
                                checked={validation.values.Status === "Active"}
                              />
                              <Label check>ENABLED</Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Input
                                type="radio"
                                name="Status"
                                value="Inactive"
                                onChange={validation.handleChange}
                                checked={
                                  validation.values.Status === "Inactive"
                                }
                                style={{ textTransform: "uppercase" }}
                              />
                              <Label check>DISABLED</Label>
                            </FormGroup>
                          </div>
                          {validation.touched.Status &&
                          validation.errors.Status ? (
                            <div
                              className="text-danger"
                              style={{ fontSize: "12px" }}
                            >
                              {validation.errors.Status}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    {validation.values.Status === "Inactive" && (
                      <Row className="mb-2">
                        <Col md={12}>
                          <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom07">
                              DISABLED DATE
                            </Label>
                            <Input
                              name="DisabledDate"
                              type="date"
                              className="form-control"
                              id="validationCustom07"
                              value={
                                validation.values.DisabledDate ||
                                getCurrentDate()
                              }
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.DisabledDate &&
                                validation.errors.DisabledDate
                              }
                              style={{ textTransform: "uppercase" }}
                            />
                            {validation.touched.DisabledDate &&
                            validation.errors.DisabledDate ? (
                              <FormFeedback type="invalid">
                                {validation.errors.DisabledDate}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                    )}
                    <Row className="justify-content-center">
                      <Col xl={12}>
                        <Row className="m-2">
                          <Col
                            md={2}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Label style={{ marginBottom: "0" }}>
                              LOCATION
                            </Label>
                          </Col>
                          <Col md={4}>
                            <select
                              multiple
                              className="w-100 h-100"
                              style={{ minHeight: "150px" }}
                            >
                              {leftItems.map((item, index) => (
                                <option key={index} id={`leftItem${index}`}>
                                  {item.nmLoc}
                                </option>
                              ))}
                            </select>
                          </Col>
                          <Col
                            md={2}
                            className="d-flex justify-content-evenly align-items-center"
                          >
                            <Button onClick={handleMoveRight}>Right »</Button>
                            <Button onClick={handleMoveLeft}>« Left</Button>
                          </Col>
                          <Col md={4}>
                            <select
                              multiple
                              className="w-100 h-100"
                              style={{ minHeight: "150px" }}
                            >
                              <Label style={{ marginBottom: "0" }}>
                                LOCATION
                              </Label>
                              {rightItems.map((item, index) => (
                                <option key={index} id={`rightItem${index}`}>
                                  {item.nmLoc}
                                </option>
                              ))}
                            </select>
                          </Col>
                        </Row>
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
                            navigate("/user_login");
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

export default UserLoginUpdate;
