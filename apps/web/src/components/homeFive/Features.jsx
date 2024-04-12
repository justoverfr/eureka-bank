import React from 'react';

import FeaturesCard from './FeaturesCard';
import appsRectangle from '/public/static/images/features/appsRectangle.svg';
import appsRectangleW from '/public/static/images/features/appsRectangleW.svg';
import customerService from '/public/static/images/features/customerService.svg';
import customerServiceW from '/public/static/images/features/customerServiceW.svg';
import darkMode from '/public/static/images/features/darkMode.svg';
import darkModeW from '/public/static/images/features/darkModeW.svg';
import font from '/public/static/images/features/font.svg';
import fontW from '/public/static/images/features/fontW.svg';
import friendly from '/public/static/images/features/friendly.svg';
import friendly2 from '/public/static/images/features/friendly2.svg';
import friendly2W from '/public/static/images/features/friendly2W.svg';
import friendlyW from '/public/static/images/features/friendlyW.svg';
import react from '/public/static/images/features/react.svg';
import reactW from '/public/static/images/features/reactW.svg';
import science from '/public/static/images/features/science.svg';
import scienceW from '/public/static/images/features/scienceW.svg';

function Features() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center px-[5%] 2xl:pt-28"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* <!-- heading  --> */}
      <div className="w-full max-w-[614px] text-center">
        <span className="leading-big-loose font-poppins text-center text-3xl font-bold text-gray-800 sm:text-4xl xl:text-4xl 2xl:text-5xl">
          Discover the world of decentralization.
        </span>
      </div>
      <div className="w-full max-w-[527px] pt-3 text-center">
        <span className="font-urbanist leading-160 text-lg font-normal text-gray-800 2xl:text-xl">
          The finance of the future is in your hands
        </span>
      </div>
      <div className="flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-7 gap-y-3 pt-20">
        <FeaturesCard
          title="All devices "
          desc="IOS / Android"
          img={friendlyW}
          imgHover={friendly}
        />
        <FeaturesCard
          title="Blockchain"
          desc="Based on the ethereum blockchain"
          img={reactW}
          imgHover={react}
        />
        <FeaturesCard
          title="Crypto"
          desc="Large selection of cryptocurrencies & stablecoin"
          img={appsRectangleW}
          imgHover={appsRectangle}
        />
        <FeaturesCard
          title="Free Support"
          desc=" Free professional support"
          img={customerServiceW}
          imgHover={customerService}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="top-10"
          title="Decentralized"
          desc=" Decentralized bank"
          img={scienceW}
          imgHover={science}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="top-10"
          title=" Free updates"
          desc="Free updates on all IOS / Android devices"
          img={friendly2W}
          imgHover={friendly2}
        />
        <FeaturesCard
          category="Upcoming"
          categoryClass="-top-10"
          title="Light & Dark Mode"
          desc="EurekaBank is available in two modes: Light & Dark Mode"
          img={darkModeW}
          imgHover={darkMode}
        />
        <FeaturesCard
          title="Choice"
          desc=" More than 20,000+ cryptocurrencies & stablecoin"
          img={fontW}
          imgHover={font}
        />
      </div>
    </section>
  );
}

export default Features;
