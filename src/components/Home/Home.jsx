import { changeCurrency } from 'components/api/api';
import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.currency.value.split(' ');
    // const inputValue = e.target.elements.currency.value;

    // const regex = /^(\d+(\.\d+)?)\s+(\w+)\s+in\s+(\w+)$/;
    // const matches = inputValue.match(regex);
    // console.log(matches);

    console.log(data);
    setLoading(true);
    changeCurrency(data[0], data[1], data[3])
      .then(result => setResult(result))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

    console.log(result);
  };
  return (
    <div className="HomeWrapper">
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            // pattern="/^(\d+(\.\d+)?)\s+(\w+)\s+in\s+(\w+)$/"
            pattern="^\d+(\.\d+)?\s+\w+\s+in\s+\w+$"
            type="text"
            name="currency"
          />
        </label>
        <button disabled={loading} type="submit">
          {loading ? 'loading...' : 'change'}
        </button>
      </form>
      <p>
        <b>{result.result}</b>
      </p>
    </div>
  );
};
export default Home;

// const inputString = '15 USD in UAH';

// // Создаем регулярное выражение для извлечения числа и валюты из строки
// const regex = /^(\d+(\.\d+)?)\s+(\w+)\s+in\s+(\w+)$/;

// // Применяем регулярное выражение к исходной строке
// const matches = inputString.match(regex);

// // Извлекаем нужные данные из массива matches
// const amount = parseFloat(matches[1]);
// const from = matches[3];
// const to = matches[4];
// function extractCurrencyInfo(inputString) {
//   const regex = /^(\d+(\.\d+)?)\s+(\w+)\s+in\s+(\w+)$/;
//   const matches = inputString.match(regex);

//   if (!matches) {
//     throw new Error('Invalid input string format');
//   }

//   const amount = parseFloat(matches[1]);
//   const from = matches[3];
//   const to = matches[4];

//   return { amount, from, to };
// }
// const inputString = '15 USD in UAH';
// const currencyInfo = extractCurrencyInfo(inputString);
// console.log(currencyInfo.amount); // 15
// console.log(currencyInfo.from); // USD
// console.log(currencyInfo.to); // UAH
// try {
//   const currencyInfo = extractCurrencyInfo(inputString);
//   console.log(currencyInfo.amount); // 15
//   console.log(currencyInfo.from); // USD
//   console.log(currencyInfo.to); // UAH
// } catch (err) {
//   console.error(err);
// }
