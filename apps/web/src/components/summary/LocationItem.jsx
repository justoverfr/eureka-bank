import Image from 'next/image';

import ProtoTypes from 'prop-types';

function LocationItem({ img, location, value, color }) {
  return (
    <div className="flex items-center space-x-5">
      <div className="w-[30px]">
        <Image
          priority={true}
          height={img.height}
          width={img.width}
          src={img.src}
          className="w-full"
          alt="flag"
        />
      </div>
      <div className="flex-1">
        <div className="mb-2 flex justify-between">
          <span className="text-bgray-900 text-sm font-medium dark:text-white">{location}</span>
          <span className="text-sm font-medium dark:text-white">{value}</span>
        </div>
        <div className="bg-bgray-100 relative h-[14px] w-full overflow-hidden rounded">
          <div
            style={{ width: `${value}` }}
            className={`absolute left-0 top-0 h-full rounded  ${color}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

LocationItem.propTypes = {
  img: ProtoTypes.string,
  location: ProtoTypes.string,
  value: ProtoTypes.string,
  color: ProtoTypes.string,
};

export default LocationItem;
