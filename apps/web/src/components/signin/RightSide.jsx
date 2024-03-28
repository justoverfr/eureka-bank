import Image from 'next/image';

import ProtoTypes from 'prop-types';

import dotted from '/public/static/images/shapes/dotted.svg';
import square from '/public/static/images/shapes/square.svg';
import vline from '/public/static/images/shapes/vline.svg';

function RightSide({ img }) {
  return (
    <div className="dark:bg-darkblack-600 relative hidden min-h-screen bg-[#F6FAFF] p-20 lg:block lg:w-1/2 ">
      <ul>
        <li className="absolute left-8 top-10">
          <Image
            priority={true}
            height={square.height}
            width={square.width}
            src={square.src}
            alt=""
          />
        </li>
        <li className="absolute right-12 top-14">
          <Image
            priority={true}
            height={vline.height}
            width={vline.width}
            src={vline.src}
            alt=""
          />
        </li>
        <li className="absolute bottom-1 left-8">
          <Image
            priority={true}
            height={dotted.height}
            width={dotted.width}
            src={dotted.src}
            alt=""
          />
        </li>
      </ul>
      <div className="">
        <Image
          priority={true}
          height={img.height}
          width={img.width}
          src={img.src}
          alt=""
        />
      </div>
      <div>
        <div className="m-auto max-w-lg px-1.5 text-center">
          <h3 className="text-bgray-900 font-popins mb-4 text-4xl font-semibold dark:text-white">
            Speady, Easy and Fast
          </h3>
          <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
            BankCo. help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span className="text-success-300 font-bold">$20</span> bonus
            when you receive qualifying direct deposits
          </p>
        </div>
      </div>
    </div>
  );
}

RightSide.propTypes = {
  img: ProtoTypes.string,
};

export default RightSide;
