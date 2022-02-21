import React, { FC } from "react";

export const Container: FC<{ children: any }> = ({ children }) => {
  return (
    <div style={{ textAlign: "center", padding: 20, margin: 20 }}>
      {children}
    </div>
  );
};
