import React from 'react'
import MyInput from './MyInput';
import MyButton from './UI/MyButton';

function CurrencyItem(props, remove, setCurrency) {
  return (
    <div className="inputItem">
      <div className="convertor__input row">
        <MyInput {...props} setCurrency />
        <span className="currency-name">
          {props.inputItem.Cur_Abbreviation}
        </span>
        <MyButton onClick={() => props.remove(props.inputItem)}>
          удалить
        </MyButton>
      </div>
    </div>
  );
}

export default CurrencyItem