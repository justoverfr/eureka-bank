'use client';

import React from 'react';

import Slider from '../slider';
import SliderCard from './SliderCard';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className + ' ' + 'trust-pagination'}" ></span>`;
  },
};

function SliderCom() {
  return (
    <section className="flex w-full flex-col justify-center bg-[#F8FAFE] px-[5%] pb-20 2xl:px-[0]">
      {/* <!-- header start  --> */}
      <div className="pb-14">
        <div className="font-poppins xl:leading-big-loose mt-[60px] text-center text-3xl font-semibold text-black xl:mt-[120px] xl:text-5xl">
          <span>
            <span className="relative z-0 max-w-fit">
              <div className="bg-primaryNew absolute bottom-3 left-0 -z-10 h-3 w-full"></div>
              Trusted and
            </span>
            used by leading
            <br className="hidden xl:block" />
            Traders and Investors
          </span>
        </div>
      </div>
      {/* <!-- header end  --> */}
      <div className="w-full px-[5%] md:px-0">
        <Slider
          className="swiper trustSlider max-w-[1320px]"
          pagination={pagination}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          // pagination={{
          //   el: ".trust-pagination.swiper-pagination",
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
        >
          <SliderCard
            author="Leo Li"
            authorLocation="Canada"
            post="Eureka Bank transformed my financial dealings with its revolutionary approach. The security and ease of transactions are unparalleled."
          />
          <SliderCard
            author="Samira Nasr"
            authorLocation="France"
            post="Since joining Eureka Bank, I've experienced a new level of financial freedom. Their decentralized system offers transparency like never before."
          />
          <SliderCard
            author="Liu Yang"
            authorLocation="China"
            post="Eureka Bank is at the forefront of banking innovation. Their services have significantly simplified my investments and asset management."
          />
          <SliderCard
            author="Isabella Rossi"
            authorLocation="Italy"
            post="I've been with Eureka Bank for over a year, and their customer-centric approach has made all the difference in my banking experience."
          />
          <SliderCard
            author="John Smith"
            authorLocation="UK"
            post="Eureka Bank's use of blockchain technology has revolutionized the way I think about banking. Safe, secure, and straightforward."
          />
          <SliderCard
            author="Maria Garcia"
            authorLocation="Spain"
            post="The innovation Eureka Bank brings to the financial world is extraordinary. They are truly setting new standards in banking."
          />
        </Slider>
        <div className="trust-pagination swiper-pagination"></div>
      </div>
    </section>
  );
}

export default SliderCom;
