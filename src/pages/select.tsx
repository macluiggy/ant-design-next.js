import { Select } from "antd";
import React from "react";
import { Container } from "../components/Container";
const { Option } = Select;

const select = () => {
  const onFocusEvent = () => {
    console.log("onFocusEvent");
  };
  const onBlurEvent = () => {
    console.log("onBlurEvent");
  };
  const onChangeEvent = (value: any) => {
    console.table("onChangeEvent", value);
  };
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
        onFocus={onFocusEvent}
        onBlur={onBlurEvent}
        onChange={onChangeEvent}
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
