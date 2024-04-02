import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import { GetSignleData } from "src/API/Master/GlobalGet";
import { CreateCurrency } from "src/API/Master/ConfigrationMaster/Api";
import { ToastContainer, toast } from "react-toastify";

const AddCurrencyModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currency, setCurrency] = useState([]);
  const requiredFields = {
    nmCurr: "CURRENCY NAME",
    cdCurr: "CURRENCY SYMBOL",
  };
  const initialFormData = {};
  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState({
    nmCurr: "CURRENCY NAME",
    cdCurr: "CURRENCY SYMBOL",
  });
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    GetSignleData("Currency", id).then(res => {
      setCurrency(res);
    });
  }, [id]);

  useEffect(() => {
    setFormData({
      nmCurr: currency?.nmcurr || "",
      cdCurr: currency?.cdcurr || "",
    });
  }, [currency]);

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

  const UpdateHandle = async e => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} IS REQUIRED`,
        }));
        isValid = false;
      }
    });

    if (isValid) {
      try {
        CreateCurrency([
          {
            idcurr: id,
            nmcurr: formData.nmCurr,
            cdcurr: formData.cdCurr,
          },
        ])
          .then(res => {
            console.log("alok", res);
            if (res.ok) {
              toast("Currency Updated successfully");
              navigate("/add_currency");
            } else {
              toast("Currency already exists");
            }
          })
          .catch(err => {
            toast(err.message);
          });
      } catch (error) {
        console.log("error in creating group data" + error);
      }
    }
  };

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer></ToastContainer>
        <div className="page-content">
          <Card className="mt-0">
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
                          type="select"
                          name="nmCurr"
                          id="nmCurr"
                          value={formData.nmCurr}
                          onChange={handleDropdownChange}
                          invalid={!!errors.nmCurr}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT CURRENCY NAME</option>
                          <option value="US Dollar">US Dollar</option>
                          <option value="Euro">Euro</option>
                          <option value="British Pound">British Pound</option>
                          <option value="Indian Rupee">Indian Rupee</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.nmCurr}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="cdCurr">
                          CURRENCY SYMBOL<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="cdCurr"
                          id="cdCurr"
                          value={formData.cdCurr}
                          onChange={handleDropdownChange}
                          invalid={!!errors.cdCurr}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT CURRENCY SYMBOL</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                          <option value="INR">INR</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.cdCurr}
                        </span>
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
                          onClick={UpdateHandle}
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>UPDATE</Label>
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

export default AddCurrencyModify;
