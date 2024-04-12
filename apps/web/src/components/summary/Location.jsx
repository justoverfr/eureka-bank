import LocationItem from './LocationItem';
import bra from '/public/static/images/flag/bra.png';
import fe from '/public/static/images/flag/fe.png';
import ita from '/public/static/images/flag/italy.png';

function Location() {
  return (
    <div className="hidden flex-1 xl:block">
      <div className="dark:bg-darkblack-600 h-full w-full rounded-lg bg-white p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-bgray-900 text-xl font-bold dark:text-white">Most Location</h3>
          <div className="flex items-center space-x-1.5">
            <span className="text-bgray-900 text-2xl font-bold dark:text-white">76,345</span>
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
        </div>
        <p className="text-bgray-600 dark:text-bgray-50 mb-8 text-sm">Compared to last month</p>
        <div className="flex flex-col space-y-8">
          <LocationItem img={fe} value={'65%'} color="bg-success-300" location="Italy" />
          <LocationItem img={bra} value={'85%'} color="bg-warning-100" location="Brazil" />
          <LocationItem img={ita} value={'95%'} color="bg-orange" location="Italy" />
        </div>
      </div>
    </div>
  );
}

export default Location;
