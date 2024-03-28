'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

function CardSelect({ currencyOptions }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleActiveFilter = (index) => {
    setActiveFilter(index);
  };

  return (
    <div className="payment-select relative mb-3">
      <button
        aria-label="none"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
        type="button"
        className="border-bgray-200 dark:border-darkblack-400 flex h-[56px] w-full items-center justify-between overflow-hidden rounded-lg border px-5"
      >
        <div className="flex items-center space-x-2">
          <span>
            {activeFilter ? currencyOptions[activeFilter] : currencyOptions[0]}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-bgray-900 text-sm font-bold">$24,098.00</span>
          <span className="text-bgray-900 text-sm font-medium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#A0AEC0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </button>
      <div
        id="paymentFilter"
        className={`absolute right-0 top-full z-10 w-full overflow-hidden rounded-lg bg-white shadow-lg ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        <ul>
          {currencyOptions.map((item, index) => (
            <li
              key={item + index}
              onClick={() => {
                setShowFilter(!showFilter);
                handleActiveFilter(index);
              }}
              className="text-bgray-90  hover:bg-bgray-100 cursor-pointer px-5 py-2 text-sm font-semibold"
            >
              <span>{item} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CardSelect.propTypes = {
  currencyOptions: ProtoTypes.array,
};

export default CardSelect;
