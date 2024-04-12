'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

function MonthFilter({ options }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleActiveFilter = (index) => {
    setActiveFilter(index);
  };

  return (
    <div className="date-filter relative">
      <button
        aria-label="none"
        onClick={() => setShowFilter(!showFilter)}
        type="button"
        className="flex items-center space-x-1"
      >
        <span className="text-bgray-900 text-base font-semibold dark:text-white">
          {activeFilter ? options[activeFilter] : 'Monthly'}
        </span>
        <span>
          <svg
            className="stroke-bgray-900 dark:stroke-bgray-50"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id="month-filter"
        className={`dark:bg-darkblack-500 absolute right-0 top-5 z-10 overflow-hidden rounded-lg bg-white shadow-lg ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        <ul>
          {options.map((item, index) => (
            <li
              key={item + index}
              onClick={() => {
                setShowFilter(!showFilter);
                handleActiveFilter(index);
              }}
              className="text-bgray-90 hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MonthFilter.propTypes = {
  options: ProtoTypes.array,
};

export default MonthFilter;
