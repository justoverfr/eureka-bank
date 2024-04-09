import React from 'react';
import Image from 'next/image';

import cardBg from '/public/static/images/cards/cardBg.png';

function FeaturesCard({ title, category, desc, imgHover, img, categoryClass }) {
  return (
    <div className="overflow-hidden pt-4" data-aos="flip-left" data-aos-easing="ease-out-cubic">
      <div className="rounded-20 current:bg-primary hover:bg-primary group relative flex w-[306px] flex-col items-center justify-center border border-solid border-gray-200 p-6 drop-shadow-[10px_10px_40px_0px_rgba(39,218,104,0.10)] duration-500 ease-in-out">
        <Image
          src={cardBg.src}
          height={cardBg.height}
          width={cardBg.width}
          alt=""
          className="absolute -bottom-[55px] -right-[58px]"
        />
        <div className="relative flex max-w-[120px] flex-col items-center justify-start">
          {category ? (
            <div
              className={`bg-portage inline-flex gap-4 rounded-[100px] px-4 py-[2px] ${categoryClass} absolute`}
            >
              <span className="leading-180 text-center text-sm font-normal text-white">
                {category}
              </span>
            </div>
          ) : (
            ''
          )}
          <Image
            className="current:block hidden group-hover:block"
            src={img.src}
            height={img.height}
            width={img.width}
            alt="friendlyW"
          />
          <Image
            className="current:hidden block group-hover:hidden"
            src={imgHover.src}
            height={imgHover.height}
            width={imgHover.width}
            alt="friendly"
          />
        </div>

        <div className="font-urbanist z-10 text-center">
          <span className="leading-150 current:text-white text-3xl font-bold text-gray-900 group-hover:text-white">
            {title}{' '}
          </span>
          <br />
          <span className="current:text-gray-300 z-10 px-2 text-base font-medium text-gray-600 group-hover:text-gray-300">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
