import React from 'react';
import CurrencyItem from './CurrencyItem'


const TranslationElements = ({ currency, setCurrency, remove }) => {
  return currency.map((inputItem) => (
    <CurrencyItem
      remove={remove}
      inputItem={inputItem}
      key={inputItem.Cur_ID}
      setCurrency
    />
    
  ));
};

export default TranslationElements