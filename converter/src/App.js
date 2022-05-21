import React, { useState } from "react";

import LinkBankRB from "./components/LinkBankRB";
import LogoMain from "./components/LogoMain";
import "./style/App.css";
import { oldCoursArr } from "./old_Cours";
import TranslationElements from "./components/TranslationElements";

function App() {
  const [currency, setCurrency] = useState(oldCoursArr);

  return (
    <div className="App">
      <LogoMain />
      <LinkBankRB />
      <TranslationElements currency={currency} />
    </div>
  );
}

export default App;
