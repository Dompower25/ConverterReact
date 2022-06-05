import React, { useState } from "react";
import "./style/App.css";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import { oldCoursArr } from "./old_Cours";
import CurrencyItem from "./components/CurrencyItem";

function App() {
  const [currency, setCurrency] = useState(oldCoursArr);
  const [normalizedValue, setNormalizedValue] = useState(1);

  const removeInput = (id) => {
    setCurrency(currency.filter((i) => i.Cur_ID !== id));
  };

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
            value={normalizedValue * (Cur_Scale * Cur_OfficialRate)}
            // Валюта -> USD
            onCurrencyChange={(val) =>
              setNormalizedValue((Cur_Scale * Cur_OfficialRate) / val)
            }
            onRemove={() => removeInput(Cur_ID)}
          />
        )
      )}
    </div>
  );
}

export default App;
