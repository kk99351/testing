import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Button,
  Card,
  Label,
  FormGroup,
  CardHeader,
  Col,
  Input,
  Row,
  CardBody,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useNavigate } from "react-router-dom";
import { GetAllData, GetSubModule } from "src/API/Master/GlobalGet";
import { CreateUserPermission } from "src/API/Master/AccessManagement/Api";
import { ToastContainer, toast } from "react-toastify";

const UserPermissionCreate = () => {
  const navigate = useNavigate();

  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [assetsLeftItems, setAssetsLeftItems] = useState([]);
  const [assetsRightItems, setAssetsRightItems] = useState([]);
  const [showAllasset, setShowAllasset] = useState(false);

  const [transfersLeftItems, setTransfersLeftItems] = useState([]);
  const [transferRightItems, setTransferRightItems] = useState([]);
  const [showAlltransfer, setShowAlltransfer] = useState(false);

  const [tagsLeftItems, setTagsLeftItems] = useState([]);
  const [tagsRightItems, setTagsRightItems] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const [reportsLeftItems, setReportsLeftItems] = useState([]);
  const [reportsRightItems, setReportsRightItems] = useState([]);
  const [showAllReports, setShowAllReports] = useState(false);

  const [depreciationLeftItems, setDepreciationLeftItems] = useState([]);
  const [depreciationRightItems, setDepreciationRightItems] = useState([]);
  const [showAllDepreciation, setShowAllDepreciation] = useState(false);

  const [dashboardLeftItems, setDashboardLeftItems] = useState([]);
  const [dashboardRightItems, setDashboardRightItems] = useState([]);
  const [showAllDashboard, setShowAllDashboard] = useState(false);

  const [selectedOwner, setSelectedOwner] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSublocation, setSelectedSublocation] = useState([]);
  const owners = ["IT", "NON-IT", "SOFTWARE"];
  const departments = ["ACTIVITY ROOM", "ACE ACADEMY", "ADMIN"];
  const locations = ["BENGALORE", "CHITRADURGA", "MYSORE"];
  const sublocations = ["KALYAN NAGARA", "CHALLAKERE", "VIJAYA NAGARA"];

  const [userType, setUserType] = useState([]);
  const [module, setModule] = useState([]);
  const [submodule, setSubmodule] = useState([]);
  const [dept, setDept] = useState([]);
  const [location, setLocation] = useState([]);
  const [allLocation, setAllLocation] = useState([]);

  useEffect(() => {
    GetAllData("Usertype").then(res => {
      console.log("userType", res);
      if (Array.isArray(res)) {
        setUserType(res);
      } else {
        setUserType([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Module").then(res => {
      if (Array.isArray(res)) {
        setModule(res);
      } else {
        setModule([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("SubModule").then(res => {
      if (Array.isArray(res)) {
        console.log(res);
        setSubmodule(res);
      } else {
        setSubmodule([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Dept").then(res => {
      if (Array.isArray(res)) {
        setDept(res);
        console.log(res);
      } else {
        setDept([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Entity").then(res => {
      if (Array.isArray(res)) {
        console.log(res);
        setLocation(res);
      } else {
        setLocation([]);
      }
    });
  }, []);

  useEffect(() => {
    GetAllData("Location").then(res => {
      if (Array.isArray(res)) {
        setAllLocation(res);
      } else {
        setAllLocation([]);
      }
    });
  }, []);

  // const submoduleMap = submodule.reduce((acc, submodule) => {
  //   const moduleId = submodule.idmodule.idmodule;
  //   if (!acc[moduleId]) {
  //     acc[moduleId] = [];
  //   }
  //   acc[moduleId].push(submodule);
  //   return acc;
  // }, {});

  // const Modulelist = module.map(module => ({
  //   ...module,
  //   submodules: submoduleMap[module.idmodule] || [],
  // }));

  //---------------------------Depreciation Control------------------------------//

  const handleDepreciationMoveRight = () => {
    const selectedItems = depreciationLeftItems.filter((_, index) => {
      const option = document.getElementById(`depreciationLeftItem${index}`);
      return option.selected;
    });
    setDepreciationRightItems([...depreciationRightItems, ...selectedItems]);
    setDepreciationLeftItems(
      depreciationLeftItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleDepreciationMoveLeft = () => {
    const selectedItems = depreciationRightItems.filter((_, index) => {
      const option = document.getElementById(`depreciationRightItem${index}`);
      return option.selected;
    });
    setDepreciationLeftItems([...depreciationLeftItems, ...selectedItems]);
    setDepreciationRightItems(
      depreciationRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleDepreciationCheckboxChange = event => {
    setShowAllDepreciation(event.target.checked);
    if (event.target.checked) {
      setDepreciationLeftItems(["CA YEARLY", "IT ACT", "ADDITION/DELETION"]);
      setDepreciationRightItems([]);
    } else {
      setDepreciationLeftItems([]);
      setDepreciationRightItems([]);
    }
  };

  //----------------------------------Depreciation Control End------------------------------//

  //------------------------Master Control-------------------------------//

  const handleMasterMoveRight = () => {
    const selectedItems = leftItems.filter((_, index) => {
      const option = document.getElementById(`leftItem${index}`);
      return option.selected;
    });

    setRightItems(prevRightItems => [...prevRightItems, ...selectedItems]);
    setLeftItems(leftItems.filter(item => !selectedItems.includes(item)));
    setRightItems(prevRightItems => {
      return prevRightItems;
    });
  };

  const handleMasterMoveLeft = () => {
    const selectedItems = rightItems.filter((_, index) => {
      const option = document.getElementById(`rightItem${index}`);
      return option.selected;
    });
    setLeftItems([...leftItems, ...selectedItems]);
    setRightItems(rightItems.filter(item => !selectedItems.includes(item)));
  };

  //---------------------------Master Control End---------------------------//

  //---------------------------Assets Control ------------------------------//

  const handleAssetsMoveRight = () => {
    const selectedItems = assetsLeftItems.filter((_, index) => {
      const option = document.getElementById(`assetsLeftItem${index}`);
      return option.selected;
    });
    setAssetsRightItems(prevRightItems => [
      ...prevRightItems,
      ...selectedItems,
    ]);
    setAssetsLeftItems(
      assetsLeftItems.filter(item => !selectedItems.includes(item))
    );
    setAssetsRightItems(prevRightItems => {
      return prevRightItems;
    });
  };

  const handleAssetsMoveLeft = () => {
    const selectedItems = assetsRightItems.filter((_, index) => {
      const option = document.getElementById(`assetsRightItem${index}`);
      return option.selected;
    });
    setAssetsLeftItems([...assetsLeftItems, ...selectedItems]);
    setAssetsRightItems(
      assetsRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  //---------------------------Assets Control End------------------------------//

  //---------------------------Transer Control ------------------------------//

  const handleTransferMoveRight = () => {
    const selectedItems = transfersLeftItems.filter((_, index) => {
      const option = document.getElementById(`transferLeftItem${index}`);
      return option.selected;
    });
    setTransferRightItems([...transferRightItems, ...selectedItems]);
    setTransfersLeftItems(
      transfersLeftItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleTransferMoveLeft = () => {
    const selectedItems = transferRightItems.filter((_, index) => {
      const option = document.getElementById(`transferRightItem${index}`);
      return option.selected;
    });
    setTransfersLeftItems([...transfersLeftItems, ...selectedItems]);
    setTransferRightItems(
      transferRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  //---------------------------Transer Control End ------------------------------//

  //---------------------------Tags Control ------------------------------//

  const handleTagsMoveRight = () => {
    const selectedItems = tagsLeftItems.filter((_, index) => {
      const option = document.getElementById(`tagsLeftItem${index}`);
      return option.selected;
    });
    setTagsRightItems([...tagsRightItems, ...selectedItems]);
    setTagsLeftItems(
      tagsLeftItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleTagsMoveLeft = () => {
    const selectedItems = tagsRightItems.filter((_, index) => {
      const option = document.getElementById(`tagsRightItem${index}`);
      return option.selected;
    });
    setTagsLeftItems([...tagsLeftItems, ...selectedItems]);
    setTagsRightItems(
      tagsRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  //---------------------------Tags Control End------------------------------//

  //---------------------------Reports Control------------------------------//
  const handleReportsMoveRight = () => {
    const selectedItems = reportsLeftItems.filter((_, index) => {
      const option = document.getElementById(`reportsLeftItem${index}`);
      return option.selected;
    });
    setReportsRightItems([...reportsRightItems, ...selectedItems]);
    setReportsLeftItems(
      reportsLeftItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleReportsMoveLeft = () => {
    const selectedItems = reportsRightItems.filter((_, index) => {
      const option = document.getElementById(`reportsRightItem${index}`);
      return option.selected;
    });
    setReportsLeftItems([...reportsLeftItems, ...selectedItems]);
    setReportsRightItems(
      reportsRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  //---------------------------Reports Control End------------------------------//

  const handleReportCheckboxChange = event => {
    setShowAllReports(event.target.checked);
    if (event.target.checked) {
      setReportsLeftItems([
        "MASTER REPORT",
        "FINANCIAL YEAR REPORT",
        "ASSET REPORT",
        "TRANSFER REPORT",
      ]);
      setReportsRightItems([]);
    } else {
      setReportsLeftItems([]);
      setReportsRightItems([]);
    }
  };

  const handleAssetsCheckboxChange = event => {
    setShowAllasset(event.target.checked);
    let newAssets = submodule.filter(res => {
      return res.idmodule.nmModule === "ASSET\n";
    });
    console.log("Assests", newAssets);
    if (event.target.checked) {
      setAssetsLeftItems(newAssets);
    } else {
      setAssetsLeftItems([]);
      setAssetsRightItems([]);
    }
  };

  const handleMasterCheckboxChange = event => {
    setShowAll(event.target.checked);
    let newMaster = submodule.filter(res => {
      return res.idmodule.nmModule === "MASTER";
    });
    if (event.target.checked) {
      setLeftItems(newMaster);
    } else {
      setLeftItems([]);
      setRightItems([]);
    }
  };

  const handleTransferCheckboxChange = event => {
    setShowAlltransfer(event.target.checked);
    if (event.target.checked) {
      setTransfersLeftItems([
        "INTRA TRANSFER APPROVE",
        "INTRA TRANSFER REQUEST",
        "INTER TRANSFER APPROVE",
        "INTERTRANSFER REQUEST",
      ]);
      setTransferRightItems([]);
    } else {
      setTransfersLeftItems([]);
      setTransferRightItems([]);
    }
  };
  const handleTaggingCheckboxChange = event => {
    setShowAllTags(event.target.checked);
    if (event.target.checked) {
      setTagsLeftItems(["TAG PRINTING", "QR PRINTING", "SCANNING"]);
      setTagsRightItems([]);
    } else {
      setTagsLeftItems([]);
      setTagsRightItems([]);
    }
  };

  const handleDashboardMoveRight = () => {
    const selectedItems = dashboardLeftItems.filter((_, index) => {
      const option = document.getElementById(`dashboardLeftItem${index}`);
      return option.selected;
    });
    setDashboardRightItems([...dashboardRightItems, ...selectedItems]);
    setDashboardLeftItems(
      dashboardLeftItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleDashboardMoveLeft = () => {
    const selectedItems = dashboardRightItems.filter((_, index) => {
      const option = document.getElementById(`dashboardRightItem${index}`);
      return option.selected;
    });
    setDashboardLeftItems([...dashboardLeftItems, ...selectedItems]);
    setDashboardRightItems(
      dashboardRightItems.filter(item => !selectedItems.includes(item))
    );
  };

  const handleDashboardCheckboxChange = event => {
    setShowAllDashboard(event.target.checked);
    if (event.target.checked) {
      setDashboardLeftItems([
        "HARDWARE STATUS",
        "SOFTWARE STATUS",
        "ASSETS",
        "LOCATION WISE",
      ]);
      setDashboardRightItems([]);
    } else {
      setDashboardLeftItems([]);
      setDashboardRightItems([]);
    }
  };

  const handleOptionClick = (item, setter) => {
    console.log(setter, "setting option");
    setter(prevOptions =>
      prevOptions.includes(item)
        ? prevOptions.filter(option => option !== item)
        : [...prevOptions, item]
    );
  };
  const validationSchema = Yup.object({
    userType: Yup.string().required("USER TYPE IS REQUIRED"),
    owner: Yup.array().min(1, "ASSET OWNER IS REQUIRED"),
    department: Yup.array().min(1, "DEPARTMENT IS REQUIRED"),
    location: Yup.array().min(1, "CITY IS REQUIRED"),
    sublocation: Yup.array().min(1, "LOCATION IS REQUIRED"),
  });

  const formik = useFormik({
    initialValues: {
      userType: "",
      owner: [],
      department: [],
      location: [],
      sublocation: [],
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      let subMod = rightItems.map(value => {
        return {
          idSubmodule: value.idSubmodule,
          nmSubmodule: value.nmSubmodule,
          idmodule: {
            idmodule: value.idmodule.idmodule,
            nmModule: value.idmodule.nmModule,
          },
        };
      });

      let subMod1 = assetsRightItems.map(value => {
        return {
          idSubmodule: value.idSubmodule,
          nmSubmodule: value.nmSubmodule,
          idmodule: {
            idmodule: value.idmodule.idmodule,
            nmModule: value.idmodule.nmModule,
          },
        };
      });

      let subMod2 = depreciationRightItems.map(value => {
        return {
          idSubmodule: value.idSubmodule,
          nmSubmodule: value.nmSubmodule,
          idmodule: {
            idmodule: value.idmodule.idmodule,
            nmModule: value.idmodule.nmModule,
          },
        };
      });

      const combinedArray = [...subMod, ...subMod1, ...subMod2];

      const depts = selectedDepartment.map(res => {
        return {
          iddept: res,
          nmdept: "string",
          cddept: "string",
        };
      });

      const Entity = selectedLocation.map(item => {
        return {
          identity: item,
          nmentity: "string",
          cdentity: "string",
        };
      });

      const sub = selectedSublocation.map(item => {
        return {
          idloc: item,
          nmLoc: "string",
          nmcountry: null,
          nmstate: null,
          nmcity: null,
          identity: null,
        };
      });

      CreateUserPermission([
        {
          idpermission: 0,
          typasst: values.owner[0],
          idccs: "string",
          usertype: {
            idusertype: Number(values.userType),
            nmusertype: "string",
          },
          submodules: combinedArray,
          iddept: depts,
          entities: Entity,
          idlocs: sub,
        },
      ])
        .then(res => {
          console.log("response", res);
          if (res.ok) {
            toast("UserPermission created successfully");
            navigate("/user_permission");
          } else if (res.status === 400) {
            toast("UserPermission already Given");
          } else {
            toast("Failed to Give Permission");
          }
        })
        .catch(err => {
          console.log(err);
        });

      console.log(depts, Entity, sub);
    },
  });

  useEffect(() => {
    if (selectedLocation.length > 1) {
      GetAllData("Location").then(res => {
        if (Array.isArray(res)) {
          let db = res.filter(res =>
            selectedLocation.includes(res?.identity?.identity)
          );
          setAllLocation(db);
        } else {
          setAllLocation([]);
        }
      });
    } else {
      let db = allLocation.filter(res =>
        selectedLocation.includes(res?.identity?.identity)
      );
      setAllLocation(db);
    }
  }, [selectedLocation]);

  const handleOptionClick2 = (id, setSelected) => {
    const index = selectedSublocation.indexOf(id);
    if (index === -1) {
      setSelected([...selectedSublocation, id]);
    } else {
      const updatedSelected = [...selectedSublocation];
      updatedSelected.splice(index, 1);
      setSelected(updatedSelected);
    }
  };
  return (
    <div className="page-content">
      <div className="container-fluid">
        <ToastContainer></ToastContainer>
        <Card>
          <CardHeader>
            <h4>USER PERMISSION</h4>
          </CardHeader>
          <CardBody>
            <form onSubmit={formik.handleSubmit}>
              <Row className="m-2">
                <Col md={2}>
                  <Label style={{ fontWeight: "bold" }}>
                    USER TYPE<font color="red">*</font>
                  </Label>
                </Col>
                <Col md={10}>
                  <Input
                    type="select"
                    id="userType"
                    name="userType"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userType}
                  >
                    <option value="">SELECT USER TYPE</option>
                    {userType &&
                      userType.map((item, index) => (
                        <option key={index} value={item.idusertype}>
                          {item.nmusertype}
                        </option>
                      ))}
                  </Input>
                  {formik.touched.userType && formik.errors.userType ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.userType}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <hr className="mb-3 mt-3" />
              {/* //------------------------Master--------------------------------// */}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleMasterCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>Master</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAll}
                  >
                    {leftItems &&
                      leftItems.map((item, index) => (
                        <option key={index} id={`leftItem${index}`}>
                          {item.nmSubmodule}
                        </option>
                      ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleMasterMoveRight}>Right »</Button>
                  <Button onClick={handleMasterMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAll}
                  >
                    {rightItems.map((item, index) => (
                      <option key={index} id={`rightItem${index}`}>
                        {item.nmSubmodule}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
              {/* //-----------------------------------Master End-----------------------// */}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleAssetsCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>ASSETS</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllasset}
                  >
                    {assetsLeftItems.map((item, index) => (
                      <option key={index} id={`assetsLeftItem${index}`}>
                        {item.nmSubmodule}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleAssetsMoveRight}>Right »</Button>
                  <Button onClick={handleAssetsMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllasset}
                  >
                    {assetsRightItems.map((item, index) => (
                      <option key={index} id={`assetsRightItem${index}`}>
                        {item.nmSubmodule}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleTransferCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>TRANSFER</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAlltransfer}
                  >
                    {transfersLeftItems.map((item, index) => (
                      <option key={index} id={`transferLeftItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleTransferMoveRight}>Right »</Button>
                  <Button onClick={handleTransferMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAlltransfer}
                  >
                    {transferRightItems.map((item, index) => (
                      <option key={index} id={`transferRightItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleTaggingCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>TAGGING</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllTags}
                  >
                    {tagsLeftItems.map((item, index) => (
                      <option key={index} id={`tagsLeftItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleTagsMoveRight}>Right »</Button>
                  <Button onClick={handleTagsMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllTags}
                  >
                    {tagsRightItems.map((item, index) => (
                      <option key={index} id={`tagsRightItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleDepreciationCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>DEPRECIATION</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllDepreciation}
                  >
                    {depreciationLeftItems.map((item, index) => (
                      <option key={index} id={`depreciationLeftItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleDepreciationMoveRight}>Right »</Button>
                  <Button onClick={handleDepreciationMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllDepreciation}
                  >
                    {depreciationRightItems.map((item, index) => (
                      <option key={index} id={`depreciationRightItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleReportCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>REPORTS</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllReports}
                  >
                    {reportsLeftItems.map((item, index) => (
                      <option key={index} id={`reportsLeftItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleReportsMoveRight}>Right »</Button>
                  <Button onClick={handleReportsMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllReports}
                  >
                    {reportsRightItems.map((item, index) => (
                      <option key={index} id={`reportsRightItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Row className="m-2">
                <Col md={2} style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="checkbox"
                    className="form-check-input m-2"
                    id="formrow-customCheck"
                    onChange={handleDashboardCheckboxChange}
                  />
                  <Label style={{ marginBottom: "0" }}>DASHBOARD</Label>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllDashboard}
                  >
                    {dashboardLeftItems.map((item, index) => (
                      <option key={index} id={`dashboardLeftItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-evenly align-items-center"
                >
                  <Button onClick={handleDashboardMoveRight}>Right »</Button>
                  <Button onClick={handleDashboardMoveLeft}>« Left</Button>
                </Col>
                <Col md={4}>
                  <select
                    multiple
                    className="w-100 h-100"
                    style={{ minHeight: "150px" }}
                    disabled={!showAllDashboard}
                  >
                    {dashboardRightItems.map((item, index) => (
                      <option key={index} id={`dashboardRightItem${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>{" "}
              <Card className="mb-4">
                <Row className="mb-3">
                  <Col md={3} className="text-center">
                    <FormGroup>
                      <Label>
                        ASSET OWNER<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="owner"
                        id="owner"
                        multiple
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik.touched.owner && formik.errors.owner}
                        style={{ height: "200px" }}
                      >
                        {owners.map(item => (
                          <option
                            key={item}
                            value={item}
                            onClick={() =>
                              handleOptionClick(item, setSelectedOwner)
                            }
                            style={{
                              backgroundColor: selectedOwner.includes(item)
                                ? "#c3e6cb"
                                : "inherit",
                            }}
                          >
                            {item}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.owner && formik.errors.owner ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.owner}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={3} className="text-center">
                    <FormGroup>
                      <Label>
                        DEPARTMENT<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="department"
                        id="department"
                        multiple
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={
                          formik.touched.department && formik.errors.department
                        }
                        style={{ height: "200px" }}
                      >
                        {dept.map(item => (
                          <option
                            key={item.iddept}
                            value={item.iddept}
                            onClick={() =>
                              handleOptionClick(
                                item.iddept,
                                setSelectedDepartment
                              )
                            }
                            style={{
                              backgroundColor: selectedDepartment.includes(
                                item.iddept
                              )
                                ? "#c3e6cb"
                                : "inherit",
                            }}
                          >
                            {item.nmdept}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.department && formik.errors.department ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.department}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={3} className="text-center">
                    <FormGroup>
                      <Label>
                        ENTITY<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="location"
                        id="location"
                        multiple
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={
                          formik.touched.location && formik.errors.location
                        }
                        style={{ height: "200px" }}
                      >
                        {location.map(item => (
                          <option
                            key={item}
                            value={item.identity}
                            onClick={() =>
                              handleOptionClick(
                                item.identity,
                                setSelectedLocation
                              )
                            }
                            style={{
                              backgroundColor: selectedLocation.includes(
                                item.identity
                              )
                                ? "#c3e6cb"
                                : "inherit",
                            }}
                          >
                            {item.nmentity}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.location && formik.errors.location ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.location}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={3} className="text-center">
                    <FormGroup>
                      <Label>
                        LOCATION<font color="red">*</font>
                      </Label>
                      <Input
                        type="select"
                        name="sublocation"
                        id="sublocation"
                        multiple
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={
                          formik.touched.sublocation &&
                          formik.errors.sublocation
                        }
                        style={{ height: "200px" }}
                      >
                        {allLocation.map(item => (
                          <option
                            key={item.idloc}
                            value={item.idloc}
                            onClick={() =>
                              handleOptionClick2(
                                item.idloc,
                                setSelectedSublocation
                              )
                            }
                            style={{
                              backgroundColor: selectedSublocation.includes(
                                item.idloc
                              )
                                ? "#c3e6cb"
                                : "inherit",
                            }}
                          >
                            {item.nmcountry}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.sublocation &&
                      formik.errors.sublocation ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.sublocation}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
              </Card>
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
                    CREATE
                  </Button>
                  <button
                    type="button"
                    className="btn btn-secondary-subtle border border-secondary"
                    onClick={() => {
                      navigate("/user_permission");
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserPermissionCreate;

// import React, { useEffect, useState } from "react";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// import {
//   Button,
//   Card,
//   Label,
//   FormGroup,
//   CardHeader,
//   Col,
//   Input,
//   Row,
//   CardBody,
// } from "reactstrap";
// import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.min.css";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { GetAllData } from "src/API/Master/GlobalGet";

// const UserPermissionCreate = () => {
//   const navigate = useNavigate();

//   const [leftItems, setLeftItems] = useState([]);
//   const [rightItems, setRightItems] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   const [assetsLeftItems, setAssetsLeftItems] = useState([]);
//   const [assetsRightItems, setAssetsRightItems] = useState([]);
//   const [showAllasset, setShowAllasset] = useState(false);

//   const [transfersLeftItems, setTransfersLeftItems] = useState([]);
//   const [transferRightItems, setTransferRightItems] = useState([]);
//   const [showAlltransfer, setShowAlltransfer] = useState(false);

//   const [tagsLeftItems, setTagsLeftItems] = useState([]);
//   const [tagsRightItems, setTagsRightItems] = useState([]);
//   const [showAllTags, setShowAllTags] = useState(false);

//   const [reportsLeftItems, setReportsLeftItems] = useState([]);
//   const [reportsRightItems, setReportsRightItems] = useState([]);
//   const [showAllReports, setShowAllReports] = useState(false);

//   const [depreciationLeftItems, setDepreciationLeftItems] = useState([]);
//   const [depreciationRightItems, setDepreciationRightItems] = useState([]);
//   const [showAllDepreciation, setShowAllDepreciation] = useState(false);

//   const [dashboardLeftItems, setDashboardLeftItems] = useState([]);
//   const [dashboardRightItems, setDashboardRightItems] = useState([]);
//   const [showAllDashboard, setShowAllDashboard] = useState(false);

//   const [selectedOwner, setSelectedOwner] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState([]);
//   const [selectedSublocation, setSelectedSublocation] = useState([]);
//   const owners = ["IT", "NON-IT", "SOFTWARE"];
//   const departments = ["ACTIVITY ROOM", "ACE ACADEMY", "ADMIN"];
//   const locations = ["BENGALORE", "CHITRADURGA", "MYSORE"];
//   const sublocations = ["KALYAN NAGARA", "CHALLAKERE", "VIJAYA NAGARA"];

//   const [userType, setUserType] = useState([]);

//   useEffect(() => {
//     GetAllData("Usertype").then(res => {
//       console.log("userType", res);
//       if (Array.isArray(res)) {
//         setUserType(res);
//       } else {
//         setUserType([]);
//       }
//     });
//   }, []);

//   const handleDepreciationMoveRight = () => {
//     const selectedItems = depreciationLeftItems.filter((_, index) => {
//       const option = document.getElementById(`depreciationLeftItem${index}`);
//       return option.selected;
//     });
//     setDepreciationRightItems([...depreciationRightItems, ...selectedItems]);
//     setDepreciationLeftItems(
//       depreciationLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleDepreciationMoveLeft = () => {
//     const selectedItems = depreciationRightItems.filter((_, index) => {
//       const option = document.getElementById(`depreciationRightItem${index}`);
//       return option.selected;
//     });
//     setDepreciationLeftItems([...depreciationLeftItems, ...selectedItems]);
//     setDepreciationRightItems(
//       depreciationRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleDepreciationCheckboxChange = event => {
//     setShowAllDepreciation(event.target.checked);
//     if (event.target.checked) {
//       setDepreciationLeftItems(["CA YEARLY", "IT ACT", "ADDITION/DELETION"]);
//       setDepreciationRightItems([]);
//     } else {
//       setDepreciationLeftItems([]);
//       setDepreciationRightItems([]);
//     }
//   };
//   const handleMasterMoveRight = () => {
//     const selectedItems = leftItems.filter((_, index) => {
//       const option = document.getElementById(`leftItem${index}`);
//       return option.selected;
//     });
//     setRightItems([...rightItems, ...selectedItems]);
//     setLeftItems(leftItems.filter(item => !selectedItems.includes(item)));
//   };

//   const handleMasterMoveLeft = () => {
//     const selectedItems = rightItems.filter((_, index) => {
//       const option = document.getElementById(`rightItem${index}`);
//       return option.selected;
//     });
//     setLeftItems([...leftItems, ...selectedItems]);
//     setRightItems(rightItems.filter(item => !selectedItems.includes(item)));
//   };

//   const handleAssetsMoveRight = () => {
//     const selectedItems = assetsLeftItems.filter((_, index) => {
//       const option = document.getElementById(`assetsLeftItem${index}`);
//       return option.selected;
//     });
//     setAssetsRightItems([...assetsRightItems, ...selectedItems]);
//     setAssetsLeftItems(
//       assetsLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleAssetsMoveLeft = () => {
//     const selectedItems = assetsRightItems.filter((_, index) => {
//       const option = document.getElementById(`assetsRightItem${index}`);
//       return option.selected;
//     });
//     setAssetsLeftItems([...assetsLeftItems, ...selectedItems]);
//     setAssetsRightItems(
//       assetsRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleTransferMoveRight = () => {
//     const selectedItems = transfersLeftItems.filter((_, index) => {
//       const option = document.getElementById(`transferLeftItem${index}`);
//       return option.selected;
//     });
//     setTransferRightItems([...transferRightItems, ...selectedItems]);
//     setTransfersLeftItems(
//       transfersLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleTransferMoveLeft = () => {
//     const selectedItems = transferRightItems.filter((_, index) => {
//       const option = document.getElementById(`transferRightItem${index}`);
//       return option.selected;
//     });
//     setTransfersLeftItems([...transfersLeftItems, ...selectedItems]);
//     setTransferRightItems(
//       transferRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleTagsMoveRight = () => {
//     const selectedItems = tagsLeftItems.filter((_, index) => {
//       const option = document.getElementById(`tagsLeftItem${index}`);
//       return option.selected;
//     });
//     setTagsRightItems([...tagsRightItems, ...selectedItems]);
//     setTagsLeftItems(
//       tagsLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleTagsMoveLeft = () => {
//     const selectedItems = tagsRightItems.filter((_, index) => {
//       const option = document.getElementById(`tagsRightItem${index}`);
//       return option.selected;
//     });
//     setTagsLeftItems([...tagsLeftItems, ...selectedItems]);
//     setTagsRightItems(
//       tagsRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleReportsMoveRight = () => {
//     const selectedItems = reportsLeftItems.filter((_, index) => {
//       const option = document.getElementById(`reportsLeftItem${index}`);
//       return option.selected;
//     });
//     setReportsRightItems([...reportsRightItems, ...selectedItems]);
//     setReportsLeftItems(
//       reportsLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleReportsMoveLeft = () => {
//     const selectedItems = reportsRightItems.filter((_, index) => {
//       const option = document.getElementById(`reportsRightItem${index}`);
//       return option.selected;
//     });
//     setReportsLeftItems([...reportsLeftItems, ...selectedItems]);
//     setReportsRightItems(
//       reportsRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleReportCheckboxChange = event => {
//     setShowAllReports(event.target.checked);
//     if (event.target.checked) {
//       setReportsLeftItems([
//         "MASTER REPORT",
//         "FINANCIAL YEAR REPORT",
//         "ASSET REPORT",
//         "TRANSFER REPORT",
//       ]);
//       setReportsRightItems([]);
//     } else {
//       setReportsLeftItems([]);
//       setReportsRightItems([]);
//     }
//   };

//   const handleAssetsCheckboxChange = event => {
//     setShowAllasset(event.target.checked);
//     if (event.target.checked) {
//       setAssetsLeftItems([
//         "ADD NEW ASSET",
//         "APPROVE NEW ASSET ",
//         "ALLOCATE ASSETS",
//         "DE-ALLOCATE ASSETS",
//         "BULK ASSET ALLOCATION",
//         "DAMAGED ASSET",
//         "APPROVE DAMAGED ASSET",
//       ]);
//       setAssetsRightItems([]);
//     } else {
//       setAssetsLeftItems([]);
//       setAssetsRightItems([]);
//     }
//   };

//   const handleMasterCheckboxChange = event => {
//     setShowAll(event.target.checked);
//     if (event.target.checked) {
//       setLeftItems([
//         "COMPANY MASTER",
//         "BRANCH",
//         "PLANT",
//         "DESIGNATION MASTER",
//         "EMPLOYEE MASTER",
//         "UOM",
//         "UOM CONVERSION",
//         "DOA",
//       ]);
//       setRightItems([]);
//     } else {
//       setLeftItems([]);
//       setRightItems([]);
//     }
//   };

//   const handleTransferCheckboxChange = event => {
//     setShowAlltransfer(event.target.checked);
//     if (event.target.checked) {
//       setTransfersLeftItems([
//         "INTRA TRANSFER APPROVE",
//         "INTRA TRANSFER REQUEST",
//         "INTER TRANSFER APPROVE",
//         "INTERTRANSFER REQUEST",
//       ]);
//       setTransferRightItems([]);
//     } else {
//       setTransfersLeftItems([]);
//       setTransferRightItems([]);
//     }
//   };
//   const handleTaggingCheckboxChange = event => {
//     setShowAllTags(event.target.checked);
//     if (event.target.checked) {
//       setTagsLeftItems(["TAG PRINTING", "QR PRINTING", "SCANNING"]);
//       setTagsRightItems([]);
//     } else {
//       setTagsLeftItems([]);
//       setTagsRightItems([]);
//     }
//   };

//   const handleDashboardMoveRight = () => {
//     const selectedItems = dashboardLeftItems.filter((_, index) => {
//       const option = document.getElementById(`dashboardLeftItem${index}`);
//       return option.selected;
//     });
//     setDashboardRightItems([...dashboardRightItems, ...selectedItems]);
//     setDashboardLeftItems(
//       dashboardLeftItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleDashboardMoveLeft = () => {
//     const selectedItems = dashboardRightItems.filter((_, index) => {
//       const option = document.getElementById(`dashboardRightItem${index}`);
//       return option.selected;
//     });
//     setDashboardLeftItems([...dashboardLeftItems, ...selectedItems]);
//     setDashboardRightItems(
//       dashboardRightItems.filter(item => !selectedItems.includes(item))
//     );
//   };

//   const handleDashboardCheckboxChange = event => {
//     setShowAllDashboard(event.target.checked);
//     if (event.target.checked) {
//       setDashboardLeftItems([
//         "HARDWARE STATUS",
//         "SOFTWARE STATUS",
//         "ASSETS",
//         "LOCATION WISE",
//       ]);
//       setDashboardRightItems([]);
//     } else {
//       setDashboardLeftItems([]);
//       setDashboardRightItems([]);
//     }
//   };
//   const handleOptionClick = (item, setter) => {
//     setter(prevOptions =>
//       prevOptions.includes(item)
//         ? prevOptions.filter(option => option !== item)
//         : [...prevOptions, item]
//     );
//   };
//   const validationSchema = Yup.object({
//     userType: Yup.string().required("USER TYPE IS REQUIRED"),
//     owner: Yup.array().min(1, "ASSET OWNER IS REQUIRED"),
//     department: Yup.array().min(1, "DEPARTMENT IS REQUIRED"),
//     location: Yup.array().min(1, "CITY IS REQUIRED"),
//     sublocation: Yup.array().min(1, "LOCATION IS REQUIRED"),
//   });

//   // Initialize formik
//   const formik = useFormik({
//     initialValues: {
//       userType: "",
//       owner: [],
//       department: [],
//       location: [],
//       sublocation: [],
//     },
//     validationSchema: validationSchema,
//     onSubmit: values => {
//       // Submit logic goes here
//       alert("Form validated and submitted!");
//     },
//   });

//   return (
//     <div className="page-content">
//       <div className="container-fluid">
//         <Card>
//           <CardHeader>
//             <h4>USER PERMISSION</h4>
//           </CardHeader>
//           <CardBody>
//             <form onSubmit={formik.handleSubmit}>
//               <Row className="m-2">
//                 <Col md={2}>
//                   <Label style={{ fontWeight: "bold" }}>
//                     USER TYPE<font color="red">*</font>
//                   </Label>
//                 </Col>
//                 <Col md={10}>
//                   <Input
//                     type="select"
//                     id="userType"
//                     name="userType"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.userType}
//                   >
//                     <option value="">SELECT USER TYPE</option>
//                     {userType &&
//                       userType.map(item => (
//                         <option value="ADMIN">ADMIN</option>
//                       ))}
//                   </Input>
//                   {formik.touched.userType && formik.errors.userType ? (
//                     <div style={{ color: "red", fontSize: "12px" }}>
//                       {formik.errors.userType}
//                     </div>
//                   ) : null}
//                 </Col>
//               </Row>
//               <hr className="mb-3 mt-3" />
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleMasterCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>MASTER</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAll}
//                   >
//                     {leftItems.map((item, index) => (
//                       <option key={index} id={`leftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleMasterMoveRight}>Right »</Button>
//                   <Button onClick={handleMasterMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAll}
//                   >
//                     {rightItems.map((item, index) => (
//                       <option key={index} id={`rightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleAssetsCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>ASSETS</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllasset}
//                   >
//                     {assetsLeftItems.map((item, index) => (
//                       <option key={index} id={`assetsLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleAssetsMoveRight}>Right »</Button>
//                   <Button onClick={handleAssetsMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllasset}
//                   >
//                     {assetsRightItems.map((item, index) => (
//                       <option key={index} id={`assetsRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleTransferCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>TRANSFER</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAlltransfer}
//                   >
//                     {transfersLeftItems.map((item, index) => (
//                       <option key={index} id={`transferLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleTransferMoveRight}>Right »</Button>
//                   <Button onClick={handleTransferMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAlltransfer}
//                   >
//                     {transferRightItems.map((item, index) => (
//                       <option key={index} id={`transferRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleTaggingCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>TAGGING</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllTags}
//                   >
//                     {tagsLeftItems.map((item, index) => (
//                       <option key={index} id={`tagsLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleTagsMoveRight}>Right »</Button>
//                   <Button onClick={handleTagsMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllTags}
//                   >
//                     {tagsRightItems.map((item, index) => (
//                       <option key={index} id={`tagsRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleDepreciationCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>DEPRECIATION</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllDepreciation}
//                   >
//                     {depreciationLeftItems.map((item, index) => (
//                       <option key={index} id={`depreciationLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleDepreciationMoveRight}>Right »</Button>
//                   <Button onClick={handleDepreciationMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllDepreciation}
//                   >
//                     {depreciationRightItems.map((item, index) => (
//                       <option key={index} id={`depreciationRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleReportCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>REPORTS</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllReports}
//                   >
//                     {reportsLeftItems.map((item, index) => (
//                       <option key={index} id={`reportsLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleReportsMoveRight}>Right »</Button>
//                   <Button onClick={handleReportsMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllReports}
//                   >
//                     {reportsRightItems.map((item, index) => (
//                       <option key={index} id={`reportsRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Row className="m-2">
//                 <Col md={2} style={{ display: "flex", alignItems: "center" }}>
//                   <Input
//                     type="checkbox"
//                     className="form-check-input m-2"
//                     id="formrow-customCheck"
//                     onChange={handleDashboardCheckboxChange}
//                   />
//                   <Label style={{ marginBottom: "0" }}>DASHBOARD</Label>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllDashboard}
//                   >
//                     {dashboardLeftItems.map((item, index) => (
//                       <option key={index} id={`dashboardLeftItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//                 <Col
//                   md={2}
//                   className="d-flex justify-content-evenly align-items-center"
//                 >
//                   <Button onClick={handleDashboardMoveRight}>Right »</Button>
//                   <Button onClick={handleDashboardMoveLeft}>« Left</Button>
//                 </Col>
//                 <Col md={4}>
//                   <select
//                     multiple
//                     className="w-100 h-100"
//                     style={{ minHeight: "150px" }}
//                     disabled={!showAllDashboard}
//                   >
//                     {dashboardRightItems.map((item, index) => (
//                       <option key={index} id={`dashboardRightItem${index}`}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </Col>
//               </Row>{" "}
//               <Card className="mb-4">
//                 <Row className="mb-3">
//                   <Col md={3} className="text-center">
//                     <FormGroup>
//                       <Label>
//                         ASSET OWNER<font color="red">*</font>
//                       </Label>
//                       <Input
//                         type="select"
//                         name="owner"
//                         id="owner"
//                         multiple
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         invalid={formik.touched.owner && formik.errors.owner}
//                         style={{ height: "200px" }}
//                       >
//                         {owners.map(item => (
//                           <option
//                             key={item}
//                             value={item}
//                             onClick={() =>
//                               handleOptionClick(item, setSelectedOwner)
//                             }
//                             style={{
//                               backgroundColor: selectedOwner.includes(item)
//                                 ? "#c3e6cb"
//                                 : "inherit",
//                             }}
//                           >
//                             {item}
//                           </option>
//                         ))}
//                       </Input>
//                       {formik.touched.owner && formik.errors.owner ? (
//                         <div className="invalid-feedback d-block">
//                           {formik.errors.owner}
//                         </div>
//                       ) : null}
//                     </FormGroup>
//                   </Col>
//                   <Col md={3} className="text-center">
//                     <FormGroup>
//                       <Label>
//                         DEPARTMENT<font color="red">*</font>
//                       </Label>
//                       <Input
//                         type="select"
//                         name="department"
//                         id="department"
//                         multiple
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         invalid={
//                           formik.touched.department && formik.errors.department
//                         }
//                         style={{ height: "200px" }}
//                       >
//                         {departments.map(item => (
//                           <option
//                             key={item}
//                             value={item}
//                             onClick={() =>
//                               handleOptionClick(item, setSelectedDepartment)
//                             }
//                             style={{
//                               backgroundColor: selectedDepartment.includes(item)
//                                 ? "#c3e6cb"
//                                 : "inherit",
//                             }}
//                           >
//                             {item}
//                           </option>
//                         ))}
//                       </Input>
//                       {formik.touched.department && formik.errors.department ? (
//                         <div className="invalid-feedback d-block">
//                           {formik.errors.department}
//                         </div>
//                       ) : null}
//                     </FormGroup>
//                   </Col>
//                   <Col md={3} className="text-center">
//                     <FormGroup>
//                       <Label>
//                         CITY<font color="red">*</font>
//                       </Label>
//                       <Input
//                         type="select"
//                         name="location"
//                         id="location"
//                         multiple
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         invalid={
//                           formik.touched.location && formik.errors.location
//                         }
//                         style={{ height: "200px" }}
//                       >
//                         {locations.map(item => (
//                           <option
//                             key={item}
//                             value={item}
//                             onClick={() =>
//                               handleOptionClick(item, setSelectedLocation)
//                             }
//                             style={{
//                               backgroundColor: selectedLocation.includes(item)
//                                 ? "#c3e6cb"
//                                 : "inherit",
//                             }}
//                           >
//                             {item}
//                           </option>
//                         ))}
//                       </Input>
//                       {formik.touched.location && formik.errors.location ? (
//                         <div className="invalid-feedback d-block">
//                           {formik.errors.location}
//                         </div>
//                       ) : null}
//                     </FormGroup>
//                   </Col>
//                   <Col md={3} className="text-center">
//                     <FormGroup>
//                       <Label>
//                         LOCATION<font color="red">*</font>
//                       </Label>
//                       <Input
//                         type="select"
//                         name="sublocation"
//                         id="sublocation"
//                         multiple
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         invalid={
//                           formik.touched.sublocation &&
//                           formik.errors.sublocation
//                         }
//                         style={{ height: "200px" }}
//                       >
//                         {sublocations.map(item => (
//                           <option
//                             key={item}
//                             value={item}
//                             onClick={() =>
//                               handleOptionClick(item, setSelectedSublocation)
//                             }
//                             style={{
//                               backgroundColor: selectedSublocation.includes(
//                                 item
//                               )
//                                 ? "#c3e6cb"
//                                 : "inherit",
//                             }}
//                           >
//                             {item}
//                           </option>
//                         ))}
//                       </Input>
//                       {formik.touched.sublocation &&
//                       formik.errors.sublocation ? (
//                         <div className="invalid-feedback d-block">
//                           {formik.errors.sublocation}
//                         </div>
//                       ) : null}
//                     </FormGroup>
//                   </Col>
//                 </Row>
//               </Card>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-around",
//                   }}
//                 >
//                   <Button
//                     type="submit"
//                     color="success-subtle"
//                     className="btn btn-success-subtle border border-success"
//                     style={{
//                       paddingTop: "10px",
//                       height: "45px",
//                       width: "80px",
//                       marginRight: "30px",
//                     }}
//                   >
//                     CREATE
//                   </Button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary-subtle border border-secondary"
//                     onClick={() => {
//                       navigate("/user_permission");
//                     }}
//                     style={{
//                       paddingTop: "10px",
//                       width: "80px",
//                       height: "45px",
//                     }}
//                   >
//                     <Label>BACK</Label>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UserPermissionCreate;
