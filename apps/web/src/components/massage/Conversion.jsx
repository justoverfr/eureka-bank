import Image from 'next/image';

import ProtoTypes from 'prop-types';

function Conversion({ time, text, img, self }) {
  return self ? (
    <div className="flex items-end justify-end space-x-3 ">
      <div>
        <span className="text-bgray-500 text-xs font-medium">{time}</span>
      </div>
      <div className="flex space-x-3">
        <div className="bg-success-300 max-w-sm rounded-b-lg rounded-r-lg p-3 text-sm font-medium text-white">
          {text}
        </div>
        <div>
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            className="shrink-0"
            alt=""
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-end justify-start space-x-3">
      <div className="flex space-x-3">
        <div>
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            className="shrink-0"
            alt=""
          />
        </div>
        <div className="bg-bgray-200 dark:bg-darkblack-600 dark:text-bgray-50  text-bgray-900 rounded-b-lg rounded-r-lg p-3 text-sm font-medium">
          {text}
        </div>
      </div>
      <div>
        <span className="text-bgray-500 text-xs font-medium">{time}</span>
      </div>
    </div>
  );
}

Conversion.propTypes = {
  time: ProtoTypes.string,
  text: ProtoTypes.string,
  img: ProtoTypes.object,
  self: ProtoTypes.bool,
};

export default Conversion;
