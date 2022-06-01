import React, { useState } from "react";
import "./style/App.css";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import { oldCoursArr } from "./old_Cours";
import CurrencyItem from "./components/CurrencyItem";

function App() {
  const [currency, setCurrency] = useState(oldCoursArr);
  const [currencyValue, setCurrencyValue] = useState(1);

  const removeInput = (inputItem) => {
    setCurrency(currency.filter((i) => i.Cur_ID !== inputItem.Cur_ID));
  };

  return (
    <div className="App">
      <LogoMain />
      <div id="message"></div>
      <LinkBankRB />
      {currency.map((inputItem) => (
        <CurrencyItem
          currencyValue={currencyValue}
          setCurrencyValue={setCurrencyValue}
          curSale={inputItem.Cur_Scale}
          curRate={inputItem.Cur_OfficialRate}
          remove={removeInput}
          inputItem={inputItem}
          key={inputItem.Cur_ID}
        />
      ))}
    </div>
  );
}

export default App;
