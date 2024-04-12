import React, { useState } from "react";
import { Card, Container, CardBody, CardHeader, Button } from "reactstrap";

const Notification = () => {
  const functionalityOptions = ["AMC", "Insurence"];

  const [rows, setRows] = useState([
    {
      id: 1,
      userType: "",
      functionalities: "",
      notification: false,
      remainder: false,
      daysPrior: "",
    },
  ]);

  const addUser = () => {
    const newRow = {
      id: rows.length + 1,
      userType: "",
      functionalities: "",
      notification: false,
      remainder: false,
      daysPrior: "",
    };
    setRows([...rows, newRow]);
  };

  const handleUserTypeChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].userType = value;
    setRows(newRows);
  };

  const handleNotificationChange = index => {
    const newRows = [...rows];
    newRows[index].notification = !newRows[index].notification;
    setRows(newRows);
  };
  const handleFunctionalityChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].functionalities = value;
    setRows(newRows);
  };

  const handleRemainderChange = index => {
    const newRows = [...rows];
    newRows[index].remainder = !newRows[index].remainder;
    setRows(newRows);
  };

  const handleDaysPriorChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].daysPrior = value;
    setRows(newRows);
  };

  const handleSend = () => {
    // Handle sending data
  };

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <CardHeader style={{ background: "black", color: "white" }}>
            <h1 className="card-title">LOCATION DETAILS</h1>
          </CardHeader>
          <CardBody>
            <table className="table table-bordered table-hover text-center">
              <thead>
                <tr>
                  <th style={{width:"45px"}}>User Type</th>
                  <th>Functionalities</th>
                  <th>Notification</th>
                  <th>Remainder</th>
                  <th>Days Prior</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id}>
                    <td>{/* Dropdown for user type */}</td>
                    <td>
                      <select
                        value={row.functionalities}
                        className="form-control"
                        onChange={e =>
                          handleFunctionalityChange(index, e.target.value)
                        }
                      >
                        {functionalityOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={row.notification}
                        onChange={() => handleNotificationChange(index)}
                      />
                    </td>
                    <td>
                      {/* Checkbox for remainder */}
                      <input
                        type="checkbox"
                        checked={row.remainder}
                        onChange={() => handleRemainderChange(index)}
                      />
                    </td>
                    <td>
                      {/* Number input for days prior */}
                      <input
                        type="number"
                        className="form-control"
                        value={row.daysPrior}
                        onChange={e =>
                          handleDaysPriorChange(index, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button color="primary" onClick={addUser}>
              Add
            </Button>
            <Button color="success" onClick={handleSend}>
              Send
            </Button>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default Notification;
