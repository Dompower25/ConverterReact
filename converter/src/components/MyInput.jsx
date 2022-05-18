import React from 'react'

function MyInput(props) {
  return (
    <input
      {...props}
      className="form-control"
      type="number"
      id={props.inputItem}
    />
  );
}

export default MyInput