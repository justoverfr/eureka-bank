import React from 'react';
import Image from 'next/image';

import quotation from '/public/static/images/icon/quotation.svg';
import star from '/public/static/images/icon/star.svg';

function SliderCard({ author, authorLocation, post }) {
  return (
    <div>
      <div className="flex h-[430px] w-full max-w-full flex-col justify-between rounded-xl border border-b-[7px] border-solid border-white bg-white px-11 py-[30px]  md:w-[530px]">
        <div>
          <Image
            src={quotation.src}
            height={quotation.height}
            width={quotation.width}
            alt="quotation"
            className="pb-10"
          />
          <span className="leading-150 text-lg font-normal text-gray-900 xl:text-2xl">{post}</span>
        </div>
        <div>
          <div className="flex w-full items-center justify-between">
            <span className="leading-150 text-lg font-normal text-gray-900 xl:text-2xl">
              {author}
              <span className="text-stockColor"> {authorLocation}</span>
            </span>
            <Image src={star.src} height={star.height} width={star.width} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
