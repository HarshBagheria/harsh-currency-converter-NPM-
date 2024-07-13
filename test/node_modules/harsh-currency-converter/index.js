import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI('cur_live_8FBqslFShFGDZI85nveyAfFaFBH7uzOAeRfItcN4');


export async function convertCurrency(fromCurrency,toCurrency,units){
 const res = await  currencyApi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  const multipiler = res.data[toCurrency];
  return multipiler.value*units;
}
