import React from 'react';
import CurrencyItem from './components/CurrencyItem';
import LinkBankRB from './components/LinkBankRB';
import LogoMain from './components/LogoMain';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <LogoMain />
      <LinkBankRB />
      <CurrencyItem inputItem={{id: "AUD", val: 222} }/>
    </div>
  );
}

export default App;
