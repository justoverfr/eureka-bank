import Link from 'next/link';

import DateCountDown from '@/components/dateCounDown';

function ComingSoon() {
  return (
    <section className="bg-bgc relative min-h-screen bg-cover bg-center bg-no-repeat  py-52">
      <div className="px-5 lg:px-0">
        <div className="m-auto max-w-[752px]">
          <div className="mb-10 text-center">
            <h1 className="font-poppins mb-4 text-4xl font-semibold text-black sm:text-[48px] dark:text-white">
              We are coming soon
            </h1>
            <p className="text-bgray-600 dark:text-bgray-50 px-0 text-center text-base sm:text-xl lg:px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry`s standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="m-auto max-w-[564px]">
            <DateCountDown />
          </div>
        </div>
        <div className="m-auto mt-14 max-w-[462px]">
          <form action="">
            <div className="relative">
              <label
                htmlFor="news"
                className="text-bgray-900 mb-4 block text-xl font-semibold dark:text-white"
              >
                Subscribe Newsletter
              </label>
              <input
                type="text"
                className="bg-bgray-200 focus:border-success-300 h-[60px] w-full rounded-lg border-0 px-7 py-5 focus:border focus:ring-0"
                placeholder="Email Addres"
              />
              <button
                aria-label="none"
                className="bg-success-300 absolute right-0 h-[60px] rounded-r-lg px-7 py-5 text-base font-semibold text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
          <ul className="mt-14 flex items-center justify-center gap-x-4">
            <li className="group">
              <a
                className="bg-bgray-300 group-hover:bg-success-300 dark:bg-darkblack-600 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all"
                href="#"
              >
                <svg
                  className="stroke-bgray-600 group-hover:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.6665"
                    y="1.66699"
                    width="16.6667"
                    height="16.6667"
                    rx="4"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="14.9998"
                    cy="5.00033"
                    rx="0.833333"
                    ry="0.833333"
                    fill="white"
                  />
                  <circle
                    cx="10.0002"
                    cy="9.99967"
                    r="4.16667"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="group">
              <a
                href=""
                className="bg-bgray-300 group-hover:bg-success-300 dark:bg-darkblack-600 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all"
              >
                <svg
                  className="stroke-bgray-600 group-hover:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7383 3.33301C10.9851 3.33301 9.56384 4.82539 9.56384 6.66634C9.56384 6.94453 9.59629 7.21475 9.65744 7.47307C7.75 7.47307 4.75 7.03671 2.5 4.07375C2.5 11.4812 5.5 13.5799 7 13.7034C5.875 14.8145 4.12208 15.6369 2.5 15.7916C3.19786 16.4252 5.38369 16.6387 6.38937 16.6663C11.5901 16.6663 15.8171 12.289 15.9112 6.85159C16.9086 6.20294 17.3823 4.44448 17.5 4.07375C17.0141 4.584 16 4.81449 15.1919 4.55118C14.6097 3.8074 13.7268 3.33301 12.7383 3.33301Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="group">
              <a
                href=""
                className="bg-bgray-300 group-hover:bg-success-300 dark:bg-darkblack-600 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all"
              >
                <svg
                  className="stroke-bgray-600 group-hover:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5H13.3333C10.5719 2.5 8.33333 4.73858 8.33333 7.5V8.33333H5V11.6667H8.33333V17.5H11.6667V11.6667H15V8.33333H11.6667V6.83333C11.6667 6.28105 12.1144 5.83333 12.6667 5.83333H15V2.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="group">
              <a
                href=""
                className="bg-bgray-300 group-hover:bg-success-300 dark:bg-darkblack-600 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all"
              >
                <svg
                  className="stroke-bgray-600 group-hover:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1699_21823)">
                    <path
                      d="M3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C10.2699 16.667 10.5362 16.6509 10.7979 16.6197C11.5556 17.6586 12.7822 18.3337 14.1665 18.3337C16.4677 18.3337 18.3332 16.4682 18.3332 14.167C18.3332 12.7827 17.6581 11.5561 16.6192 10.7984C16.6504 10.5367 16.6665 10.2704 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366C9.72977 3.33366 9.46346 3.34972 9.2018 3.38093C8.44408 2.34205 7.21746 1.66699 5.83317 1.66699C3.53198 1.66699 1.6665 3.53247 1.6665 5.83366C1.6665 7.21795 2.34156 8.44457 3.38044 9.20229C3.34923 9.46395 3.33317 9.73026 3.33317 10.0003Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0832 8.33366C12.0832 7.41318 11.337 6.66699 10.4165 6.66699H9.58317C8.6627 6.66699 7.9165 7.41318 7.9165 8.33366C7.9165 9.25413 8.6627 10.0003 9.58317 10.0003H10.4165C11.337 10.0003 12.0832 10.7465 12.0832 11.667C12.0832 12.5875 11.337 13.3337 10.4165 13.3337H9.58317C8.6627 13.3337 7.9165 12.5875 7.9165 11.667"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1699_21823">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
          <div className="mt-24 flex justify-center">
            <Link
              href="/"
              className="bg-success-300 rounded-lg px-10 py-3.5 font-semibold text-white"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
