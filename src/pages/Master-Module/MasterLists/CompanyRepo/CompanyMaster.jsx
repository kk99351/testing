import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { useState } from "react";
import {
  Col,
  Input,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import axios from "axios";
import styles from "../../../../assets/cssFiles/formPlaceholder.module.css";

const CompanyMaster = props => {
  const [errors, setErrors] = useState({});
  const [companyFormData, setCompanyFormData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [logo, setLogo] = useState("");

  const { fun } = { ...props };
  const validatePAN = value => {
    return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value);
  };
  const validateForm = () => {
    let newErrors = {};

    const isNullOrUndefinedOrEmpty = value =>
      value === null || value === undefined || value === "";

    if (isNullOrUndefinedOrEmpty(formData.email) || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (isNullOrUndefinedOrEmpty(formData.nmCom) || !formData.nmCom.trim()) {
      newErrors.companyname = "company name is required";
    }
    if (isNullOrUndefinedOrEmpty(formData.add1) || !formData.add1.trim()) {
      newErrors.address1 = "address 1 is required";
    }
    if (isNullOrUndefinedOrEmpty(formData.city) || !formData.city.trim()) {
      newErrors.city = "city is required";
    }
    if (isNullOrUndefinedOrEmpty(formData.add2) || !formData.add2.trim()) {
      newErrors.address2 = "address 2 is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.nmState) ||
      !formData.nmState.trim()
    ) {
      newErrors.state = "state is required";
    }
    if (isNullOrUndefinedOrEmpty(formData.pan) || !formData.pan.trim()) {
      newErrors.pan = "pan is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.country) ||
      !formData.country.trim()
    ) {
      newErrors.country = "country is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.nmContact) ||
      !formData.nmContact.trim()
    ) {
      newErrors.contactperson = "contact person is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.GST) ||
      !String(formData.GST).trim()
    ) {
      newErrors.gst = "gst is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.cin) ||
      !String(formData.cin).trim()
    ) {
      newErrors.cin = "cin is required";
    }
    if (
      isNullOrUndefinedOrEmpty(formData.assetPrefix) ||
      !formData.assetPrefix.trim()
    ) {
      newErrors.asetprefix = "asset is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 console.log(process.env.BASE_API_URL);
  const [formData, setFormData] = useState({
    idCom: "",
    nmCom: "",
    add1: "",
    city: "",
    add2: "",
    nmState: "",
    mailid: "",
    pin: "",
    phone: "",
    country: "",
    GST: "",
    cin: "",
    nmContact: "",
    fax: "",
    pan: "",
    licenseNo: "",
    assetPrefix: "",
    licenseDt: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.BASE_API_URL}/companyform`)
      .then(response => {
        setCompanyFormData(response[0]);
        setFormData(response[0]);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "pan") {
      // PAN format validation
      const newValue = value.toUpperCase().replace(/[^A-Z\d]/g, "");
      
      if (
        (newValue.length <= 5 && /^[A-Z]*$/.test(newValue)) ||
      (newValue.length > 5 &&
        newValue.length <= 9 &&
        /^\d*$/.test(newValue.substr(5))) ||
      (newValue.length === 10 && /^[A-Z]$/.test(newValue.substr(9)))
      ) {
        setFormData({
          ...formData,
          [name]: newValue,
        });
      }
    } else {
      // For other fields, simply update the state
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      // setLoading(true);
      // console.log(formData);
      // await axios
      //   .put(`http://localhost:3000/companyform/1`, formData)
      //   .then(response => {
      //     console.log(response);
      //     setLoading(false);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     setError(true);
      //   });
      alert("Form Validated and submited");
    } else {
      alert("Please fill all the Details");
    }
  };

  return (
    <React.Fragment>
      <div>
        <MetaTags>
          <title>HCS Technology Private Limited</title>
        </MetaTags>

        <div className="container">
          <Card
            className="border"
            style={{ boxShadow: "1px 1px 8px 1px gray" }}
          >
            <CardHeader>
              <h3 className="d-flex justify-content-center">
                FILL YOUR COMPANY DETAILS
              </h3>
            </CardHeader>

            <CardBody>
              <Row>
                <Col xl={6}>
                  <div>
                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          placeholder=""
                          name="nmCom"
                          value={formData.nmCom}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.companyname ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                          COMPANY NAME <font color="red">*</font>
                        </span>
                        {errors.companyname && (
                          <div className="text-danger">{errors.companyame}</div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          placeholder=" "
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.city ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                          CITY NAME<font color="red">*</font>
                        </span>
                        {errors.city && (
                          <div className="text-danger">{errors.city}</div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          placeholder=" "
                          name="nmState"
                          value={formData.nmState}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.state ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                          STATE NAME<font color="red">*</font>
                        </span>
                        {errors.state && (
                          <div className="text-danger">{errors.state}</div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="number"
                          placeholder=" "
                          name="pin"
                          value={formData.pin}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.pin ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>PIN</span>
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          placeholder=" "
                          name="fax"
                          value={formData.fax}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.fax ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>FAX</span>
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          placeholder=""
                          name="nmContact"
                          value={formData.nmContact}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.contactperson ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                          CONTACT PERSON<font color="red">*</font>
                        </span>
                        {errors.contactperson && (
                          <div className="text-danger">
                            {errors.contactperson}
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        {/* <Input
                          type="text"
                          placeholder=" "
                          name="pan"
                          value={formData.pan}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.pan ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                        PAN NUMBER<font color="red">*</font>
                        </span>
                        {errors.pan && (
                          <div className="text-danger">{errors.pan}</div>
                        )} */}

                        <Input
                          type="text"
                          placeholder=""
                          maxLength={10}
                          className={`${styles.input} ${
                            errors.pan ? "is-invalid" : ""
                          }`}
                          id="pan"
                          name="pan"
                          value={formData.pan}
                          onChange={handleChange}
                        />
                        <span className={styles["placeholder-label"]}>
                          PAN NUMBER<font color="red">*</font>
                        </span>
                        <div className="invalid-feedback">
                          PAN NUMBER MUST BE IN A CORRECT FORMAT
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Col md={8} className={styles.inputContainer}>
                        <Input
                          type="text"
                          name="assetPrefix"
                          placeholder=" "
                          value={formData.assetPrefix}
                          onChange={handleChange}
                          className={`${styles.input} ${
                            errors.asetprefix ? "is-invalid" : ""
                          }`}
                        />
                        <span className={styles["placeholder-label"]}>
                          ASET-FIX<font color="red">*</font>
                        </span>
                        {errors.asetprefix && (
                          <div className="text-danger">{errors.asetprefix}</div>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Col>

                {/* 2nd colunm */}

                <div className="col-xl-6">
                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="text"
                        placeholder=" "
                        name="add1"
                        value={formData.add1}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.address1 ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        ADDRESS 1<font color="red">*</font>
                      </span>
                      {errors.address1 && (
                        <div className="text-danger">{errors.address1}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="text"
                        placeholder=" "
                        name="add2"
                        value={formData.add2}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.address2 ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        ADDRESS 2<font color="red">*</font>
                      </span>
                      {errors.address2 && (
                        <div className="text-danger">{errors.address2}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="email"
                        placeholder=" "
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        EMAIL<font color="red">*</font>
                      </span>
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="text"
                        placeholder=""
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.country ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        COUNTRY<font color="red">*</font>
                      </span>
                      {errors.country && (
                        <div className="text-danger">{errors.country}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="number"
                        value={formData.phone}
                        name="phone"
                        onChange={handleChange}
                        placeholder=" "
                        className={styles.input}
                      />
                      <span className={styles["placeholder-label"]}>PHONE</span>
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="number"
                        placeholder=""
                        name="GST"
                        value={formData.GST}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.gst ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        GST NUMBER<font color="red">*</font>
                      </span>
                      {errors.gst && (
                        <div className="text-danger">{errors.gst}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="number"
                        placeholder=""
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.cin ? "is-invalid" : ""
                        }`}
                      />
                      <span className={styles["placeholder-label"]}>
                        CIN<font color="red">*</font>
                      </span>
                      {errors.cin && (
                        <div className="text-danger">{errors.cin}</div>
                      )}
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="date"
                        name="licenseDt"
                        value={formData.licenseDt}
                        onChange={handleChange}
                        className={styles.input}
                      />
                      <span>Select License Date</span>
                    </Col>
                  </Row>

                  <Row
                    className="mb-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Col md={8} className={styles.inputContainer}>
                      <Input
                        type="file"
                        placeholder=" "
                        name="file"
                        value={formData.logo}
                        onChange={handleChange}
                        className={`${styles.input} ${
                          errors.logo ? "is-invalid" : ""
                        }`}
                      />
                      <span>Place your company Logo</span>
                      <font color="red">*</font>
                      {errors.logo && (
                        <div className="text-danger">{errors.logo}</div>
                      )}
                    </Col>
                  </Row>
                </div>
              </Row>
            </CardBody>
          </Card>

          <div className="justify-content-center d-flex align-items-center justify-content-around mb-4">
            <Button className="btn-lg border-primary" onClick={handleSubmit}>
              UPDATE
            </Button>
            <Button
              className="btn-lg border-primary"
              style={{ float: "right" }}
              onClick={fun}
            >
              NEXT
            </Button>
          </div>
        </div>
        {/* )} */}
      </div>
    </React.Fragment>
  );
};

export default CompanyMaster;

// import React, { useState } from "react";
// import MetaTags from "react-meta-tags";
// import { Container } from "reactstrap";
// import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
// import "sweetalert2/dist/sweetalert2.min.css";
// import "../../assets/cssFiles/Create.css";

// const CompanyMaster = prop => {
//   const { fun } = { ...prop };

//   const [showForm, setShowForm] = useState(false);
//   const [cpnyname, setcpnyname] = useState("HCS");
//   const [add1, setadd1] = useState("BABUSABPALYA");
//   const [city, setcity] = useState("BANGALORE");
//   const [add2, setadd2] = useState(" KALYAN NAGAR");
//   const [state, setstate] = useState("KARNATAKA");
//   const [pin, setpin] = useState("577543");
//   const [email, setemail] = useState("RASH@GMAIL.COM");
//   const [country, setcountry] = useState("INDIA");
//   const [fax, setfax] = useState("HGDHSGFDSGF");
//   const [phone, setphone] = useState("0987654321");
//   const [contactperson, setcontactperson] = useState("AMIT HOLKAR");
//   const [gst, setgst] = useState("386463252587676");
//   const [pan, setpan] = useState("J987654356");
//   const [cin, setcin] = useState("454549473854675387657");
//   const [lino, setlino] = useState("JSDFDF8476");
//   const [lidt, setlidt] = useState("13-03-2023");
//   const [assetpre, setassetpre] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handlepanChange = setpan => event => {

//     const newValue = event.target.value.toUpperCase().replace(/[^A-Z\d]/g, "");
//     if (
//       (newValue.length <= 5 && /^[A-Z]*$/.test(newValue)) ||
//       (newValue.length > 5 &&
//         newValue.length <= 9 &&
//         /^\d+$/.test(newValue.substr(5))) ||
//       (newValue.length === 10 && /^[A-Z]$/.test(newValue.substr(9)))
//     ) {
//       setpan(newValue);
//     }
//   };
//   const validatePAN = value => {
//     return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value);
//   };
//   const handlecinChange = (setcin, validateFunction) => event => {
//     const newValue = event.target.value.toUpperCase().replace(/\D/g, "");
//     if (validateFunction && !validateFunction(newValue)) {
//       return;
//     }
//     setcin(newValue);
//   };
//   const validateCIN = value => {
//     return value.length <= 21;
//   };

//   const handlegstChange = (setgst, validateFunction) => event => {
//     const newValue = event.target.value.toUpperCase().replace(/\D/g, "");
//     if (validateFunction && !validateFunction(newValue)) {
//       return;
//     }
//     setgst(newValue);
//   };
//   const validateGST = value => {
//     return value.length <= 15;
//   };

//   const handlephoneChange = (setphone, validateFunction) => event => {
//     const newValue = event.target.value.toUpperCase();
//     if (newValue === "") {
//       setphone("");
//       return;
//     }
//     if (validateFunction && !validateFunction(newValue)) {
//       return;
//     }
//     setphone(newValue);
//   };
//   const validatePHONE = value => {
//     return /^\d{1,10}$/.test(value);
//   };
//   const handlePinChange = (setpin, validateFunction) => event => {
//     const newValue = event.target.value.toUpperCase();
//     if (newValue === "") {
//       setpin("");
//       return;
//     }
//     if (validateFunction && !validateFunction(newValue)) {
//       return;
//     }
//     setpin(newValue);
//   };
//   const validatePIN = value => {
//     return /^\d{1,6}$/.test(value);
//   };

//   const handlecpnynameChange = event => {
//     setcpnyname(event.target.value.toUpperCase());
//   };
//   const handleadd1Change = event => {
//     setadd1(event.target.value.toUpperCase());
//   };
//   const handleadd2Change = event => {
//     setadd2(event.target.value.toUpperCase());
//   };
//   const handlefaxChange = event => {
//     setfax(event.target.value.toUpperCase());
//   };
//   const handlecityChange = event => {
//     setcity(event.target.value.toUpperCase());
//   };
//   const handleemailChange = event => {
//     setemail(event.target.value.toUpperCase());
//   };
//   const handlecountryChange = event => {
//     setcountry(event.target.value.toUpperCase());
//   };
//   const handlecontactpersonChange = event => {
//     setcontactperson(event.target.value.toUpperCase());
//   };
//   const handlestateChange = event => {
//     setstate(event.target.value.toUpperCase());
//   };
//   const handlelinoChange = event => {
//     setlino(event.target.value.toUpperCase());
//   };
//   const handlelidtChange = event => {
//     setlidt(event.target.value.toUpperCase());
//   };
//   const handleassetpreChange = event => {
//     setassetpre(event.target.value.toUpperCase());
//   };
//   const handlelogoChange = event => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleUpdate = event => {
//     const form = event.currentTarget;

//     if (!form.checkValidity()) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     // form.classList.add("was-validated");
//     // if (email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     //   event.preventDefault();
//     //   event.stopPropagation();
//     //   Swal.fire({
//     //     icon: "error",
//     //     title: "OOPPPS.... :(",
//     //     text: "PLEASE PROVIDE A VALID EMAIL ADDRESS...!",
//     //     customClass: {
//     //       backdrop: "sweetalert-custom-background",
//     //     },
//     //   });
//     // }
//     alert("done")
//   };

//   const handleNext = () => {
//     history.push("/experiment");
//   };

//   return (
//     <React.Fragment>
//       <MetaTags>
//         <title>Company Master</title>
//       </MetaTags>

//       <Container>
//         <form className="row g-6" noValidate onSubmit={handleUpdate}>
//           <Card
//             className="border"
//             style={{ boxShadow: "1px 1px 8px 1px gray" }}
//           >
//             <CardHeader>
//               <h3 className="d-flex justify-content-center">
//                 FILL YOUR COMPANY DETAILS
//               </h3>
//             </CardHeader>

//             <CardBody>
//               <div
//                 className="mb-3"
//                 style={{ display: "flex", justifyContent: "center" }}
//               >
//                 <div className="col-md-10 inputContainer">
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=""
//                           placeholder=""
//                           className="textbox form-control"
//                           id="cpnyname"
//                           value={cpnyname}
//                           onChange={handlecpnynameChange}
//                           required
//                         />
//                         <label htmlFor="cpnyname" className="form-label">
//                           COMPANY NAME<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           {" "}
//                           COMPANY NAME IS REQUIRED
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="add1"
//                           value={add1}
//                           onChange={handleadd1Change}
//                           required
//                         />
//                         <label htmlFor="add1" className="form-label">
//                           ADDRESS 1<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           {" "}
//                           ADDRESS1 IS REQUIRED
//                         </div>
//                       </div>
//                     </Col>
//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="add2"
//                           value={add2}
//                           onChange={handleadd2Change}
//                           required
//                         />
//                         <label htmlFor="add2" className="form-label">
//                           ADDRESS 2<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           {" "}
//                           ADDRESS2 IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="city"
//                           value={city}
//                           onChange={handlecityChange}
//                           required
//                         />
//                         <label htmlFor="city" className="form-label">
//                           CITY<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           CITY IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                   <hr className="mb-0 mt-3" />
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox  form-control"
//                           id="state"
//                           value={state}
//                           onChange={handlestateChange}
//                           required
//                         />
//                         <label htmlFor="state" className="form-label">
//                           STATE<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           STATE IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control "
//                           id="country"
//                           value={country}
//                           onChange={handlecountryChange}
//                           required
//                         />
//                         <label htmlFor="country" className="form-label">
//                           COUNTRY<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           {" "}
//                           COUNTRY IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                   <hr className="mb-0 mt-3" />
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className={`textbox form-control ${
//                             pin.length !== 6 && pin.length > 0
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                           id="pin"
//                           value={pin}
//                           onChange={handlePinChange(setpin, validatePIN)}
//                         />
//                         <label htmlFor="pin" className="form-label">
//                           PIN
//                         </label>

//                         <div className="invalid-feedback">
//                           PIN SHOULD CONSIST OF 6 DIGITS
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="email"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control "
//                           id="email"
//                           value={email}
//                           onChange={handleemailChange}
//                           required
//                           pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
//                         />
//                         <label htmlFor="email" className="form-label">
//                           EMAIL<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           EMAIL MUST BE IN A CORRECT FORMAT{" "}
//                         </div>
//                       </div>
//                     </Col>
//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control "
//                           id="fax"
//                           value={fax}
//                           onChange={handlefaxChange}
//                         />
//                         <label htmlFor="fax" className="form-label">
//                           FAX
//                         </label>
//                         <div className="invalid-feedback"></div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className={`textbox form-control ${
//                             phone.length !== 10 && phone.length > 0
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                           id="phone"
//                           value={phone}
//                           onChange={handlephoneChange(setphone, validatePHONE)}
//                         />
//                         <label htmlFor="phone" className="form-label">
//                           PHONE
//                         </label>

//                         <div className="invalid-feedback">
//                           PHONE NUMBER SHOULD CONSIST OF 10 DIGITS
//                         </div>
//                       </div>
//                     </Col>
//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className={`textbox form-control ${
//                             gst.length !== 15 && gst.length > 0
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                           id="gst"
//                           value={gst}
//                           onChange={handlegstChange(setgst, validateGST)}
//                           required
//                         />
//                         <label htmlFor="gst" className="form-label">
//                           GST<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           GST SHOULD CONSIST OF 15 DIGITS
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className={`textbox form-control ${
//                             !validatePAN(pan) && pan.length > 0
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                           id="pan"
//                           value={pan}
//                           onChange={handlepanChange(setpan)}
//                           required
//                         />
//                         <label htmlFor="pan" className="form-label">
//                           PAN<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           PAN NUMBER MUST BE IN A CORRECT FORMAT
//                         </div>
//                       </div>
//                     </Col>

//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                   <Row>
//                     <Col>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className={`textbox form-control ${
//                             cin.length !== 21 && cin.length >= 0
//                               ? "is-invalid "
//                               : ""
//                           }`}
//                           id="cin"
//                           value={cin}
//                           onChange={handlecinChange(setcin, validateCIN)}
//                           required
//                         />
//                         <label htmlFor="cin" className="form-label">
//                           CIN<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           CIN SHOULD CONSIST OF 21 DIGITS
//                         </div>
//                       </div>
//                     </Col>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="contactperson"
//                           value={contactperson}
//                           onChange={handlecontactpersonChange}
//                           required
//                         />
//                         <label htmlFor="contactperson" className="form-label">
//                           CONTACT PERSON<span className="span">*</span>
//                         </label>
//                         <div className="invalid-feedback">
//                           CONTACT PERSON IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                   <Row>
//                     <Col sm={6}>
//                       <div className="form mt-4">
//                         <input
//                           type="text"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="lino"
//                           value={lino}
//                           onChange={handlelinoChange}
//                           required
//                         />
//                         <label htmlFor="lino" className="form-label">
//                           LICENSE NUMBER
//                         </label>
//                         <div className="invalid-feedback">
//                           LICENSE NUMBER IS REQUIRED{" "}
//                         </div>
//                       </div>
//                     </Col>
//                     <Col>
//                       <div className="form mt-4">
//                         <input
//                           type="date"
//                           name=" "
//                           placeholder=""
//                           className="textbox form-control"
//                           id="lidt"
//                           value={lidt}
//                           onChange={handlelidtChange}
//                           required
//                         />
//                         <label htmlFor="lidt" className="form-label">
//                           LICENSE DATE
//                         </label>
//                         <div className="invalid-feedback">
//                           LICENSE DATE IS REQUIRED
//                         </div>
//                       </div>
//                     </Col>
//                     <hr className="mb-0 mt-3" />
//                   </Row>
//                 </div>
//               </div>
//               <div
//                 className="mb-3"
//                 style={{ display: "flex", justifyContent: "center" }}
//               >
//                 <div className="col-md-10 inputContainer">
//                   <Col>
//                     <h5
//                       className="text-muted d-flex justify-content-center"
//                       style={{ fontSize: "17px", color: "#b78702" }}
//                     >
//                       COMPANY LOGO
//                     </h5>
//                     <hr className="mb-0" />
//                   </Col>
//                   <Row className="mb-5 mt-3">
//                     <Col md={6}>
//                       <input
//                         type="file"
//                         id="fileInput"
//                         onChange={handlelogoChange}
//                         accept="image/*"
//                         className="form-control"
//                         required
//                       />
//                       <div className="invalid-feedback"></div>
//                     </Col>
//                     <Col
//                       md={6}
//                       className="d-flex align-items-center justify-content-center"
//                     >
//                       {selectedFile ? (
//                         <img
//                           src={URL.createObjectURL(selectedFile)}
//                           alt="Selected"
//                           style={{ maxWidth: "100%", maxHeight: "100px" }}
//                         />
//                       ) : (
//                         <div className="fileholder"></div>
//                       )}
//                     </Col>
//                   </Row>
//                   <hr className="mb-0 mt-3" />
//                 </div>
//               </div>
//             </CardBody>
//           </Card>

//           <div className="col-md-12 inputContainer">
//             <div className=" mt-2 mb-3 d-flex justify-content-between">
//               <button className="update" type="Update">
//                 UPDATE
//               </button>
//               <div style={{ width: "20px" }}></div>
//               <button className="update" onClick={fun}>
//                 NEXT
//               </button>
//             </div>
//           </div>
//         </form>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default CompanyMaster;
