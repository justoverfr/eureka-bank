'use client';

import { useState } from 'react';

import ProtoTypes from 'prop-types';

function SelectFilter({ title, placeHolder, options, icon }) {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full">
      <p className="text-bgray-900 mb-2 text-base font-bold leading-[24px] dark:text-white">
        {title}
      </p>
      <div className="relative h-[56px] w-full">
        <button
          aria-label="none"
          onClick={() => setActive(!active)}
          type="button"
          className="bg-bgray-100 dark:bg-darkblack-500 relative flex h-full w-full items-center justify-between rounded-lg px-4"
        >
          <span className="text-bgray-500 text-base">{placeHolder}</span>
          <span>
            {icon ? (
              icon
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                  stroke="#A0AEC0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          id="province-filter"
          style={{ display: active ? 'block' : 'none' }}
          className="dark:bg-darkblack-500 absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <ul>
            {options?.map((option) => (
              <li
                key={option}
                onClick={() => setActive(!active)}
                className="text-bgray-90 hover:bg-bgray-100 hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 text-sm font-semibold dark:text-white"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SelectFilter.propTypes = {
  title: ProtoTypes.string,
  placeHolder: ProtoTypes.string,
  options: ProtoTypes.array,
  icon: ProtoTypes.object,
};

export default SelectFilter;
