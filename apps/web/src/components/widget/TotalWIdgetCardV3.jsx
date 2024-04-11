'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import axios from 'axios';
import PropTypes from 'prop-types';

import BarChart from '../chart/BarChart';

function TotalWIdgetCardV2({ logo, activeMember }) {
  const [highestCryptoData, setHighestCryptoData] = useState(null);

  useEffect(() => {
    async function fetchHighestCryptoData() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false',
        );
        const data = response.data;

        const highestCrypto = data[1];
        const {
          name,
          current_price: currentPrice,
          price_change_percentage_24h: priceChangePercentage,
        } = highestCrypto;

        setHighestCryptoData({
          name,
          currentPrice,
          priceChangePercentage,
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données des cryptomonnaies :', error);
      }
    }

    fetchHighestCryptoData();
  }, []);

  return (
    <div className="dark:bg-darkblack-600 rounded-lg bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center space-x-[7px]">
          <div className="icon">
            <span>
              <Image
                priority={true}
                height={logo.height}
                width={logo.width}
                src={logo.src}
                alt="icon"
              />
            </span>
          </div>
          <span className="text-bgray-900 text-lg font-semibold dark:text-white">
            {highestCryptoData && highestCryptoData.name}
          </span>
        </div>
        <div></div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex-1">
          {highestCryptoData && (
            <div>
              <h2>Taux : ${highestCryptoData.currentPrice}</h2>
              <p>Pourcentage de variation : {highestCryptoData.priceChangePercentage}%</p>
            </div>
          )}
        </div>
        <div className="h-[68px] w-[136px]"></div>
      </div>
    </div>
  );
}

TotalWIdgetCardV2.propTypes = {
  logo: PropTypes.object.isRequired,
  activeMember: PropTypes.object.isRequired,
};

export default TotalWIdgetCardV2;
