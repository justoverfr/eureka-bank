import ProtoTypes from 'prop-types';

function Progressbar({ className }) {
  return (
    <div
      className={
        className
          ? className
          : 'bg-bgray-200 dark:bg-darkblack-600 rounded-xl p-7'
      }
    >
      <div className="flex flex-row items-center space-x-6 md:flex-col md:space-x-0 2xl:flex-row 2xl:space-x-6">
        <div className="progess-bar mb-0 flex justify-center md:mb-[13px] xl:mb-0">
          <div className="bonus-per relative">
            <div className="bonus-outer">
              <div className="bonus-inner">
                <div className="number">
                  <span className="text-bgray-900 text-sm font-medium">
                    64%
                  </span>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
              <circle
                style={{
                  strokeDashoffset: 'calc(215 - 215 * (64 / 100))',
                }}
                cx="40"
                cy="40"
                r="35"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center xl:items-start">
          <h4 className="text-bgray-900 text-base font-bold dark:text-white">
            Complete profile
          </h4>
          <span className="text-bgray-700 dark:text-darkblack-300 text-sm font-medium">
            Complete your profile to unlock all features
          </span>
        </div>
      </div>
      <button
        aria-label="none"
        className="bg-success-300 hover:bg-success-400 mt-4 w-full rounded-lg py-3 text-xs font-bold text-white"
      >
        Verify identify
      </button>
    </div>
  );
}

Progressbar.propTypes = {
  className: ProtoTypes.string,
};

export default Progressbar;
