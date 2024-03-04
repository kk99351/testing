import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>{"Copyright © "+new Date().getFullYear()}</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
              HOLKAR CONSULTANCY SERVICE TECHNOLOGIES PVT LTD <Link to="https://ezatlas.com/" target="_blank" rel="noreferrer" className="text-reset">All rights reserved.</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;