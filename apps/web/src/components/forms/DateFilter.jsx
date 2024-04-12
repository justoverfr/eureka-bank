'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

function DateFilter({ options }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleActiveFilter = (e) => {
    setActiveFilter(e.target.innerText);
  };
  return (
    <div className="date-filter relative">
      <button
        aria-label="none"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
        type="button"
        className="bg-bgray-100 dark:bg-darkblack-500 flex items-center space-x-1 overflow-hidden rounded-lg px-3 py-2 dark:text-white"
      >
        <span className="text-bgray-900 text-sm font-medium dark:text-white">
          {activeFilter ? activeFilter : options[0]}
        </span>
        <span>
          <svg
            className="stroke-bgray-900 dark:stroke-gray-50"
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
        id="date-filter-body"
        className={`dark:bg-darkblack-500 absolute right-0 top-[44px] z-10 overflow-hidden rounded-lg bg-white  shadow-lg ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        <ul>
          {options.map((item) => (
            <li
              key={item}
              onClick={(e) => {
                setShowFilter(!showFilter);
                handleActiveFilter(e);
              }}
              className="text-bgray-90  hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

DateFilter.propTypes = {
  options: ProtoTypes.array,
};

export default DateFilter;
