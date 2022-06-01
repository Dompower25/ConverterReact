import React from "react";

function MyInput({ id, value, setCurrencyValue }) {
  return (
    <input
      className="form-control"
      value={value}
      type="number"
      id={id}
      onChange={(event) => {
        setCurrencyValue(event.target.value);
      }}
    />
  );
}

export default MyInput;
