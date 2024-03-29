import React, { useMemo, useState } from "react";
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
  Table,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Barcode from "react-barcode";

const BarcodePage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      cat: "",
      subCat: "",
      poNo: "",
      invoiceNo: "",
    },
    validationSchema: Yup.object({
      cat: Yup.string().required("MATERIAL-GROUP  IS REQUIRED"),
      subCat: Yup.string().required("SUB-MATERIALIS REQUIRED"),
      poNo: Yup.string().required("PO.NUMBER IS REQUIRED"),
      invoiceNo: Yup.string().required("INVOICE NUMBER IS REQUIRED"),
    }),

    onSubmit: async values => {
      console.log("Form submitted successfully!");
      setSubmitted(true);
    },
  });
  const [responseData, setResponseData] = useState([
    {
      slno: 1,
      assetId: "03/IT/EBE-0001/2024",
      assetName: "Laptop",
      serialNumber: "AB1",
      assetRemarks: "Good condition",
      allocateType: "Active",
      checked: false,
      employeename: "John Doe",
      client: "ABC Corp",
      allocatedDate: "2023-01-15",
    },
    {
      slno: 2,
      assetId: "03/IT/EBE-0002/2024",
      assetName: "Desktop",
      serialNumber: "AB2",
      assetRemarks: "Good condition",
      allocateType: "Active",
      checked: false,
      employeename: "Jane Doe",
      client: "XYZ Corp",
      allocatedDate: "2023-01-16",
    },
    // Other data...
  ]);

  const handleDeallocate = () => {
    console.log("Deallocate button clicked");
    if (selectedRows.length > 0) {
      setBarcodeData(selectedRows);
    }
  };

  const [searchValue, setSearchValue] = useState("");

  const filteredData = useMemo(() => {
    if (!searchValue) return responseData;
    return responseData.filter(item => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [responseData, searchValue]);

  const handleInputChange = e => {
    setSearchValue(e.target.value.toUpperCase());
  };

  const handleCheckboxChange = index => {
    const updatedData = [...responseData];
    updatedData[index].checked = !updatedData[index].checked;
    setResponseData(updatedData);

    const selectedRow = responseData[index];
    const selectedIndex = selectedRows.findIndex(
      row => row.assetId === selectedRow.assetId
    );

    if (selectedIndex > -1) {
      setSelectedRows([
        ...selectedRows.slice(0, selectedIndex),
        ...selectedRows.slice(selectedIndex + 1),
      ]);
    } else {
      setSelectedRows([...selectedRows, selectedRow]);
    }
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CREATE BARCODE
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
                          <Label htmlFor="cat">
                            MATERIAL-GROUP <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="cat"
                            id="cat"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cat && validation.errors.cat
                            }
                          >
                            <option value="">SELECT MATERIAL GROUP</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="automobile">Automobile</option>
                            <option value="cosmetics">Cosmetics</option>
                          </Input>
                          {validation.touched.cat && validation.errors.cat ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cat}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="subCat">
                            MATERIAL SUB GROUP <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="subCat"
                            id="subCat"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.subCat &&
                              validation.errors.subCat
                            }
                          >
                            <option value="">SELECT MATERIAL SUB GROUP</option>
                            <option value="electronics">
                              Consumer Electronics
                            </option>
                            <option value="apparel">Apparel & Clothing</option>
                            <option value="automotive">Automotive Parts</option>
                          </Input>
                          {validation.touched.subCat &&
                          validation.errors.subCat ? (
                            <FormFeedback type="invalid">
                              {validation.errors.subCat}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="poNo">
                            PO.NUMBER <font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="poNo"
                            id="poNo"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.poNo && validation.errors.poNo
                            }
                          >
                            <option value="">SELECT PO.NUMBER</option>
                            <option value="PO123456">PO123456</option>
                            <option value="PO789012">PO789012</option>
                            <option value="PO345678">PO345678</option>
                          </Input>
                          {validation.touched.poNo && validation.errors.poNo ? (
                            <FormFeedback type="invalid">
                              {validation.errors.poNo}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="invoiceNo">
                            INVOICE NUMBER<font color="red">*</font>
                          </Label>
                          <Input
                            type="select"
                            name="invoiceNo"
                            id="invoiceNo"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.invoiceNo &&
                              validation.errors.invoiceNo
                            }
                          >
                            <option value="">SELECT INVOICE NUMBER</option>
                            <option value="INV2024001">INV2024001</option>
                            <option value="INV2024002">INV2024002</option>
                            <option value="INV2024003">INV2024003</option>
                          </Input>
                          {validation.touched.invoiceNo &&
                          validation.errors.invoiceNo ? (
                            <FormFeedback type="invalid">
                              {validation.errors.invoiceNo}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <hr className="mb-2" />
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
                        <Button
                          type="submit"
                          color="success-subtle"
                          className="btn btn-success-subtle border border-success"
                          style={{
                            paddingTop: "10px",
                            height: "45px",
                            width: "80px",
                            marginRight: "30px",
                          }}
                        >
                          NEXT
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>

          {submitted && (
            <Card className="mt-0">
              <CardBody>
                {/* Replace this with your table component */}
                <div>
                  <Row className="justify-content-center">
                    <Col xl={10}>
                      <div className="container pt-1">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="search-box me-2 my-3 my-md-0 d-inline-block">
                              <div className="position-relative">
                                <label
                                  htmlFor="search-bar-0"
                                  className="search-label"
                                >
                                  <span
                                    id="search-bar-0-label"
                                    className="sr-only"
                                  >
                                    Search this table
                                  </span>
                                  <input
                                    id="search-bar-0"
                                    type="text"
                                    className="form-control"
                                    placeholder="SEARCH..."
                                    value={searchValue}
                                    onChange={handleInputChange}
                                  />
                                  <i className="bx bx-search-alt search-icon"></i>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-8">
                            <div className="text-sm-end">
                              <button
                                type="button"
                                className="btn btn-success-subtle border border-success"
                                onClick={handleDeallocate}
                              >
                                <i className="mdi me-1"></i>
                                PREVIEW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <Table className="table table-bordered table-hover text-center">
                          {" "}
                          <thead>
                            <tr>
                              <th>SL NO</th>
                              <th>ASSET ID</th>
                              <th>ASSET REF.NO</th>
                              <th>SERIAL NUMBER</th>
                              <th>SUB MATERIAL</th>
                              <th>CHECK/UNCHECK</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData.map((row, index) => (
                              <tr key={index}>
                                <td>{String(index + 1).toUpperCase()}</td>
                                <td>{row.assetId.toUpperCase()}</td>
                                <td>{row.assetName.toUpperCase()}</td>
                                <td>{row.serialNumber.toUpperCase()}</td>
                                <td>{row.assetName.toUpperCase()}</td>
                                <td
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <Input
                                    type="checkbox"
                                    checked={row.checked}
                                    onChange={() => handleCheckboxChange(index)}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <div className="text-center">
                          {filteredData.length === 0 && (
                            <div> NO SEARCH RESULTS FOUND</div>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          )}

          {barcodeData && (
            <React.Fragment>
              {barcodeData.map((data, index) => (
                <Card key={index} className="mt-3 text-center">
                  <CardBody>
                    <h3>Generated Barcode {index + 1}</h3>
                    <p>Location: BANGLORE</p>
                    <p>Asset ID: {data.assetId}</p>
                    <p>Serial No: {data.serialNumber}</p>
                    <p>Model No: E BLOCK EQUIPMENT (POSITIVO)</p>
                    <p>*{data.assetId}*</p>
                    <Barcode value={data.assetId} />
                  </CardBody>
                </Card>
              ))}
            </React.Fragment>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BarcodePage;
