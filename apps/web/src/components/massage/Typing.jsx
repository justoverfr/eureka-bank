import Image from 'next/image';

import usm from '/public/static/images/message/u-sm.png';

function Typing() {
  return (
    <div className="flex items-end justify-start space-x-3">
      <div className="flex space-x-3">
        <div>
          <Image
            priority={true}
            height={usm.height}
            width={usm.width}
            src={usm.src}
            className="shrink-0"
            alt=""
          />
        </div>
        <div className="text-bgray-500 p-3 text-sm font-normal">
          <span className="text-bgray-900 dark:text-bgray-50 font-semibold">Eleanor Pena </span>
          is typing...
        </div>
      </div>
      <div>
        <span className="text-bgray-500 text-xs font-medium">10:15 AM</span>
      </div>
    </div>
  );
}

export default Typing;
