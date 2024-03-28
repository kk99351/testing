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

const MasterReport = () => {
  const navigate = useNavigate();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      assetmaterial: "",
      assetmaterialsub: "",
      state: "",
      companygroup: "",
      building: "",
      floor: "",
      city: "",
      location: "",
      client: "",
      vendor: "",
      dept: "",
      costcenter: "",
      stdate: "",
      enddate: "",
    },
    validationSchema: Yup.object({}),
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
                MASTER ASSET REPORT{" "}
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
                          <Label htmlFor="assetmaterial">
                            ASSET MATERIAL GROUP
                          </Label>
                          <Input
                            type="select"
                            name="assetmaterial"
                            id="assetmaterial"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetmaterial &&
                              validation.errors.assetmaterial
                            }
                          >
                            <option value="">ALL </option>
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
                          <Label htmlFor="assetmaterialsub">
                            ASSET MATERIAL SUB GROUP
                          </Label>
                          <Input
                            type="select"
                            name="assetmaterialsub"
                            id="assetmaterialsub"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.assetmaterialsub &&
                              validation.errors.assetmaterialsub
                            }
                          >
                            <option value=""> ALL </option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.statename &&
                          validation.errors.statename ? (
                            <FormFeedback type="invalid">
                              {validation.errors.statename}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="companygroup">COMPANY GROUP</Label>
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
                            }
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
                            }
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
                            }
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
                            }
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
                            }
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
                            }
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
                          <Label htmlFor="client">CLIENT NAME</Label>
                          <Input
                            type="select"
                            name="client"
                            id="client"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.client &&
                              validation.errors.client
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.client &&
                          validation.errors.client ? (
                            <FormFeedback type="invalid">
                              {validation.errors.client}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="vendor">VENDOR</Label>
                          <Input
                            type="select"
                            name="vendor"
                            id="vendor"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.vendor &&
                              validation.errors.vendor
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.vendor &&
                          validation.errors.vendor ? (
                            <FormFeedback type="invalid">
                              {validation.errors.vendor}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="dept">DEPARTMENT</Label>
                          <Input
                            type="select"
                            name="dept"
                            id="dept"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.dept && validation.errors.dept
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.dept && validation.errors.dept ? (
                            <FormFeedback type="invalid">
                              {validation.errors.dept}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="costcenter">COST CENTER</Label>
                          <Input
                            type="select"
                            name="costcenter"
                            id="costcenter"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.costcenter &&
                              validation.errors.costcenter
                            }
                          >
                            <option value="">ALL</option>
                            <option value="group1">Company Group 1</option>
                            <option value="group2">Company Group 2</option>
                          </Input>
                          {validation.touched.costcenter &&
                          validation.errors.costcenter ? (
                            <FormFeedback type="invalid">
                              {validation.errors.costcenter}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="stdate">INVOICE START DATE</Label>
                          <Input
                            type="date"
                            name="stdate"
                            id="stdate"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.stdate &&
                              validation.errors.stdate
                            }
                          >
                              </Input>
                          {validation.touched.stdate &&
                          validation.errors.stdate ? (
                            <FormFeedback type="invalid">
                              {validation.errors.stdate}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="enddate">INVOICE END DATE </Label>
                          <Input
                            type="date"
                            name="enddate"
                            id="enddate"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.enddate &&
                              validation.errors.enddate
                            }
                          >
                           
                          </Input>
                          {validation.touched.enddate &&
                          validation.errors.enddate ? (
                            <FormFeedback type="invalid">
                              {validation.errors.enddate}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <hr className="mt-3 mb-3" />
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
                        <div className="text-sm-end">
                          <Button
                            //   onClick={handleGenerateReport} // Call function to generate report

                            onClick={() => navigate("/master_report_view")}
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

export default MasterReport;
