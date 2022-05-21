import React from 'react';
import CurrencyItem from './components/CurrencyItem';

const TranslationElements = ({ currency }) => {
  return (
    {currency.map((inputItem) => (
        <CurrencyItem inputItem={inputItem} key={inputItem.Cur_ID} />
      ))
    }
  );
};

export default TranslationElements