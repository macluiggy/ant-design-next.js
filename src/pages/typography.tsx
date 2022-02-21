import { Space, Typography } from "antd";
import { Container } from "../components/Container";
const { Title, Paragraph, Text, Link } = Typography;

const typography = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((i: any) => (
        <Title key={i} level={i}>
          H{i}
        </Title>
      ))}

      <Space direction="vertical">
        <Text>default</Text>
        <Text type="secondary">secondary</Text>
        <Text type="success">success</Text>
        <Text type="warning">warning</Text>
        <Text disabled type="danger">
          danger
        </Text>
        <Text type="danger" mark>
          mark
        </Text>
        <Text code>code</Text>
        <Text keyboard>keyboard</Text>
        <Text underline>underline</Text>
        <Text strong>strong</Text>
        <Text delete>delete</Text>
        <Link target="_blank" href="/">
          home
        </Link>
        <Paragraph
          copyable={false || true || { onCopy: () => alert("copied") }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam,
          magni fugit quam, cumque ipsam ipsa alias odit aliquid perferendis
          fuga ut rem similique sint a aspernatur optio architecto delectus.
        </Paragraph>
      </Space>
    </Container>
  );
};

export default typography;
