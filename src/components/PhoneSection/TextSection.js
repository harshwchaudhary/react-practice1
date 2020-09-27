import React from "react";
import "./TextSection.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

const TextSection = () => {
  return (
    <>
      <section className="textSect">
        <div className="paraTop">
          <p className="para1">The Most Powerful </p>
          <p className="para1">Checking Account</p>
        </div>
        {/* <div className="paraBottom">
        <p className="para2">Our checking account gives you higher returns</p>
        <p className="para2">than a savings account with no hidden fees.</p>
      </div> */}
      </section>
      <Form className="FormMain">
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Email
            </Form.Label>
            {/* <i className="fa fa-envelope"></i> */}
            <Form.Control
              className="formSub"
              id="inlineFormInput"
              placeholder="Enter Email Address"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="btnSub">
              Join Now
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <img src={require("../../assets/images/Flag.png")} alt="Flag" />{" "}
      <p className="pText">281 spots left for Priority Access</p>
      <img
        src={require("../../assets/images/PlayStore.png")}
        alt="PlayStore"
        className="App1"
      />
      <img
        src={require("../../assets/images/AppStore.png")}
        alt="AppStore"
        className="App2"
      />
    </>
  );
};

export default TextSection;
