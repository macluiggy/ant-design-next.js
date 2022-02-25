import React from "react";
import { Container } from "../components/Container";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
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
        <Row>
          <Col xs={1} sm={2} md={6} lg={7}></Col>
          <Col xs={22} sm={20} md={2} lg={10}>
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
                label="password"
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
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FormComponent;
