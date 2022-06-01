import React, { useState } from "react";
import "./style/App.css";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import { oldCoursArr } from "./old_Cours";
import CurrencyItem from "./components/CurrencyItem";

function App() {
  // Список валют
  const [currency, setCurrency] = useState(oldCoursArr);
  
  // В данном случае мы нормализуем значение приводя все к USD
  const [normalizedValue, setNormalizedValue] = useState(1);

  const removeInput = (id) => {
    setCurrency(currency.filter((i) => i.Cur_ID !== id));
  };

  return (
    <div className="App">
      <LogoMain />
      <div id="message"></div>
      <LinkBankRB />
      {currency.map(({ Cur_ID, Cur_Scale, Cur_OfficialRate, Cur_Abbreviation }) => (
        <CurrencyItem
          name={Cur_Abbreviation}
          // USD -> Валюта
          value={normalizedValue * (Cur_Scale * Cur_OfficialRate)}
           // Валюта -> USD 
          onCurrencyChange={(newValue) => setNormalizedValue((Cur_Scale * Cur_OfficialRate) / newValue)}
          onRemove={() => removeInput(Cur_ID)}
          key={Cur_ID}
        />
      ))}
    </div>
  );
}

export default App;
