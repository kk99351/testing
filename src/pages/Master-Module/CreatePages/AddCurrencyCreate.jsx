import React, { useState } from "react";
import {
  Col,
  Row,
  CardBody,
  CardHeader,
  Card,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCurrencyCreate = () => {
  const navigate = useNavigate();
    const requiredFields = {
      nmCurr: "Currency Name",
      cdCurr: "Currency Symbol",
    };
    const initialFormData = {};
const initialErrors = {};
Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
});


const [formData, setFormData] = useState(initialFormData);
const [errors, setErrors] = useState(initialErrors);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleDropdownChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const CreateHandle = async e => {
        e.preventDefault();
        let isValid = true;

        Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
            if (!formData[fieldName].trim()) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [fieldName]: `${fieldLabel} is required`,
                }));
                isValid = false;
            }
        });

        if (isValid) {
            try {
                // await axios.post(`http://localhost:3000/region/`, formData);
                // navigate("/company_group");
                console.log("Form submitted successfully");
            } catch (error) {
                console.log("error in creating group data" + error);
            }
        }
    };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CURRENCY DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="nmCurr">
                          CURRENCY NAME<font color="red">*</font>
                        </Label>
                        <Input
                        placeholder="ENTER CURREMCY NAME"
                          name="nmCurr"
                          id="nmCurr"
                          value={formData.nmCurr}
                          onChange={handleInputChange}
                          invalid={!!errors.nmCurr}

                        />
                        <span className="text-danger">{errors.nmCurr}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="cdCurr">
                         CURRENCY SYMBOL<font color="red">*</font>
                        </Label>
                        <Input
                        placeholder="ENTER CURRENCY SYMBOL"
                          name="cdCurr"
                          id="cdCurr"
                          value={formData.cdCurr}
                          onChange={handleInputChange}
                          invalid={!!errors.cdCurr}

                        />
                        <span className="text-danger">{errors.cdCurr}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
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
                        <button
                          type="button"
                          className="btn btn-success-subtle border border-success"
                          onClick={CreateHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>CREATE</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/add_currency");
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
                  </form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AddCurrencyCreate;
