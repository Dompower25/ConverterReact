import React from 'react'

function MyInput(props, setCurrency) {
  return (
    <input
      {...props}
      className="form-control"
      type="number"
      id={props.inputItem.Cur_ID}
    />
  );
}

export default MyInput