import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import { Row, Col } from "antd";
import "./style/common.scss"
export default class Admin extends Component {
  render() {
  
    return (
      <div>
        <Row className="container">
          <Col span="4" className="nav-left">
            <NavLeft />
          </Col>
          <Col span="20" className="main">
            <Header />
            <Row className="content">Content</Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
