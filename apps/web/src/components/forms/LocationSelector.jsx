'use client';

import { useState } from 'react';

function LocationSelector() {
  const [filterShow, setFilterShow] = useState(false);
  return (
    <div className="date-filter relative">
      <button
        aria-label="none"
        onClick={() => setFilterShow(!filterShow)}
        type="button"
        className="border-bgray-300 dark:border-darkblack-400 flex items-center space-x-1 overflow-hidden rounded-lg border p-3.5"
      >
        <span className="text-bgray-900 text-sm font-medium dark:text-white">This Year</span>
        <span>
          <svg
            className="stroke-bgray-900 dark:stroke-white"
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
        id="location-filter"
        className={`dark:bg-darkblack-500 top-ful absolute right-0 z-10 w-[150px] overflow-hidden rounded-lg bg-white  shadow-lg ${
          filterShow ? 'block' : 'hidden'
        }`}
      >
        <ul>
          <li
            onClick={() => setFilterShow(!filterShow)}
            className="text-bgray-90  hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
          <li
            onClick={() => setFilterShow(!filterShow)}
            className="text-bgray-900  hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
          <li
            onClick={() => setFilterShow(!filterShow)}
            className="text-bgray-900  hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LocationSelector;
