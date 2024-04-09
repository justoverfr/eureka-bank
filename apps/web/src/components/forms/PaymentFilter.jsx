'use client';

import { useState } from 'react';
import Image from 'next/image';

import mastar from '/public/static/images/payments/master-mini.svg';

function PaymentFilter() {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <div className="payment-select relative mb-3">
      <button
        aria-label="none"
        onClick={() => setActiveFilter(!activeFilter)}
        type="button"
        className="border-bgray-200 dark:border-darkblack-400 flex h-[56px] w-full items-center justify-between overflow-hidden rounded-lg border px-5"
      >
        <div className="flex items-center space-x-2">
          <span>
            <Image
              priority={true}
              height={mastar.height}
              width={mastar.width}
              src={mastar.src}
              alt="master"
            />
          </span>
          <span className="text-bgray-900 text-sm font-medium dark:text-white">Debit</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-bgray-900 dark:text-bgray-50 text-sm font-bold">$10,431</span>
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
        style={{ display: activeFilter ? 'block' : 'none' }}
        className="dark:bg-darkblack-500 absolute right-0 top-full z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <ul>
          <li
            onClick={() => setActiveFilter(!activeFilter)}
            className="text-bgray-90 hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
          <li
            onClick={() => setActiveFilter(!activeFilter)}
            className="text-bgray-900 hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
          <li
            onClick={() => setActiveFilter(!activeFilter)}
            className="text-bgray-900 hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
          >
            Jan 10 - Jan 16
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentFilter;
