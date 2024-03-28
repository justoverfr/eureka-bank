'use client';

import Image from 'next/image';

import ProtoTypes from 'prop-types';

import member from '/public/static/images/avatar/members.png';

function StorePopUp({ active, handlePopup }) {
  return (
    <div className="store-wrapper">
      <div
        id="store-outside"
        onClick={() => handlePopup('store')}
        className={`fixed -left-[43px] top-0  h-full w-full ${
          active ? 'block' : 'hidden'
        }`}
      ></div>
      <div
        id="store-box"
        style={{
          filter: `drop-shadow(12px 12px 40px rgba(0, 0, 0, 0.08))`,
          display: active ? 'block' : 'none',
        }}
        className="dark:bg-darkblack-600 absolute -left-[134px] top-[81px] hidden w-[330px] overflow-hidden rounded-lg bg-white"
      >
        <div className="relative w-full p-6">
          <div className="bonus-box-wrapper w-full overflow-hidden pb-[33px]">
            <div className="bonus-box relative flex w-full justify-center">
              <div
                style={{ width: `calc(100% - 20px)` }}
                className="bg-success-200 absolute left-[10px] top-[5px] h-[200px] rounded-lg"
              ></div>
              <div className="bg-success-300 relative w-full rounded-lg p-5">
                <h3 className="text-center text-[28px] font-bold text-white">
                  60% Bonus
                </h3>
                <p className="text-success-100 mb-3 px-5 text-center text-lg font-semibold leading-[24px]">
                  Create an Account and Get Bonus
                </p>
                <div className="flex justify-center">
                  <a href="#">
                    <div className="bg-warning-300 hover:bg-warning-200 flex h-[56px] w-[166px] items-center justify-center rounded-lg transition duration-300 ease-in-out">
                      <span className="text-bgray-900 text-sm font-bold">
                        Discover More
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="progess-bar mb-[13px] flex justify-center">
            <div className="bonus-per relative">
              <div className="bonus-outer">
                <div className="bonus-inner">
                  <div className="number">
                    <span className="text-bgray-900 text-sm font-medium">
                      25%
                    </span>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
              >
                <circle
                  style={{
                    strokeDashoffset: `calc(215 - 215 * (25 / 100))`,
                  }}
                  cx="40"
                  cy="40"
                  r="35"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-success-300 mb-2.5 text-center text-sm font-semibold">
            Discover more
          </p>
          <div className="flex justify-center">
            <Image
              priority={true}
              height={member.height}
              width={member.width}
              src={member.src}
              alt="members"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

StorePopUp.propTypes = {
  active: ProtoTypes.bool,
  handlePopup: ProtoTypes.func,
};

export default StorePopUp;
