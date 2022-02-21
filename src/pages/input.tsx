import { Container } from "../components/Container";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
// import Password from "antd/lib/input/Password";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
const { Password } = Input;
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

  const selectInicio = (
    <Select defaultValue="1">
      <Option value="1">http://</Option>
      <Option value="2">https://</Option>
    </Select>
  );
  const selectFinal = (
    <Select defaultValue="1">
      <Option value="1">.com</Option>
      <Option value="2">.net</Option>
      <Option value="3">.org</Option>
      <Option value="4">.edu</Option>
    </Select>
  );
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
      <Password placeholder="peror" bordered={false} maxLength={10} />
      <Input
        placeholder="Basic usage"
        defaultValue={"Mi sitio Web"}
        size="small"
        addonBefore={selectInicio}
        addonAfter={selectFinal}
      />
    </Container>
  );
};

export default input;
