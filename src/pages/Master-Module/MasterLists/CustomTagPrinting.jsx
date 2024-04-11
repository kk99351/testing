// import React, { useState } from "react";
// import {
//   Col,
//   Row,
//   CardBody,
//   CardHeader,
//   Card,
//   Label,
//   Input,
//   Button,
//   Container,
//   Table,
// } from "reactstrap";
// import Barcode from "react-barcode";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CustomTagPrinting = () => {
//   const [attributes, setAttributes] = useState([
//     { attribute: "ASSET IT", order: 1 },
//     { attribute: "MODEL NUMBER", order: 2 },
//     { attribute: "SERIAL NUMBER", order: 3 },
//   ]);
//   const [newAttribute, setNewAttribute] = useState("");
//   const [newOrder, setNewOrder] = useState("");

//   const handleAttributeChange = (e) => {
//     setNewAttribute(e.target.value);
//   };

//   const handleOrderChange = (e) => {
//     setNewOrder(e.target.value);
//   };

//   const handleSave = () => {
//     if (newAttribute && newOrder) {
//       setAttributes([
//         ...attributes,
//         { attribute: newAttribute, order: parseInt(newOrder) },
//       ]);
//       setNewAttribute("");
//       setNewOrder("");
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedAttributes = [...attributes];
//     updatedAttributes.splice(index, 1);
//     setAttributes(updatedAttributes);
//   };

//   const handleOrderClick = (order) => {
//     const foundAttribute = attributes.find((attr) => attr.order === order);
//     if (foundAttribute) {
//       setNewAttribute(foundAttribute.attribute);
//       setNewOrder(foundAttribute.order.toString());
//     }
//   };

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card className="mt-0">
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 CUSTOMIZE YOUR TAG
//               </h1>
//             </CardHeader>
//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={10}>
//                   <Row className="mb-2">
//                     <Col md={6}>
//                       <Label for="newAttribute">ATTRIBUTE</Label>
//                       <Input
//                         type="select"
//                         name="newAttribute"
//                         id="newAttribute"
//                         value={newAttribute}
//                         onChange={handleAttributeChange}
//                         style={{ textTransform: "uppercase" }}

//                       >
//                         <option value="">SELECT ATTRIBUTE</option>
//                         <option value="LOCATION">LOCATION</option>
//                         <option value="MATERIAL SUB GROUP">
//                           MATERIAL SUB GROUP
//                         </option>
//                       </Input>
//                     </Col>
//                     <Col md={6}>
//                       <Label for="newOrder">ORDER</Label>
//                       <Input
//                         type="number"
//                         name="newOrder"
//                         id="newOrder"
//                         placeholder="PLEASE ENTER ORDER"
//                         value={newOrder}
//                         onChange={handleOrderChange}
//                         style={{ textTransform: "uppercase" }}

//                       />
//                     </Col>
//                   </Row>
//                 </Col>
//                 <hr className="mb-3 mt-3"/>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-around",
//                     }}
//                   >
//                     <Button
//                       type="button"
//                       className="btn btn-success-subtle border border-success"
//                       onClick={handleSave}
//                       style={{
//                         paddingTop: "10px",
//                         height: "45px",
//                         width: "100px",
//                         marginRight: "30px",
//                       }}
//                     >
//                       <Label>SAVE</Label>
//                     </Button>
//                   </div>
//                 </div>
//               </Row>
//               <Row className="justify-content-center mb-4">
//                 <Col md={6} className="text-center">
//                   <Barcode value="SAMPLE BARCODE " />
//                 </Col>
//               </Row>
//               <Table striped bordered>
//                 <thead style={{ textAlign: "center" }}>
//                   <tr>
//                     <th style={{ width: "33%" }}>ATTRIBUTE</th>
//                     <th style={{ width: "33%" }}>ORDER</th>
//                     <th style={{ width: "33%" }}>ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{ textAlign: "center" }}>
//                   {attributes.map((attr, index) => (
//                     <tr key={index}>
//                       <td>{attr.attribute}</td>
//                       <td onClick={() => handleOrderClick(attr.order)} style={{ cursor: "pointer" }}>{attr.order}</td>
//                       <td>
//                       <Button
//                           color="danger"
//                           onClick={() => handleDelete(index)}
//                         >
//                           <FontAwesomeIcon icon={faTrash} />
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default CustomTagPrinting;
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
  Table,
} from "reactstrap";
import Barcode from "react-barcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {
  AttributesDropDown,
  CreateTagAttributes,
  DeleteTags,
  GetAssetTagAttributesList,
} from "src/API/Master/CustomTagPrinting/Api";

const CustomTagPrinting = () => {
  const [attributes, setAttributes] = useState([]);
  const [newAttribute, setNewAttribute] = useState("");
  const [newOrder, setNewOrder] = useState("");
  const [attributedropdown, setArrtributedropdown] = useState([]);
  const [coloumName, setColumnName] = useState("");
  const [columnlabel, setColumnLabel] = useState("");

  useEffect(() => {
    AttributesDropDown().then(res => {
      if (Array.isArray(res)) {
        setArrtributedropdown(res);
      } else {
        setArrtributedropdown([]);
      }
    });
  }, []);

  useEffect(() => {
    AllAttributes();
  }, []);

  const AllAttributes = () => {
    GetAssetTagAttributesList().then(res => {
      console.log("All Attributes", res);
      if (Array.isArray(res)) {
        setAttributes(res);
      } else {
        setAttributes([]);
      }
    });
  };

  const handleAttributeChange = e => {
    let finddata = attributedropdown.find(
      attr => attr.id === Number(e.target.value)
    );
    setNewAttribute(finddata.id);
    setColumnName(finddata.columnname);
    setColumnLabel(finddata.columnlabel);
  };

  const handleOrderChange = e => {
    setNewOrder(e.target.value);
  };

  const handleSave = () => {
    if (!newAttribute) {
      toast("Attribute is required");
      return false;
    } else if (!newOrder) {
      toast("Order is required");
      return false;
    }
    CreateTagAttributes([
      {
        id: 0,
        columnname: coloumName,
        columnlabel: columnlabel,
        tag: "Yes",
        corder: newOrder,
      },
    ]).then(res => {
      if (res.ok) {
        toast.success("Successfully created Tag");
        setNewAttribute("");
        setNewOrder("");
        AllAttributes();
      } else if (res.status === 400) {
        toast("Please Give Unique Tag");
      } else {
        toast("Failed to Create Tag");
      }
    });
    // if (newAttribute && newOrder) {
    //   setAttributes([
    //     ...attributes,
    //     { attribute: newAttribute, order: parseInt(newOrder) },
    //   ]);
    //   setNewAttribute("");
    //   setNewOrder("");
    // }
  };

  const handleDelete = index => {
    toast.info(
      <div>
        <p>Are you sure you want to delete?</p>
        <Button color="danger" onClick={() => confirmDelete(index)}>
          Yes
        </Button>{" "}
        <Button color="primary" onClick={toast.dismiss}>
          No
        </Button>
      </div>,
      { autoClose: false }
    );
  };

  const confirmDelete = index => {
    DeleteTags(index).then(response => {
      if (response.ok) {
        AllAttributes();
        toast.dismiss();
        setTimeout(() => {
          toast.success("Attribute deleted successfully!", { autoClose: 4000 });
        });
      } else {
        toast("Failed to delete", { autoClose: 4000 });
      }
    });
    // const updatedAttributes = [...attributes];
    // updatedAttributes.splice(index, 1);
    // setAttributes(updatedAttributes);
    // toast.dismiss();
    // setTimeout(() => {
    //   toast.success("Attribute deleted successfully!", { autoClose: 4000 });
    // });
  };

  const handleOrderClick = order => {
    const foundAttribute = attributes.find(attr => attr.order === order);
    if (foundAttribute) {
      setNewAttribute(foundAttribute.attribute);
      setNewOrder(foundAttribute.order.toString());
    }
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card className="mt-0">
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                CUSTOMIZE YOUR TAG
              </h1>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col xl={10}>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Label for="newAttribute">ATTRIBUTE</Label>
                      <Input
                        type="select"
                        name="newAttribute"
                        id="newAttribute"
                        value={newAttribute}
                        onChange={handleAttributeChange}
                        style={{ textTransform: "uppercase" }}
                      >
                        <option value="">SELECT ATTRIBUTE</option>
                        {attributedropdown &&
                          attributedropdown.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.columnlabel}
                            </option>
                          ))}
                      </Input>
                    </Col>
                    <Col md={6}>
                      <Label for="newOrder">ORDER</Label>
                      <Input
                        type="number"
                        name="newOrder"
                        id="newOrder"
                        placeholder="PLEASE ENTER ORDER"
                        value={newOrder}
                        onChange={handleOrderChange}
                        style={{ textTransform: "uppercase" }}
                      />
                    </Col>
                  </Row>
                </Col>
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
                    <Button
                      type="button"
                      className="btn btn-success-subtle border border-success"
                      onClick={handleSave}
                      style={{
                        paddingTop: "10px",
                        height: "45px",
                        width: "100px",
                        marginRight: "30px",
                      }}
                    >
                      <Label>SAVE</Label>
                    </Button>
                  </div>
                </div>
              </Row>
              <Row className="justify-content-center mb-4">
                <Col md={6} className="text-center">
                  <Barcode value="SAMPLE BARCODE " />
                </Col>
              </Row>
              <Table striped bordered>
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th style={{ width: "33%" }}>ATTRIBUTE</th>
                    <th style={{ width: "33%" }}>ORDER</th>
                    <th style={{ width: "33%" }}>ACTION</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {attributes.map((attr, index) => (
                    <tr key={index}>
                      <td>{attr.columnlabel}</td>
                      <td
                        onClick={() => handleOrderClick(attr.order)}
                        style={{ cursor: "pointer" }}
                      >
                        {attr.corder}
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => handleDelete(attr.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
};

export default CustomTagPrinting;
