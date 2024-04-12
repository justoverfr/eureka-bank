import React from 'react';
import Image from 'next/image';

import dashboard from '/public/static/images/dashboard/dashboard2.jpg';
import figmaW from '/public/static/images/icon/figmaW.svg';
import rectangle from '/public/static/images/shape/rectangle.svg';

function View() {
  return (
    <section
      className="mt-[60px] flex w-full flex-wrap items-center justify-center p-3 xl:p-[5%] 2xl:mt-[120px] 2xl:p-0"
      data-aos="fade-up"
      data-aos-easing="fade-down"
    >
      <div className="rounded-20 relative flex w-full max-w-[1320px] flex-col justify-between overflow-hidden bg-gray-900 pl-8 pt-10 lg:flex-row xl:pb-0 xl:pl-16 xl:pt-[73px]">
        {/* <!-- bg --> */}
        <div
          className="absolute bottom-32 left-[-160px] h-[651px] w-12 rounded-full bg-white bg-gradient-to-l xl:w-[651px] xl:p-24"
          style={{
            background:
              'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
            zIndex: '-0',
          }}
        >
          <div className="bg-basicInterface h-full w-full rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 z-0 xl:top-4">
          <Image
            src={rectangle.src}
            height={rectangle.height}
            width={rectangle.width}
            alt=""
            className="max-w-full"
          />
        </div>
        {/* <!-- bg --> */}
        {/* <!-- Left side start --> */}
        <div className="z-10 pr-5">
          <div className="flex w-full max-w-[513px] flex-col">
            <span className="font-poppins leading-big-loose text-xl font-bold text-white sm:text-3xl xl:text-4xl 2xl:text-5xl">
              The very first decentralized bank with a wide choice of cryptocurrencies!
            </span>
            <span className="leading-160 pb-12 pt-7 text-lg font-medium text-white 2xl:text-xl">
              Over 20,000 crypto and stablecoin choices with special Rate Accounts!
            </span>
            <div className="flex gap-3 xl:gap-8">
              <a
                href="#"
                className="border-primary group relative z-40 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border px-5 py-1 transition-all xl:border-[2.333px] xl:px-9 xl:py-2.5"
              >
                <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
                <span className="group-hover:text-primary z-10 text-center text-lg font-semibold leading-8 text-white xl:text-xl">
                  Login
                </span>
              </a>

              <a
                href="#"
                className="hover:border-primary group relative z-50 flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] border-white px-9 py-2.5 transition-all"
              >
                <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 transition-all group-hover:h-full group-hover:w-full"></div>
                <div className="z-10 flex gap-2 text-center text-xl font-semibold leading-8 text-white group-hover:text-white">
                  {/*<Image src={figmaW.src} height={figmaW.height} width={figmaW.width} alt="figma" />{' '} */}
                  SignUp
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Left side end  --> */}
        {/* <!-- Right side start  --> */}
        <div className="flex w-full justify-end lg:w-1/2">
          <div className="z-10 mt-10 w-fit pb-12 xl:mt-0">
            <div className="bg-lightGray rounded-l-20 py-4 pl-4 xl:pl-12">
              <Image
                src={require('../../images/DashboardEurekaBank.png')}
                height={dashboard.height}
                width={dashboard.width}
                alt="dashboard"
              />
            </div>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
      </div>
    </section>
  );
}

export default View;
