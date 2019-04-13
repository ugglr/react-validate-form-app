import React from "react";

const Message = ({ formErrors }) => (
  <div style={{ marginTop: "1rem" }}>
    {Object.keys(formErrors).map((err, i) => (
      <div key={i}>
        <span style={{ color: "red" }}>{formErrors[err]}</span>
        <br />
        <br />
      </div>
    ))}
  </div>
);

export default Message;
