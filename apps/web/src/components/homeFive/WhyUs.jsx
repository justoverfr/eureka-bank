import React from 'react';
import Image from 'next/image';

import check from '/public/static/images/icon/check.svg';

function WhyUs() {
  return (
    <section className="flex w-full items-center justify-center bg-gray-50 px-[5%] pb-[60px] pt-[60px] xl:pb-[145px] xl:pt-[120px]">
      <div
        className="flex flex-wrap gap-10 xl:flex-nowrap xl:items-center xl:justify-center xl:gap-40"
        data-aos="fade-right"
        data-aos-easing="fade-left"
      >
        {/* <!-- Right side start  --> */}
        <div className="max-w-[500px]">
          <span className="font-poppins leading-big-loose text-3xl font-bold text-[#090D26] xl:text-4xl 2xl:text-5xl">
            Why you choose EurekaBank
          </span>
          <div className="z-10 flex flex-col text-sm font-normal text-[#4f4f4f] xl:text-xl xl:leading-[42px]">
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>Ethereum Blockchain (btc, eth, erfb)</span>
            </div>
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>Wide choice of cryptocurrencies</span>
            </div>
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span></span>
            </div>
            <div className="mt-3 flex gap-[10px]">
              <Image src={check.src} height={check.height} width={check.width} alt="" />
              <span>Clean and Flat design & more ...</span>
            </div>
            <a
              href="#"
              className="border-primary group relative z-40 mt-12 inline-flex h-[60px] max-w-[200px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] px-9 py-2.5 transition-all"
            >
              <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
              <span className="group-hover:text-primary z-10 text-center text-xl font-semibold leading-8 text-white">
                See Details
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
        {/* <!-- Left side start  --> */}
        <div className="flex max-w-[649px] flex-wrap gap-6">
          <span className="xl:leading-160 bg-primaryNew rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Great Interface
          </span>
          <span className="xl:leading-160 bg-othersTeal rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Experienced
          </span>
          <span className="xl:leading-160 bg-othersOrange rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Low Price
          </span>
          <span className="xl:leading-160 bg-alertsWarningLight rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Customizable
          </span>
          <span className="xl:leading-160 bg-primaryNew rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Marketing
          </span>
          <span className="xl:leading-160 bg-alertsWarningLight rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Great Support
          </span>
          <span className="xl:leading-160 bg-primaryNew rounded-xl px-[20px] py-[12px] text-lg font-medium text-gray-700 xl:px-[46px] xl:py-[22px] xl:text-xl">
            Safe
          </span>
          <span className="font-poppins px-[10px] py-[12px] text-xl font-normal text-gray-900 xl:px-[18px] xl:py-[22px] xl:text-2xl">
            & more…
          </span>
        </div>

        {/* <!-- Left side end  --> */}
      </div>
    </section>
  );
}

export default WhyUs;
