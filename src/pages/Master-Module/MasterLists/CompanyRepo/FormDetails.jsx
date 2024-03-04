import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Card, CardBody, CardHeader, Collapse, Button } from "reactstrap";
import classnames from "classnames";
import CompanyMaster from "./CompanyMaster"
import MailConfiguration from "./MailConfiguration";
import HelpMailDesk from "./HelpMailDesk";

const FormDetails = () => {
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };
  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
  };

 

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Region Table | Your App Title</title>
        </MetaTags>
        <Container fluid>
          <Card className="card-h-100 border shadow-none mb-0">
            <CardHeader>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <div className="avatar-sm">
                    <div className="avatar-title rounded-circle font-size-20">
                      <i className="uil uil-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="font-size-14 mb-0">FORM REGISTRATION :-</h5>
                </div>
              </div>
            </CardHeader>

            <CardBody className="p-4">
              <div
                className="accordion accordion-flush"
                id="accordion-gen-ques"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="gen-ques-headingOne">
                    <button
                      className={classnames("accordion-button", {
                        collapsed: !col1,
                      })}
                      type="button"
                      onClick={t_col1}
                      style={{ cursor: "pointer" }}
                    >
                      COMPANY-MASTER
                    </button>
                  </h2>
                  <Collapse isOpen={col1} className="accordion-collapse">
                    <CompanyMaster fun={t_col2} />
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="gen-ques-headingTwo">
                    <button
                      className={classnames("accordion-button", {
                        collapsed: !col2,
                      })}
                      type="button"
                      onClick={t_col2}
                      style={{ cursor: "pointer" }}
                    >
                      MAIL- CONFIGURATION
                    </button>
                  </h2>
                  <Collapse isOpen={col2} className="accordion-collapse">
                    <MailConfiguration fun={t_col3}/>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="gen-ques-headingThree">
                    <button
                      className={classnames("accordion-button", {
                        collapsed: !col3,
                      })}
                      type="button"
                      onClick={t_col3}
                      style={{ cursor: "pointer" }}
                    >
                      HELPDESK MAIL CONFIGURATION DETAILS
                    </button>
                  </h2>
                  <Collapse isOpen={col3} className="accordion-collapse">
                    <HelpMailDesk />
                  </Collapse>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormDetails;
