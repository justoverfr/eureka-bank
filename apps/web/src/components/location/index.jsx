import dynamic from 'next/dynamic';

import LocationSelector from '../forms/LocationSelector';

const Map = dynamic(() => import('../chart/Map'), {
  ssr: false,
});

function LocationV2() {
  return (
    <div className="xl:w-66 dark:bg-darkblack-600 w-full rounded-lg bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-bgray-900 text-xl font-bold sm:text-2xl dark:text-white">
          Most locations
        </h3>
        <LocationSelector />
      </div>
      <div className="items-center xl:flex xl:space-x-[26px]">
        <div className="mb-4 w-full xl:mb-0 xl:flex-1">
          <div className="mb-1 flex items-end space-x-2">
            <h1 className="text-bgray-900 text-2xl font-bold leading-[30px] dark:text-white">
              76,345
            </h1>
            <div className="bg-success-400 flex h-[22px] w-[60px] items-center justify-center rounded-full">
              <div className="flex items-center space-x-1">
                <span>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 5.89575L3.5 2.89575L5.5 4.89575L9.5 0.895752"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 0.895752H9.5V4.39575"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-xs font-medium text-white">12,00%</span>
              </div>
            </div>
          </div>
          <p className="text-bgray-600 dark:text-darkblack-300 mb-7 text-sm">
            Compared to last month
          </p>
          <div className="flex flex-col space-y-2.5">
            <div className="bg-bgray-100 dark:bg-darkblack-500 flex h-[32px] w-full items-center justify-between rounded-lg px-2">
              <div className="flex items-center space-x-2">
                <div className="bg-success-300 h-2 w-2 rounded-full"></div>
                <span className="text-bgray-900 text-sm font-medium dark:text-white">
                  United States
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="flex h-[32px] w-full items-center justify-between rounded-lg px-2">
              <div className="flex items-center space-x-2">
                <div className="bg-warning-300 h-2 w-2 rounded-full"></div>
                <span className="text-bgray-900 text-sm font-medium dark:text-white">
                  California
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="bg-bgray-100 dark:bg-darkblack-500 flex h-[32px] w-full items-center justify-between rounded-lg px-2">
              <div className="flex items-center space-x-2">
                <div className="bg-purple h-2 w-2 rounded-full"></div>
                <span className="text-bgray-900 text-sm font-medium dark:text-white">Dhaka</span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
            <div className="flex h-[32px] w-full items-center justify-between rounded-lg px-2">
              <div className="flex items-center space-x-2">
                <div className="bg-error-300 h-2 w-2 rounded-full"></div>
                <span className="text-bgray-900 text-sm font-medium dark:text-white">
                  Los Angels
                </span>
              </div>
              <span className="text-bgray-600 text-sm font-medium">15,732</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center xl:w-[412px]">
          <div className="w-[300px] md:w-[350px] xl:w-full">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationV2;
