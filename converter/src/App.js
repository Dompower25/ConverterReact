import React, { useState } from "react";
import "./style/App.css";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import { oldCoursArr } from "./old_Cours";
import { filtArray } from "./FilterArray";
import CurrencyItem from "./components/CurrencyItem";
import DropList from "./components/UI/DropList";

function App() {
  // Список валют
  const [currency, setCurrency] = useState(oldCoursArr);
  const [normalizedValue, setNormalizedValue] = useState(1);

  const removeInput = (id) => {
    setCurrency(currency.filter((i) => i.Cur_ID !== id));
  };

  const addInput = (name) => {
    setCurrencyList(currencyList.filter((i) => i.Cur_Abbreviation !== name));
  };

  const filterArrayByName = oldCoursArr.filter(
    (e) =>
      currency.findIndex((i) => i.Cur_Abbreviation == e.Cur_Abbreviation) === -1
  );

  const [currencyList, setCurrencyList] = useState(filtArray);

  return (
    <div className="App">
      <div className="main_box">
        <LogoMain />
        <div id="message"></div>
        <LinkBankRB />
        {currency.map(
          ({ Cur_Scale, Cur_OfficialRate, Cur_ID, Cur_Abbreviation }) => (
            <CurrencyItem
              name={Cur_Abbreviation}
              key={Cur_ID}
              // USD -> Валюта
              value={normalizedValue * (Cur_Scale * Cur_OfficialRate)}
              // Валюта -> USD
              onCurrencyChange={(val) =>
                setNormalizedValue((Cur_Scale * Cur_OfficialRate) / val)
              }
              onRemove={() => {
                removeInput(Cur_ID);
                setCurrencyList(filterArrayByName);
              }}
            />
          )
        )}
      </div>

      <div className="ListCurr">
        {currencyList.map(({ Cur_Abbreviation, Cur_Name, Cur_ID }) => (
          <DropList
            name={Cur_Name}
            id={Cur_Abbreviation}
            key={Cur_ID}
            onAdd={() => {
              addInput(Cur_Abbreviation);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
