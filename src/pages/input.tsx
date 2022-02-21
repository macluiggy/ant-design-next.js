import { Container } from "../components/Container";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const input = () => {
  const [inputText, setInputText] = useState({
    input: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputText, name, value);
    setInputText({ ...inputText, [name]: value });
    console.log(inputText);
  };
  return (
    <Container>
      <Input placeholder="Basic usage" size="large" prefix={<UserOutlined />} />
      <Input placeholder="Basic usage" size="middle" />
      <Input placeholder="Basic usage" size="small" />
      <Input
        placeholder="Basic usage"
        size="small"
        onChange={handleChange}
        name="input"
      />
    </Container>
  );
};

export default input;
