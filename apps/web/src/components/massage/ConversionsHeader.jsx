'use client';

import Image from 'next/image';

import ProtoTypes from 'prop-types';

import authorImg from '/public/static/images/message/user-t.png';

function ConversionsHeader({ toggleSetting }) {
  return (
    <header className="dark:bg-darkblack-600 border-bgray-300 dark:border-darkblack-400 flex items-center justify-between border-t bg-white p-5 lg:pr-24">
      <div className="flex space-x-3">
        <div className="relative">
          <Image
            priority={true}
            height={authorImg.height}
            width={authorImg.width}
            src={authorImg.src}
            className="h-12 w-12 rounded-full"
            alt=""
          />
          <span className="bg-success-300 dark:border-bgray-900 absolute bottom-1 right-0 block h-[14px] w-[14px] rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h4 className="text-bgray-900 text-base font-bold dark:text-white">
            Ajoy Sarkar
          </h4>
          <span className="text-bgray-600 text-sm">Online</span>
        </div>
      </div>
      <button
        aria-label="none"
        type="button"
        className="dark:bg-darkblack-500 grid h-12 w-12 place-items-center rounded-full"
        onClick={toggleSetting}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}

ConversionsHeader.propTypes = {
  toggleSetting: ProtoTypes.func,
};

export default ConversionsHeader;
