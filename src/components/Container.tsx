import React, { FC } from "react";

export const Container: FC<{ children: any }> = ({ children }) => {
  return <div style={{ textAlign: "center" }}>{children}</div>;
};
