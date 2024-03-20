import React from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

const AccessoryHistoryReport = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      material: "",
      submaterial: "",
      materialgroup: "",
    },
    validationSchema: Yup.object({
      materialgroup: Yup.string().required("MATERIAL GROUP IS REQUIRED"),
    }),
    onSubmit: async values => {
      // console.log(values)
      // try {
      //   await axios.post(`http://localhost:3000/companygroup/`, values);
      //   navigate("/companygroup");
      // } catch (error) {
      //   console.log("error in creating companygroup data: " + error);
      // }
    },
  });

  const handleGenerateReport = () => {
    // Open a new tab
    const newTab = window.open("", "MasterAssetReport");

    // Create a table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.background = "black";
    table.style.color = "white";

    // Create table header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
      "ASSET ID",
      "CLIENT NAME",
      "COMPANY GROUP",
      "STATE",
      "CITY",
      "LOCATION",
      "BUILDING",
      "FLOOR",
      "SALES/RENTAL",
      "DEPARTMENT",
      "COST CENTER",
      "PO.NO",
      "GROUP NAME",
      "SUB GROUP NAME",
      "ITEM NAME",
      "ITEM PRICE",
      "SERIAL NO",
      "ASSET REMARKS",
      "PROCESS TYPE",
      "STORAGE TYPE",
      "RAM TYPE",
      "STATUS",
      "ALLOCATED TO",
      "DEPARTMENT",
      "INVOICE NUMBER",
      "INVOICE DATE",
      " ALLOCATION DATE",
      "WARRENTY END",
    ];

    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.style.border = "1px solid #dddddd";
      th.style.padding = "8px";
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    newTab.document.body.style.backgroundColor = "black";
    newTab.document.body.appendChild(table);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ACCESSORY/SOFTWARE HISTORY REPORT{" "}
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
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="materialgroup">
                            ASSET MATERIAL GROUP<font color="red">*</font>{" "}
                          </Label>
                          <Input
                            type="select"
                            name="materialgroup"
                            id="materialgroup"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.materialgroup &&
                              validation.errors.materialgroup
                            }
                          >
                            <option value="">ALL </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.materialgroup &&
                          validation.errors.materialgroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.materialgroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="submaterial">
                            ASSET MATERIAL SUB GROUP
                          </Label>
                          <Input
                            type="select"
                            name="submaterial"
                            id="submaterial"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.submaterial &&
                              validation.errors.submaterial
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.submaterial &&
                          validation.errors.submaterial ? (
                            <FormFeedback type="invalid">
                              {validation.errors.submaterial}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="material">ASSET MATERIAL</Label>
                          <Input
                            type="select"
                            name="material"
                            id="material"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.material &&
                              validation.errors.material
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.material &&
                          validation.errors.material ? (
                            <FormFeedback type="invalid">
                              {validation.errors.material}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <hr className="mb-3 mt-3" />
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
                        <div className="text-sm-end">
                          <Button
                            //   onClick={handleGenerateReport} // Call function to generate report
                            onClick={() =>
                              navigate("/accessory_history_report_view")
                            }
                            className="btn btn-success-subtle border border-success"
                            style={{
                              paddingTop: "5px",
                              width: "150px",
                              height: "45px",
                              marginLeft: "10px",
                            }}
                          >
                            GENERATE REPORT{" "}
                          </Button>
                        </div>
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

export default AccessoryHistoryReport;
