import React from "react";
import { Container } from "../components/Container";
import { Form, Input, Button, Checkbox } from "antd";
const { Password } = Input;
const { Item } = Form;

const FormComponent = () => {
  const formSucces = (data) => {
    console.log("Form sent succesfully", data);
  };
  const formError = (error) => {
    console.log("Form sent with errors", error);
  };
  return (
    <Container>
      <div>
        <Form
          name="form"
          initialValues={{
            remember: true,
          }}
          onFinish={formSucces}
          onFinishFailed={formError}
        >
          <Item
            label="user"
            rules={[{ required: true, message: "Pleas enter username" }]}
            name="username"
          >
            <Input placeholder="Username" />
          </Item>
          <Item
            label="user"
            rules={[{ required: true, message: "Pleas enter password" }]}
            name="password"
          >
            <Password placeholder="Password" />
          </Item>{" "}
          <Item valuePropName="checked" name="remember">
            <Checkbox>Remember user?</Checkbox>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Sutmit
            </Button>
          </Item>
        </Form>
      </div>
    </Container>
  );
};

export default FormComponent;
