import { Divider, Row, Col } from "antd";
import React from "react";
import { Container } from "../components/Container";

const GridSystem = () => {
  return (
    <Container>
      <Divider style={{ border: "solid" }}>1 column (24) </Divider>
      <Row>
        <Col span={24} style={{ backgroundColor: "GREEN", color: "whIte" }}>
          Columna
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>2 column (12 c/u) </Divider>
      <Row>
        <Col span={12} style={{ backgroundColor: "GREEN", color: "whIte" }}>
          Columna
        </Col>
        <Col span={12} style={{ backgroundColor: "GREEN", color: "whIte" }}>
          Columna
        </Col>
      </Row>
    </Container>
  );
};

export default GridSystem;
