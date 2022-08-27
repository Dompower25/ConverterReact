import React, { useState, useEffect } from "react";
import "./style/App.css";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import { oldCoursArr } from "./old_Cours";
import CurrencyItem from "./components/CurrencyItem";
import DropList from "./components/UI/DropList";
import ButtonLine from "./components/UI/ButtonLine";

function App() {
  var setCur_name = new Set(["BYN", "USD", "EUR", "PLN"]);

  const listItemsForInputs = (set, query) => {
    return set.filter((i) => query.has(i.Cur_Abbreviation));
  };
  const arrCurr = listItemsForInputs(oldCoursArr, setCur_name);

  const [currency, setCurrency] = useState(arrCurr);
  const [normalizedValue, setNormalizedValue] = useState(1);

  useEffect(
    (e) => {
      setCurrencyList(currencyList.filter((i) => i.Cur_Abbreviation !== e));
      console.log("useEffect");
    },
    [currency]
  );
  const [currencyList, setCurrencyList] = useState([]);

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

  const filterArrayByNameCur = oldCoursArr.filter(
    (e) =>
      currencyList.findIndex(
        (i) => i.Cur_Abbreviation == e.Cur_Abbreviation
      ) === -1
  );

  console.log(currencyList);
  console.log(currency);
  return (
    <div className="App">
      <LogoMain />
      <div id="message"></div>
      <LinkBankRB />
      {currency.map(
        ({ Cur_Scale, Cur_OfficialRate, Cur_ID, Cur_Abbreviation }) => (
          <CurrencyItem
            name={Cur_Abbreviation}
            key={Cur_ID}
            // USD -> Валюта
            value={normalizedValue * (Cur_OfficialRate * Cur_Scale)}
            // Валюта -> USD
            onCurrencyChange={(val) => {
              setNormalizedValue(val);
            }}
            onRemove={() => {
              removeInput(Cur_ID);
              setCurrencyList(filterArrayByName);
            }}
          />
        )
      )}

      <div className="ListCurr">
        <ButtonLine>добавить валюту</ButtonLine>
        {currencyList.map(({ Cur_Abbreviation, Cur_Name, Cur_ID }) => (
          <DropList
            name={Cur_Name}
            key={Cur_ID}
            onAdd={() => {
              addInput(Cur_Abbreviation);
              setCurrency(filterArrayByNameCur);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
