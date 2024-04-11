import React from 'react';
import Image from 'next/image';

import bg from '/public/static/images/cards/bg.png';
import dashboard from '/public/static/images/cards/dashboard.jpg';
import earning from '/public/static/images/cards/earning.png';
import efficiency from '/public/static/images/cards/efficiency.png';
import offer from '/public/static/images/cards/offer.png';
import revenue from '/public/static/images/cards/revenue.png';
import vector from '/public/static/images/cards/vector.png';
import check from '/public/static/images/icon/check.svg';

function Widgets() {
  return (
    <section className="mt-[50px] flex w-full items-center justify-center xl:px-[5%] 2xl:mt-[138px] 2xl:p-0">
      <div
        className="relative flex w-[90%] max-w-[1320px] flex-wrap gap-40 bg-cover px-[5%] pb-[137px] pt-[125px] xl:w-full xl:flex-nowrap xl:px-0 2xl:flex-wrap"
        style={{ background: `url(${bg})` }}
      >
        <div className="rounded-20 relative z-0 flex h-full w-11/12 items-center justify-center xl:w-6/12 2xl:w-[505px]">
          <div className="bg-alertsWarningLight rounded-20 relative z-0 flex h-full w-full items-center justify-center xl:w-[505px]">
            {/* <!-- Bg start  --> */}
            <Image
              height={vector.height}
              width={vector.width}
              src={vector.src}
              alt=""
              className="absolute"
              style={{ zIndex: -1 }}
            />

            <Image
              height={revenue.height}
              width={revenue.width}
              src={revenue.src}
              className="absolute left-[3%] top-[5%]"
              alt=""
              style={{ zIndex: 1 }}
            />
            <Image
              height={earning.height}
              width={earning.width}
              src={earning.src}
              className="absolute -left-[4%] bottom-[2%] z-20 max-w-[100px] sm:max-w-[130px] xl:max-w-[163px]"
              alt=""
            />
            <Image
              height={efficiency.height}
              width={efficiency.width}
              src={efficiency.src}
              className="absolute -right-[12%] top-[8%] z-20 w-32 sm:w-fit"
              alt=""
            />
            <Image
              height={offer.height}
              width={offer.width}
              src={offer.src}
              className="absolute -bottom-[10%] -right-[12%] z-20 w-32 sm:w-fit"
              alt=""
            />

            {/* <!-- Bg end  --> */}
            <Image
              height={dashboard.height}
              width={dashboard.width}
              src={dashboard.src}
              className="z-10 w-full px-6 pt-14 xl:px-11 xl:pt-28"
              alt="dashboard"
              data-aos="fade-right"
              data-aos-easing="fade-left"
            />
          </div>
        </div>
        <div
          className="relative w-10/12 xl:ml-16 xl:w-5/12 2xl:max-w-[514px]"
          data-aos="fade-left"
          data-aos-easing="fade-right"
        >
          <span className="font-poppins leading-big-loose z-10 text-3xl font-bold text-black xl:text-4xl 2xl:text-5xl">
            Live Price Tracking
            <br />
            in real-time
            <br />
          </span>
          <br />
          <span className="leading-160 z-10 mt-[14px] text-lg font-medium text-gray-500 xl:text-xl">
            You'll be able to track cryptocurrency prices.
            <br />
            Our growth rates displayed in percentage form will enable you to make informed decisions
          </span>
          <div className="leading-220 z-10 flex flex-col text-base font-normal text-gray-600 xl:text-xl">
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>Real-time</span>
            </div>
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>Percentage</span>
            </div>
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>2M+Coins</span>
            </div>
            <a
              href="#"
              className="border-primary group relative z-40 mt-5 inline-flex h-[60px] max-w-[190px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] px-9 py-2.5 transition-all"
            >
              <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
              <span className="group-hover:text-primary z-10 text-center text-xl font-semibold leading-8 text-white">
                SignUp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Widgets;
