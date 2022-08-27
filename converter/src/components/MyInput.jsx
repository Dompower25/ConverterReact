import React from "react";

function MyInput({ value, onChange }) {
  return (
    <input
      className="form-control"
      value={value}
      type="number"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}

export default MyInput;