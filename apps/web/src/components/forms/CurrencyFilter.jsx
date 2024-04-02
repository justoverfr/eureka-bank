'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

function CurrencyFilter({ currencyOptions }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleActiveFilter = (e) => {
    setActiveFilter(e.target.innerText);
  };
  return (
    <div className="mb-4 flex h-[48px] w-full space-x-3">
      <div className="relative">
        <button
          aria-label="none"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          type="button"
          className="border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 flex w-[80px]  flex-row items-center justify-center rounded-lg border px-2.5 py-[14px] dark:text-white"
        >
          <span className="text-bgray-900 text-sm font-bold dark:text-white">
            {activeFilter ? activeFilter : currencyOptions[0]}
          </span>
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
                stroke="#A0AEC0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
        <div
          id="usd-filter"
          className={`dark:bg-darkblack-500 absolute right-0 top-14 z-10 w-full overflow-hidden rounded-lg bg-white shadow-lg ${
            showFilter ? 'block' : 'hidden'
          }`}
        >
          <ul>
            {currencyOptions.map((item) => (
              <li
                key={item}
                onClick={(e) => {
                  setShowFilter(!showFilter);
                  handleActiveFilter(e);
                }}
                className="text-bgray-90  hover:bg-bgray-100 hover:dark:bg-darkblack-500 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-full w-full   overflow-hidden">
        <input
          type="text"
          className="border-bgray-300 dark:bg-darkblack-500 dark:border-darkblack-400 text-bgray-900  h-full w-full rounded-lg border text-base focus:border-none focus:ring-0  dark:border dark:text-white"
        />
      </div>
    </div>
  );
}

CurrencyFilter.propTypes = {
  currencyOptions: ProtoTypes.array,
};

export default CurrencyFilter;
