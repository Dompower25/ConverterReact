import React from 'react'

function CurrencyItem(props) {
  return (
    <div className="inputItem">
      <div className="convertor__input">
        <input
          type="number"
          id={props.inputItem.id}

        />
        <span className="currency-name">{props.inputItem.id}</span>
      </div>
    </div>
  );
}

export default CurrencyItem