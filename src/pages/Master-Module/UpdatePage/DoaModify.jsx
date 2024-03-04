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

const DoaModify = () => {
  const navigate = useNavigate();

  const requiredFields = {
    nmDoa: "Doa Name",
    typAsst: "Item Type",
    vendors: "Number of Vendors",
    idUsertype: "Type",
    // remarks: "",
  };

  const initialFormData = {
    nmDoa: "",
    typAsst: "",
    vendors: "",
    idUsertype: "",
    remarks: "",
  };

  const initialErrors = {};
  Object.keys(requiredFields).forEach((key) => {
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const UpdateHandle = async (e) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(requiredFields).forEach(([fieldName, fieldLabel]) => {
      if (!formData[fieldName].trim()) {
        setErrors((prevErrors) => ({
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

  const [rows, setRows] = useState([
    { col1: "0", col2: "0", col3: "", col4: "", col5: "", col6: "" },
    { col1: "0", col2: "0", col3: "", col4: "", col5: "", col6: "" },
    { col1: "0", col2: "0", col3: "", col4: "", col5: "", col6: "" },

  ]);

  const handleInputValueChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      { col1: "", col2: "", col3: "", col4: "", col5: "", col6: "" },
      
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-5">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                DOA DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="nmDoa">
                          DOA NAME<font color="red">*</font>
                        </Label>
                        <Input
                        placeholder="ENTER DOA NAME"
                          type="text"
                          name="nmDoa"
                          id="nmDoa"
                          value={formData.nmDoa}
                          onChange={handleInputChange}
                          invalid={!!errors.nmDoa}
                        />
                        <span className="text-danger">{errors.nmDoa}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="typAsst">
                          ITEM TYPE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="typAsst"
                          id="typAsst"
                          value={formData.typAsst}
                          onChange={handleDropdownChange}
                          invalid={!!errors.typAsst}
                        >
                          <option value="">SELECT ITEM TYPE</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">{errors.typAsst}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Label for="vendors">
                          NUMBER OF VENDORS<font color="red">*</font>
                        </Label>
                        <Input
                        placeholder="ENTER NUMBER OF VENDORS"
                          type="text"
                          name="vendors"
                          id="vendors"
                          value={formData.vendors}
                          onChange={handleInputChange}
                          invalid={!!errors.vendors}
                        />
                        <span className="text-danger">{errors.vendors}</span>
                      </Col>
                      <Col md={6}>
                        <Label for="idUsertype">
                          TYPE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="idUsertype"
                          id="idUsertype"
                          value={formData.idUsertype}
                          onChange={handleDropdownChange}
                          invalid={!!errors.idUsertype}
                        >
                          <option value="">SELECT TYPE</option>
                          <option value="group1">Group 1</option>
                          <option value="group2">Group 2</option>
                        </Input>
                        <span className="text-danger">
                          {errors.idUsertype}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="remarks">REMARKS</Label>
                        <textarea
                        placeholder="REMARKS"
                          name="remarks"
                          id="remarks"
                          value={formData.remarks}
                          onChange={handleInputChange}
                          className={`form-control ${
                            errors.remarks ? "is-invalid" : ""
                          }`}
                        />
                        <span className="text-danger">{errors.remarks}</span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <div className="table-container">
                      <div className="table-scroll">
                        <CardHeader>
                          <h3 className="header"> LINE ITEM DETAILS</h3>
                        </CardHeader>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                FROM LIMIT
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                TO LIMIT
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                PROC DEPARTMENT
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                HOD PROC
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                CHAIRMAN COMMITTEE
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "14%" }}
                              >
                                MD
                              </th>
                              <th
                                className="text-center"
                                style={{ width: "16%" }}
                              >
                                ADD / REMOVE
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((rowData, index) => (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={rowData.col1}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col1",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={rowData.col2}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col2",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={rowData.col3}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col3",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <select
                                    className="form-control"
                                    value={rowData.col4}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col4",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Select">SELECT</option>
                                    <option value="option1">YES</option>
                                    <option value="option2">NO</option>
                                  </select>
                                </td>
                                <td>
                                  <select
                                    className="form-control"
                                    value={rowData.col5}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col5",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Select">SELECT</option>
                                    <option value="option1">YES</option>
                                    <option value="option2">NO</option>
                                  </select>
                                </td>
                                <td>
                                  <select
                                    className="form-control"
                                    value={rowData.col6}
                                    onChange={(e) =>
                                      handleInputValueChange(
                                        index,
                                        "col6",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Select">SELECT</option>
                                    <option value="option1">YES</option>
                                    <option value="option2">NO</option>
                                  </select>
                                </td>
                                <td className="text-center">
                                  {index === 0 ? (
                                    <button
                                      type="button"
                                      className="btn btn-success-subtle border border-success"
                                      onClick={handleAddRow}
                                      style={{
                                        height: "40px",
                                        width: "89px",
                                      }}
                                    >
                                      ADD
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      className="btn btn-secondary-subtle border border-secondar"
                                      onClick={() => handleRemoveRow(index)}  style={{
                                        height: "40px",
                                        width: "89px",
                                      }}
                                    >
                                      REMOVE
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

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
                            navigate("/doa_master");
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

export default DoaModify;
