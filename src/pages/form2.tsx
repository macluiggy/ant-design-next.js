import React, { useState, createRef } from "react";
import { Container } from "../components/Container";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Radio,
  DatePicker,
  Select,
} from "antd";
import "moment/locale/es";
import locale from "antd/es/date-picker/locale/es_ES";
const { Password } = Input;
const { Item } = Form;
const { Group } = Radio;
const { Option } = Select;

const FormComponent = () => {
  const [value, setValue] = useState(1);
  const formRef = createRef<any>();
  const formSucces = (data) => {
    console.log("Form sent succesfully", data);
  };
  const formError = (error) => {
    console.log("Form sent with errors", error);
  };
  const onChange = (e) => setValue(e.target.value);

  const prefixSelector = (
    <Item name={"selectCodigo"} noStyle>
      <Select style={{ width: 80 }} defaultValue="86">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
        <Option value="593">+593</Option>
        <Option value="594">+594</Option>
      </Select>
    </Item>
  );

  const borrarCampos = () => {
    formRef.current.resetFields();
  };
  return (
    <Container>
      <div>
        <Row>
          <Col xs={1} sm={2} md={6} lg={7}></Col>
          <Col xs={22} sm={20} md={2} lg={10}>
            <Form
              ref={formRef}
              name="form"
              initialValues={{
                remember: true,
              }}
              onFinish={formSucces}
              onFinishFailed={formError}
            >
              <Item
                label="appellido paterno"
                rules={[
                  { required: true, message: "Pleas enter apellido paterno" },
                ]}
                name="apellidoPaterno"
              >
                <Input placeholder="apellido paterno" />
              </Item>
              <Item
                label="apellido materno"
                rules={[
                  { required: true, message: "Pleas enter apellido materno" },
                ]}
                name="apellidoMaterno"
              >
                <Input placeholder="apellido materno" />
              </Item>
              <Item
                label="nombre"
                rules={[{ required: true, message: "Pleas enter nombre" }]}
                name="nombre"
              >
                <Input placeholder="nombre" />
              </Item>
              <Item
                label="direccion"
                rules={[{ required: true, message: "Pleas enter direccion" }]}
                name="direccion"
              >
                <Input placeholder="direccion" />
              </Item>
              <Item
                label="sexo"
                rules={[{ required: true, message: "Pleas enter sexo" }]}
                name="sexo"
              >
                <Group
                  onChange={onChange}
                  value={value}
                  name={"radioButton"}
                  defaultValue={1}
                >
                  <Radio value={1}>Masculino</Radio>
                  <Radio value={2}>Femenino</Radio>
                </Group>
              </Item>
              <Item label="fecha de nacimiento" name="fechaDeNacimiento">
                <DatePicker />
              </Item>
              <Item label="numero telefonico" name="numeroTelefonico">
                <Input
                  placeholder="direccion"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  maxLength={10}
                />
              </Item>{" "}
              <Item style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Registrar usuario
                </Button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Button onClick={borrarCampos} htmlType="button">
                  Borrar campos
                </Button>
              </Item>
              {/* <Item valuePropName="checked" name="remember">
                <Checkbox>Remember user?</Checkbox>
              </Item>
              <Item>
                <Button type="primary" htmlType="submit">
                  Sutmit
                </Button> 
              </Item> */}
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FormComponent;
