'use client';

import { useEffect, useState } from 'react';

function DateCountDown() {
  const targetTime = Date.now() + 118600000;
  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const targetTimeInMilliseconds = new Date(targetTime).getTime();
    const timeDifference = targetTimeInMilliseconds - currentTime;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const total = days + hours + minutes + seconds;

    return {
      days,
      hours,
      minutes,
      seconds,
      total,
    };
  };
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);

      if (newRemainingTime.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ul id="countdown-wrapper" className="flex gap-2 sm:gap-5 lg:gap-10">
      <li className="border-success-100 flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 sm:h-28 sm:w-28  dark:border-white">
        <h2
          id="days"
          className="font-poppins text-xl font-semibold text-black sm:text-[48px] dark:text-white"
        >
          {remainingTime.days}
        </h2>
        <span className="text-bgray-600 font-medium dark:text-white">Days</span>
      </li>
      <li className="border-success-100 flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 sm:h-28 sm:w-28 dark:border-white">
        <h2
          id="hours"
          className="font-poppins text-xl font-semibold text-black sm:text-[48px] dark:text-white"
        >
          {remainingTime.hours}
        </h2>
        <span className="text-bgray-600 font-medium dark:text-white">
          Hours
        </span>
      </li>
      <li className="border-success-100 flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 sm:h-28 sm:w-28 dark:border-white">
        <h2
          id="minutes"
          className="font-poppins text-xl font-semibold text-black sm:text-[48px] dark:text-white"
        >
          {remainingTime.minutes}
        </h2>
        <span className="text-bgray-600 font-medium dark:text-white">
          Minutes
        </span>
      </li>
      <li className="border-success-100 flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 sm:h-28 sm:w-28 dark:border-white">
        <h2
          id="seconds"
          className="font-poppins text-xl font-semibold text-black sm:text-[48px] dark:text-white"
        >
          {remainingTime.seconds}
        </h2>
        <span className="text-bgray-600 font-medium dark:text-white">
          Seconds
        </span>
      </li>
    </ul>
  );
}

export default DateCountDown;
