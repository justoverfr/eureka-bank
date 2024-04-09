import Image from 'next/image';
import Link from 'next/link';

import ProtoTypes from 'prop-types';

function UserData({ userInfo, index }) {
  const {
    importance,
    img,
    name,
    designation,
    location,
    lastActive,
    workingCategory,
    level,
    isOnline,
  } = userInfo;
  return (
    <tr className={index % 2 === 0 ? 'dark:bg-darkblack-600 bg-white' : ''}>
      <td className="whitespace-nowrap rounded-l-lg p-4 text-sm font-medium">
        <span>
          <svg
            className="fill-bgray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0001 17.75L5.82808 20.995L7.00708 14.122L2.00708 9.25495L8.90708 8.25495L11.9931 2.00195L15.0791 8.25495L21.9791 9.25495L16.9791 14.122L18.1581 20.995L12.0001 17.75Z"
              fill={importance === 'gold' ? '#F6A723' : ''}
              stroke={importance === 'gold' ? '#F6A723' : ''}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </td>
      <td className="w-[400px] whitespace-nowrap py-4 text-sm text-gray-500 lg:w-auto">
        <div className="flex items-center gap-5">
          <div className="h-[64px] w-[64px]">
            <Image
              priority={true}
              height={img.height}
              width={img.width}
              className="h-full w-full rounded-lg object-cover"
              src={img.src}
              alt=""
            />
          </div>
          <div className="flex-1">
            <h4 className="text-bgray-900 text-lg font-bold dark:text-white">{name}</h4>
            <div>
              <span className="text-bgray-700 dark:text-bgray-50 text-base font-medium">
                {designation} •{' '}
              </span>
              <span className="text-gray-500">{location}•</span>{' '}
              <span className="text-gray-500">{lastActive}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <span
          className={`bg-success-50 dark:bg-darkblack-500 text-sm ${
            workingCategory === 'Full Time' ? 'text-success-300' : 'text-error-300'
          } rounded-lg px-3 py-1 font-medium`}
        >
          {workingCategory}
        </span>
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
        <span
          className={`bg-bamber-50  dark:bg-darkblack-500 rounded-lg text-sm ${
            level === 'Senior' ? 'text-bamber-500' : 'text-error-300'
          } text-am px-3 py-1 font-medium`}
        >
          {level} Level
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <Link
          href="/messages"
          className={`${
            isOnline
              ? 'bg-success-300 hover:bg-success-400'
              : 'bg-darkblack-500 hover:bg-darkblack-400'
          } ml-6 flex items-center justify-center rounded-xl px-11 py-3 font-semibold text-white transition duration-300 ease-in-out`}
        >
          Message
        </Link>
      </td>
      <td className="whitespace-nowrap rounded-r-lg py-4 pr-3 text-sm text-gray-500">
        <button aria-label="none" className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

UserData.propTypes = {
  userInfo: ProtoTypes.object,
  index: ProtoTypes.number,
};

export default UserData;
