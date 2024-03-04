import React from "react";
import MetaTags from "react-meta-tags";
import { useState } from "react";
import {
  Col,
  Input,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import styles from "../../../../assets/cssFiles/formPlaceholder.module.css";

const MailConfiguration = (props) => {
  const {fun}={...props}
  const [formData, setFormData] = useState({
    mailId: "",
    mailPwd: "",
    conMailPwd: "",
    nmHost: "",
    noPort: "",
    warrantyDay: "",
    supportMail:""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    const upperCaseValue = value.toUpperCase();
    setFormData({
      ...formData,
      [name]: upperCaseValue,
    });
  };
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!formData.mail.trim()) {
      newErrors.mail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "pasword is required";
    }
    if (!formData.portNo.trim()) {
      newErrors.portNo = "port is required";
    }
    if (!formData.hostName.trim()) {
      newErrors.hostName = "hostName is required";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "confirmPassword  is required";
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "pasword not matched ";
    }
    if (!formData.warrantyDay.trim()) {
      newErrors.warrantyDay = "warrantyDay is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form Validated and submited");
    } else {
      alert("Please fill all the Details");
    }
  };

  return (
    <React.Fragment>
        <MetaTags>
          <title>HCS Technology Private Limited</title>
        </MetaTags>

          <Card>
            <CardHeader>
              <h3 className="d-flex justify-content-center">
                Mail Configuration
              </h3>
            </CardHeader>
            <CardBody
            className="border"
            style={{ boxShadow: "1px 1px 8px 1px gray" }}
            >
              <Row>
                <Col xl={6}>
                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="email"
                        name="mailId"
                        placeholder=""
                        value={formData.mailId}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.mail ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        EMAIL ID<font color="red">*</font>
                      </span>
                      {errors.mail && (
                        <div className="text-danger">{errors.mail}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="password"
                        placeholder=""
                        name="conMailPwd"
                        value={formData.conMailPwd}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        CONFIRM PASSWORD<font color="red">*</font>
                      </span>
                      {errors.confirmPassword && (
                        <div className="text-danger">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="number"
                        placeholder=""
                        name="noPort"
                        value={formData.noPort}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.portNo ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        PORT NUMBER<font color="red">*</font>
                      </span>
                      {errors.portNo && (
                        <div className="text-danger">{errors.portNo}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="email"
                        placeholder=""
                        name="supportMail"
                        value={formData.supportMail}
                        onChange={handleChange}
                        className={styles.input}
                      />
                      <span className={styles["placeholder-label"]}>
                        SUPPORT EMAIL
                      </span>
                    </Col>
                  </Row>
                </Col>

                {/* 2nd colunm */}

                <div className="col-xl-6">
                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="password"
                        placeholder=""
                        name="mailPwd"
                        value={formData.mailPwd}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.password ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        PASSWORD<font color="red">*</font>
                      </span>
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="text"
                        placeholder=""
                        name="nmHost"
                        value={formData.nmHost}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.hostName ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        HOST NAME<font color="red">*</font>
                      </span>
                      {errors.hostName && (
                        <div className="text-danger">{errors.hostName}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="number"
                        placeholder=""
                        name="warrantyDay"
                        value={formData.warrantyDay}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.warrantyDay ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        DAYS PRIOR TO AMC/WARRANTY END<font color="red">*</font>
                      </span>
                      {errors.warrantyDay && (
                        <div className="text-danger">{errors.warrantyDay}</div>
                      )}
                    </Col>
                  </Row>
                </div>
              </Row>
            </CardBody>
          </Card>

          <div className="justify-content-center d-flex align-items-center justify-content-around mb-4">
            <Button
              className="btn-lg border-primary"
              onClick={handleSubmit}
            >
              UPDATE
            </Button>
            <Button
              className="btn-lg border-primary"
              style={{ float: "right" }}
              onClick={fun}
            >
              NEXT
            </Button>
          </div>
    </React.Fragment>
  );
};

export default MailConfiguration;
