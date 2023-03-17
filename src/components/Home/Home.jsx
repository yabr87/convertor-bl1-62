import { changeCurrency, getCurrecy } from 'components/api/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      // console.log('🚀 ~ file: Home.jsx:17 ~ success ~ crd:', crd);

      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);

      getCurrecy(crd.latitude, crd.longitude).then(data => {
        // console.log(data);
        console.log(data.results[0].annotations.currency.iso_code);
        setCurrency(data.results[0].annotations.currency.iso_code);
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    // console.log(position);
  });

  const onFormSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.currency.value.split(' ');

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
      <p>Our currency {currency}</p>
    </div>
  );
};
export default Home;
