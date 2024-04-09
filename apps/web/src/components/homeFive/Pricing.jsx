import React from 'react';
import Image from 'next/image';

import greenCheck from '/public/static/images/icon/greenCheck.png';
import removeCircle from '/public/static/images/icon/remove-circle.svg';
import ellipse from '/public/static/images/pricing/ellipse.png';
import frame from '/public/static/images/pricing/frame.svg';
import shape from '/public/static/images/pricing/shape.png';
import shape2 from '/public/static/images/pricing/shape2.svg';
import shape3 from '/public/static/images/pricing/shape3.png';

function Pricing() {
  return (
    <section className="relative flex w-full items-center justify-center bg-[#F8FAFE] py-[60px] pb-[100px] 2xl:py-[120px]">
      {/* <!-- bg start  --> */}
      <Image
        src={ellipse.src}
        height={ellipse.height}
        width={ellipse.width}
        alt=""
        className="absolute left-0 top-6 scale-50 xl:scale-100"
      />
      <Image
        src={shape.src}
        height={shape.height}
        width={shape.width}
        alt=""
        className="absolute left-[7%] top-28 z-0 scale-50 xl:left-[4%] xl:scale-90 2xl:scale-100"
      />
      {/* <!-- bg end  --> */}
      <div className="z-10 w-full max-w-[1320px] px-[5%] 2xl:px-0">
        <div className="relative flex w-full justify-center pb-20 text-center">
          <div className="bg-alertsWarningBase absolute left-[40.5%] top-5 z-0 h-[10px] w-[120px] xl:top-10 xl:h-[14px] xl:w-[190px]"></div>
          <span className="w-black font-poppins leading-big-loose z-10 text-center text-3xl font-bold xl:text-5xl">
            No hidden charge, Choose <br />
            your plan.
          </span>
        </div>
        <div className="relative flex flex-col-reverse justify-center gap-[50px] xl:flex-row xl:gap-[102px]">
          {/* <!-- bg start--> */}
          <Image
            src={shape2.src}
            height={shape2.height}
            width={shape2.width}
            alt=""
            className="absolute -left-[7%] top-0 z-0"
          />
          {/* <!-- bg end  --> */}
          <div className="z-10 flex flex-col items-center pt-[50px]">
            <div className="flex flex-col gap-[34px]">
              <span className="font-poppins leading-big-loose text-center text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Save your <br />
                Money now!
              </span>
              <span className="leading-160 text-lg font-medium text-gray-600 xl:max-w-[478px] xl:text-xl">
                Looking for a bank that aligns with your values of freedom, security, and
                innovation? Eureka Bank is your answer. We offer a fully decentralized banking
                experience that puts you in control. Join Eureka Bank, where your financial journey
                transforms into an adventure of possibilities.
              </span>
            </div>
            <Image
              src={frame.src}
              height={frame.height}
              width={frame.width}
              alt=""
              className="mt-[72px] max-w-[200px]"
            />
          </div>

          <div className="z-10 flex flex-col items-center justify-center gap-10 lg:flex-row">
            {/* <!-- card start  --> */}
            <div
              className="boder-[#E7E5EA1A] w-full rounded-[32px] border border-solid bg-emerald-800 px-5 text-center sm:w-7/12 lg:w-[350px] xl:px-10"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex flex-col pb-6 pt-7">
                <span className="tracking-40 text-3xl font-bold text-white xl:text-5xl">
                  Regular
                </span>
                <span className="text-secondary-200 leading-150 tracking-40 text-base font-medium xl:text-lg">
                  License
                </span>
              </div>
              <hr className="bg-[#E7E5EA] opacity-10" />
              <div className="flex flex-col pb-6 pt-3">
                <span className="text-center text-3xl font-bold leading-[116,667%] tracking-[-2px] text-white xl:text-5xl">
                  $12.00
                </span>
                <span className="text-secondary-200 leading-150 tracking-40 text-base font-medium xl:text-lg">
                  License
                </span>
              </div>
              <hr className="bg-[#E7E5EA] opacity-10" />
              <div className="leading-150 flex flex-col gap-[16px] py-[32px] text-sm font-semibold text-white xl:text-base">
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Quality checked by Envato. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Lifetime support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">For Personal Projects only. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">Permitted for personal use only. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Skype support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Anydesk/Teamviewer support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Free installation. </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="border-secondary-100 hover:border-primary group relative z-40 mb-10 w-[170px] overflow-hidden rounded-[28px] border border-solid border-opacity-50 p-4 text-center transition-all"
                >
                  <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 opacity-10 transition-all group-hover:h-full group-hover:w-full"></div>
                  <span className="leading-160 z-40 text-center text-base font-semibold tracking-[-0.36px] text-white">
                    Buy now
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- card end  --> */}
            {/* <!-- card start  --> */}
            <div
              className="boder-[#E7E5EA1A] w-full rounded-[32px] border border-solid bg-white px-5 text-center sm:w-7/12 lg:w-[350px] xl:px-10"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex flex-col pb-6 pt-7">
                <span className="text-basicSecondary tracking-40 text-3xl font-bold xl:text-5xl">
                  Regular
                </span>
                <span className="text-basicSecondary leading-150 tracking-40 text-base font-medium xl:text-lg">
                  License
                </span>
              </div>
              <hr className="bg-secondary-300" />
              <div className="flex flex-col pb-6 pt-3">
                <span className="text-basicSecondary text-center text-3xl font-bold leading-[116,667%] tracking-[-2px] xl:text-5xl">
                  $12.00
                </span>
                <span className="text-basicSecondary leading-150 tracking-40 text-base font-medium xl:text-lg">
                  License
                </span>
              </div>
              <hr className="bg-secondary-300" />
              <div className="text-secondary-400 leading-150 flex flex-col gap-[16px] py-[32px] text-sm font-semibold xl:text-base">
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Quality checked by Envato. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="">Lifetime support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">For Personal Projects only. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={greenCheck.src}
                    height={greenCheck.height}
                    width={greenCheck.width}
                    alt=""
                    className=""
                  />
                  <span className="line-clamp-1">Permitted for personal use only. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Skype support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Anydesk/Teamviewer support. </span>
                </div>
                <div className="flex gap-1">
                  <Image
                    src={removeCircle.src}
                    height={removeCircle.height}
                    width={removeCircle.width}
                    alt=""
                    className=""
                  />
                  <span className="">Free installation. </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="border-primary group relative z-40 mb-10 inline-flex h-[60px] w-[170px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-[28px] border-solid border-opacity-60 px-9 py-2.5 transition-all hover:border-2"
                >
                  <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
                  <span className="group-hover:text-primary z-10 text-center text-lg leading-8 text-white">
                    Buy now
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- card end  --> */}
          </div>
          {/* <!-- bg start--> */}
          <Image
            src={shape3.src}
            height={shape3.height}
            width={shape3.width}
            alt=""
            className="absolute -bottom-[88px] -right-[7%] z-0 w-[220px] scale-75 xl:-right-[5%] xl:scale-100"
          />
          {/* <!-- bg end  --> */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
