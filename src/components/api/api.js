// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.exchangeratesapi.io/v1/',
// });

var myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const changeCurrency = (amount, from, to) => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then(response => response.json());
};

export const getCurrecy = (lat, long) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`
  ).then(response => response.json());
};
