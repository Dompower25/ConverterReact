import React from 'react'
import MyInput from './MyInput';

function CurrencyItem(props) {
  return (
    <div className="inputItem">
      <div className="convertor__input row">
        <MyInput {...props}/>
        <span className="currency-name">
          {props.inputItem.Cur_Abbreviation}
        </span>
      </div>
    </div>
  );
}

export default CurrencyItem