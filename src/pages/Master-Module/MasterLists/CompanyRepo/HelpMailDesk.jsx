import { useState } from "react";
import { Col, Input, Label, Row, Card, CardHeader, CardBody, Button } from "reactstrap";
import styles from "../../../../assets/cssFiles/formPlaceholder.module.css"

const HelpMailDesk = () => {
  const [formData, setFormData] = useState({
    supportMail: "",
    help_password: "",
    help_mail: "",
    help_port: "",
    help_hostName: "",
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
    
    if (!formData.help_password.trim()) {
      newErrors.help_password = "help password is required";
    }
    if (!formData.help_mail.trim()) {
      newErrors.help_mail = "Help Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.help_mail)) {
      newErrors.help_mail = "Invalid email address";
    }
    if (!formData.help_port.trim()) {
      newErrors.help_port = "help port is required";
    }
    if (!formData.help_hostName.trim()) {
      newErrors.help_hostName = "help hostName is required";
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
    <div>
      <Card>
        <CardHeader>
          <h3 className="d-flex justify-content-center">
            Helpdesk Mail Configuration Details
          </h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl={6}>
              <Row className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
              >
                <Col md={8}  className={styles.inputContainer}>
                  <Input
                    type="email"
                    placeholder=""
                    name="help_mail"
                    value={formData.help_mail}
                    onChange={handleChange}
                    className={`${styles.input} ${
                      errors.help_mail ? "is-invalid" : ""
                    }`}                  />
                  <span className={styles["placeholder-label"]}
                  >HELP EMAIL<font color="red">*</font></span>
                  {errors.help_mail && (
                    <div className="text-danger">{errors.help_mail}</div>
                  )}
                </Col>
              </Row>
              <Row className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
              >
                <Col md={8}>
                  <Input
                    type="text"
                    placeholder=""
                    name="help_hostName"
                    value={formData.help_hostName}
                    onChange={handleChange}
                    className={`${styles.input} ${
                      errors.help_hostName ? "is-invalid" : ""
                    }`}                  />
                  <span className={styles["placeholder-label"]}>HELP HOST NAME<font color="red">*</font></span>
                  {errors.help_hostName && (
                    <div className="text-danger">{errors.help_hostName}</div>
                  )}
                </Col>
              </Row>
            </Col>

            {/* 2nd colunm */}

            <div className="col-xl-6">
              <Row className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
              >
                <Col md={8}>
                  <Input
                    type="password"
                    placeholder=""
                    name="help_password"
                    value={formData.help_password}
                    onChange={handleChange}
                    className={`${styles.input} ${
                      errors.help_password ? "is-invalid" : ""
                    }`}                  />
                  <span className={styles["placeholder-label"]}>HELP PASSWORD<font color="red">*</font></span>
                  {errors.help_password && (
                    <div className="text-danger">{errors.help_password}</div>
                  )}
                </Col>
              </Row>

              <Row className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
              >
                <Col md={8}>
                  <Input
                    type="number"
                    placeholder=""
                    name="help_port"
                    value={formData.help_port}
                    onChange={handleChange}
                    className={`${styles.input} ${
                      errors.help_port ? "is-invalid" : ""
                    }`}                  />
                  <span className={styles["placeholder-label"]}>HELP PORT<font color="red">*</font></span>
                  {errors.help_port && (
                    <div className="text-danger">{errors.help_port}</div>
                  )}
                </Col>
              </Row>
            </div>
          </Row>
          <div className="justify-content-center d-flex align-items-center">
            <Button
              className="btn-lg btn-secondary-subtle border-primary"
              onClick={handleSubmit}
            >
              UPDATE
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HelpMailDesk;
