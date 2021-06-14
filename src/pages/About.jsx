import React from "react";
import { Container, Row, Col } from "reactstrap";
import about from "../assets/About.svg";
import Image from "react-bootstrap/Image";
const Aboutus = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <img
            src={about}
            class="img-fluid mt-5 pt-5"
            alt="testimg"
          />
        </div>
        <Container id="about-cont">
          <Row>
            <Col  md={12} id="aboutcontti">
              About Us
            </Col>

            <p class="text-center">
              Dashback is a program initiated by HardCipher Private Limited
              Company.The word Dash is derived from _ _ _ _ which denotes empty
              or blank space and the word Back is taken from Cash Back.The
              combined significance of this service is to enable our users to
              collect dashes through active trading and online transcations and
              reddem your dash with real money.
              <br />
              <p className="about-secpara">
                Dashback is a program initiated by HardCipher Private Limited
                Company.The word Dash is derived from _ _ _ _ which denotes
                empty or blank space and the word Back is taken from Cash
                Back.The combined significance of this service is to enable our
                users to collect dashes through active trading and online
                transcations and reddem your dash with real money.
              </p>
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
