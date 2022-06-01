import React from "react";
import MyInput from "./MyInput";
import MyButton from "./UI/MyButton";

function CurrencyItem({
  inputItem,
  remove,
  curRate,
  curSale,
  currencyValue,
  setCurrencyValue,
}) {
  return (
    <div className="inputItem">
      <div className="convertor__input row">
        <MyInput
          setCurrencyValue={setCurrencyValue}
          value={currencyValue * (curRate * curSale)}
          id={inputItem.Cur_ID}
        />
        <span className="currency-name">{inputItem.Cur_Abbreviation}</span>
        <MyButton onClick={() => remove(inputItem)}>удалить</MyButton>
      </div>
    </div>
  );
}

export default CurrencyItem;
