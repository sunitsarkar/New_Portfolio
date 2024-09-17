import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="blank" href="https://github.com/sunitsarkar"><img src={navIcon4} alt="Icon" /></a>
              <a target="blank" href="https://www.linkedin.com/in/sunitskr/"><img src={navIcon1} alt="Icon" /></a>
              <a target="blank" href="https://www.facebook.com/profile.php?id=100090071738445&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a target="blank" href="https://www.instagram.com/sunitskr?igsh=cGMzb2twcmszZHEz"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
