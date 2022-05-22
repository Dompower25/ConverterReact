import React, { useState } from "react";
import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import "./style/App.css";
import { oldCoursArr } from "./old_Cours";
import TranslationElements from "./components/TranslationElements";

function App() {
  const [currency, setCurrency] = useState(oldCoursArr);

  const removeInput = (inputItem) => {
    setCurrency(currency.filter((i) => i.Cur_ID !== inputItem.Cur_ID));
  };

  return (
    <div className="App">
      <LogoMain />
      <div id="message"></div>
      <LinkBankRB />
      <TranslationElements remove={removeInput} currency={currency} />
      <button className="buttonAdd">
        <span className="textButton">добавить валюту</span>
      </button>
    </div>
  );
}

export default App;
