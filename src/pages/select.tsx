import { Select } from "antd";
import React from "react";
import { Container } from "../components/Container";
const { Option } = Select;

const select = () => {
  return (
    <Container>
      <Select
        placeholder="selecciona un pais"
        size="large"
        showSearch
        optionFilterProp="children"
        className="select"
        mode="multiple"
        defaultValue={["1", "2"]}
      >
        <Option value="1">Mexico</Option>
        <Option value="2">USA</Option>
        <Option value="3">Canada</Option>
        <Option value="4">Chile</Option>
        <Option value="5">Argentina</Option>
      </Select>
    </Container>
  );
};

export default select;
