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

const TransferApprovalReport = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const oneMonthAgoFormatted = oneMonthAgo.toISOString().split("T")[0];
    
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      assetmaterialsub: "",
      state: "",
      companygroup: "",
      building: "",
      floor: "",
      city: "",
      location: "",
      submaterial: "",
      materialgroup: "",
      fromdate: oneMonthAgoFormatted,
      enddate: currentDate,
    },
    validationSchema: Yup.object({
      assetmaterialsub: Yup.string().required("EMPLOYEE NAME IS REQUIRED"),
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
      "COUNTRY",
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
                TRANSFER APPROVAL REPORT{" "}
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
                          <Label htmlFor="companygroup">COUNTRY</Label>
                          <Input
                            type="select"
                            name="companygroup"
                            id="companygroup"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.companygroup &&
                              validation.errors.companygroup
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.companygroup &&
                          validation.errors.companygroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.companygroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="state">
                            STATE <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="state"
                            id="state"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.state &&
                              validation.errors.state
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.state &&
                          validation.errors.state ? (
                            <FormFeedback type="invalid">
                              {validation.errors.state}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="city">CITY</Label>
                          <Input
                            type="select"
                            name="city"
                            id="city"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.city && validation.errors.city
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">
                              {validation.errors.city}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="location">LOCATION</Label>
                          <Input
                            type="select"
                            name="location"
                            id="location"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.location &&
                              validation.errors.location
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.location &&
                          validation.errors.location ? (
                            <FormFeedback type="invalid">
                              {validation.errors.location}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="building">BUILDING</Label>
                          <Input
                            type="select"
                            name="building"
                            id="building"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.building &&
                              validation.errors.building
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.building &&
                          validation.errors.building ? (
                            <FormFeedback type="invalid">
                              {validation.errors.building}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="floor">FLOOR</Label>
                          <Input
                            type="select"
                            name="floor"
                            id="floor"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.floor &&
                              validation.errors.floor
                            }style={{ textTransform: "uppercase" }}
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.floor &&
                          validation.errors.floor ? (
                            <FormFeedback type="invalid">
                              {validation.errors.floor}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
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
                            }style={{ textTransform: "uppercase" }}
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
                      <Col md={6}>
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
                            }style={{ textTransform: "uppercase" }}
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
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="fromdate">FROM DATE </Label>
                          <Input
                            type="date"
                            name="fromdate"
                            id="fromdate"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.fromdate}
                            invalid={
                              validation.touched.fromdate &&
                              validation.errors.fromdate
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.materialgroup &&
                          validation.errors.materialgroup ? (
                            <FormFeedback type="invalid">
                              {validation.errors.materialgroup}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="enddate">END DATE</Label>
                          <Input
                            type="date"
                            name="fromdate"
                            id="fromdate"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.enddate}
                            invalid={
                              validation.touched.enddate &&
                              validation.errors.enddate
                            }style={{ textTransform: "uppercase" }}
                          ></Input>
                          {validation.touched.enddate &&
                          validation.errors.enddate ? (
                            <FormFeedback type="invalid">
                              {validation.errors.enddate}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <hr className="mt-3 mb-3" />

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
                            onClick={() => navigate("/transfer_approval_report_view")}
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

export default TransferApprovalReport;
