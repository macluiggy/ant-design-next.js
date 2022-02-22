import { Divider, Row, Col } from "antd";
import React from "react";
import { Container } from "../components/Container";

const GridSystem = () => {
  return (
    <Container>
      <Divider style={{ border: "solid" }}>1 column (24) </Divider>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna
          </div>
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>2 column (12 c/u) </Divider>
      <Row gutter={8}>
        <Col xs={24} sm={12}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna responsiva
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna responsiva
          </div>
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>3 column (8 c/u) </Divider>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna responsiva
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna responsiva
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna responsiva
          </div>
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>4 column (6 c/u) </Divider>
      <Row gutter={32}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            Columna
          </div>
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>3 column ( total 6/6 ) </Divider>
      <Row gutter={[16, 16]}>
        <Col flex={2}>
          <div style={{ backgroundColor: "green", color: "white" }}>2/6</div>
        </Col>
        <Col flex={1}>
          <div style={{ backgroundColor: "green", color: "white" }}>1/6</div>
        </Col>
        <Col flex={3}>
          <div style={{ backgroundColor: "green", color: "white" }}>3/6</div>
        </Col>
      </Row>

      <Divider style={{ border: "solid" }}>3 column ( total 6/6 ) </Divider>
      <Row gutter={[16, 16]}>
        <Col flex={"100px"}>
          <div style={{ backgroundColor: "green", color: "white" }}>100px</div>
        </Col>
        <Col flex={"100px"}>
          <div style={{ backgroundColor: "green", color: "white" }}>100px</div>
        </Col>
        <Col flex={"auto"}>
          <div style={{ backgroundColor: "green", color: "white" }}>
            resto de la fila (auto)
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GridSystem;
