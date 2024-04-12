'use client';

import { useState } from 'react';
import Image from 'next/image';

import mastar from '/public/static/images/payments/master-mini.svg';

function PaymentFilter() {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <div className="payment-select relative mb-3">
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
