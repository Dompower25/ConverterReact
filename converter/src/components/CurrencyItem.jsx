import React from "react";
import MyInput from "./MyInput";
import MyButton from "./UI/MyButton";

function CurrencyItem({
  name,
  value,
  onCurrencyChange,
  onRemove,
}) {
  return (
    <div className="inputItem">
      <div className="convertor__input row">
        <MyInput onChange={onCurrencyChange} value={value}/>
        <span className="currency-name">{name}</span>
        <MyButton onClick={onRemove}>удалить</MyButton>
      </div>
    </div>
  );
}

export default CurrencyItem;
