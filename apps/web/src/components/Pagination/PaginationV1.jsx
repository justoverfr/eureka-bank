'use client';

import { useState } from 'react';

function PaginationV1() {
  const [active, setActive] = useState(false);

  const page = 3;
  return (
    <div className="hidden items-center space-x-4 lg:flex">
      <span className="text-bgray-600 dark:text-bgray-50 text-sm font-semibold">Show result:</span>
      <div className="relative">
        <button
          aria-label="none"
          onClick={() => setActive(!active)}
          type="button"
          className="border-bgray-300 dark:border-darkblack-400 flex items-center space-x-6 rounded-lg border px-2.5 py-[14px]"
        >
          <span className="text-bgray-900 dark:text-bgray-50 text-sm font-semibold">3</span>
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
              />
            </svg>
          </span>
        </button>

        <div
          id="result-filter"
          style={{ display: active ? 'block' : 'none' }}
          className="absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <ul>
            {[...Array(page).keys(page)].map((item) => (
              <li
                key={item}
                onClick={() => setActive(!active)}
                className="text-bgray-90 hover:bg-bgray-100 cursor-pointer px-5 py-2 text-sm font-medium"
              >
                {item + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaginationV1;
