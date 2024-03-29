import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import classname from "classnames";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

//import withRouter
import withRouter from "../Common/withRouter";

//i18n
import { withTranslation } from "react-i18next";

const Navbar = (props: any) => {
  const path = useLocation();
  const [report, setreport] = useState<boolean>(false);
  const [transferreport, settransferreport] = useState<boolean>(false);

  const [pricing, setpricing] = useState<boolean>(false);
  const [app, setapp] = useState<boolean>(false);
  const [tag, settag] = useState<boolean>(false);
  const [email, setemail] = useState<boolean>(false);
  const [addtostore, setaddtostore] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  const [component, setcomponent] = useState<boolean>(false);
  const [form, setform] = useState<boolean>(false);
  const [table, settable] = useState<boolean>(false);
  const [chart, setchart] = useState<boolean>(false);
  const [icon, seticon] = useState<boolean>(false);
  const [map, setmap] = useState<boolean>(false);
  const [extra, setextra] = useState<boolean>(false);
  const [invoice, setinvoice] = useState<boolean>(false);
  const [timeline, settimeline] = useState<boolean>(false);
  const [auth, setauth] = useState<boolean>(false);
  const [authbasic, setauthbasic] = useState<boolean>(false);
  const [authcover, setauthcover] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const [dep, setdep] = useState<boolean>(false);
  const [depreciation, setdepreciation] = useState<boolean>(false);
  const [error1, seterror1] = useState<boolean>(false);
  const [error2, seterror2] = useState<boolean>(false);
  const [utility, setutility] = useState<boolean>(false);
  const [project, setproject] = useState<boolean>(false);
  const [dashoboard, setdashoboard] = useState<boolean>(false);
  const [config, setconfig] = useState<boolean>(false);
  const [elements, setelements] = useState<boolean>(false);
  const [intra, setintra] = useState<boolean>(false);
  const [inter, setinter] = useState<boolean>(false);

  // new page
  const [master, setMaster] = useState<boolean>(false);
  const [geograficalArea, setGeograficalArea] = useState<boolean>(false);
  const [categories, setCategoraries] = useState<boolean>(false);
  const [organizationH, setOrganizationH] = useState<boolean>(false);
  const [accsessM, setAccessM] = useState<boolean>(false);
  const [vendor, setVendor] = useState<boolean>(false);
  const [asset, setasset] = useState<boolean>(false);
  const [companysetup, setCompanysetup] = useState<boolean>(false);
  const [accessmangement, setAccesmangement] = useState<boolean>(false);
  const [configuration, setConfiguration] = useState<boolean>(false);
  const [transfer, settransfer] = useState<boolean>(false);
  const [materialMaster, setMaterial] = useState<boolean>(false);
  const [supplier, setSupplier] = useState<boolean>(false);
  const [applicationusability, setApplicationUsability] =
    useState<boolean>(false);

  const pathName = path.pathname;
  useEffect(() => {
    var matchingMenuItem = null;
    var ul: any = document.getElementById("navigation");
    var items: any = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item: any) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse className="navbar-collapse" id="topnav-menu-content">
              <ul className="navbar-nav">
                {/* MASTER MODULE */}

                {/* second menu */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setdashoboard(!master);
                    }}
                  >
                    <Icon name="copy" /> <span>{props.t("MASTER")}</span>{" "}
                    <div className="arrow-down"></div>
                  </Link>

                  <div className={classname("dropdown-menu", { show: master })}>
                    {/* 1st */}

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {props.t("Company-Repository")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: companysetup,
                        })}
                      >
                        <Link to="/formDetails" className="dropdown-item ">
                          {props.t("Registrations")}
                        </Link>

                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            onClick={e => {
                              e.preventDefault();
                            }}
                          >
                            {props.t("Geographical-Area")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: geograficalArea,
                            })}
                          >
                            <Link to="/entity" className="dropdown-item ">
                              {props.t("Entity")}
                            </Link>
                            <Link
                              to="/company_group"
                              className="dropdown-item "
                            >
                              {props.t("Country")}
                            </Link>
                            <Link to="/region" className="dropdown-item ">
                              {props.t("State")}
                            </Link>
                            {/* <Link
                              to="/region"
                              className="dropdown-item "
                            >
                              {props.t("State")}
                            </Link> */}
                            <Link to="/city" className="dropdown-item ">
                              {props.t("City")}
                            </Link>
                            <Link to="/branch" className="dropdown-item">
                              {props.t("Location")}
                            </Link>
                            <Link to="/plant" className="dropdown-item">
                              {props.t("Building")}
                            </Link>
                            <Link to="/floor" className="dropdown-item">
                              {props.t("Floor")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 1st */}
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {props.t(" Access-Management")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: accessmangement,
                        })}
                      >
                        <Link to="/department" className="dropdown-item ">
                          {props.t("Department")}
                        </Link>
                        <Link to="/designation" className="dropdown-item ">
                          {props.t("Designation")}
                        </Link>
                        <Link to="/emplyee_master" className="dropdown-item ">
                          {props.t("Employee-Master")}
                        </Link>
                        <Link to="/user_type" className="dropdown-item ">
                          {props.t("Usertype-Master")}
                        </Link>
                        <Link to="/user_permission" className="dropdown-item ">
                          {props.t("User-Permission")}
                        </Link>
                        <Link to="/user_login" className="dropdown-item">
                          {props.t("User-Login")}
                        </Link>
                      </div>
                    </div>

                    {/* 1st */}
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {props.t("Configuration-Master")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: configuration,
                        })}
                      >
                        {/* <Link
                          to="/doa_master"
                          className="dropdown-item "
                        >
                          {props.t("DOA-Master")}
                        </Link> */}
                        <Link
                          to="/deligation_master"
                          className="dropdown-item "
                        >
                          {props.t("Delegation-Master")}
                        </Link>
                        {/* <Link
                          to="/payment_method"
                          className="dropdown-item "
                        >
                          {props.t("Payment-Method")}
                        </Link>
                        <Link
                          to="/payment_term"
                          className="dropdown-item "
                        >
                          {props.t("Payment-Term")}
                        </Link>
                        <Link
                          to="/bankmaster"
                          className="dropdown-item "
                        >
                          {props.t("Bank-Master")}
                        </Link> */}
                        <Link to="/tax_details" className="dropdown-item ">
                          {props.t("Tax-Configuration")}
                        </Link>
                        <Link to="/financial_year" className="dropdown-item ">
                          {props.t("Financial-Year")}
                        </Link>
                        <Link to="/add_currency" className="dropdown-item ">
                          {props.t("Currency-Master")}
                        </Link>
                        <Link
                          to="/terms_and_condition"
                          className="dropdown-item "
                        >
                          {props.t("Terms & Conditions")}
                        </Link>
                      </div>
                    </div>
                    {/* 1ST */}

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {props.t("Material-Master")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: materialMaster,
                        })}
                      >
                        <Link to="/create_catogries" className="dropdown-item ">
                          {props.t("Material-Group")}
                        </Link>
                        <Link
                          to="/create_subcatogries"
                          className="dropdown-item "
                        >
                          {props.t("Material-Sub-Group")}
                        </Link>
                        <Link to="/unit" className="dropdown-item ">
                          {props.t("Uom-Master")}
                        </Link>
                        <Link to="/create_items" className="dropdown-item ">
                          {props.t("Material")}
                        </Link>

                        <Link to="/uom_conversion" className="dropdown-item ">
                          {props.t("Uom-Conversion")}
                        </Link>
                      </div>
                    </div>
                    {/* 1st */}

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        {props.t("Supplier-Master")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: supplier,
                        })}
                      >
                        <Link to="/create_vendor" className="dropdown-item ">
                          {props.t("Create-Supplier")}
                        </Link>
                        <Link to="/vendor_approval" className="dropdown-item ">
                          {props.t("Supplier-Approval L1")}
                        </Link>
                        <Link
                          to="/approved_vendor_list"
                          className="dropdown-item "
                        >
                          {props.t("Approved-Supplier-List ")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* ASSET MASTER */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setasset(!asset);
                    }}
                  >
                    <Icon name="database" /> <span>{props.t("ASSET")}</span>
                    <div className="arrow-down"></div>
                  </Link>

                  <div className={classname("dropdown-menu")}>
                    <Link to="/bills_entry" className="dropdown-item">
                      {props.t("Bills Entry")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setaddtostore(!addtostore);
                        }}
                      >
                        {props.t("Add-To-Store")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: addtostore,
                        })}
                      >
                        <Link to="/via_bills" className="dropdown-item">
                          {props.t("Via-Bill")}
                        </Link>
                        {/* <Link to="/read-email" className="dropdown-item">
                          {props.t("Without-Bill")}
                        </Link> */}
                        <Link to="/add_new_asset" className="dropdown-item">
                          {props.t("Add-New-Asset")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settag(!tag);
                        }}
                      >
                        {props.t("Tag-Printing")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: tag })}
                      >
                        <Link to="/barcode" className="dropdown-item">
                          {props.t("Barcode")}
                        </Link>
                        <Link to="/qr_code" className="dropdown-item">
                          {props.t("QR-Code")}
                        </Link>
                      </div>
                    </div>
                    <Link to="/all_asset" className="dropdown-item">
                      {props.t("All-Assets")}
                    </Link>
                    <Link to="/bulk_asset_allocate" className="dropdown-item">
                      {props.t("Bulk Asset-Allocate")}
                    </Link>
                    <Link to="/deallocate" className="dropdown-item">
                      {props.t("De-Allocate")}
                    </Link>
                    <Link to="/damaged_asset" className="dropdown-item">
                      {props.t("Damaged Asset")}
                    </Link>
                    <Link to="/approve_damaged_asset" className="dropdown-item">
                      {props.t("Approve_Damaged_Asset")}
                    </Link>
                    <Link to="/link" className="dropdown-item">
                      {props.t("Link Software/Accessories")}
                    </Link>{" "}
                    <Link to="/delink" className="dropdown-item">
                      {props.t("De-Link Software/Accessories")}
                    </Link>{" "}
                    <Link to="/asset_maintenance" className="dropdown-item">
                      {props.t("Asset Maintenance")}
                    </Link>
                  </div>
                </li>

                {/* TRANSFER REQUEST */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      settransfer(!transfer);
                    }}
                  >
                    <Icon name="repeat" /> <span>{props.t("TRANSFER")}</span>
                    <div className="arrow-down"></div>
                  </Link>

                  <div className={classname("dropdown-menu")}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setintra(!intra);
                        }}
                      >
                        {props.t("Intra-Transfer")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: addtostore,
                        })}
                      >
                        <Link
                          to="/intra_transfer_request"
                          className="dropdown-item"
                        >
                          {props.t("Transfer-Request")}
                        </Link>
                        <Link
                          to="/intra_transfer_approval"
                          className="dropdown-item"
                        >
                          {props.t("Transfer-Approval")}
                        </Link>
                        <Link to="/intra_transfer" className="dropdown-item">
                          {props.t("Transfer")}
                        </Link>
                        <Link
                          to="/intra_recieve_assets"
                          className="dropdown-item"
                        >
                          {props.t("Intra-Receive-Assets")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setinter(!inter);
                        }}
                      >
                        {props.t("Inter-Transfer")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: tag })}
                      >
                        <Link
                          to="/inter_transfer_request"
                          className="dropdown-item"
                        >
                          {props.t("Transfer-Request")}
                        </Link>
                        <Link
                          to="/inter_transfer_approval"
                          className="dropdown-item"
                        >
                          {props.t("Transfer-Approval")}
                        </Link>
                        <Link to="/inter_transfer" className="dropdown-item">
                          {props.t("Transfer")}
                        </Link>
                        <Link to="/print_gate_pass" className="dropdown-item">
                          {props.t("Print-Gate-Pass")}
                        </Link>
                        <Link
                          to="/inter_recieve_assets"
                          className="dropdown-item"
                        >
                          {props.t("Inter-Receive-Assets")}
                        </Link>
                        <Link
                          to="/inter_return_acknowledge"
                          className="dropdown-item"
                        >
                          {props.t("Return-Acknowledge")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ANALYTICS/REPORTS*/}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setreport(!report);
                    }}
                  >
                    <Icon name="folder-plus" />{" "}
                    <span>{props.t("ANALYTICS / REPORTS")}</span>
                    <div className="arrow-down"></div>
                  </Link>

                  <div className={classname("dropdown-menu")}>
                    <Link to="/master_report" className="dropdown-item">
                      {props.t("Master Report")}
                    </Link>
                    <Link to="/asset_status_report" className="dropdown-item">
                      {props.t("Asset Status Report")}
                    </Link>
                    <Link to="/employee_wise_report" className="dropdown-item">
                      {props.t("Employee Wise Report")}
                    </Link>
                    <Link to="/client_wise_report" className="dropdown-item">
                      {props.t("Client Wise Report")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settransferreport(!transferreport);
                        }}
                      >
                        {props.t("Transfer Report")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: transferreport,
                        })}
                      >
                        <Link
                          to="/transfer_request_report"
                          className="dropdown-item"
                        >
                          {props.t("Transfer Request Report")}
                        </Link>
                        <Link
                          to="/transfer_approval_report"
                          className="dropdown-item"
                        >
                          {props.t("Transfer Approval Report")}
                        </Link>
                        <Link to="/transfer_report" className="dropdown-item">
                          {props.t("Transfer Report")}
                        </Link>
                        <Link
                          to="/transfer_recieve_report"
                          className="dropdown-item"
                        >
                          {props.t("Transfer Recieve Report")}
                        </Link>
                      </div>
                    </div>

                    <Link
                      to="/accessory_history_report"
                      className="dropdown-item"
                    >
                      {props.t("Accessory/Software History Report")}
                    </Link>
                    <Link to="/asset_history_report" className="dropdown-item">
                      {props.t("Asset History Report")}
                    </Link>
                    <Link to="/amc_warrenty_report" className="dropdown-item">
                      {props.t("AMC/Warrenty")}
                    </Link>
                    <Link to="/lease_report" className="dropdown-item">
                      {props.t("Lease Report")}
                    </Link>
                  </div>
                </li>
                {/* DEPRECIATION MASTER */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setdepreciation(!depreciation);
                    }}
                  >
                    <Icon name="layout" />{" "}
                    <span>{props.t("DEPRECIATION")}</span>
                    <div className="arrow-down"></div>
                  </Link>

                  <div className={classname("dropdown-menu")}>
                    <Link to="/depreciation_master" className="dropdown-item">
                      {props.t("Depreciation Master")}
                    </Link>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setdep(!dep);
                        }}
                      >
                        {props.t("Depreciation")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: dep,
                        })}
                      >
                        <Link
                          to="/yearly_depreciation"
                          className="dropdown-item"
                        >
                          {props.t("Yearly-Depreciation")}
                        </Link>
                        <Link
                          to="/monthly_depreciation"
                          className="dropdown-item"
                        >
                          {props.t("Monthly-Depreciation")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setconfig(!config);
                        }}
                      >
                        {props.t("Depreciation Config")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: config,
                        })}
                      >
                        <Link to="/ca_yearly" className="dropdown-item">
                          {props.t("CA-Yearly")}
                        </Link>
                        <Link to="/it_act" className="dropdown-item">
                          {props.t("IT-Act")}
                        </Link>
                      </div>
                    </div>
                    <Link to="/addition_Deletion" className="dropdown-item">
                      {props.t("Addition/Deletion")}
                    </Link>
                  </div>
                </li>

                {/* 
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setdashoboard(!dashoboard);
                    }}
                  >
                    <Icon name="monitor" />{" "}
                    <span>{props.t("Dashboards")}</span>{" "}
                    <div className="arrow-down"></div>
                  </Link>

                  <div
                    className={classname("dropdown-menu", {
                      show: timeline,
                    })}
                  >
                    <Link
                      to="timeline-center"
                      className="dropdown-item"
                      data-key="t-center-view"
                    >
                      {props.t("Center View")}
                    </Link>
                    <Link
                      to="timeline-left"
                      className="dropdown-item"
                      data-key="t-left-view"
                    >
                      {props.t("Left View")}
                    </Link>
                    <Link
                      to="timeline-horizontal"
                      className="dropdown-item"
                      data-key="t-horizontal-view"
                    >
                      {props.t("Horizontal View")}
                    </Link>
                  </div>

                </li>




                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setelements(!elements);
                    }}
                  >
                    <Icon name="package" />{" "}
                    <span>{props.t("Elements")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl",
                    )}
                  >
                    <div className="ps-2 p-lg-0">
                      <Row>
                        <Col lg={8}>
                          <div>
                            <div className="menu-title">
                              {props.t("Components")}
                            </div>
                            <Row>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="/ui-alerts"
                                    className="dropdown-item"
                                  >
                                    {props.t("Alerts")}
                                  </Link>
                                  <Link
                                    to="/ui-buttons"
                                    className="dropdown-item"
                                  >
                                    {props.t("Buttons")}
                                  </Link>
                                  <Link
                                    to="/ui-cards"
                                    className="dropdown-item"
                                  >
                                    {props.t("Cards")}
                                  </Link>
                                  <Link
                                    to="/ui-carousel"
                                    className="dropdown-item"
                                  >
                                    {props.t("Carousel")}
                                  </Link>
                                  <Link
                                    to="/ui-dropdowns"
                                    className="dropdown-item"
                                  >
                                    {props.t("Dropdowns")}
                                  </Link>
                                  <Link to="/ui-grid" className="dropdown-item">
                                    {props.t("Grid")}
                                  </Link>
                                  <Link
                                    to="/ui-images"
                                    className="dropdown-item"
                                  >
                                    {props.t("Images")}
                                  </Link>
                                  <Link
                                    to="/ui-modals"
                                    className="dropdown-item"
                                  >
                                    {props.t("Modals")}
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="/ui-placeholders"
                                    className="dropdown-item"
                                  >
                                    {props.t("Placeholders")}
                                  </Link>
                                  <Link
                                    to="/ui-progressbars"
                                    className="dropdown-item"
                                  >
                                    {props.t("Progress Bars")}
                                  </Link>
                                  <Link
                                    to="/ui-tabs-accordions"
                                    className="dropdown-item"
                                  >
                                    {props.t("Tabs & Accordions")}
                                  </Link>
                                  <Link
                                    to="/ui-typography"
                                    className="dropdown-item"
                                  >
                                    {props.t("Typography")}
                                  </Link>
                                  <Link
                                    to="/ui-video"
                                    className="dropdown-item"
                                  >
                                    {props.t("Video")}
                                  </Link>
                                  <Link
                                    to="/ui-general"
                                    className="dropdown-item"
                                  >
                                    {props.t("General")}
                                  </Link>
                                  <Link
                                    to="/ui-colors"
                                    className="dropdown-item"
                                  >
                                    {props.t("Colors")}
                                  </Link>
                                  <Link
                                    to="/ui-utilities"
                                    className="dropdown-item"
                                  >
                                    {props.t("Utilities")}
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <div className="menu-title">
                              {props.t("Extended")}
                            </div>
                            <Link
                              to="/extended-lightbox"
                              className="dropdown-item"
                            >
                              {props.t("Lightbox")}
                            </Link>
                            <Link
                              to="/extended-rangeslider"
                              className="dropdown-item"
                            >
                              {props.t("Range Slider")}
                            </Link>
                            <Link
                              to="/extended-rating"
                              className="dropdown-item"
                            >
                              {props.t("Rating")}
                            </Link>
                            <Link
                              to="/extended-notifications"
                              className="dropdown-item"
                            >
                              {props.t("Notifications")}
                            </Link>
                            <Link
                              to="/extended-swiperslider"
                              className="dropdown-item"
                            >
                              {props.t("Swiper Slider")}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                  >
                    <Icon name="grid" />{" "}
                    <span>{props.t("Apps")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu")}>
                    <Link to="/calendar" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <Link to="/chat" className="dropdown-item">
                      {props.t("Chat")}
                    </Link>
                    <Link to="/file-manager" className="dropdown-item">
                      {props.t("File Manager")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/inbox" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="/read-email" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                      </div>
                    </div>


                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcontact(!contact);
                        }}
                      >
                        {props.t("Contacts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: contact,
                        })}
                      >
                        <Link to="/user-grid" className="dropdown-item">
                          {props.t("User Grid")}
                        </Link>
                        <Link to="/user-list" className="dropdown-item">
                          {props.t("User List")}
                        </Link>
                        <Link to="/user-settings" className="dropdown-item">
                          {props.t("User Settings")}
                        </Link>
                      </div>
                    </div>
                    <Link to="/gallery" className="dropdown-item">
                      Gallery
                    </Link>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setproject(!project);
                        }}
                      >
                        {props.t("Projects")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: project,
                        })}
                      >
                        <Link to="/projects-grid" className="dropdown-item">
                          {props.t("Projects Grid")}
                        </Link>
                        <Link to="/projects-list" className="dropdown-item">
                          {props.t("Projects List")}
                        </Link>
                        <Link to="/projects-overview" className="dropdown-item">
                          {props.t("Project Overview")}
                        </Link>
                        <Link to="/projects-create" className="dropdown-item">
                          {props.t("Create New")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <Icon name="layers" />{" "}
                    <span>{props.t("Components")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu")}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="/form-elements" className="dropdown-item">
                          {props.t("Basic Elements")}
                        </Link>
                        <Link to="/form-validation" className="dropdown-item">
                          {props.t("Validation")}
                        </Link>
                        <Link to="/form-advanced" className="dropdown-item">
                          {props.t("Advanced Plugins")}
                        </Link>
                        <Link to="/form-editors" className="dropdown-item">
                          {props.t("Editors")}
                        </Link>
                        <Link to="/form-uploads" className="dropdown-item">
                          {props.t("File Upload")}{" "}
                        </Link>
                        <Link to="/form-wizard" className="dropdown-item">
                          {props.t("Wizard")}
                        </Link>
                        <Link to="/form-mask" className="dropdown-item">
                          {props.t("Form Mask")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {props.t("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="/tables-basic" className="dropdown-item">
                          {props.t("Bootstrap Basic")}
                        </Link>
                        <Link to="/tables-advanced" className="dropdown-item">
                          {props.t("Advance Tables")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setchart(!chart);
                        }}
                      >
                        {props.t("Apex Charts")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="/charts-line" className="dropdown-item">
                          {" "}
                          {props.t("Line")}
                        </Link>
                        <Link to="/charts-area" className="dropdown-item">
                          {" "}
                          {props.t("Area")}
                        </Link>
                        <Link to="/charts-column" className="dropdown-item">
                          {" "}
                          {props.t("Column")}
                        </Link>
                        <Link to="/charts-bar" className="dropdown-item">
                          {" "}
                          {props.t("Bar")}
                        </Link>
                        <Link to="/charts-mixed" className="dropdown-item">
                          {" "}
                          {props.t("Mixed")}
                        </Link>
                        <Link to="/charts-timeline" className="dropdown-item">
                          {" "}
                          {props.t("Timeline")}
                        </Link>
                        <Link
                          to="/charts-candlestick"
                          className="dropdown-item"
                        >
                          {" "}
                          {props.t("Candlestick")}
                        </Link>
                        <Link to="/charts-boxplot" className="dropdown-item">
                          {" "}
                          {props.t("Boxplot")}
                        </Link>
                        <Link to="/charts-bubble" className="dropdown-item">
                          {" "}
                          {props.t("Bubble")}
                        </Link>
                        <Link to="/charts-scatter" className="dropdown-item">
                          {" "}
                          {props.t("Scatter")}
                        </Link>
                        <Link to="/charts-heatmap" className="dropdown-item">
                          {" "}
                          {props.t("Heatmap")}
                        </Link>
                        <Link to="/charts-treemap" className="dropdown-item">
                          {" "}
                          {props.t("Treemap")}
                        </Link>
                        <Link to="/charts-pie" className="dropdown-item">
                          {" "}
                          {props.t("Pie")}
                        </Link>
                        <Link to="/charts-radialbar" className="dropdown-item">
                          {" "}
                          {props.t("Radialbar")}
                        </Link>
                        <Link to="/charts-radar" className="dropdown-item">
                          {" "}
                          {props.t("Radar")}
                        </Link>
                        <Link to="/charts-polararea" className="dropdown-item">
                          {" "}
                          {props.t("Polararea")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          seticon(!icon);
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link to="/icons-unicons" className="dropdown-item">
                          {props.t("Unicons")}
                        </Link>
                        <Link
                          to="/icons-feathericons"
                          className="dropdown-item"
                        >
                          {props.t("Feather icons")}
                        </Link>
                        <Link to="/icons-boxicons" className="dropdown-item">
                          {props.t("Boxicons")}
                        </Link>
                        <Link
                          to="/icons-materialdesign"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="/icons-fontawesome" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setmap(!map);
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="/maps-google" className="dropdown-item">
                          {props.t("Google")}{" "}
                        </Link>
                        <Link to="/maps-vector" className="dropdown-item">
                          {props.t("Vector")}{" "}
                        </Link>
                        <Link to="/maps-leaflet" className="dropdown-item">
                          {props.t("Leaflet")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <Icon name="file" />{" "}
                    <span>{props.t("Extra pages")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu")}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="nav-link dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setpricing(!pricing);
                        }}
                      >
                        <span>{props.t("Pricing")} </span>
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: pricing,
                        })}
                      >
                        <Link to="/pricing-basic" className="dropdown-item">
                          {props.t("Basic")}
                        </Link>
                        <Link to="/pricing-table" className="dropdown-item">
                          {props.t("table")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setinvoice(!invoice);
                        }}
                      >
                        {props.t("Invoices")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: invoice,
                        })}
                      >
                        <Link to="/invoices-list" className="dropdown-item">
                          {props.t("Invoice List")}
                        </Link>
                        <Link to="/invoices-detail" className="dropdown-item">
                          {props.t("Invoice Detail")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-timeline"
                        onClick={e => {
                          e.preventDefault();
                          settimeline(!timeline);
                        }}
                      >
                        <span data-key="t-timeline">{props.t("Timeline")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: timeline,
                        })}
                      >
                        <Link
                          to="timeline-center"
                          className="dropdown-item"
                          data-key="t-center-view"
                        >
                          {props.t("Center View")}
                        </Link>
                        <Link
                          to="timeline-left"
                          className="dropdown-item"
                          data-key="t-left-view"
                        >
                          {props.t("Left View")}
                        </Link>
                        <Link
                          to="timeline-horizontal"
                          className="dropdown-item"
                          data-key="t-horizontal-view"
                        >
                          {props.t("Horizontal View")}
                        </Link>
                      </div>
                    </div>




                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-auth"
                        onClick={e => {
                          e.preventDefault();
                          setauth(!auth);
                        }}
                      >
                        <span data-key="t-authentication">{props.t("Authentication")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: auth })}>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-auth-basic"
                            onClick={e => {
                              e.preventDefault();
                              setauthbasic(!authbasic);
                            }}
                          >
                            <span data-key="t-basic">{props.t("Basic")}</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            aria-labelledby="topnav-auth-basic"
                            className={classname("dropdown-menu", { show: authbasic })}
                          >
                            <Link
                              to="auth-signin-basic"
                              className="dropdown-item"
                              data-key="t-signin"
                            >
                              {props.t("Sign In")}
                            </Link>
                            <Link
                              to="auth-signup-basic"
                              className="dropdown-item"
                              data-key="t-signup"
                            >
                              {props.t("Sign Up")}
                            </Link>
                            <Link
                              to="auth-signout-basic"
                              className="dropdown-item"
                              data-key="t-signout"
                            >
                              {props.t("Sign Out")}
                            </Link>
                            <Link
                              to="auth-lockscreen-basic"
                              className="dropdown-item"
                              data-key="t-lock-screen"
                            >
                              {props.t("Lock Screen")}
                            </Link>
                            <Link
                              to="auth-forgotpassword-basic"
                              className="dropdown-item"
                              data-key="t-forgot-password"
                            >
                              {props.t("Forgot Password")}
                            </Link>
                            <Link
                              to="auth-resetpassword-basic"
                              className="dropdown-item"
                              data-key="t-reset-password"
                            >
                              {props.t("Reset Password")}
                            </Link>
                            <Link
                              to="auth-emailverification-basic"
                              className="dropdown-item"
                              data-key="t-email-verification"
                            >
                              {props.t("Email Verification")}
                            </Link>
                            <Link
                              to="auth-2step-basic"
                              className="dropdown-item"
                              data-key="t-2step-verification"
                            >
                              {props.t("2-step Verification")}
                            </Link>
                            <Link
                              to="auth-thankyou-basic"
                              className="dropdown-item"
                              data-key="t-thankyou"
                            >
                              {props.t("Thank you")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-auth-cover"
                            onClick={e => {
                              e.preventDefault();
                              setauthcover(!authcover);
                            }}
                          >
                            <span data-key="t-cover">{props.t("Cover")}</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            aria-labelledby="topnav-auth-cover"
                            className={classname("dropdown-menu", { show: authcover })}
                          >
                            <Link
                              to="auth-signin-cover"
                              className="dropdown-item"
                              data-key="t-signin"
                            >
                              {props.t("Sign In")}
                            </Link>
                            <Link
                              to="auth-signup-cover"
                              className="dropdown-item"
                              data-key="t-signup"
                            >
                              {props.t("Sign Up")}
                            </Link>
                            <Link
                              to="auth-signout-cover"
                              className="dropdown-item"
                              data-key="t-signout"
                            >
                              {props.t("Sign Out")}
                            </Link>
                            <Link
                              to="auth-lockscreen-cover"
                              className="dropdown-item"
                              data-key="t-lock-screen"
                            >
                              {props.t("Lock Screen")}
                            </Link>
                            <Link
                              to="auth-forgotpassword-cover"
                              className="dropdown-item"
                              data-key="t-forgot-password"
                            >
                              {props.t("Forgot Password")}
                            </Link>
                            <Link
                              to="auth-resetpassword-cover"
                              className="dropdown-item"
                              data-key="t-reset-password"
                            >
                              {props.t("Reset Password")}
                            </Link>
                            <Link
                              to="auth-emailverification-cover"
                              className="dropdown-item"
                              data-key="t-email-verification"
                            >
                              {props.t("Email Verification")}
                            </Link>
                            <Link
                              to="auth-2step-cover"
                              className="dropdown-item"
                              data-key="t-2step-verification"
                            >
                              {props.t("2-step Verification")}
                            </Link>
                            <Link
                              to="auth-thankyou-cover"
                              className="dropdown-item"
                              data-key="t-thankyou"
                            >
                              {props.t("Thank you")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-error"
                        onClick={e => {
                          e.preventDefault();
                          seterror(!error);
                        }}
                      >
                        <span data-key="t-error-pages">{props.t("Error Pages")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: error })}>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-404"
                            onClick={e => {
                              e.preventDefault();
                              seterror1(!error1);
                            }}
                          >
                            <span>{props.t("404")}</span> <div className="arrow-down"></div>
                          </Link>
                          <div className={classname("dropdown-menu", { show: error1, })}>
                            <Link
                              to="error-404-basic"
                              className="dropdown-item"
                              data-key="t-basic"
                            >
                              {props.t("Basic")}
                            </Link>
                            <Link
                              to="error-404-cover"
                              className="dropdown-item"
                              data-key="t-cover"
                            >
                              {props.t("Cover")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-500"
                            onClick={e => {
                              e.preventDefault();
                              seterror2(!error2);
                            }}
                          >
                            <span>{props.t("500")}</span> <div className="arrow-down"></div>
                          </Link>
                          <div className={classname("dropdown-menu", { show: error2, })}>
                            <Link
                              to="error-500-basic"
                              className="dropdown-item"
                              data-key="t-basic"
                            >
                              {props.t("Basic")}
                            </Link>
                            <Link
                              to="error-500-cover"
                              className="dropdown-item"
                              data-key="t-cover"
                            >
                              {props.t("Cover")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-utility"
                        onClick={e => {
                          e.preventDefault();
                          setutility(!utility);
                        }}
                      >
                        <span data-key="t-utility">{props.t("Utility")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: utility, })}>
                        <Link
                          to="pages-starter"
                          className="dropdown-item"
                          data-key="t-starter-page"
                        >
                          {props.t("Starter Page")}
                        </Link>
                        <Link
                          to="pages-profile"
                          className="dropdown-item"
                          data-key="t-profile"
                        >
                          {props.t("Profile")}
                        </Link>
                        <Link
                          to="pages-maintenance"
                          className="dropdown-item"
                          data-key="t-maintenance"
                        >
                          {props.t("Maintenance")}
                        </Link>
                        <Link
                          to="pages-comingsoon"
                          className="dropdown-item"
                          data-key="t-coming-soon"
                        >
                          {props.t("Coming Soon")}
                        </Link>
                        <Link
                          to="pages-faqs"
                          className="dropdown-item"
                          data-key="t-faqs"
                        >
                          {props.t("FAQs")}
                        </Link>
                      </div>
                    </div>

                  </div>
                </li> */}
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(withRouter(Navbar));
