import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

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
import {
  GetSingleApprovedAssests,
  UpdateAssests,
} from "src/API/Assest/AllAssests/Api";
import { GetAllData } from "src/API/Master/GlobalGet";

const AllAssetUpdate = () => {
  const navigate = useNavigate();
  const [resData, setResData] = useState([]);
  const [vendor, setVendor] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetSingleApprovedAssests(id).then(res => {
      setResData(res);
      console.log("resData", resData[0]?.idinv?.idmodel);
    });
  }, []);

  useEffect(() => {
    GetAllData("Vendor").then(res => {
      if (Array.isArray(res)) {
        setVendor(res);
      } else {
        setVendor([]);
      }
    });
  }, []);

  const requiredFields = {
    assetId: "ASSET ID",
    taggable: "TAGGABLE",
    typeOfProc: "TYPE OF PROCUREMENT",
    leaseStatus: "LEASE STATUS",
    amcStartDate: "AMC/WARRENTY START DATE ",
    amcEndDate: "AMC/WARRENTY END DATE",
    leaseStartDate: "LEASE START DATE",
    leaseStatus: "LEASE STATUS",
    leaseEndDate: "LEASE START DATE",
    license: "LICENSE ",
    licenseStartDate: "LICENSE START DATE",
    licenseEndDate: "LICENSE END DATE",
    policyNumber: "POLICY NUMBER",
    providerName: "PROVIDER NAME",
  };

  const initialFormData = {};

  const initialErrors = {};
  Object.keys(requiredFields).forEach(key => {
    initialFormData[key] = "";
    initialErrors[key] = "";
  });

  const [formData, setFormData] = useState({
    assetId: resData[0]?.idwhdyn,
    invoiceNumber: resData[0]?.idinv?.idinvm?.noinv,
    invoiceDate: resData[0]?.idinv?.idinvm?.dtinv,
    poNumber: resData[0]?.idinv?.idinvm?.nopo,
    poDate: resData[0]?.idinv?.idinvm?.dtpo,
    serialNumber: resData[0]?.serialno,
    assetRef: resData[0]?.serialno,
    diviceStatus: resData[0]?.devicestatus,
    processType: resData[0]?.idinv?.processtyp,
    storageType: resData[0]?.idinv.storeagetyp,
    ramType: resData[0]?.ramtyp,
    assetName: resData[0]?.idinv?.idmodel?.nmmodel,
    assetRemarks: resData[0]?.idinv?.idinvm?.rmkacceptreject,
    serviceVendor: resData[0]?.idinv?.idinvm?.idven?.idven,
    assetDescription: resData[0]?.idinv?.idmodel?.itemdesc,
    taggable: resData[0]?.idinv.tag,
    typeOfProc: resData[0]?.idinv?.typeproc,
    amc: resData[0]?.idinv?.warramc,
    amcStartDate: resData[0]?.idinv?.dtamcstart,
    amcEndDate: resData[0]?.idinv?.dtamcexp,
    leaseStatus: resData[0]?.idinv?.stlease,
    leaseStartDate: resData[0]?.idinv?.stdlease,
    leaseEndDate: resData[0]?.idinv?.endtlease,
    additionalCost: "",
    totalUnitPrice: resData[0]?.idinv?.unprc,
    netValue: "",
    license: "",
    licenseStartDate: "",
    licenseEndDate: "",
    policyNumber: "",
    providerName: "",
  });
  const [errors, setErrors] = useState(initialErrors);
  const [showAmcDates, setShowAmcDates] = useState(false);
  const [showLeaseDates, setShowLeaseDates] = useState(false);
  const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);

  useEffect(() => {
    setFormData({
      assetId: resData[0]?.idwhdyn,
      invoiceNumber: resData[0]?.idinv?.idinvm?.noinv,
      invoiceDate: resData[0]?.idinv?.idinvm?.dtinv,
      poNumber: resData[0]?.idinv?.idinvm?.nopo,
      poDate: resData[0]?.idinv?.idinvm?.dtpo,
      serialNumber: resData[0]?.serialno,
      assetRef: resData[0]?.serialno,
      diviceStatus: resData[0]?.devicestatus,
      processType: resData[0]?.idinv?.processtyp,
      storageType: resData[0]?.idinv.storeagetyp,
      ramType: resData[0]?.ramtyp,
      assetName: resData[0]?.idinv?.idmodel?.nmmodel,
      assetRemarks: resData[0]?.idinv?.idinvm?.rmkacceptreject,
      serviceVendor: resData[0]?.idinv?.idinvm?.idven?.idven,
      assetDescription: resData[0]?.idinv?.idmodel?.itemdesc,
      taggable: resData[0]?.idinv.tag,
      typeOfProc: resData[0]?.idinv?.typeproc,
      amc: resData[0]?.idinv?.warramc,
      amcStartDate: resData[0]?.idinv?.dtamcstart,
      amcEndDate: resData[0]?.idinv?.dtamcexp,
      leaseStatus: resData[0]?.idinv?.stlease,
      leaseStartDate: resData[0]?.idinv?.stdlease,
      leaseEndDate: resData[0]?.idinv?.endtlease,
      additionalCost: "",
      totalUnitPrice: resData[0]?.idinv?.unprc,
      netValue: "",
      license: "",
      licenseStartDate: "",
      licenseEndDate: "",
      policyNumber: "",
      providerName: "",
    });
  }, [resData]);

  const demoData = useMemo(
    () => [
      {
        slno: 1,
        fieldName: "Product Status",
        oldValue: "In Store",
        newValue: "Allocated to Employee",
        editedBy: "John Doe",
        editDate: "2024-03-25",
      },
      {
        slno: 2,
        fieldName: "Location",
        oldValue: "Warehouse A",
        newValue: "Warehouse B",
        editedBy: "Jane Smith",
        editDate: "2024-03-24",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "SL NO",
        accessor: "slno",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "FIELD NAME",
        accessor: "fieldName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "OLD VALUE",
        accessor: "oldValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "NEW VALUE",
        accessor: "newValue",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "EDITED BY",
        accessor: "editedBy",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "EDIT DATE",
        accessor: "editDate",
        disableFilters: true,
        filterable: true,
      },
    ],
    []
  );

  const dataWithSlno = useMemo(() => {
    return demoData.map((item, index) => ({
      ...item,
      slno: index + 1,
    }));
  }, [demoData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, globalFilter },
    pageCount,
    gotoPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: dataWithSlno,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

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
    // Check if AMC or Warranty is selected
    if (name === "amc") {
      setShowAmcDates(value === "amc" || value === "warrenty");
    }
    // Check if Lease Status is selected
    if (name === "leaseStatus") {
      setShowLeaseDates(value === "underlease");
    }
    if (name === "license") {
      setShowLicenseDropdown(value === "Yes");
    }
  };

  const createHandle = async e => {
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
      console.log(formData);
      try {
        UpdateAssests([
          {
            idwh: id,
            idinv: {
              idinv: resData[0]?.idinv?.idinv,
              idinvm: {
                idinvm: resData[0]?.idinv?.idinvm?.idinvm,
                noinv: resData[0]?.idinv?.idinvm?.noinv,
                dtinv: resData[0]?.idinv?.idinvm?.dtinv,
                nopo: resData[0]?.idinv?.idinvm?.nopo,
                dtpo: resData[0]?.idinv?.idinvm?.dtpo,
                nodc: resData[0]?.idinv?.idinvm?.nodc,
                dtdc: resData[0]?.idinv?.idinvm?.dtdc,
                nogrn: resData[0]?.idinv?.idinvm?.nogrn,
                dt_grn: resData[0]?.idinv?.idinvm?.dt_grn,
                idflr: resData[0]?.idinv?.idinvm?.idflr,
                iddept: resData[0]?.idinv?.idinvm?.iddept,
                idcc: resData[0]?.idinv?.idinvm?.idcc,
                idven: resData[0]?.idinv?.idinvm?.idven,
                addby: 0,
                statusapprove: "Approve",
                rmkacceptreject: "GOOD morning",
              },
              idmodel: resData[0]?.idinv?.idmodel,
              qty: 2,
              unprc: 1223,
              tag: "Yes",
              typeproc: "group2",
              stlease: "underlease",
              endtlease: "2024-04-18T00:00:00.000+00:00",
              stdlease: "2024-04-19T00:00:00.000+00:00",
              warramc: "warrenty",
              dtamcstart: "2024-04-18T00:00:00.000+00:00",
              dtamcexp: "2024-04-20T00:00:00.000+00:00",
              processtyp: "",
              storeagetyp:
                "f1cef7e5-e6e5-415a-8c09-2b98773cd718_Screenshot (2).png",
              ramtyp: "",
              stconfig: "",
            },
            addby: 0,
            editby: 0,
            idwhdyn: "sasjks/str-0002",
            serialno: "9be09e47d4e1",
            devicestatus: "instore",
            allocate: null,
            toassign: null,
            dtdeallocate: null,
            dtallocate: null,
            parent: 0,
            dtreq: null,
            reqno: 0,
            reqby: 0,
            idcc: 0,
            iddept: 0,
            idloc: 0,
            idsloc: 0,
            idbuilding: 0,
            idflr: 0,
            typasst: null,
            linkdate: null,
            idrmapprove: null,
            repomngr: null,
            statusins: null,
            sold: null,
            assettran: null,
            noinspolicy: null,
            insven: null,
            ins: null,
            stdtins: null,
            endtins: "sjsj",
            dtsold: null,
            dtdispose: null,
            sttrvl: null,
            repaircost: null,
            physicalverificationdate: null,
            physicalverificationstatus: null,
            rmkasst: null,
            dlinkeddate: null,
          },
        ]).then(res => {
          console.log(res);
        });
      } catch (error) {
        console.log("error in creating group data" + error);
      }
    }
  };
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                ALL ASSET DETAILS
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <form className="needs-validation" noValidate>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetId">
                          ASSET ID<font color="red">*</font>
                        </Label>
                        <Input
                          type="text"
                          name="assetId"
                          placeholder="PLEASE ENTER ASSET ID"
                          id="assetId"
                          value={formData.assetId}
                          onChange={handleInputChange}
                          invalid={!!errors.assetId}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.assetId}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="invoiceNumber">INVOICE NUMBER</Label>
                        <Input
                          type="text"
                          name="invoiceNumber"
                          id="invoiceNumber"
                          placeholder="PLEASE ENTER INVOICE NUMBER"
                          value={formData.invoiceNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceNumber}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.invoiceNumber}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="invoiceDate">INVOICE DATE</Label>
                        <Input
                          type="date"
                          name="invoiceDate"
                          id="invoiceDate"
                          placeholder="PLEASE ENTER INVOICE DATE"
                          value={formData.invoiceDate}
                          onChange={handleInputChange}
                          invalid={!!errors.invoiceDate}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.invoiceDate}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="poNumber">PO NUMBER</Label>
                        <Input
                          type="text"
                          name="poNumber"
                          id="poNumber"
                          placeholder="PLEASE ENTER PO NUMBER"
                          value={formData.poNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.poNumber}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.poNumber}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="poDate">PO DATE</Label>
                        <Input
                          type="date"
                          name="poDate"
                          id="poDate"
                          placeholder="PLEASE ENTER PO DATE"
                          value={formData.poDate}
                          onChange={handleInputChange}
                          invalid={!!errors.poDate}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.poDate}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="serialNumber">SERIAL NUMBER</Label>
                        <Input
                          type="text"
                          name="serialNumber"
                          placeholder="PLEASE ENTER SERIAL NUMBER"
                          id="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleInputChange}
                          invalid={!!errors.serialNumber}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.serialNumber}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetRef">ASSET RFQ NUMBER</Label>
                        <Input
                          type="text"
                          name="assetRef"
                          id="assetRef"
                          placeholder="PLEASE ENTER ASSET RFQ NUMBER"
                          value={formData.assetRef}
                          onChange={handleInputChange}
                          invalid={!!errors.assetRef}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.assetRef}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="diviceStatus">DIVICE STATUS</Label>
                        <Input
                          type="text"
                          name="diviceStatus"
                          placeholder="PLEASE ENTER DEVICE STATUS"
                          id="poDate"
                          value={formData.diviceStatus}
                          onChange={handleInputChange}
                          invalid={!!errors.diviceStatus}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.diviceStatus}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="processType">PROCESS TYPE</Label>
                        <Input
                          type="text"
                          name="processType"
                          placeholder="PLEASE ENTER PROCESS TYPE"
                          id="processType"
                          value={formData.processType}
                          onChange={handleInputChange}
                          invalid={!!errors.processType}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.processType}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="storageType">STORAGE TYPE</Label>
                        <Input
                          type="text"
                          name="storageType"
                          id="storageType"
                          placeholder="PLEASE ENTER STORAGE TYPE"
                          value={formData.storageType}
                          onChange={handleInputChange}
                          invalid={!!errors.storageType}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.storageType}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="ramType">RAM TYPE</Label>
                        <Input
                          type="text"
                          name="ramType"
                          id="ramType"
                          placeholder="PLEASE ENTER RAM TYPE"
                          value={formData.ramType}
                          onChange={handleInputChange}
                          invalid={!!errors.ramType}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.ramType}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="assetName">ASSET NAME</Label>
                        <Input
                          type="text"
                          name="assetName"
                          id="assetName"
                          placeholder="PLEASE ENTER ASSET NAME"
                          value={formData.assetName}
                          onChange={handleInputChange}
                          invalid={!!errors.assetName}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.assetName}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="assetRemarks">ASSET REMARKS </Label>
                        <Input
                          type="text"
                          name="assetRemarks"
                          id="assetRemarks"
                          placeholder="PLEASE ENTER ASSET REMARKS"
                          value={formData.assetRemarks}
                          onChange={handleInputChange}
                          invalid={!!errors.assetRemarks}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.assetRemarks}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="serviceVendor">SERVICE SUPPLIER</Label>
                        <Input
                          type="select"
                          name="serviceVendor"
                          id="serviceVendor"
                          value={formData.serviceVendor}
                          onChange={handleDropdownChange}
                          invalid={!!errors.serviceVendor}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT SERVICE VENDOR</option>
                          {vendor &&
                            vendor.map((item, index) => (
                              <option key={index} value={item.idven}>
                                {item.nmven}
                              </option>
                            ))}
                        </Input>
                        <span className="invalid-feedback">
                          {errors.serviceVendor}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="assetDescription">ASSET DESCRIPTION</Label>
                        <Input
                          type="text"
                          name="assetDescription"
                          id="assetDescription"
                          placeholder="PLEASE ENTER ASSET DESCRIPTION"
                          value={formData.assetDescription}
                          onChange={handleInputChange}
                          invalid={!!errors.assetDescription}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.assetDescription}
                        </span>
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="taggable">
                          TAGGABLE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="taggable"
                          id="taggable"
                          value={formData.taggable}
                          onChange={handleDropdownChange}
                          invalid={!!errors.taggable}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT TAGGABLE OR NOT</option>
                          <option value="Yes">YES</option>
                          <option value="No">NO</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.taggable}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="typeOfProc">
                          TYPE OF PROCUREMENT<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="typeOfProc"
                          id="typeOfProc"
                          value={formData.typeOfProc}
                          onChange={handleDropdownChange}
                          invalid={!!errors.typeOfProc}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT TYPE OF PROCUREMENT</option>
                          <option value="group1">OUTRIGHT PURCHASE</option>
                          <option value="group2">LOAN BASIC</option>
                          <option value="group3">ADD-ON</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.typeOfProc}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="amc">AMC/WARRENTY</Label>
                        <Input
                          type="select"
                          name="amc"
                          id="amc"
                          value={formData.amc}
                          onChange={handleDropdownChange}
                          invalid={!!errors.amc}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT AMC / WARRENTY</option>
                          <option value="no">NO</option>
                          <option value="amc">AMC</option>
                          <option value="warrenty">WARRENTY</option>
                        </Input>
                        <span className="invalid-feedback">{errors.amc}</span>
                      </Col>
                      <Col md={6}>
                        {showAmcDates && (
                          <>
                            <hr className="mb-0 mt-3" />
                            <Label for="amcStartDate">
                              AMC/WARRENTY START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcStartDate"
                              id="amcStartDate"
                              placeholder="PLEASE ENTER AMC/WARRENTY START DATE"
                              value={formData.amcStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcStartDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.amcStartDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <Col md={6}>
                        {showAmcDates && (
                          <>
                            <hr className="mb-0 mt-3" />
                            <Label for="amcEndDate">
                              AMC/WARRENTY END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="amcEndDate"
                              id="amcEndDate"
                              placeholder="PLEASE ENTER AMC/WARRENTY END DATE"
                              value={formData.amcEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.amcEndDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.amcEndDate}
                            </span>
                          </>
                        )}
                      </Col>
                      <hr className="mb-0 mt-3" />
                    </Row>
                    <Row className="mb-2">
                      <Col md={12}>
                        <Label for="leaseStatus">
                          LEASE STATUS<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="leaseStatus"
                          id="leaseStatus"
                          value={formData.leaseStatus}
                          onChange={handleDropdownChange}
                          invalid={!!errors.leaseStatus}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT LEASE STATUS</option>
                          <option value="Notunderlease">NOT UNDER LEASE</option>
                          <option value="underlease">UNDER LEASE</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.leaseStatus}
                        </span>
                      </Col>
                      {showLeaseDates && (
                        <>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="leaseStartDate">
                              LEASE START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseStartDate"
                              id="leaseStartDate"
                              placeholder="PLEASE ENTER LEASE START DATE"
                              value={formData.leaseStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseStartDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.leaseStartDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="leaseEndDate">
                              LEASE END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="leaseEndDate"
                              id="leaseEndDate"
                              placeholder="PLEASE ENTER LEASE END DATE"
                              value={formData.leaseEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.leaseEndDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.leaseEndDate}
                            </span>
                          </Col>
                        </>
                      )}
                      <hr className="mb-0 mt-3" />
                      <Col md={12}>
                        <Label for="license">
                          LICENSE<font color="red">*</font>
                        </Label>
                        <Input
                          type="select"
                          name="license"
                          id="license"
                          value={formData.license}
                          onChange={handleDropdownChange}
                          invalid={!!errors.license}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value="">SELECT LICENSE</option>
                          <option value="Yes">YES</option>
                          <option value="No">NO</option>
                        </Input>
                        <span className="invalid-feedback">
                          {errors.license}
                        </span>
                      </Col>
                      {showLicenseDropdown && formData.license === "Yes" && (
                        <>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="licenseStartDate">
                              LICENSE START DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="licenseStartDate"
                              id="licenseStartDate"
                              placeholder="PLEASE ENTER   LICENSE START DATE"
                              value={formData.licenseStartDate}
                              onChange={handleInputChange}
                              invalid={!!errors.licenseStartDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.licenseStartDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="licenseEndDate">
                              LICENSE END DATE<font color="red">*</font>
                            </Label>
                            <Input
                              type="date"
                              name="licenseEndDate"
                              id="licenseEndDate"
                              placeholder="PLEASE ENTER   LICENSE START DATE"
                              value={formData.licenseEndDate}
                              onChange={handleInputChange}
                              invalid={!!errors.licenseEndDate}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.licenseEndDate}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="policyNumber">
                              POLICY NUMBER<font color="red">*</font>
                            </Label>
                            <Input
                              type="text"
                              name="policyNumber"
                              id="policyNumber"
                              placeholder="PLEASE ENTER   POLICY NUMBER"
                              value={formData.policyNumber}
                              onChange={handleInputChange}
                              invalid={!!errors.policyNumber}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.policyNumber}
                            </span>
                          </Col>
                          <Col md={6}>
                            <hr className="mb-0 mt-3" />
                            <Label for="providerName">
                              PROVIDER NAME<font color="red">*</font>
                            </Label>
                            <Input
                              type="text"
                              name="providerName"
                              id="providerName"
                              placeholder="PLEASE ENTER PROVIDER NAME"
                              value={formData.providerName}
                              onChange={handleInputChange}
                              invalid={!!errors.providerName}
                              style={{ textTransform: "uppercase" }}
                            />
                            <span className="invalid-feedback">
                              {errors.providerName}
                            </span>
                          </Col>
                        </>
                      )}
                    </Row>

                    <Row className="mb-2">
                      <Col md={4}>
                        <Label for="additionalCost">ADDITIONAL COST</Label>
                        <Input
                          type="text"
                          name="additionalCost"
                          id="additionalCost"
                          placeholder="PLEASE ENTER ADDITIONAL COST"
                          value={formData.additionalCost}
                          onChange={handleInputChange}
                          invalid={!!errors.additionalCost}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.additionalCost}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="totalUnitPrice">TOTAL UNIT PRICE</Label>
                        <Input
                          type="text"
                          name="totalUnitPrice"
                          id="totalUnitPrice"
                          placeholder="PLEASE ENTER TOTAL UNIT PRICE"
                          value={formData.totalUnitPrice}
                          onChange={handleInputChange}
                          invalid={!!errors.totalUnitPrice}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.totalUnitPrice}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Label for="netValue">NET VALUE</Label>
                        <Input
                          type="text"
                          name="netValue"
                          id="netValue"
                          placeholder="PLEASE ENTER NET VALUE"
                          value={formData.netValue}
                          onChange={handleInputChange}
                          invalid={!!errors.netValue}
                          style={{ textTransform: "uppercase" }}
                        />
                        <span className="invalid-feedback">
                          {errors.netValue}
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
                            navigate("/all_asset");
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
              <Row className="justify-content-center">
                <Col xl={10}>
                  <div className="container pt-0">
                    <div className="row">
                      <div className="col-md-2">
                        <select className="form-select">
                          <option value="10">SHOW 10</option>
                          <option value="20">SHOW 20</option>
                          <option value="30">SHOW 30</option>
                          <option value="40">SHOW 40</option>
                          <option value="50">SHOW 50</option>
                        </select>
                      </div>

                      <div className="col-md-10 d-flex justify-content-end">
                        <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block">
                          <div className="position-relative">
                            <label
                              htmlFor="search-bar-0"
                              className="search-label"
                            >
                              <span id="search-bar-0-label" className="sr-only">
                                Search this table
                              </span>
                              <input
                                id="search-bar-0"
                                type="text"
                                className="form-control"
                                placeholder="SEARCH...."
                                value={globalFilter || ""}
                                onChange={e => setGlobalFilter(e.target.value)}
                              />
                              <i className="bx bx-search-alt search-icon"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive react-table">
                    <table
                      className="table table-bordered table-hover text-center"
                      {...getTableProps()}
                    >
                      <thead className="table-light table-nowrap">
                        {headerGroups.map(headerGroup => (
                          <tr
                            key={headerGroup.id}
                            {...headerGroup.getHeaderGroupProps()}
                          >
                            {headerGroup.headers.map(column => (
                              <th
                                key={column.id}
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps()
                                )}
                                style={{ width: column.width }}
                              >
                                <div className="d-flex justify-content-center">
                                  <span className="font-weight-bold">
                                    {column.render("Header")}
                                  </span>
                                  <span>
                                    {column.isSorted
                                      ? column.isSortedDesc
                                        ? " 🔽"
                                        : " 🔼"
                                      : ""}
                                  </span>
                                </div>
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {page.length > 0 ? (
                          page.map(row => {
                            prepareRow(row);
                            return (
                              <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                  <td
                                    key={cell.column.id}
                                    {...cell.getCellProps()}
                                  >
                                    {cell.column.id !== "id"
                                      ? // <Link to={`/modify_all_asset/${row.original.id}`}>
                                        //      {cell.render("Cell")}
                                        //    </Link>
                                        String(cell.value).toUpperCase()
                                      : String(cell.value).toUpperCase()}
                                  </td>
                                ))}
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td
                              colSpan={headerGroups[0].headers.length}
                              style={{ textAlign: "center" }}
                            >
                              {" "}
                              NO SEARCH RESULTS FOUND
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-2">
                        Showing {pageIndex + 1} of {pageCount} pages
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <div className="pagination justify-content-end pb-2 pe-2">
                        <button
                          className="btn btn-info"
                          disabled={pageIndex === 0}
                          onClick={() => gotoPage(0)}
                        >
                          FIRST
                        </button>
                        <button
                          className="btn btn-primary"
                          disabled={!canPreviousPage}
                          onClick={previousPage}
                        >
                          PRE
                        </button>
                        <span className="btn btn-light">{pageIndex + 1}</span>
                        <button
                          className="btn btn-primary"
                          disabled={!canNextPage}
                          onClick={nextPage}
                        >
                          NEXT
                        </button>
                        <button
                          className="btn btn-info"
                          disabled={pageIndex >= pageCount - 1}
                          onClick={() => gotoPage(pageCount - 1)}
                        >
                          LAST
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AllAssetUpdate;
