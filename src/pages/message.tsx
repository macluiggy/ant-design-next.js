import { Button, message } from "antd";
import React from "react";
import { Container } from "../components/Container";

const Message = () => {
  const messageSuccess = () => {
    message.success({ content: "This is a success message", className: 'messageSuccess' }, 10);
  };
  const messageError = () => {
    message.error("This is an error message");
  };
  const messageWarning = () => {
    message.warning("This is a warning message");
  };
  const messageInfo = () => {
    message.info("This is an info message");
  };
  const messageLoading = () => {
    message.loading("Loading...");
  };
  return (
    <Container>
      <Button onClick={messageSuccess}>Message Success</Button>
      <Button onClick={messageError}>Message Error</Button>
      <Button onClick={messageInfo}>Message Info</Button>
      <Button onClick={messageWarning}>Message Warning</Button>
      <Button onClick={messageLoading}>Message Loading</Button>
    </Container>
  );
};

export default Message;
