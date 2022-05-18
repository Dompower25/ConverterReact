import React from 'react'

function CurrencyItem(props) {
  return (
    <div className="inputItem">
      <div className="convertor__input row">
        <input
          className="form-control"
          type="number"
          id={props.inputItem.Cur_Abbreviation}
          //        value={props.inputItem.value}
        />
        <span className="currency-name">
          {props.inputItem.Cur_Abbreviation}
        </span>
      </div>
    </div>
  );
}

export default CurrencyItem