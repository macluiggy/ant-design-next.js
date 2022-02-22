import React, { useState } from "react";
import type { NextPage } from "next";
// import { render } from "react-dom";
import { DatePicker, message, Alert, Button } from "antd";

import Link from "next/link";
// import "./index.css";

const App: NextPage = () => {
  const [date, setDate] = useState<any>(null);
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (value: any) => {
    console.log(value);
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
    setShow(true);
  };
  return (
    <div
      style={{ width: 400, margin: "100px auto" }}
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <div className="first">
        <DatePicker onChange={handleChange} />
        <Alert
          style={{
            display: show ? "block" : "none",
          }}
          message="Selected date"
          description={date ? date.format("YYYY-MM-DD") : "None"}
        />

        <Button onClick={() => setShow(false)} type="primary">
          Hide date
        </Button>
      </div>
      <Link href="buttons">
        <Button>Buttons</Button>
      </Link>
      <Link href="icons">
        <Button>Icons</Button>
      </Link>
      <Link href="typography">
        <Button>typography</Button>
      </Link>
      <Link href="input">
        <Button>input</Button>
      </Link>
      <Link href="select">
        <Button>select</Button>
      </Link>
    </div>
  );
};
export default App;
// render(<App />, document.getElementById("root"));
