import Image from 'next/image';

import ProtoTypes from 'prop-types';

import { allMassage } from '../../data/massage';

export const Sender = ({ img, isOnline }) => (
  <div className="relative h-14 w-14">
    <Image
      priority={true}
      height={img.height}
      width={img.width}
      src={img.src}
      alt=""
    />
    <span
      className={`${
        isOnline ? 'bg-success-300' : 'bg-gray-300'
      } dark:border-bgray-900 absolute bottom-1 right-0 block h-[14px] w-[14px] rounded-full border-2 border-white`}
    ></span>
  </div>
);

function AllMessageRes() {
  return (
    <div className="dark:bg-darkblack-600 flex w-full overflow-x-scroll bg-white p-2 lg:hidden">
      <div className="flex space-x-5">
        {allMassage?.map((item) => (
          <Sender key={item.id} img={item.img} isOnline={item.isOnline} />
        ))}
      </div>
    </div>
  );
}

Sender.propTypes = {
  img: ProtoTypes.object,
  isOnline: ProtoTypes.bool,
};

export default AllMessageRes;
