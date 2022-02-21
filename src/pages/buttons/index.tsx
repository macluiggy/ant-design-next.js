import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Container } from "../../components/Container";
// import "../components/class.css";
import styles from "./hola.module.css";

const buttons = () => {
  return (
    <Container>
      <h1>tipos de botones</h1>
      <Button type="primary" size="small">
        primary
      </Button>
      <Button type="default" size="large" onClick={() => alert("conclick")}>
        defult
      </Button>
      <Button type="link" href="http://google.com">
        Link
      </Button>

      <h3>propiedades adicionales</h3>
      <Button type="primary" danger>
        danger
      </Button>
      <Button type="ghost" ghost>
        ghost
      </Button>
      <Button disabled>disabled</Button>
      <Button type="primary" loading className="loading">
        loading
      </Button>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        shape="circle"
        className={styles.btn}
      >
        search
      </Button>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        shape="circle"
        className="btn"
      >
        search
      </Button>
    </Container>
  );
};

export default buttons;
