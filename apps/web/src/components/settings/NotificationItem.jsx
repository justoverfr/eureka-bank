'use client';

import ProtoTypes from 'prop-types';

function NotificationItem({
  name,
  desc,
  activeNotification,
  handleNotification,
  children,
}) {
  const isActive = activeNotification[name];
  return (
    <div className="border-bgray-300 dark:border-darkblack-400 flex flex-col items-end justify-between border-b pb-5 sm:flex-row sm:items-center">
      <div className="flex gap-x-4">
        <span>{children}</span>
        <div className="flex-1">
          <h4
            className="text-bgray-900 text-lg font-bold dark:text-white"
            id="availability-label"
          >
            {name}
          </h4>
          <p
            className="text-bgray-500 dark:text-darkblack-300 text-base"
            id="availability-description"
          >
            {desc}
          </p>
        </div>
      </div>
      {/* Enabled: "bg-success-300", Not Enabled: "bg-[#9AA2B1]"  */}
      <button
        aria-label="none"
        type="button"
        onClick={() => handleNotification(name)}
        className={`switch-btn relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent text-center transition-colors duration-200 ease-in-out focus:outline-none ${
          isActive ? 'bg-success-300 active' : 'bg-[#9AA2B1]'
        }`}
        style={{ background: isActive && '#22C55E' }}
        role="switch"
        aria-checked="false"
        aria-labelledby="availability-label"
        aria-describedby="availability-description"
      >
        {/* Enabled: "translate-x-5", Not Enabled: "translate-x-0"  */}
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isActive ? 'active translate-x-5' : 'translate-x-0'
          }`}
        ></span>
      </button>
    </div>
  );
}
NotificationItem.propTypes = {
  name: ProtoTypes.string,
  desc: ProtoTypes.string,
  activeNotification: ProtoTypes.object,
  handleNotification: ProtoTypes.func,
  children: ProtoTypes.node,
};
export default NotificationItem;
