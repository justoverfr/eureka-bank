import Image from 'next/image';

import ProtoTypes from 'prop-types';

import Slider from '../slider';
import AddMoney from './AddMoney';
import PaymentAndBilling from './PaymentAndBilling';
import paCard from '/public/static/images/payments/pa-card.svg';

function Payment({ name, activeTab }) {
  return (
    <div id="tab4" className={`tab-pane ${name === activeTab && 'active'}`}>
      {/* Cards  */}
      <PaymentAndBilling />
      {/* Slider  */}
      <div className="border-bgray-300 dark:border-darkblack-400 px-0 py-0 lg:border-t lg:px-7 lg:py-10">
        <div className="items-center justify-between lg:flex">
          <div className="flex w-full flex-col items-center lg:w-[250px] 2xl:w-[400px]">
            <div className="mb-4 flex w-full justify-between">
              <h4 className="text-bgray-900 text-lg font-bold dark:text-white">
                My Wallet
              </h4>
              <button aria-label="none">
                <svg
                  width="20"
                  height="5"
                  viewBox="0 0 20 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90742 2.3381C8.90742 2.95199 9.40507 3.44964 10.019 3.44964C10.6328 3.44964 11.1305 2.95199 11.1305 2.3381C11.1305 1.72422 10.6328 1.22656 10.019 1.22656C9.40507 1.22656 8.90742 1.72422 8.90742 2.3381Z"
                    stroke="#CBD5E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.12665 2.3381C1.12665 2.95199 1.62431 3.44964 2.23819 3.44964C2.85208 3.44964 3.34973 2.95199 3.34973 2.3381C3.34973 1.72422 2.85208 1.22656 2.23819 1.22656C1.62431 1.22656 1.12665 1.72422 1.12665 2.3381Z"
                    stroke="#CBD5E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6882 2.3381C16.6882 2.95199 17.1858 3.44964 17.7997 3.44964C18.4136 3.44964 18.9113 2.95199 18.9113 2.3381C18.9113 1.72422 18.4136 1.22656 17.7997 1.22656C17.1858 1.22656 16.6882 1.72422 16.6882 2.3381Z"
                    stroke="#CBD5E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <Slider
              slidesPerView={1}
              loop={true}
              effect={'fade'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="card-slider relative w-full"
            >
              <div className="m-0 w-[280px] md:w-[400px]">
                <Image
                  priority={true}
                  height={paCard.height}
                  width={paCard.width}
                  src={paCard.src}
                  className="w-full"
                  alt="card"
                />
              </div>
              <div className="m-0 w-[280px] md:w-[400px]">
                <Image
                  priority={true}
                  height={paCard.height}
                  width={paCard.width}
                  src={paCard.src}
                  className="w-full"
                  alt="card"
                />
              </div>
              <div className="m-0 w-[280px] md:w-[400px]">
                <Image
                  priority={true}
                  height={paCard.height}
                  width={paCard.width}
                  src={paCard.src}
                  className="w-full"
                  alt="card"
                />
              </div>
            </Slider>
          </div>
          <AddMoney />
        </div>
      </div>
    </div>
  );
}

Payment.propTypes = {
  name: ProtoTypes.string,
  activeTab: ProtoTypes.string,
};

export default Payment;
