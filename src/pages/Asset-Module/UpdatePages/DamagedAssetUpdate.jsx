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

const DamagedAssetUpdate = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  const requiredFields = {
    attachImage: "Image",
    approxCost: "Approx Cost Of Repairing",
  };
  const initialFormData = {
    assetId: "",
    assetName: "",
    serialNumber: "",
    diciceStorage: "",
    modelNumber: "",
    processType: "",
    storageType: "",
    ramType: "",
    invoiceNumber: "",
    invoiceDate: "",
    poNumber: "",
    poDate: "",
    attachImage: "",
    approxCost: "",
    uploadDocument: "",
  };
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
  const handlelogoChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setErrors((prevErrors) => ({
      ...prevErrors,
      attachImage: "", 
    }));
    setFormData((prevData) => ({
      ...prevData,
      attachImage: file, 
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

  const UpdateHandle = async (e) => {
    e.preventDefault();
    let isValid = true;
  
    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (fieldName === "attachImage") {
        if (!formData[fieldName]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: `${fieldLabel} is required`,
          }));
          isValid = false;
        }
      } else {
        if (!formData[fieldName].trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: `${fieldLabel} is required`,
          }));
          isValid = false;
        }
      }
    });
  
    if (isValid) {
      try {
        const formDataWithImage = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataWithImage.append(key, value);
        });
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
                DELIGATION DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="assetId">ASSET ID</Label>
                        <Input
                          type="text"
                          name="assetId"
                          id="assetId"
                          value={formData.assetId}
                          onChange={handleInputChange}
                          invalid={!!errors.assetId}
                        />
                        <span className="text-danger">{errors.assetId}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="assetName">ASSET NAME</Label>
                        <Input
                          type="text"
                          name="assetName"
                          id="assetName"
                          value={formData.assetName}
                          onChange={handleInputChange}
                          invalid={!!errors.assetName}
                        />
                        <span className="text-danger">{errors.assetName}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="serialNumber">SERIAL NUMBER </Label>
                        <Input
                          type="text"
                          name="serialNumber"
                          id="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.serialNumber}
                        />
                        <span className="text-danger">
                          {errors.serialNumber}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="diciceStorage">DIVICE STORAGE</Label>
                        <Input
                          type="text"
                          name="diciceStorage"
                          id="diciceStorage"
                          value={formData.diciceStorage}
                          onChange={handleInputChange}
                          invalid={!!errors.diciceStorage}
                        />
                        <span className="text-danger">
                          {errors.diciceStorage}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="modelNumber">MODEL NUMBER </Label>
                        <Input
                          type="text"
                          name="modelNumber"
                          id="modelNumber"
                          value={formData.modelNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.modelNumber}
                        />
                        <span className="text-danger">
                          {errors.modelNumber}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="processType">PROCESS TYPE</Label>
                        <Input
                          type="text"
                          name="processType"
                          id="processType"
                          value={formData.processType}
                          onChange={handleInputChange}
                          invalid={!!errors.processType}
                        />
                        <span className="text-danger">
                          {errors.processType}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="storageType">STORAGE TYPE </Label>
                        <Input
                          type="text"
                          name="storageType"
                          id="storageType"
                          value={formData.storageType}
                          onChange={handleInputChange}
                          invalid={!!errors.storageType}
                        />
                        <span className="text-danger">
                          {errors.storageType}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="ramType">RAM TYPE</Label>
                        <Input
                          type="text"
                          name="ramType"
                          id="ramType"
                          value={formData.ramType}
                          onChange={handleInputChange}
                          invalid={!!errors.ramType}
                        />
                        <span className="text-danger">{errors.ramType}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="invoiceNumber">INVOICE NUMBER </Label>
                        <Input
                          type="text"
                          name="invoiceNumber"
                          id="invoiceNumber"
                          value={formData.invoiceNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceNumber}
                        />
                        <span className="text-danger">
                          {errors.invoiceNumber}
                        </span>
                      </Col>
                      <Col md={6}>
                        <Label for="invoiceDate">INVOICE DATE</Label>
                        <Input
                          type="date"
                          name="invoiceDate"
                          id="invoiceDate"
                          value={formData.invoiceDate}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceDate}
                        />
                        <span className="text-danger">
                          {errors.invoiceDate}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="poNumber">PO NUMBER</Label>
                        <Input
                          type="text"
                          name="poNumber"
                          id="poNumber"
                          value={formData.poNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.poNumber}
                        />
                        <span className="text-danger">{errors.poNumber}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="poDate">PO DATE</Label>
                        <Input
                          type="date"
                          name="poDate"
                          id="poDate"
                          value={formData.poDate}
                          onChange={handleInputChange}
                          invalid={!!errors.poDate}
                        />
                        <span className="text-danger">{errors.poDate}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="approxCost">APPROX COST OF REPAIRING</Label>
                        <Input
                          type="text"
                          name="approxCost"
                          id="approxCost"
                          value={formData.approxCost}
                          onChange={handleInputChange}
                          invalid={!!errors.approxCost}
                        />
                        <span className="text-danger">{errors.approxCost}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="uploadDocument">UPLOAD SUPPORTING DOCUMENT</Label>
                        <Input
                          type="file"
                          name="uploadDocument"
                          id="uploadDocument"
                          value={formData.uploadDocument}
                          onChange={handleInputChange}
                          invalid={!!errors.uploadDocument}
                        />
                        <span className="text-danger">{errors.uploadDocument}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="attachImage">ATTACH IMAGE</Label>
                        <Input
                          type="file"
                          name="attachImage"
                          id="attachImage"
                          onChange={handlelogoChange}
                          accept="image/*"
                          invalid={!!errors.attachImage}
                        />
                        <span className="text-danger">
                          {errors.attachImage}
                        </span>
                      </Col>
                      <Col md={6}>
                        {selectedFile && (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected"
                            style={{ maxWidth: "100%", maxHeight: "100px" }}
                          />
                        )}
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
                            width: "200px",
                            marginRight: "30px",
                          }}
                        >
                          <Label>SEND FOR APPROVAL</Label>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary-subtle border border-secondary"
                          onClick={() => {
                            navigate("/damaged_asset");
                          }}
                          style={{
                            paddingTop: "10px",
                            width: "80px",
                            height: "45px",
                          }}
                        >
                          <Label>CANCEL</Label>
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

export default DamagedAssetUpdate;
