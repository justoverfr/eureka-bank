import Image from 'next/image';

import CardSelect from '../forms/CardSelect';
import member from '/public/static/images/avatar/members-3.png';
import master from '/public/static/images/payments/master.svg';
import paypalsm from '/public/static/images/payments/paypal-smsvg.svg';
import visa from '/public/static/images/payments/visa.svg';

function AddMoney() {
  return (
    <>
      <div className="bg-bgray-200 dark:bg-darkblack-400 hidden h-[220px] w-[4px] rounded-lg lg:block"></div>
      <div className="w-full lg:w-[250px] 2xl:w-[400px]">
        <div className="w-full">
          <h3 className="text-bgray-900 mb-4 text-lg font-bold dark:text-white">Add money</h3>
          <CardSelect
            currencyOptions={[
              <Image
                priority={true}
                height={paypalsm.height}
                width={paypalsm.width}
                src={paypalsm.src}
                alt="master"
                key="1"
              />,
              <Image
                priority={true}
                height={visa.height}
                width={visa.width}
                src={visa.src}
                alt="master2"
                key="2"
              />,
              <Image
                priority={true}
                height={master.height}
                width={master.width}
                src={master.src}
                alt="master2"
                key="3"
              />,
            ]}
          />

          <div className="border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 flex h-[98px] w-full flex-col justify-between rounded-lg border p-4">
            <p className="text-bgray-600 dark:text-darkblack-300 text-sm font-medium">
              Enter amount
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <span className="text-bgray-900 text-2xl font-bold dark:text-white">$</span>
              <label className="w-full">
                <input
                  type="text"
                  className="text-bgray-900 dark:bg-darkblack-600 w-full border-none p-0 text-2xl font-bold focus:outline-none focus:ring-0 dark:text-white"
                />
              </label>
              <div>
                <Image
                  priority={true}
                  height={member.height}
                  width={member.width}
                  src={member.src}
                  alt="members"
                />
              </div>
            </div>
          </div>
          <button
            aria-label="none"
            className="bg-success-300 hover:bg-success-400 mt-7 w-full rounded-lg py-4 text-base font-medium text-white transition-all"
          >
            Confirmed
          </button>
        </div>
      </div>
    </>
  );
}

export default AddMoney;
