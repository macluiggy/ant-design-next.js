import {
  AlibabaOutlined,
  DeleteFilled,
  Html5TwoTone,
  PieChartOutlined,
  SkypeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Container } from "../components/Container";
import "antd/dist/antd.css";

const icons = () => {
  return (
    <Container>
      <Button>Default Button</Button>
      <br />
      <Button type="text" className="text-3xl font-bold underline ">
        Text Button
      </Button>
      <Button type="link">Link Button</Button>
      <PieChartOutlined
        style={{ fontSize: 90, color: "red" }}
        spin={!!"hello"}
      />
      <SkypeOutlined style={{ fontSize: 90, color: "aqua" }} />
      <AlibabaOutlined style={{ fontSize: 90, color: "orange" }} />
      <DeleteFilled style={{ fontSize: 90, color: "blue" }} rotate={90} />
      <Html5TwoTone style={{ fontSize: 90 }} twoToneColor="orange" />
    </Container>
  );
};

export default icons;
