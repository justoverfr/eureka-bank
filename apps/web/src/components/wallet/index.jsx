import Image from 'next/image';

import GreenBtn from '../button/AddMony';
import PaymentFilter from '../forms/PaymentFilter';
import PaymentSelect from '../forms/PaymentSelect';
import Slider from '../slider';
import member from '/public/static/images/avatar/members-3.png';
import card1 from '/public/static/images/payments/card-1.svg';
import card2 from '/public/static/images/payments/card-2.svg';
import card3 from '/public/static/images/payments/card-3.svg';

function Wallet() {
  return (
    <div className="dark:border-darkblack-400 dark:bg-darkblack-600 mb-6 w-full rounded-lg bg-white px-[42px] py-5 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full dark:border">
      <div className="my-wallet mb-8 w-full">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-bgray-900 text-lg font-bold dark:text-white">My Wallet</h3>
          <PaymentSelect />
        </div>

        <div className="flex justify-center">
          <div className="card-slider relative w-[280px] md:w-[340px]">
            <Slider
              slidesPerView={1}
              loop={true}
              effect={'fade'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <div className="w-full">
                <Image
                  priority={true}
                  height={card1.height}
                  width={card1.width}
                  src={card1.src}
                  alt="card"
                />
              </div>
              <div className="w-full">
                <Image
                  priority={true}
                  height={card2.height}
                  width={card2.width}
                  src={card2.src}
                  alt="card"
                />
              </div>
              <div className="w-full">
                <Image
                  priority={true}
                  height={card3.height}
                  width={card3.width}
                  src={card3.src}
                  alt="card"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-bgray-900 mb-4 text-lg font-bold dark:text-white">Quick Transfer</h3>
        <PaymentFilter />
        <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
          <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
            Enter crypto account hash
          </p>
          <div className="flex h-[35px] w-full items-center justify-between">
            <label className="w-full">
              <input
                type="text"
                className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
              />
            </label>
            <div>
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
        <br />
        <div className="border-bgray-200 focus-within:border-success-300 dark:border-darkblack-400 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
          <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">Enter amount</p>
          <div className="flex h-[35px] w-full items-center justify-between">
            <span className="text-bgray-900 text-2xl font-bold dark:text-white">$</span>
            <label className="w-full">
              <input
                type="text"
                className="text-bgray-900 dark:border-darkblack-400 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
              />
            </label>
            <div>
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
        <GreenBtn text="Send Money" className="mt-7" />
      </div>
    </div>
  );
}

export default Wallet;
