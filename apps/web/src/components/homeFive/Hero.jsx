import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dashboard from '/public/static/images/dashboard/dashboard.jpg';
import fill3 from '/public/static/images/shape/fill3.svg';
import group5 from '/public/static/images/shape/group5.svg';
import path from '/public/static/images/shape/path.svg';
import path0 from '/public/static/images/shape/path0.svg';
import path1 from '/public/static/images/shape/path1.svg';
import path2 from '/public/static/images/shape/path2.svg';
import path3 from '/public/static/images/shape/path3.svg';
import path4 from '/public/static/images/shape/path4.svg';
import path5 from '/public/static/images/shape/path5.svg';
import path7 from '/public/static/images/shape/path7.svg';
import path8 from '/public/static/images/shape/path8.svg';
import path9 from '/public/static/images/shape/path9.svg';
import path10 from '/public/static/images/shape/path10.svg';
import path11 from '/public/static/images/shape/path11.svg';
import path38 from '/public/static/images/shape/path38.svg';
import path40 from '/public/static/images/shape/path40.svg';
import shape from '/public/static/images/shape/Shape 2.svg';

function Hero() {
  return (
    <section
      className="flex w-full items-center justify-center pt-[120px] xl:px-[5%] 2xl:px-0 "
      data-aos="fade-up"
    >
      <div className="relative flex  w-full max-w-[1320px] flex-col items-center justify-center p-10 pb-36 pt-28 transition-all duration-1000">
        <div className="overFlowHidden moving-element absolute h-full w-full xl:block">
          <Image
            className="absolute right-[2%] top-[6%] z-10 2xl:right-[1%]"
            src={path.src}
            height={path.height}
            width={path.width}
            alt=""
          />
          <Image
            className="absolute left-[3%] top-[6%] z-10"
            src={path0.src}
            height={path0.height}
            width={path0.width}
            alt=""
          />

          <Image
            className="absolute left-[-1%] top-[16%] z-10 2xl:left-[-2%]"
            src={path1.src}
            height={path1.height}
            width={path1.width}
            alt=""
          />
          <Image
            className="absolute left-[7%] top-[16.5%] z-10"
            src={group5.src}
            height={group5.height}
            width={group5.width}
            alt=""
          />
          <Image
            className="absolute top-[17.5%] z-10 xl:right-[5%]"
            src={path38.src}
            height={path38.height}
            width={path38.width}
            alt=""
          />
          <Image
            className="absolute right-[-5%] top-[18.5%] z-10 hidden xl:block"
            src={path2.src}
            height={path2.height}
            width={path2.width}
            alt=""
          />
          <Image
            className="absolute left-10 top-[26.5%] z-10 xl:left-[0%]"
            src={path3.src}
            height={path3.height}
            width={path3.width}
            alt=""
          />
          <Image
            className="absolute right-[16%] top-[31.5%] z-10"
            src={path4.src}
            height={path4.height}
            width={path4.width}
            alt=""
          />
          <Image
            className="absolute right-[-5%] top-[43.5%] z-10"
            src={path5.src}
            height={path5.height}
            width={path5.width}
            alt=""
          />
          <Image
            className="absolute right-[-1.2%] top-[49.7%] z-10"
            src={path7.src}
            height={path7.height}
            width={path7.width}
            alt=""
          />
          <Image
            className="absolute right-[-0.8%] top-[50.5%] z-10"
            src={path40.src}
            height={path40.height}
            width={path40.width}
            alt=""
          />
          <Image
            className="absolute right-[7%] top-[55.2%] z-10 xl:right-[2%] xl:top-[54.2%]"
            src={path3.src}
            height={path3.height}
            width={path3.width}
            alt=""
          />
          <Image
            className="absolute right-[12%] top-[51.5%] z-10"
            src={path9.src}
            height={path9.height}
            width={path9.width}
            alt=""
          />
          <Image
            className="absolute right-[-8%] top-[58%] z-10"
            src={group5.src}
            height={group5.height}
            width={group5.width}
            alt=""
          />
          <Image
            className="absolute right-[-5%] top-[64%] z-10"
            src={path8.src}
            height={path8.height}
            width={path8.width}
            alt=""
          />
          <Image
            className="absolute bottom-[13.5%] left-[5%] z-10 xl:left-[-6%]"
            src={path11.src}
            height={path11.height}
            width={path11.width}
            alt=""
          />
          <Image
            className="absolute bottom-[23.2%] left-[3%] z-10"
            src={path7.src}
            height={path7.height}
            width={path7.width}
            alt=""
          />
          <Image
            className="absolute bottom-[20.2%] left-[-9%] z-10"
            src={group5.src}
            height={group5.height}
            width={group5.width}
            alt=""
          />
          <Image
            className="absolute bottom-[23.6%] left-[-0.5%] z-10 -rotate-[80deg]"
            src={path40.src}
            height={path40.height}
            width={path40.width}
            alt=""
          />
          <Image
            className="absolute -left-[1.8%] bottom-[27%] z-10 xl:bottom-[27%]"
            src={path10.src}
            height={path10.height}
            width={path10.width}
            alt=""
          />
          <Image
            className="absolute bottom-[33.5%] left-[-5%] z-10"
            src={path10.src}
            height={path10.height}
            width={path10.width}
            alt=""
          />
        </div>
        {/* <!-- heading start  --> */}
        <div className="w-full max-w-[1193px] text-center">
          <span className="font-poppins leading-big-loose text-center text-3xl font-bold decoration-[#090F32] sm:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="relative">
              <Image
                className="absolute bottom-3 left-0 w-[150px] max-w-full xl:w-auto"
                src={fill3.src}
                height={fill3.height}
                width={fill3.width}
                alt=""
              />
              Unleash
            </span>
            <span className="leading-big-loose"> Financial </span>
            <span className="bg-primary-new leading-big-loose px-2">Sovereignty</span> with
            Cutting-Edge Decentralized Banking
          </span>
        </div>
        <div className="mt-5 w-full max-w-[784px] text-center">
          <span className="leading-160 text-lg font-medium text-[#48494E] decoration-[#48494E] xl:text-xl">
            Banking, Redefined: Secure, Decentralized... Yours!
          </span>
        </div>
        {/* <!-- Heading end  --> */}
        {/* <!-- Buttons  --> */}
        <div className="relative mt-10 flex items-center justify-center gap-9">
          <Link
            href="/signin"
            className="border-primary group relative z-50 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
          >
            <div className="bg-primary absolute bottom-0 right-0 z-0 h-0 w-0 transition-all group-hover:h-full group-hover:w-full"></div>
            <span className="text-primary z-10 h-full w-full px-9 py-2.5 text-center text-xl font-semibold leading-8 group-hover:text-white">
              Login
            </span>
          </Link>
          <Link
            href="/signup"
            className="border-primary group relative z-40 inline-flex h-[60px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-xl border-[2.333px] transition-all"
          >
            <div className="bg-primary absolute bottom-0 right-0 z-0 h-full w-full transition-all group-hover:h-0 group-hover:w-0"></div>
            <div
              className="group-hover:text-primary z-10 h-full w-full px-9 py-2.5 text-center text-xl font-semibold leading-8 text-white"
              href="#"
            >
              SignUp
            </div>
          </Link>
        </div>
        {/* <!-- image start  --> */}*{' '}
        <div className="relative z-0 flex items-center justify-center">
          <div className="absolute -left-6 top-[50px] w-[50px] sm:w-[80px] xl:left-[-110px] xl:top-[-20px] xl:w-[175px]">
            <Image src={shape.src} height={shape.height} width={shape.width} alt="shape" />
          </div>
          <div className="rounded-20 mt-[70px] box-border flex w-full max-w-[1320px] items-center justify-center border-[15px] border-[#F3F7F8] bg-[#F3F7F8] sm:p-7 xl:p-14">
            <Image
              className="rounded-20 z-50 h-full w-full"
              src={require('./Dashboard.png')}
              height={dashboard.height}
              width={dashboard.width}
              alt="dashboard"
            />
          </div>
          <div className="absolute bottom-[-10%] right-[-2%] z-[-1] h-[80px] w-[80px] -rotate-90 rounded-bl-[205px] rounded-tl-[205px] rounded-tr-[205px] bg-[#22c55e] sm:bottom-[-13%] sm:right-[-4%] sm:h-52 sm:w-52 xl:bottom-[-90px] xl:right-[-90px] xl:h-[300px] xl:w-[300px] 2xl:bottom-[-140px] 2xl:right-[-140px] 2xl:h-[400px] 2xl:w-[400px]" />
        </div>
        {/* <!-- image end  --> */}
      </div>
    </section>
  );
}

export default Hero;
