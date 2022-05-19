import React, {useState} from 'react';
import CurrencyItem from './components/CurrencyItem';
import LinkBankRB from './components/LinkBankRB';
import LogoMain from './components/LogoMain';
import './style/App.css';
//import { oldCoursArr } from "./old_Cours";

function App() {

  const [currency, setCurrency] = useState(
    [
      {
        Cur_ID: 440,
        Date: "2022-04-03T00:00:00",
        Cur_Abbreviation: "AUD",
        Cur_Scale: 1,
        Cur_Name: "Австралийский доллар",
        Cur_OfficialRate: 2.2036,
      },
      {
        Cur_ID: 510,
        Date: "2022-04-03T00:00:00",
        Cur_Abbreviation: "AMD",
        Cur_Scale: 1000,
        Cur_Name: "Армянских драмов",
        Cur_OfficialRate: 6.0797,
      },
      {
        Cur_ID: 441,
        Date: "2022-04-03T00:00:00",
        Cur_Abbreviation: "BGN",
        Cur_Scale: 1,
        Cur_Name: "Болгарский лев",
        Cur_OfficialRate: 1.6722,
      },
    ]);
  
  return (
    <div className="App">
      <LogoMain />
      <LinkBankRB />
      {currency.map((inputItem) => (
        <CurrencyItem inputItem={inputItem} key={inputItem.Cur_ID}/>
      ))}
    </div>
  );
}

export default App;
