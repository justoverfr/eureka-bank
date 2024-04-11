'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

const Crypto = () => {
  const [topCryptos, setTopCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false',
        );
        setTopCryptos(response.data);
      } catch (error) {
        console.error();
      }
    };

    fetchTopCryptos();
    const intervalId = setInterval(fetchTopCryptos, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Top 4 Cryptomonnaies en temps réel</h1>
      <ul>
        {topCryptos.map((crypto, index) => (
          <li key={crypto.id}>
            {index + 1}. {crypto.name} ({crypto.symbol}): ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crypto;
