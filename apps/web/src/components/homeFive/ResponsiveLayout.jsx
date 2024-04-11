import React from 'react';
import Image from 'next/image';

import bg from '/public/static/images/responsive/bg.png';
import bgMain from '/public/static/images/responsive/bg1.png';
import responsive from '/public/static/images/responsive/responsive.png';

function ResponsiveLayout() {
  return (
    <section
      className="bg-basicInterface relative flex w-full justify-center overflow-hidden py-[60px] xl:py-[120px]"
      style={{ background: `url(${bgMain})` }}
    >
      <div className="flex w-full max-w-[1320px] flex-col items-center justify-center px-[5%] xl:flex-row 2xl:px-0">
        {/* <!-- Right side start  --> */}
        <div
          className="flex w-full flex-col justify-center xl:max-w-[578px]"
          data-aos="fade-right"
          data-aos-easing="fade-left"
        >
          <span className="font-poppins leading-big-loose text-center text-3xl font-bold text-white xl:text-left xl:text-5xl">
            Responsive Layout for any Device
          </span>
          <br />
          <span className="text-secondary-200 leading-130 mt-3 text-center text-lg font-medium tracking-[-0.356] xl:max-w-[473px] xl:text-left xl:text-xl">
            The layout is responsive and looks gorgeous and professional on any major devices and
            this Theme comes with custom page Themes.
          </span>
          <div className="mt-10 flex w-full items-center justify-center gap-6 text-lg font-normal leading-7 tracking-[-0.4] text-white xl:w-fit xl:gap-10">
            <a
              href="#"
              className="group relative z-40 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-[28px] border-solid border-white border-opacity-60 px-9 py-2.5 transition-all hover:border"
            >
              <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
              <span className="z-10 text-center text-lg leading-8 text-white" href="#">
                Check Demos
              </span>
            </a>

            <a
              href="#"
              className="hover:border-primary group relative z-50 flex h-14 w-[188px] items-center justify-center overflow-hidden rounded-[28px] border border-solid border-white border-opacity-60 transition-all"
            >
              <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 transition-all group-hover:h-full group-hover:w-full"></div>
              <span className="z-10" href="#">
                Purchase now!
              </span>
            </a>
          </div>
        </div>
        {/* <!-- Right side end  --> */}
        {/* <!-- Left side start  --> */}
        <div
          className="mt-8 flex items-center justify-center xl:mt-0 xl:justify-start"
          data-aos="fade-left"
          data-aos-easing="fade-right"
        >
          <Image
            src={bg.src}
            height={bg.height}
            width={bg.width}
            alt=""
            className="absolute w-full sm:h-[60%] sm:w-auto xl:-top-[37px] xl:right-[130px] xl:h-full"
          />
          <Image
            src={responsive.src}
            height={responsive.height}
            width={responsive.width}
            alt=""
            className="relative -ml-20 mt-16 w-full max-w-[948px] xl:ml-0 xl:mt-0"
          />
        </div>

        {/* <!-- Left side end  --> */}
      </div>
    </section>
  );
}

export default ResponsiveLayout;
