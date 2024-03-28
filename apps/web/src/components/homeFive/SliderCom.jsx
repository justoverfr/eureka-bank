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
            used by the top
            <br className="hidden xl:block" />
            Developers & Designers
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
            author="Martin Jonas."
            authorLocation="USA"
            post=" Latin derived from Cicero's 1st-century BC text De Finibus
              Bonor et Malorum print."
          />
          <SliderCard
            author="RI Shovo."
            authorLocation="BD"
            post="The passage experienced a surgu popularity during the ios
              when Letraset used it on their lor bonord dry-transfer
              sheets & again during the sample."
          />
          <SliderCard
            author=" Jubayer Hasan."
            authorLocation="KSA"
            post="From its medieval origins digital print everything there is
              know about ubiquitous lorem ip surgue cicer elit."
          />
          <SliderCard
            author="Martin Jonas."
            authorLocation="USA"
            post="Latin derived from Cicero's 1st-century BC text De Finibus
              Bonor et Malorum print."
          />
          <SliderCard
            author="RI Shovo"
            authorLocation="BD"
            post="  The passage experienced a surgu popularity during the ios
              when Letraset used it on their lor bonord dry-transfer
              sheets & again during the sample."
          />
          <SliderCard
            author="Jubayer Hasan"
            authorLocation="KSA"
            post="From its medieval origins digital print everything there is
                    know about ubiquitous lorem ip surgue cicer elit."
          />
        </Slider>
        <div className="trust-pagination swiper-pagination"></div>
      </div>
    </section>
  );
}

export default SliderCom;
