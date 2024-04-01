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
import { GetAllData, GetSignleData } from "src/API/Master/GlobalGet";
import { useParams } from "react-router";
import { CreateMaterial } from "src/API/Master/MaterialMaster/Api";
import { ToastContainer, toast } from "react-toastify";

const CreateItemsModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [material, setMaterial] = useState([]);
  const [submaterial, setSubmaterial] = useState([]);
  const [uom, setUom] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    GetAllData("MaterialGroup").then(res => {
      if (Array.isArray(res)) {
        setMaterial(res);
      } else {
        setMaterial([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("MaterialSubGroup").then(res => {
      if (Array.isArray(res)) {
        setSubmaterial(res);
      } else {
        setSubmaterial([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Uom").then(res => {
      if (Array.isArray(res)) {
        setUom(res);
      } else {
        setUom([]);
      }
    });
  }, []);

  const requiredFields = {
    item_name: "MATERIAL NAME",
    item_type: "MATERIAL TYPE",
    sub_category: "MATERIAL SUB-GROUP",
    category: "MATERIAL GROUP",
    uom: "UOM",
    model: "MAKE/MODEL",
    discription: "DESCRIPTION",
  };
  const initialFormData = {};
  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState({
    item_name: currentData?.nmmodel,
    item_type: currentData?.typasst,
    sub_category: currentData?.idsgrp?.idsgrp,
    category: currentData?.idsgrp?.idgrp?.idgrp,
    uom: currentData?.iduom?.iduom,
    model: currentData?.mfr,
    discription: currentData?.itemdesc,
  });
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    GetSignleData("Material", id).then(res => {
      setCurrentData(res);
    });
  }, [id]);

  useEffect(() => {
    console.log("Current Data:", currentData);
    setFormData({
      item_name: currentData?.nmmodel || "",
      item_type: currentData?.typasst || "",
      sub_category: currentData?.idsgrp?.idsgrp || "",
      category: currentData?.idsgrp?.idgrp?.idgrp || "",
      uom: currentData?.iduom?.iduom || "",
      model: currentData?.mfr || "",
      discription: currentData?.itemdesc || "",
    });
  }, [currentData]);

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

  const createHandle = async e => {
    e.preventDefault();
    let isValid = true;
    console.log("form,", formData);

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      const fieldValue = formData[fieldName];
      if (
        (typeof fieldValue !== "string" && typeof fieldValue !== "number") ||
        (typeof fieldValue === "string" && !fieldValue.trim())
      ) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [fieldName]: `${fieldLabel} IS REQUIRED`,
        }));
        isValid = false;
      }
    });

    if (isValid) {
      try {
        CreateMaterial([
          {
            idmodel: id,
            nmmodel: formData.item_name,
            typasst: formData.item_type,
            itemdesc: formData.discription,
            mfr: formData.model,
            idsgrp: {
              idsgrp: Number(formData.sub_category),
              nmsgrp: "string",
              cdsgrp: "string",
              idgrp: {
                idgrp: 0,
                nmgrp: "string",
                cdgrp: "string",
              },
            },
            iduom: {
              iduom: formData.uom,
              nmuom: "string",
              cduom: "string",
            },
          },
        ])
          .then(res => {
            console.log(res);
            if (res.ok) {
              toast("Material Updated successfully");
              navigate("/create_items");
            } else {
              toast("Material already exists");
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
                MATERIAL DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="item_type">
                          MATERIAL TYPE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="item_type"
                          placeholder="PLEASE ENTER MATERIAL TYPE"
                          id="item_type"
                          value={formData.item_type}
                          onChange={handleDropdownChange}
                          invalid={!!errors.item_type}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT MATERIAL TYPE</option>
                          <option value="IT">IT</option>
                          <option value="NON-IT">NON IT</option>
                          <option value="soft">SOFTWARE</option>
                          <option value="accessories">ACCESSORIES</option> 
                        </Input>
                        <span className="invalid-feedback">
                          {errors.item_type}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="item_name">
                          MATERIAL NAME<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          name="item_name"
                          placeholder="PLEASE ENTER MATERIAL NAME"
                          id="item_name"
                          value={formData.item_name}
                          onChange={handleInputChange}
                          invalid={!!errors.item_name}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="text-danger">{errors.item_name}</span>
                      </Col>

                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="category">
                          MATERIAL GROUP<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="category"
                          id="category"
                          value={formData.category}
                          onChange={handleDropdownChange}
                          invalid={!!errors.category}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT MATERIAL GROUP</option>
                          {material &&
                            material.map((item, index) => (
                              <option key={index} value={item.idgrp}>
                                {item.nmgrp}
                              </option>
                            ))}
                        </Input>
                        <span className="invalid-feedback">
                          {errors.category}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="sub_category">
                          MATERIAL SUB GROUP<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="sub_category"
                          id="sub_category"
                          value={formData.sub_category}
                          onChange={handleDropdownChange}
                          invalid={!!errors.sub_category}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value=""> SELECT MATERIAL SUB GROUPL</option>
                          {submaterial &&
                            submaterial.map((item, index) => (
                              <option key={index} value={item.idsgrp}>
                                {item.nmsgrp}
                              </option>
                            ))}
                        </Input>
                        <span className="invalid-feedback">
                          {errors.sub_category}
                        </span>
                      </Col>

                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      {/* <Col md={6}>
                        <Label for="item_code">
                          MATERIAL CODE<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          placeholder="PLEASE ENTER MATERIAL CODE"
                          name="item_code"
                          id="item_code"
                          value={formData.item_code}
                          onChange={handleInputChange}
                          invalid={!!errors.item_code}
                        />
                        <span className="invalid-feedback">
                          {errors.item_code}
                        </span>
                      </Col> */}
                      <Col md={6}>
                        <Label for="model">
                          MAKE/MODEL<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          placeholder="PLEASE ENTER  MAKE/MODEL "
                          name="model"
                          id="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          invalid={!!errors.model}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">{errors.model}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="uom">
                          UOM<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="uom"
                          id="uom"
                          value={formData.uom}
                          onChange={handleDropdownChange}
                          invalid={!!errors.uom}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT UOM</option>
                          {uom &&
                            uom.map((item, index) => (
                              <option key={index} value={item.iduom}>
                                {item.nmuom}
                              </option>
                            ))}
                        </Input>
                        <span className="invalid-feedback">{errors.uom}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="discription">
                          DESCRIPTION<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          name="discription"
                          placeholder="PLEASE WRITE DESCRIPTION"
                          id="discription"
                          value={formData.discription}
                          onChange={handleInputChange}
                          invalid={!!errors.discription}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.discription}
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
                          onClick={createHandle}
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
                            navigate("/create_items");
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

export default CreateItemsModify;
