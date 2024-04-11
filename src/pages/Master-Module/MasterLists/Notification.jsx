// // import React, { useState } from "react";
// // import {
// //   Button,
// //   Col,
// //   Form,
// //   FormGroup,
// //   Input,
// //   Label,
// //   Row,
// //   CardBody,
// //   CardHeader,
// //   Container,
// //   Card,
// //   Table
// // } from "reactstrap";

// // const Notification = () => {
// //   const [userType, setUserType] = useState("");
// //   const [functionalities, setFunctionalities] = useState([]);
// //   const [additionalRows, setAdditionalRows] = useState([]);

// //   const handleUserTypeChange = (e) => {
// //     setUserType(e.target.value);
// //     // Set functionalities based on user type
// //     if (e.target.value === "admin") {
// //       setFunctionalities([
// //         { name: "AMC", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Warranty Incurrence", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Allocation", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Deallocation", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Damage Approval", notification: false, reminder: false, daysPrior: '' }
// //       ]);
// //     } else if (e.target.value === "super") {
// //       setFunctionalities([
// //         { name: "Functionality 1", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Functionality 2", notification: false, reminder: false, daysPrior: '' },
// //         { name: "Functionality 3", notification: false, reminder: false, daysPrior: '' }
// //       ]);
// //     } else {
// //       setFunctionalities([]);
// //     }
// //   };

// //   const handleAddRow = () => {
// //     setAdditionalRows([...additionalRows, { name: "", notification: false, reminder: false, daysPrior: '' }]);
// //   };

// //   return (
// //     <React.Fragment>
// //       <Container fluid>
// //         <div className="page-content">
// //           <Card>
// //             <CardHeader>
// //               <h1 className="card-title" style={{ fontSize: "20px" }}>
// //                 NOTIFICATION AND REMAINDER
// //               </h1>
// //             </CardHeader>

// //             <CardBody>
// //               <Row className="justify-content-center">
// //                 <Col xl={6}>
// //                   <Form>
// //                     <FormGroup>
// //                       <Label for="userType">USER TYPE</Label>
// //                       <Input type="select" name="userType" id="userType" value={userType} onChange={handleUserTypeChange}>
// //                         <option value="">SELECT USER TYPE</option>
// //                         <option value="admin">ADMIN</option>
// //                         <option value="super">SUPER</option>
// //                       </Input>
// //                     </FormGroup>
// //                   </Form>
// //                 </Col>
// //               </Row>

// //               {userType === "admin" && (
// //                 <Row className="justify-content-center mt-4">
// //                   <Col xl={10}>
// //                     <Table striped bordered>
// //                       <thead>
// //                         <tr>
// //                           <th>FUNCTIONALITY</th>
// //                           <th>NOTIFICATION</th>
// //                           <th>REMAINDER</th>
// //                           <th>DAYS PRIOR</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {functionalities.map((func, index) => (
// //                           <tr key={index}>
// //                             <td><Input type="text" value={func.name} onChange={(e) => {
// //                               const newFunctionalities = [...functionalities];
// //                               newFunctionalities[index].name = e.target.value;
// //                               setFunctionalities(newFunctionalities);
// //                             }} /></td>
// //                             <td><Input type="checkbox" checked={func.notification} onChange={(e) => {
// //                               const newFunctionalities = [...functionalities];
// //                               newFunctionalities[index].notification = e.target.checked;
// //                               setFunctionalities(newFunctionalities);
// //                             }} /></td>
// //                             <td><Input type="checkbox" checked={func.reminder} onChange={(e) => {
// //                               const newFunctionalities = [...functionalities];
// //                               newFunctionalities[index].reminder = e.target.checked;
// //                               setFunctionalities(newFunctionalities);
// //                             }} /></td>
// //                             <td><Input type="number" min="0" value={func.daysPrior} onChange={(e) => {
// //                               const newFunctionalities = [...functionalities];
// //                               newFunctionalities[index].daysPrior = e.target.value;
// //                               setFunctionalities(newFunctionalities);
// //                             }} /></td>
// //                           </tr>
// //                         ))}
// //                         {additionalRows.map((row, index) => (
// //                           <tr key={index}>
// //                             <td><Input type="text" value={row.name} onChange={(e) => {
// //                               const newRows = [...additionalRows];
// //                               newRows[index].name = e.target.value;
// //                               setAdditionalRows(newRows);
// //                             }} /></td>
// //                             <td><Input type="checkbox" checked={row.notification} onChange={(e) => {
// //                               const newRows = [...additionalRows];
// //                               newRows[index].notification = e.target.checked;
// //                               setAdditionalRows(newRows);
// //                             }} /></td>
// //                             <td><Input type="checkbox" checked={row.reminder} onChange={(e) => {
// //                               const newRows = [...additionalRows];
// //                               newRows[index].reminder = e.target.checked;
// //                               setAdditionalRows(newRows);
// //                             }} /></td>
// //                             <td><Input type="number" min="0" value={row.daysPrior} onChange={(e) => {
// //                               const newRows = [...additionalRows];
// //                               newRows[index].daysPrior = e.target.value;
// //                               setAdditionalRows(newRows);
// //                             }} /></td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </Table>
// //                     <Button color="primary" onClick={handleAddRow}>Add</Button>
// //                   </Col>
// //                 </Row>
// //               )}
// //             </CardBody>
// //           </Card>
// //         </div>
// //       </Container>
// //     </React.Fragment>
// //   );
// // };

// // export default Notification;
// import React, { useState } from "react";
// import {
//   Button,
//   Col,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Row,
//   CardBody,
//   CardHeader,
//   Container,
//   Card,
//   Table
// } from "reactstrap";

// const Notification = () => {
//   const [userType, setUserType] = useState("");
//   const [functionalities, setFunctionalities] = useState([]);
//   const [additionalRows, setAdditionalRows] = useState([]);

//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//     if (e.target.value === "admin") {
//       setFunctionalities([
//         { name: "AMC", notification: false, reminder: false, daysPrior: '' },
//         { name: "Warranty Incurrence", notification: false, reminder: false, daysPrior: '' },
//         { name: "Allocation", notification: false, reminder: false, daysPrior: '' },
//         { name: "Deallocation", notification: false, reminder: false, daysPrior: '' },
//         { name: "Damage Approval", notification: false, reminder: false, daysPrior: '' }
//       ]);
//     }
//   };

//   const handleAddRow = () => {
//     setAdditionalRows([...additionalRows, { name: "", notification: false, reminder: false, daysPrior: '' }]);
//   };

//   const handleSend = () => {
//     // Implement send functionality here
//   };

//   return (
//     <React.Fragment>
//       <Container fluid>
//         <div className="page-content">
//           <Card>
//             <CardHeader>
//               <h1 className="card-title" style={{ fontSize: "20px" }}>
//                 NOTIFICATION AND REMINDER
//               </h1>
//             </CardHeader>

//             <CardBody>
//               <Row className="justify-content-center">
//                 <Col xl={6}>
//                   <Form>
//                     <FormGroup>
//                       <Label for="userType">USER TYPE</Label>
//                       <Input type="select" name="userType" id="userType" value={userType} onChange={handleUserTypeChange}>
//                         <option value="">SELECT USER TYPE</option>
//                         <option value="admin">ADMIN</option>
//                         <option value="super">SUPER</option>
//                       </Input>
//                     </FormGroup>
//                   </Form>
//                 </Col>
//               </Row>

//               {userType === "admin" && (
//                 <Row className="justify-content-center mt-4">
//                   <Col xl={10}>
//                     <Table striped bordered>
//                       <thead>
//                         <tr className="text-center">
//                           <th>FUNCTIONALITY</th>
//                           <th>NOTIFICATION</th>
//                           <th>REMINDER</th>
//                           <th>DAYS PRIOR</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {functionalities.map((func, index) => (
//                           <tr key={index}>
//                             <td className="text-center"><Input type="text" value={func.name} onChange={(e) => {
//                               const newFunctionalities = [...functionalities];
//                               newFunctionalities[index].name = e.target.value;
//                               setFunctionalities(newFunctionalities);
//                             }} /></td>
//                             <td className="text-center"><Input type="checkbox" checked={func.notification} onChange={(e) => {
//                               const newFunctionalities = [...functionalities];
//                               newFunctionalities[index].notification = e.target.checked;
//                               setFunctionalities(newFunctionalities);
//                             }} /></td>
//                             <td className="text-center"><Input type="checkbox" checked={func.reminder} onChange={(e) => {
//                               const newFunctionalities = [...functionalities];
//                               newFunctionalities[index].reminder = e.target.checked;
//                               setFunctionalities(newFunctionalities);
//                             }} /></td>
//                             <td className="text-center"><Input type="number" min="0" value={func.daysPrior} onChange={(e) => {
//                               const newFunctionalities = [...functionalities];
//                               newFunctionalities[index].daysPrior = e.target.value;
//                               setFunctionalities(newFunctionalities);
//                             }} /></td>
//                           </tr>
//                         ))}
//                         {additionalRows.map((row, index) => (
//                           <tr key={index}>
//                             <td className="text-center"><Input type="text" value={row.name} onChange={(e) => {
//                               const newRows = [...additionalRows];
//                               newRows[index].name = e.target.value;
//                               setAdditionalRows(newRows);
//                             }} /></td>
//                             <td className="text-center"><Input type="checkbox" checked={row.notification} onChange={(e) => {
//                               const newRows = [...additionalRows];
//                               newRows[index].notification = e.target.checked;
//                               setAdditionalRows(newRows);
//                             }} /></td>
//                             <td className="text-center"><Input type="checkbox" checked={row.reminder} onChange={(e) => {
//                               const newRows = [...additionalRows];
//                               newRows[index].reminder = e.target.checked;
//                               setAdditionalRows(newRows);
//                             }} /></td>
//                             <td className="text-center"><Input type="number" min="0" value={row.daysPrior} onChange={(e) => {
//                               const newRows = [...additionalRows];
//                               newRows[index].daysPrior = e.target.value;
//                               setAdditionalRows(newRows);
//                             }} /></td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                     <div className="text-center">
//                       <Button color="primary" onClick={handleAddRow}>Add</Button>
//                       <Button color="success" onClick={handleSend} className="ml-3">Send</Button>
//                     </div>
//                   </Col>
//                 </Row>
//               )}
//             </CardBody>
//           </Card>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default Notification;
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  CardBody,
  CardHeader,
  Container,
  Card,
  Table,
} from "reactstrap";

const Notification = () => {
  const [userType, setUserType] = useState("");
  const [functionalities, setFunctionalities] = useState([]);
  const [additionalRows, setAdditionalRows] = useState([]);

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
    // Set functionalities based on user type
    if (e.target.value === "admin") {
      setFunctionalities([
        { name: "AMC", notification: false, reminder: false, daysPrior: "" },
        {
          name: "Warranty Incurrence",
          notification: false,
          reminder: false,
          daysPrior: "",
        },
        {
          name: "Allocation",
          notification: false,
          reminder: false,
          daysPrior: "",
        },
        {
          name: "Deallocation",
          notification: false,
          reminder: false,
          daysPrior: "",
        },
        {
          name: "Damage Approval",
          notification: false,
          reminder: false,
          daysPrior: "",
        },
      ]);
    }
  };

  const handleAddRow = () => {
    setAdditionalRows([
      ...additionalRows,
      { name: "", notification: false, reminder: false, daysPrior: "" },
    ]);
  };

  const handleSend = () => {
    // Implement send functionality here
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-content">
          <Card>
            <CardHeader>
              <h1 className="card-title" style={{ fontSize: "20px" }}>
                NOTIFICATION AND REMINDER
              </h1>
            </CardHeader>

            <CardBody>
              <Row className="justify-content-center">
                <Col xl={6}>
                  <Form>
                    <FormGroup>
                      <Label for="userType">USER TYPE</Label>
                      <Input
                        type="select"
                        name="userType"
                        id="userType"
                        value={userType}
                        onChange={handleUserTypeChange}
                      >
                        <option value="">SELECT USER TYPE</option>
                        <option value="admin">ADMIN</option>
                        <option value="super">SUPER</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>

              {userType === "admin" && (
                <Row className="justify-content-center mt-4">
                  <Col xl={10}>
                    <Table striped bordered>
                      <thead>
                        <tr className="text-center">
                          <th>FUNCTIONALITY</th>
                          <th>NOTIFICATION</th>
                          <th>REMINDER</th>
                          <th>DAYS PRIOR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {functionalities.map((func, index) => (
                          <tr key={index}>
                            <td className="text-uppercase text-center">
                              <Input
                                type="text"
                                value={func.name.toUpperCase()}
                                onChange={e => {
                                  const newFunctionalities = [
                                    ...functionalities,
                                  ];
                                  newFunctionalities[index].name =
                                    e.target.value;
                                  setFunctionalities(newFunctionalities);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="checkbox"
                                checked={func.notification}
                                onChange={e => {
                                  const newFunctionalities = [
                                    ...functionalities,
                                  ];
                                  newFunctionalities[index].notification =
                                    e.target.checked;
                                  setFunctionalities(newFunctionalities);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="checkbox"
                                checked={func.reminder}
                                onChange={e => {
                                  const newFunctionalities = [
                                    ...functionalities,
                                  ];
                                  newFunctionalities[index].reminder =
                                    e.target.checked;
                                  setFunctionalities(newFunctionalities);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="number"
                                min="0"
                                value={func.daysPrior}
                                onChange={e => {
                                  const newFunctionalities = [
                                    ...functionalities,
                                  ];
                                  newFunctionalities[index].daysPrior =
                                    e.target.value;
                                  setFunctionalities(newFunctionalities);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                        {additionalRows.map((row, index) => (
                          <tr key={index}>
                            <td className="text-uppercase text-center">
                              <Input
                                type="text"
                                value={row.name.toUpperCase()}
                                onChange={e => {
                                  const newRows = [...additionalRows];
                                  newRows[index].name = e.target.value;
                                  setAdditionalRows(newRows);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="checkbox"
                                checked={row.notification}
                                onChange={e => {
                                  const newRows = [...additionalRows];
                                  newRows[index].notification =
                                    e.target.checked;
                                  setAdditionalRows(newRows);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="checkbox"
                                checked={row.reminder}
                                onChange={e => {
                                  const newRows = [...additionalRows];
                                  newRows[index].reminder = e.target.checked;
                                  setAdditionalRows(newRows);
                                }}
                              />
                            </td>
                            <td className="text-center">
                              <Input
                                type="number"
                                min="0"
                                value={row.daysPrior}
                                onChange={e => {
                                  const newRows = [...additionalRows];
                                  newRows[index].daysPrior = e.target.value;
                                  setAdditionalRows(newRows);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="text-center">
                      <Button
                        className="btn btn-success-subtle border border-success"
                        onClick={handleAddRow}
                        style={{
                          paddingTop: "10px",
                          height: "45px",
                          width: "80px",
                          marginRight: "30px",
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        className="btn btn-secondary-subtle border border-secondary"
                        onClick={handleSend}
                        style={{
                          paddingTop: "10px",
                          width: "80px",
                          height: "45px",
                        }}
                      >
                        Send
                      </Button>
                    </div>
                  </Col>
                </Row>
              )}
            </CardBody>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Notification;
